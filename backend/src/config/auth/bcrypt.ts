import bcrypt from "bcrypt";

export const hashPassword = async (
	password: string,
	saltRounds?: number
): Promise<string> => {
	return bcrypt.hash(password, saltRounds || 10);
};

export const compare = async (
	password: string,
	hashedPassword: string
): Promise<boolean> => {
	return bcrypt.compare(password, hashedPassword).catch(() => false);
};
