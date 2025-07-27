import { Router } from "express";
import { user } from "../controllers/user-controllers";

export const userRoutes = Router();

// Route prefix - /user
userRoutes.get("/", user.getUserController);
