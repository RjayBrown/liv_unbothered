import { useEffect, useState } from "react";
import { useStoreContext } from "../utils/hooks/useStoreContext";
import { type Products } from "../contexts/AppDataContext";

import { Title } from "../components/Title";
import { ProductCard } from "../components/ProductCard";
import { FaCaretUp } from "react-icons/fa6";

type SortTypes = "new-items" | "low-high" | "high-low" | "";

export const ProductsPage = () => {
	const { products, productCount, setProductCount, search, showSearch } =
		useStoreContext();
	const [showFilter, setShowFilter] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState<Products>(products);
	const [category, setCategory] = useState<string>();
	const [subCategory, setSubCategory] = useState<string>();
	const [, setSortType] = useState<SortTypes>("");

	useEffect(() => {
		let productCopy = products.slice();
		let filtered = productCopy.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase())
		);

		if (!filtered.length) {
			setFilteredProducts([]);
		} else if (showSearch && search && filtered.length) {
			setFilteredProducts(filtered);
			setProductCount(filtered.length);
		} else {
			setFilteredProducts(products);
			setProductCount(products.length);
		}
	}, [search]);

	useEffect(() => {
		const radioBtns = document.querySelectorAll<HTMLInputElement>(".radio");
		radioBtns.forEach((btn) => {
			if (!category && !subCategory) btn.checked = false;
		});
	}, [filteredProducts]);

	const clearFilter = () => {
		setFilteredProducts(products);
		setProductCount(products.length);
		setCategory("");
		setSubCategory("");
	};

	const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
		let productCopy = products.slice();
		const value = e.target.value;
		const filtered = productCopy.filter((product) =>
			product.category.includes(value)
		);

		setCategory(value);
		setSubCategory("");
		setFilteredProducts(filtered);
		setProductCount(filtered.length);
	};

	const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
		let productCopy = products.slice();
		const value = e.target.value;
		const filtered = productCopy.filter((product) =>
			product.subcategory.includes(value)
		);

		setSubCategory(value);
		setCategory("");
		setFilteredProducts(filtered);
		setProductCount(filtered.length);
	};

	const toggleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
		let copy = filteredProducts.slice();
		switch (e.target.value) {
			case "new-items":
				setSortType(e.target.value);
				setFilteredProducts(copy.sort((a, b) => a.date.localeCompare(b.date)));
				break;
			case "low-high":
				setSortType(e.target.value);
				setFilteredProducts(copy.sort((a, b) => a.price - b.price));
				break;
			case "high-low":
				setSortType(e.target.value);
				setFilteredProducts(copy.sort((a, b) => b.price - a.price));
				break;
			default:
				setFilteredProducts(products);
				break;
		}
	};

	return (
		<div className="mx-4 sm:mx-24 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-5 sm:pt-10 pb-20 border border-l-0 border-r-0 border-t-gray-400">
			<div className="min-w-40 lg:min-w-52 sm:mb-20">
				<p
					className="my-2 flex text-xl items-center cursor-pointer gap-2 font-semibold text-gray-700"
					onClick={() => setShowFilter(!showFilter)}
				>
					FILTERS
					<span className={`block z-0 sm:hidden`}>
						<FaCaretUp
							className={`text-gray-800 ${showFilter ? "" : "rotate-180"}`}
						/>
					</span>
				</p>
				{/* category filter */}
				<select
					className={`border border-gray-300 text-sm px-2 h-[3rem] w-full ${showFilter ? "" : "hidden"} sm:block`}
					onChange={toggleSort}
				>
					<option value="new-items">Sort by: New Items</option>
					<option value="low-high">Sort by: Low to High</option>
					<option value="high-low">Sort by: High to Low</option>
					<option value="">Clear Filter</option>
				</select>
				<div
					className={`border border-gray-100 sm:bg-transparent transition-colors hover:bg-gray-100 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
				>
					<p className="mb-3 text-sm font-medium">CATEGORIES</p>
					<div className="flex flex-col gap-2 text-sm font-light">
						<div className="flex items-center gap-2">
							<input
								type="radio"
								name="filter"
								className="w-3 radio"
								value={"Men"}
								onChange={toggleCategory}
							/>{" "}
							Men
						</div>
						<div className="flex items-center gap-2">
							<input
								type="radio"
								name="filter"
								className="w-3 radio"
								value={"Women"}
								onChange={toggleCategory}
							/>{" "}
							Women
						</div>
						<div className="flex items-center gap-2">
							<input
								type="radio"
								name="filter"
								className="w-3 radio"
								value={"Kids"}
								onChange={toggleCategory}
							/>{" "}
							Kids
						</div>
					</div>
				</div>
				<div
					className={`border border-gray-100 sm:bg-transparent transition-colors hover:bg-gray-100 pl-5 py-3 mt-5 mb-3 ${showFilter ? "" : "hidden"} sm:block`}
				>
					<p className="mb-3 text-sm font-medium">TYPE</p>
					<div className="flex flex-col gap-2 text-sm font-light">
						<div className="flex items-center gap-2">
							<input
								type="radio"
								name="filter"
								className="w-3 radio"
								value={"Topwear"}
								onChange={toggleSubCategory}
							/>{" "}
							Topwear {}
						</div>
						<div className="flex items-center gap-2">
							<input
								type="radio"
								name="filter"
								className="w-3 radio"
								value={"Bottomwear"}
								onChange={toggleSubCategory}
							/>{" "}
							Bottomwear
						</div>
						<div className="flex items-center gap-2">
							<input
								type="radio"
								name="filter"
								className="w-3 radio"
								value={"Accessories"}
								onChange={toggleSubCategory}
							/>{" "}
							Accessories
						</div>
					</div>
				</div>
				<div
					className={`${showFilter ? "mb-8" : "hidden"} sm:block cursor-pointer`}
				>
					<a
						className="text-gray-600 hover:underline"
						onClick={() => {
							clearFilter();
						}}
					>
						Clear Filter
					</a>
				</div>
			</div>
			{/* right */}
			<div className="flex-1">
				<div className="flex flex-col justify-between text-base sm:text-2xl">
					<div className="mt-8 sm:mt-2 mb-4 flex justify-center sm:justify-start">
						<Title text1={"ALL"} text2={"PRODUCTS"} hideLine={true} />
					</div>
				</div>
				<div>
					{!filteredProducts.length ? (
						<h1 className="text-4xl text-start font-semibold w-full mt-4">
							No Products Found
						</h1>
					) : (
						<div>
							{productCount > 1 ? (
								<h1 className="text-md text-start w-full mt-4">
									{productCount} Products
								</h1>
							) : (
								<h1 className="text-md text-start w-full mt-4">
									{productCount} Product
								</h1>
							)}

							<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
								{filteredProducts.map((product) => (
									<ProductCard product={product} key={product._id} />
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
