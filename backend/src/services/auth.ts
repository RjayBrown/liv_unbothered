/*
AUTH SERVICE
CONFIG/MODEL FILES: config/auth/*, config/db.ts, models/auth/*

EXTERNAL SERVICES USED
- DB: MongoDB(Mongoose)
- Models: USER, SESSION, VERIFICATION CODE
- SESSIONS: JWT
- ACCOUNT VERIFICATION: Resend(email)
*/

// CONFIG
import {
	RefreshTokenPayload,
	refreshTokenSignOptions,
	signToken,
	verifyToken,
} from "../config/auth/jwt";
import { sendEmail } from "../config/auth/send-email";
import {
	getPasswordResetTemplate,
	getVerifyEmailTemplate,
} from "../config/auth/email-templates";

// TYPES
import VerificationCodeType from "../constants/enum/verification-code";

type CreateAccountParams = {
	email: string;
	password: string;
	userAgent?: string;
};

type LoginUserParams = {
	email: string;
	password: string;
	userAgent?: string;
};

type ResetPasswordParams = {
	password: string;
	verificationCode: string;
};

// CONSTANTS
import { APP_ORIGIN } from "../constants/env";
import {
	CONFLICT,
	INTERNAL_SERVER_ERROR,
	NOT_FOUND,
	TOO_MANY_REQUESTS,
	UNAUTHORIZED,
} from "../constants/http";
import AppErrorCode from "../constants/enum/app-error-type";

// UTILS
import {
	fiveMinutesAgo,
	ONE_DAY_IN_MS,
	oneHourFromNow,
	oneYearFromNow,
	thirtyDaysFromNow,
} from "../util/dates";
import { appAssert } from "../util/errors/app-error-assert";

// MODELS
import { UserModel } from "../models/auth/user-model";
import { SessionModel } from "../models/auth/session.model";
import { VerificationCodeModel } from "../models/auth/veriification-code-model";
import { hashPassword } from "../config/auth/bcrypt";

/*
 CREATE USER ACCOUNT
 - Check if user already exists
 - Create user
 - Create verification code
 - Send verification email
 - Create session
 - Sign JWT access/refresh tokens
 - Return user and tokens to client
*/
export const createAccount = async (data: CreateAccountParams) => {
	// check if user already exists
	const existingUser = await UserModel.exists({ email: data.email });

	appAssert(!existingUser, CONFLICT, "User with this email already exists");

	// create user
	const user = await UserModel.create({
		email: data.email,
		password: data.password,
	});

	const userId = user._id;

	// create verification code
	const verificationCode = await VerificationCodeModel.create({
		userId,
		type: VerificationCodeType.EmailVerification,
		createdAt: new Date(),
		expiresAt: oneYearFromNow(),
	});

	const url = `${APP_ORIGIN}/auth/email/verify:${verificationCode._id}`;

	// send verification email
	const { error } = await sendEmail({
		to: user.email,
		...getVerifyEmailTemplate(url),
	});

	if (error) {
		console.log(error);
	}

	// create session
	const session = await SessionModel.create({
		userId,
		userAgent: data.userAgent,
		isCurrent: false,
	});

	const sessionInfo = {
		sessionId: session._id,
	};

	// sign JWT access/refreh tokens
	const accessToken = signToken({ ...sessionInfo, userId });

	const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);

	// return user and tokens to client
	return { user: user.omitPassword(), accessToken, refreshToken };
};

/*
LOGIN USER
 - Get user by email
 - Validate password
 - Create session
 - Sign JWT access/refresh tokens
 - Return user and tokens to client
*/

export const loginUser = async ({
	email,
	password,
	userAgent,
}: LoginUserParams) => {
	// get user by email
	const user = await UserModel.findOne({ email });
	appAssert(user, CONFLICT, "Invalid email or password");

	const userId = user._id;

	// validate password
	const isValid = await user.comparePassword(password);
	appAssert(isValid, CONFLICT, "Invalid email or password");

	// create session
	const session = await SessionModel.create({
		userId,
		userAgent,
		isCurrent: false,
	});

	const sessionInfo = {
		sessionId: session._id,
	};

	// sign JWT access/refreh tokens
	const accessToken = signToken({ ...sessionInfo, userId });

	const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);

	// return user and tokens to client
	return { user: user.omitPassword(), accessToken, refreshToken };
};

