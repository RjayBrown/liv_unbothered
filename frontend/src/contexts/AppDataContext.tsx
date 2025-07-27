import { createContext, useState, type FC, type ReactNode } from "react";

export type AppDataContextType = {
	user: string;
	updateUser: (name: "Me" | "You") => void;
};

interface AppDataProviderProps {
	children: ReactNode;
}

export const AppDataContext = createContext<AppDataContextType>({
	user: "Me",
	updateUser: () => {},
});

export const AppDataProvider: FC<AppDataProviderProps> = ({ children }) => {
	const [user, setUser] = useState("Me");

	const updateUser = (name: "Me" | "You") => {
		setUser(name);
	};

	return (
		<>
			<AppDataContext value={{ user, updateUser }}>{children}</AppDataContext>
		</>
	);
};
