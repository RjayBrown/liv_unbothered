/*
AUTH CONTROLLER

AUTH SERVICES CALLED (from services/auth.ts)
- Register Account + Send Verification Email
- Login User
- Refresh Tokens
- Send Password Reset Email
- Reset Password
*/

// CONFIG / SERVICES
import { verifyToken } from "../../config/auth/jwt";
import {
	clearAuthCookies,
	getAccessTokenCookieOptions,
	getRefreshTokenCookieOptions,
	setAuthCookies,
} from "../../config/auth/cookies";

import {
	createAccount,
	loginUser,
	refreshUserToken,
	resetPassword,
	sendResetPasswordEmail,
	verifyEmail,
} from "../../services/auth";

//  / CONSTANTS

import { CREATED, OK, UNAUTHORIZED } from "../../constants/http";

// SCHEMA / MODELS
import { SessionModel } from "../../models/auth/session.model";
import {
	emailSchema,
	loginSchema,
	registerSchema,
	resetPasswordSchema,
	verificationCodeSchema,
} from "../auth/auth-zod-schemas";

// ERROR HANDLING
import { appAssert } from "../../util/errors/app-error-assert";
import { catchErrors } from "../../util/errors/catch-errors";

export const auth = {
	/*
	STEPS
	- Validate request (zod schema)
	- AUTH SERVICE - create user account | create session | sign tokens
	- Set auth cookies in response
	- Return user to client
	*/
	registerController: catchErrors(async (req, res) => {
		// validate the request (zod schema)
		const request = registerSchema.parse({
			...req.body,
			userAgent: req.headers["user-agent"],
		});

		// call the createAccount service
		const { user, accessToken, refreshToken } = await createAccount(request);

		// set auth cookies in the response
		setAuthCookies({ res, accessToken, refreshToken });

		// return user to client - without password
		return res.status(CREATED).json(user);
	}, "AUTH | REGISTER"),

	/*
	STEPS
	- Parse/validate verification code from the request params
	- Verify code and delete from DB
	- Return success message
	*/
	verifyEmailController: catchErrors(async (req, res) => {
		// parse/validate verification code from the request params
		const verificationCode = verificationCodeSchema.parse(req.params.code);

		// call service - verify code and delete from DB
		await verifyEmail(verificationCode);

		// return success message
		return res.status(OK).json({ message: "Email successfully verified!" });
	}, "AUTH | VERIFY_EMAIL"),

	/*
	STEPS
	- Validate request body against schema
	- AUTH SERVICE - verify user | create session | sign tokens
	- Set auth cookies in response
	- Return success message
	*/
	loginController: catchErrors(async (req, res) => {
		// validate the request body against the schema
		const request = loginSchema.parse({
			...req.body,
			userAgent: req.headers["user-agent"],
		});

		// call the loginUser service
		const { user, accessToken, refreshToken } = await loginUser(request);

		// set auth cookies for response
		setAuthCookies({ res, accessToken, refreshToken });

		// return success message
		return res.status(OK).json({ message: "Login successful" });
	}, "AUTH | LOGIN"),

	/*
	STEPS
	- Get refresh token from cookies
	- Verify the refresh token
	- Get new access token and optional refresh token
	- Set new access token cookie
	- Return success message
	*/
	refreshController: catchErrors(async (req, res) => {
		// Get refresh token from cookies
		const refreshToken = req.cookies.refreshToken as string | undefined;

		// verify the refresh token - error handling is done in the verifyToken function
		appAssert(
			refreshToken,
			UNAUTHORIZED,
			"Refresh token is missing or invalid"
		);

		// call the refreshUserToken service function to get new tokens (access + refresh?)
		const { accessToken, newRefreshToken } =
			await refreshUserToken(refreshToken);

		// set new refresh token cookie if provided
		if (newRefreshToken) {
			res.cookie(
				"refreshToken",
				newRefreshToken,
				getRefreshTokenCookieOptions()
			);
		}

		// set new access token cookie
		return res
			.status(OK)
			.cookie("accessToken", accessToken, getAccessTokenCookieOptions())
			.json({ message: "Access token refreshed successfully" });
	}, "AUTH | REFRESH"),

	/*
	STEPS
	- Validate email exists
	- Call password reset service
	- return response
	*/
	sendPasswordResetController: catchErrors(async (req, res) => {
		// validate email exists
		const email = emailSchema.parse(req.body.email);

		// call email sending service
		await sendResetPasswordEmail(email);

		// return response
		return res.status(OK).json({ message: "Password reset email sent" });
	}, "AUTH | SEND_PASSWORD_RESET"),

	/*
	STEPS
	- Validate email exists
	- Call password reset service
	- Clear cookies & return success msg
	*/
	resetPasswordController: catchErrors(async (req, res) => {
		const request = resetPasswordSchema.parse(req.body);

		// call password reset service
		resetPassword(request);

		// clear cookies & return success msg
		return clearAuthCookies(res)
			.status(OK)
			.json({ message: "Password reset successfully!" });
	}, "AUTH | RESET_PASSWORD"),

	/*
	STEPS
	- Get access token from cookies
	- Verify the access token
	- If valid, delete the session
	- Clear auth cookies in response
	- Return success message
	*/
	logoutController: catchErrors(async (req, res) => {
		// get access token from cookies
		const accessToken = req.cookies.accessToken;

		// verify the access token - error handling is done in the verifyToken function
		const { payload } = verifyToken(accessToken);

		// delete the session if payload is valid
		if (payload) {
			await SessionModel.findByIdAndDelete(payload.sessionId);
		}

		// clear cookies in the response and return success message
		return clearAuthCookies(res)
			.status(OK)
			.json({ message: "Logout successful" });
	}, "AUTH | LOGOUT"),
};
