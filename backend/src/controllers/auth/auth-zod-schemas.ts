/*
ZOD SCHEMAS (AUTH)
- Login/Register Schema (Username?, Email, Password, Confirm Password, User Agent)
- Verification Code Schema
- Reset Password Schema (New Password, Verification Code)
*/

import { z } from "zod";

// SINGLE SCHEMAS
const usernameSchema = z
	.string()
	.min(3, "Username must be at least 3 characters long")
	.optional();
const passwordSchema = z
	.string()
	.min(6, "Password must be at least 6 characters long")
	.max(255);

export const emailSchema = z.string().email().min(1, "Email is required");
export const verificationCodeSchema = z.string().min(1).max(24);

// OBJECT SCHEMAS
export const loginSchema = z.object({
	username: usernameSchema,
	email: emailSchema,
	password: passwordSchema,
	userAgent: z.string().optional(),
});

export const registerSchema = loginSchema
	.extend({
		confirmPassword: z.string().min(6).max(255),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export const resetPasswordSchema = z.object({
	password: passwordSchema,
	verificationCode: verificationCodeSchema,
});
