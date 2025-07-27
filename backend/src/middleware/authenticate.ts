import { RequestHandler } from "express";
import { appAssert } from "../util/errors/app-error-assert";
import { UNAUTHORIZED } from "../constants/http";
import AppErrorCode from "../constants/enum/app-error-type";
import { verifyToken } from "../config/auth/jwt";
import { catchErrors } from "../util/errors/catch-errors";

// AUTH MIDDLEWARE
// For protected routes
export const authenticate: RequestHandler = catchErrors(
	async (req, res, next) => {
		// get access token if it exists
		const accessToken = req.cookies.accessToken as string | undefined;
		appAssert(
			accessToken,
			UNAUTHORIZED,
			"Not Authorized",
			AppErrorCode.invalidAccessToken
		);

		// validate token
		const { error, payload } = verifyToken(accessToken);
		appAssert(
			payload,
			UNAUTHORIZED,
			error === "jwt expired" ? "Invalid Token" : "Token expired",
			AppErrorCode.invalidAccessToken
		);

		// add token and session id to request body
		req.userId = payload.userId;
		req.sessionId = payload.sessionId;
		next();
	},
	"AUTH_MIDDLEWARE - Not a"
);
