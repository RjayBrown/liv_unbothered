import jwt, { VerifyOptions } from "jsonwebtoken";
import { SignOptions } from "jsonwebtoken";
import { SessionDocument } from "../../models/auth/session.model";
import { UserDocument } from "../../models/auth/user-model";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../../constants/env";

export type RefreshTokenPayload = {
	sessionId: SessionDocument["_id"];
};

export type AccessTokenPayload = {
	userId: UserDocument["_id"];
	sessionId: SessionDocument["_id"];
};

type SignOptionsAndSecret = SignOptions & {
	secret: string;
};

const defaultOptions: SignOptions = {
	audience: ["user"],
};

export const accessTokenSignOptions: SignOptionsAndSecret = {
	expiresIn: "15m",
	secret: JWT_SECRET,
};

export const refreshTokenSignOptions: SignOptionsAndSecret = {
	expiresIn: "30d",
	secret: JWT_REFRESH_SECRET,
};

export const signToken = (
	payload: AccessTokenPayload | RefreshTokenPayload,
	options?: SignOptionsAndSecret
) => {
	const { secret, ...signOpts } = options || accessTokenSignOptions;
	return jwt.sign(payload, secret, {
		...defaultOptions,
		...signOpts,
	});
};

// return should be an access token payload - generic is used because string type was inferred (**string** | jwt | JwtPayload)
export const verifyToken = <T extends object = AccessTokenPayload>(
	token: string,
	options?: VerifyOptions & { secret: string }
) => {
	const { secret = JWT_SECRET, ...verifyOpts } = options || {};

	try {
		const payload = jwt.verify(token, secret, {
			...defaultOptions,
			...verifyOpts,
		}) as T;
		return { payload };
	} catch (error: any) {
		return { error: error.message || "Invalid token" };
	}
};
