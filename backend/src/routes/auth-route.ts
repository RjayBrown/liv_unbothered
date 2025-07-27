import { Router } from "express";
import { auth } from "../controllers/auth/auth-controllers";

export const authRoutes = Router();

// Route prefix - /auth
authRoutes.post("/register", auth.registerController);
authRoutes.post("/login", auth.loginController);
authRoutes.get("/refresh", auth.refreshController);
authRoutes.get("/logout", auth.logoutController);
authRoutes.get("/email/verify/:code", auth.verifyEmailController);
authRoutes.post("/password/forgot", auth.sendPasswordResetController);
authRoutes.post("/password/reset", auth.resetPasswordController);
