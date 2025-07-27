import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectToMongoDB, disconnectFromMongoDB } from "./config/db";
import { NODE_ENV, PORT, APP_ORIGIN } from "./constants/env";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import { authRoutes } from "./routes/auth-route";
import { userRoutes } from "./routes/user-route";
import { authenticate } from "./middleware/authenticate";
import { sessionRoutes } from "./routes/session-route";
import { dashboardRoutes } from "./routes/dashboard-route";

const app = express();

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle CORS
app.use(
	cors({
		origin: APP_ORIGIN,
		credentials: true,
	})
);

// Parse cookies
app.use(cookieParser());

// Health check endpoint
app.get("/health", (req, res, next) => {
	// Simulate error for testing error handling middleware
	// throw new Error("This is a test error to check error handling.");

	console.log("Health check endpoint accessed");
	res.status(200).json({ message: "Server is healthy!" });

	// Other check logic
});

// ROUTES (Public)
app.use("/auth", authRoutes);

// ROUTES (Protected)
app.use("/user", authenticate, userRoutes);
app.use("/dashboard", authenticate, dashboardRoutes);

app.use("/sessions", authenticate, sessionRoutes);

// handle any errors
app.use(errorHandler);

/* DEVELOPMENT CONFIGURATION */

/* PRODUCTION CONFIGURATION */

app.listen(PORT, async () => {
	console.log(`server running on port ${PORT} in ${NODE_ENV} mode`);
	await connectToMongoDB("TestDB");

	// await disconnectFromMongoDB("TestDB");
});
