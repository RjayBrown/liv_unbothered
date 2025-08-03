import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStoreContext } from "../utils/hooks/useStoreContext";
import { CgClose } from "react-icons/cg";

export const SearchBar = () => {
	const { setSearch, showSearch, setShowSearch } = useStoreContext();
	const [visible, setVisible] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/products") {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}, [location]);

	return visible && showSearch ? (
		<div className="flex justify-center items-center px-6 sm:px-0 py-8 bg-gray-100 sm:mx-24 gap-2">
			<div
				className={`flex border bg-white ${
					showSearch
						? "border-gray-400 w-full sm:w-2/5 opacity-100"
						: "w-0 opacity-0"
				}`}
			>
				<input
					className="w-full py-1 px-3"
					type="text"
					name="text"
					placeholder="Search"
					required
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<span
				className={showSearch ? "inline-block" : "hidden"}
				onClick={() => setShowSearch(false)}
			>
				<CgClose className="text-lg cursor-pointer" />
			</span>
		</div>
	) : null;
};