/*
CREATE/REFRESH SESSION
- Validate token for session if it exists
- Refresh session on any request 1 day before expiration
- Sign access token and refresh token if necessary
*/
export const refreshUserToken = async (refreshToken: string) => {
	const { payload } = verifyToken<RefreshTokenPayload>(refreshToken, {
		secret: refreshTokenSignOptions.secret,
	});

	appAssert(
		payload,
		UNAUTHORIZED,
		"Invalid refresh token",
		AppErrorCode.invalidAccessToken
	);

	const session = await SessionModel.findById(payload.sessionId);
	const now = Date.now();
	appAssert(
		session && session.expiresAt.getTime() > now,
		UNAUTHORIZED,
		"Session expired or does not exist"
	);

	const sessionNeedsRefresh = session.expiresAt.getTime() - now < ONE_DAY_IN_MS; // less than 1 day left

	if (sessionNeedsRefresh) {
		session.expiresAt = thirtyDaysFromNow();
		await session.save();
	}

	const accessToken = signToken({
		userId: session.userId,
		sessionId: session._id,
	});
	const newRefreshToken = sessionNeedsRefresh
		? signToken({ sessionId: session._id }, refreshTokenSignOptions)
		: undefined;

	return {
		accessToken,
		newRefreshToken: newRefreshToken,
	};
};

/*
VERIFY ACCOUNT (EMAIL)
- Get verification code
- Send verification code to user
- Get user and update verified to true
- Delete verification code
- Return user to client
*/
export const verifyEmail = async (code: string) => {
	// get verification code
	const validVerificationCode = await VerificationCodeModel.findOne({
		_id: code,
		type: VerificationCodeType.EmailVerification,
		expiresAt: { $gt: new Date() },
	});
	appAssert(
		validVerificationCode,
		NOT_FOUND,
		"Invalid or expired verification code"
	);

	// get user and update verified to true
	const updatedUser = await UserModel.findByIdAndUpdate(
		validVerificationCode.userId,
		{
			isVerified: true,
		},
		{ new: true }
	);

	appAssert(updatedUser, NOT_FOUND, "Failed to verify user");

	// delete verification code
	await validVerificationCode.deleteOne();

	// return user to client
	return {
		user: updatedUser.omitPassword(),
	};
};
/*
SEND PASSWORD RESET (EMAIL)
- Get user email
- Add rate limit
- Create verification code
- Send password reset code to user
- Get user and update password (bcrypt?)
- Return user to client
*/

export const sendResetPasswordEmail = async (email: string) => {
	// Get user email
	const user = await UserModel.findOne({ email });
	appAssert(user, NOT_FOUND, "User not found");

	// Add rate limit
	const fiveMinsAgo = fiveMinutesAgo();

	const numOfRequests = await VerificationCodeModel.countDocuments({
		userId: user._id,
		type: VerificationCodeType.PasswordReset,
		createdAt: { $gt: fiveMinsAgo },
	});
	appAssert(
		numOfRequests <= 1,
		TOO_MANY_REQUESTS,
		"Too many requests, please try again later"
	);

	// Create verification code
	const expiresAt = oneHourFromNow();
	const verificationCode = await VerificationCodeModel.create({
		userId: user._id,
		type: VerificationCodeType.PasswordReset,
		createdAt: new Date(),
		expiresAt,
	});

	// send password reset email
	const url = `${APP_ORIGIN}/auth/password/forgot?code=${verificationCode._id}&exp=${expiresAt.getTime()}`;

	const { data, error } = await sendEmail({
		to: email,
		...getPasswordResetTemplate(url),
	});

	appAssert(
		data?.id,
		INTERNAL_SERVER_ERROR,
		`${error?.name} ~ ${error?.message}`
	);

	return {
		url,
		emailId: data.id,
	};
};

export const resetPassword = async ({
	password,
	verificationCode,
}: ResetPasswordParams) => {
	// get verification code
	const validResetCode = await VerificationCodeModel.findOne({
		_id: verificationCode,
		type: VerificationCodeType.PasswordReset,
		expiresAt: { $gt: new Date() },
	});

	appAssert(validResetCode, NOT_FOUND, "Invalid or expired verification code");

	// update users password
	const updatedUser = await UserModel.findByIdAndUpdate(validResetCode.userId, {
		password: await hashPassword(password),
	});
	appAssert(updatedUser, INTERNAL_SERVER_ERROR, "Failed to reset password");

	// delete verification code
	await validResetCode.deleteOne();

	// delete all sessions
	await SessionModel.deleteMany({ userId: updatedUser._id });

	// return user
	return { user: updatedUser.omitPassword() };
};
