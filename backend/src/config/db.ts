import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

// MongoDB
export const connectToMongoDB = async (dbName: string) => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log(`Successfully connected to ${dbName}`);
	} catch (error) {
		console.error(`Could not connect to ${dbName}`, error);
		process.exit(1);
	}
};

export const disconnectFromMongoDB = async (dbName: string) => {
	try {
		await mongoose.disconnect();
		console.log(`${dbName} disconnected`);
	} catch (error) {
		console.log(`${dbName} is still connected`, error);
	}
};
