import mongoose from "mongoose";
import VerificationCodeType from "../../constants/enum/verification-code";

// Verification Code Document
export interface VerificationCodeDocument extends mongoose.Document {
	userId: mongoose.Types.ObjectId;
	type: VerificationCodeType;
	createdAt: Date;
	expiresAt: Date;
}

// Creating Mongoose Schema
const verificationCodeSchema = new mongoose.Schema<VerificationCodeDocument>({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
		index: true,
	},
	type: { type: String, required: true },
	createdAt: {
		type: Date,
		required: true,
	},
	expiresAt: {
		type: Date,
		required: true,
	},
});

// VERIFICATION CODE MODEL
export const VerificationCodeModel = mongoose.model<VerificationCodeDocument>(
	"VerificationCode",
	verificationCodeSchema,
	"verification_codes"
);
