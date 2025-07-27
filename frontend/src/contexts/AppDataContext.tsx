import {
	createContext,
	useEffect,
	useState,
	type FC,
	type ReactNode,
} from "react";
import { MOCK_DATA } from "../utils/MOCK_DATA"; // TODO: replace with product data - fetch from within context provider

export type AppDataContextType = {
	user: string;
	updateUser: (name: "Me" | "You") => void;
	products: Products;
} | null;

export type Product = {
	_id: string;
	name: string;
	description: string;
	price: number;
	image: any[];
	category: string;
	subcategory: string;
	sizes: Size[];
	date: string; // TODO: switch to number?
	bestseller: boolean;
};

export type Products = Product[];

export type Size = "S" | "M" | "L" | "XL" | "2XL";

interface AppDataProviderProps {
	children: ReactNode;
}

export const AppDataContext = createContext<AppDataContextType>(null);

export const AppDataProvider: FC<AppDataProviderProps> = ({ children }) => {
	const [user, setUser] = useState("Me");

	const updateUser = (name: "Me" | "You") => {
		setUser(name);
		console.log(user);
	};

	const value: AppDataContextType = {
		user,
		updateUser,
		products: MOCK_DATA,
	};

	useEffect(() => {
		console.log(value);
	}, [user]);

	return (
		<>
			<AppDataContext value={value}>{children}</AppDataContext>
		</>
	);
};
