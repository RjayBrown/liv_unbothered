/*
USER CONTROLLER

DIRECT CALL TO DB (models/user.ts)
- Get User
*/

import { NOT_FOUND, OK } from "../constants/http";
import { UserModel } from "../models/auth/user-model";
import { appAssert } from "../util/errors/app-error-assert";
import { catchErrors } from "../util/errors/catch-errors";

export const user = {
	getUserController: catchErrors(async (req, res) => {
		const user = await UserModel.findById(req.userId);
		appAssert(user, NOT_FOUND, "User not found");

		return res.status(OK).json({ user: user.omitPassword() });
	}, "USER | GET USER"),
};
