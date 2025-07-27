import mongoose from "mongoose";
import { thirtyDaysFromNow } from "../../util/dates";

// Model Document Interface
export interface SessionDocument extends mongoose.Document {
	_id: mongoose.Types.ObjectId;
	userId: mongoose.Types.ObjectId;
	userAgent?: string;
	createdAt: Date;
	expiresAt: Date;
	isCurrent: Boolean;
}

// Mongoose Schema
const sessionSchema = new mongoose.Schema<SessionDocument>({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
		index: true,
	},
	userAgent: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	expiresAt: {
		type: Date,
		required: true,
		default: thirtyDaysFromNow(),
	},
	isCurrent: {
		type: Boolean,
		required: true,
		default: false,
	},
});

// SESSION MODEL
export const SessionModel = mongoose.model<SessionDocument>(
	"Session",
	sessionSchema
);
