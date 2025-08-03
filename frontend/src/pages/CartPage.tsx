import { useEffect, useState, type ChangeEvent } from "react";
import { Button } from "../components/buttons/Button";
import { Title } from "../components/Title";
import { useStoreContext } from "../utils/hooks/useStoreContext";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
	const { currency, products, deliveryFee, cartItems, setCartItems } =
		useStoreContext();
	const navigate = useNavigate();

	const [subtotal] = useState(0);
	const [total] = useState(0);

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
					{cartItems
						? Object.keys(cartItems).map((item) => {
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
												onClick={() => navigate(`/product/${item}`)}
											></img>
											<div className="flex flex-col gap-2">
												<p className="font-semibold">
													{products.find((p) => p._id === item)?.name}
												</p>
												<div className="flex flex-row justify-start items-center gap-2">
													<span>
														{currency}
														{products.find((p) => p._id === item)?.price}
													</span>
													<span className="px-2 py-1 sm:px-3 border border-gray-200 text-black text-sm text-center my-auto">
														{Object.keys(cartItems[item])[i]}
													</span>
												</div>
											</div>
										</div>
										<input
											type="number"
											className="self-center w-[2rem] sm:w-[5rem] pl-2 border border-gray-300 rounded"
											defaultValue={cartItems[item][size]}
											onChange={(e) => handleItemAmount(e, item, size)}
										/>
										<h1
											className="pr-4 sm:pr-12"
											onClick={() => deleteItem(item, size)}
										>
											DELETE
										</h1>
									</div>
								));
							})
						: null}
				</div>
			</div>
			<div className="flex justify-end w-full">
				<div className="flex flex-col  w-[28rem]">
					<div className="">
						<Title text1="CART" text2="TOTALS" />
					</div>
					<div className="flex justify-between border border-t-0 border-l-0 border-r-0 border-b-gray-300 text-sm py-2">
						<span>Subtotal</span>
						<span>
							{currency} {subtotal.toFixed(2)}
						</span>
					</div>
					<div className="flex justify-between border border-t-0 border-l-0 border-r-0 border-b-gray-300 text-sm py-2">
						<span>Shipping Fee</span>
						<span>
							{currency}
							{deliveryFee.toFixed(2)}
						</span>
					</div>
					<div className="flex justify-between border border-t-0 border-l-0 border-r-0 border-b-gray-300 text-sm py-2 font-semibold">
						<span>TOTAL</span>
						<span>
							{currency} {total.toFixed(2)}
						</span>
					</div>
					<div className="flex gap-4">
						<Button
							type="submit"
							className="self-end mt-4 bg-gray-00"
							onClick={() => setCartItems(undefined)}
						>
							Clear Cart
						</Button>
						<Button type="submit" className="self-end mt-4">
							Proceed to Checkout
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
