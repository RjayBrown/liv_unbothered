import React, {
	createContext,
	useEffect,
	useState,
	type FC,
	type ReactNode,
} from "react";
import { MOCK_DATA } from "../utils/MOCK_DATA"; // TODO: replace with product data - fetch from within context provider
import { CURRENCY, DELIVERY_FEE } from "../utils/constants";
import { toast } from "react-toastify";

export type AppDataContextType = {
	// TODO: add correct user type - set up backend first
	user: string;
	updateUser: (name: "Me" | "You") => void;
	products: Products;
	showSearch: boolean;
	setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	currency: string;
	deliveryFee: number;
	productCount: number;
	setProductCount: React.Dispatch<React.SetStateAction<number>>;
	cartItems: CartItem;
	setCartItems: React.Dispatch<React.SetStateAction<CartItem>>;
	addToCart: (productId: string, size: Size) => void;
	cartCount: () => number;
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

export type CartItem =
	| {
			[key: string]: {
				[key: string]: number;
			};
	  }
	| undefined;

interface AppDataProviderProps {
	children: ReactNode;
}

export const AppDataContext = createContext<AppDataContextType>(null);

export const AppDataProvider: FC<AppDataProviderProps> = ({ children }) => {
	const [user, setUser] = useState("Me");
	const [products] = useState<Products>(MOCK_DATA);
	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	const [productCount, setProductCount] = useState(products.length);
	const [cartItems, setCartItems] = useState<CartItem>();

	const updateUser = (name: "Me" | "You") => {
		setUser(name);
		console.log(user);
	};

	const addToCart = (productId: string, size: Size) => {
		let cartData = cartItems ? structuredClone(cartItems) : {};
		console.log(cartData);

		if (!size) {
			toast.error("Please select a size.");
			return;
		}

		if (cartData[productId]) {
			if (cartData[productId][size]) {
				cartData[productId][size] += 1;
			} else {
				cartData[productId][size] = 1;
			}
		} else {
			cartData[productId] = {};
			cartData[productId][size] = 1;
		}

		setCartItems(cartData);
		toast.success("Added to cart!");
	};

	const cartCount = () => {
		let cartCount = 0;
		for (let item in cartItems) {
			for (let size in cartItems[item]) {
				if (cartItems[item][size]) {
					cartCount += cartItems[item][size];
				}
			}
		}
		return cartCount;
	};

	// FETCH PRODUCTS FROM DB

	const value: AppDataContextType = {
		user,
		updateUser,
		products,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		currency: CURRENCY,
		deliveryFee: DELIVERY_FEE,
		productCount,
		setProductCount,
		cartItems,
		setCartItems,
		addToCart,
		cartCount,
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
