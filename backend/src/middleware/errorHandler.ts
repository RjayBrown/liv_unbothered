import { ErrorRequestHandler, Response } from "express";
import { BAD_REQUEST } from "../constants/http";
import { AppError } from "../util/errors/app-error-class";
import { z } from "zod";
import { clearAuthCookies, REFRESH_PATH } from "../config/auth/cookies";

/*
ERROR HANDLER MIDDLEWARE

ERROR TYPES
- Zod Error (Schema Validaton)
- App Error (Controllers/Services)
*/

const handleZodError = (res: Response, error: z.ZodError) => {
	const errors = error.issues.map((err) => ({
		path: err.path.join(""),
		message: err.message,
	}));
	return res.status(BAD_REQUEST).json({
		message: "BAD REQUEST",
		errors,
	});
};

const handleAppError = (res: Response, error: AppError) => {
	return res.status(error.statusCode).json({
		message: error.message,
		errorCode: error.errorCode,
	});
};

const errorHandler: ErrorRequestHandler = (error, req, res) => {
	console.log(`PATH: ${req.path}`, error);

	if (req.path === REFRESH_PATH) {
		// Special handling for refresh token endpoint
		clearAuthCookies(res);
	}

	if (error instanceof z.ZodError) {
		// Handle schema validation errors
		handleZodError(res, error);
	}

	if (error instanceof AppError) {
		// Handle application errors
		handleAppError(res, error);
	}
};

export default errorHandler;
