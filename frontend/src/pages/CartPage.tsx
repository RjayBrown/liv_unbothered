import { useEffect, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../utils/hooks/useStoreContext";

import { Button } from "../components/buttons/Button";
import { Title } from "../components/Title";
import { CartTotal } from "../components/CartTotal";
import { FaMinus } from "react-icons/fa6";
import { toast } from "react-toastify";

export const CartPage = () => {
	const { currency, products, cartItems, setCartItems, cartCount } =
		useStoreContext();
	const navigate = useNavigate();

	const deleteItem = (item: string, size: string) => {
		const copy = structuredClone(cartItems!);
		const productSizes = Object.keys(copy[item]);

		productSizes.length === 0
			? setCartItems(undefined)
			: productSizes.length > 1
				? delete copy[item][size]
				: delete copy[item];
		console.log(copy);
		setCartItems(copy);
	};

	const handleItemAmount = (
		e: ChangeEvent<HTMLInputElement>,
		item: string,
		size: string
	) => {
		const copy = structuredClone(cartItems!);

		copy[item][size] = +e.target.value;
		setCartItems(copy);
	};

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);
	return (
		<div className="flex flex-col mx-4 sm:mx-24 border border-l-0 border-r-0 border-t-gray-400 pb-20">
			<div className="flex flex-col mt-12 mb-20">
				<div className="mb-7">
					<Title text1="YOUR" text2="CART" />
				</div>
				<div className="flex flex-col">
					{cartItems ? (
						Object.keys(cartItems).map((item) => {
							console.log(cartItems[item]);
							return Object.keys(cartItems[item]).map((size, i) => (
								<div
									className="flex flex-row justify-between items-center border border-gray-300 border-l-0 border-r-0 py-5 gap-6"
									key={`${item}${size}`}
								>
									<div className="flex flex-row justify-start items-start gap-6 text-xs sm:text-sm w-fit sm:w-1/5">
										<img
											className="h-28 w-20 cursor-pointer shadow-md"
											src={products.find((p) => p._id === item)?.image[0]}
											onClick={() => navigate(`/products/${item}`)}
										></img>
										<div className="flex flex-col gap-2">
											<p className="font-semibold text-lg sm:text-md text-gray-700">
												{products.find((p) => p._id === item)?.name}
											</p>
											<div className="flex flex-row justify-start items-center gap-2">
												<span className="text-lg sm:text-md">
													{currency}
													{products.find((p) => p._id === item)?.price}
												</span>
												<span className="px-2 border border-gray-200 text-black text-lg sm:text-md text-center my-auto">
													{Object.keys(cartItems[item])[i]}
												</span>
											</div>
										</div>
									</div>
									<input
										type="number"
										className="self-center w-[2rem] sm:w-[5rem] pl-2 border border-gray-300 rounded"
										defaultValue={cartItems[item][size]}
										onChange={(e) => {
											handleItemAmount(e, item, size);
											cartCount();
										}}
										min={1}
									/>
									<h1
										className="pr-4 "
										onClick={() => {
											deleteItem(item, size);
											cartCount();
										}}
									>
										<FaMinus className="cursor-pointer bg-gray-700 text-white hover:scale-110 hover:bg-red-700 transition-transform" />
									</h1>
								</div>
							));
						})
					) : (
						<h1 className="text-center font-semibold">Cart is Empty</h1>
					)}
				</div>
			</div>
			<div className="flex flex-col self-end w-full sm:w-[28rem]">
				<CartTotal />
				<div className="flex gap-4 self-end">
					<Button
						type="submit"
						className="self-end mt-4"
						onClick={() => setCartItems(undefined)}
					>
						Clear Cart
					</Button>
					<Button
						type="submit"
						className="self-end mt-4"
						onClick={() => {
							if (cartItems && Object.keys(cartItems)) {
								navigate("/checkout");
							} else {
								toast.error("Please add an item to the cart");
							}
						}}
					>
						Proceed to Checkout
					</Button>
				</div>
			</div>
		</div>
	);
};
