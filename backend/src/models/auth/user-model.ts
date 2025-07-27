import mongoose from "mongoose";
import { compare, hashPassword } from "../../config/auth/bcrypt";

// User Document Interface
export interface UserDocument extends mongoose.Document {
	_id: mongoose.Types.ObjectId;
	email: string;
	password: string;
	isVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	comparePassword: (password: string) => Promise<boolean>;
	omitPassword: () => Pick<
		UserDocument,
		"_id" | "email" | "isVerified" | "createdAt" | "updatedAt" | "__v"
	>;
}

// Creating Mongoose Schema
const UserSchema = new mongoose.Schema<UserDocument>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 255,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true, // Automatically adds createdAt and updatedAt fields
	}
);

// Schema Logic / Methods

// Hashes the password before saving
UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	this.password = await hashPassword(this.password);
	next();
});

// Compares provided password with the hashed password  (USES: logging in)
UserSchema.methods.comparePassword = async function (
	password: string
): Promise<boolean> {
	return compare(password, this.password);
};

// Removes the password field (USES: Returning user data to client)
UserSchema.methods.omitPassword = function () {
	const user = this.toObject();
	delete user.password;
	return user;
};

// USER MODEL
export const UserModel = mongoose.model<UserDocument>("User", UserSchema);
