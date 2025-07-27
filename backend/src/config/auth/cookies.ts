import { CookieOptions, Response } from "express";
import { fifteenMinutesFromNow, thirtyDaysFromNow } from "../../util/dates";

// sets secure cookies for access and refresh tokens if in production
const secure = process.env.NODE_ENV === "production";

export const REFRESH_PATH = "/auth/refresh";

// Default cookie options for authentication cookies
const defaults: CookieOptions = {
	sameSite: "strict",
	httpOnly: true,
	secure,
};

// Function to get cookie options for access token
export const getAccessTokenCookieOptions = (): CookieOptions => {
	return { ...defaults, expires: fifteenMinutesFromNow() };
};

// Function to get cookie options for refresh token
export const getRefreshTokenCookieOptions = (): CookieOptions => {
	return { ...defaults, expires: thirtyDaysFromNow(), path: REFRESH_PATH };
};

// Type alias for the parameters required to set authentication cookies
type setCookiesParams = {
	res: Response;
	accessToken: string;
	refreshToken: string;
};

// Function to set authentication cookies in the response
export const setAuthCookies = ({
	res,
	accessToken,
	refreshToken,
}: setCookiesParams) => {
	res.cookie("accessToken", accessToken, getAccessTokenCookieOptions());

	res.cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions());
};

// Function to clear authentication cookies in the response
export const clearAuthCookies = (res: Response) => {
	return res
		.clearCookie("accessToken")
		.clearCookie("refreshToken", { path: REFRESH_PATH });
};
