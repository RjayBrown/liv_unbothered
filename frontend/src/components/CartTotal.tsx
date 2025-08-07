import { useStoreContext } from "../utils/hooks/useStoreContext";

import { Title } from "./Title";

export const CartTotal = () => {
	const { currency, subTotal, deliveryFee, taxRate } = useStoreContext();

	return (
		<div className="flex justify-end w-full">
			<div className="flex flex-col w-full">
				<div className="mb-4 sm:mb-0 sm:self-start">
					<Title text1="CART" text2="TOTALS" hideLine={true} />
				</div>
				<div className="flex justify-between border border-t-0 border-l-0 border-r-0 border-b-gray-300 text-sm py-2">
					<span>Subtotal</span>
					<span>
						{currency} {subTotal.toFixed(2)}
					</span>
				</div>
				<div className="flex justify-between border border-t-0 border-l-0 border-r-0 border-b-gray-300 text-sm py-2">
					<span>Taxes</span>
					<span>
						{currency} {(subTotal * taxRate).toFixed(2)}
					</span>
				</div>
				<div className="flex justify-between border border-t-0 border-l-0 border-r-0 border-b-gray-300 text-sm py-2">
					<span>Shipping & Delivery Fee</span>
					<span className={subTotal > 75 ? "font-semibold text-green-500" : ""}>
						{subTotal > 75 ? "FREE!" : currency + deliveryFee.toFixed(2)}
					</span>
				</div>
				<div className="flex justify-between border border-t-0 border-l-0 border-r-0 border-b-gray-300 text-sm py-2 font-semibold">
					<span>TOTAL</span>
					<span>
						{currency}{" "}
						{subTotal > 75
							? (subTotal + subTotal * taxRate).toFixed(2)
							: (subTotal + subTotal * taxRate + deliveryFee).toFixed(2)}
					</span>
				</div>
			</div>
		</div>
	);
};
