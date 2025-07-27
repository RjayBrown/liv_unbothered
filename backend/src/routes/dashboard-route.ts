import { Router } from "express";
import { user } from "../controllers/user-controllers";

export const dashboardRoutes = Router();

// Route prefix - /dashboard
dashboardRoutes.get("/home", user.getUserController);
