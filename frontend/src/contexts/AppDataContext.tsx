import React, {
	createContext,
	useEffect,
	useState,
	type FC,
	type ReactNode,
} from "react";
import { MOCK_DATA } from "../utils/MOCK_DATA"; // TODO: replace with product data - fetch from within context provider

export type AppDataContextType = {
	// TODO: add correct user type - set up backend first
	user: string;
	updateUser: (name: "Me" | "You") => void;
	products: Products;
	showSearch: boolean;
	setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
} | null;

export type Product = {
	_id: string;
	name: string;
	description: string;
	price: number;
	image: string[];
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
	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(false);

	const updateUser = (name: "Me" | "You") => {
		setUser(name);
		console.log(user);
	};

	const value: AppDataContextType = {
		user,
		updateUser,
		products: MOCK_DATA,
		search,
		setSearch,
		showSearch,
		setShowSearch,
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
