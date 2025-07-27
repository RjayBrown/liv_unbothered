const getEnv = (key: string, defaultValue?: string): string => {
	const value = process.env[key] || defaultValue;
	if (value === undefined) {
		throw new Error(`Missing environment variable ${key}`);
	}
	return value;
};

export const MONGO_URI = getEnv("MONGO_URI");
export const PORT = getEnv("PORT", "3000");
export const NODE_ENV = getEnv("NODE_ENV");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const JWT_SECRET = getEnv("JWT_SECRET");
export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");
export const GITHUB_CLIENT_ID = getEnv("GITHUB_CLIENT_ID");
export const GITHUB_SECRET = getEnv("GITHUB_SECRET");
export const SENDER_EMAIL_ADDRESS = getEnv("SENDER_EMAIL_ADDRESS");
export const RESEND_API_KEY = getEnv("RESEND_API_KEY");
