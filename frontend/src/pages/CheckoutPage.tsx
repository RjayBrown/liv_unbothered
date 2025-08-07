import { DeliveryInfoForm } from "../components/forms/DeliveryInfoForm";
import { CartTotal } from "../components/CartTotal";
import { Title } from "../components/Title";
import { Button } from "../components/buttons/Button";
import React, { useRef, useState } from "react";

import stripeImg from "../assets/stripe.webp";

export const CheckoutPage = () => {
	const [isFilled, setIsFilled] = useState(false);
	const [payType, setPayType] = useState("");
	const stripeRef = useRef<HTMLInputElement>(null);
	const cashRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (payType === "stripe") {
			console.log("Paying with stripe");
			console.log(stripeRef.current?.value);
		} else {
			console.log("Paying cash");
			console.log(cashRef.current?.value);
		}
	};
	return (
		<div className="mx-4 sm:mx-24 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-5 sm:pt-10 pb-20 border border-l-0 border-r-0 border-t-gray-400">
			<DeliveryInfoForm state={{ isFilled, setIsFilled }} />
			<form
				className="flex flex-col self-start mt-24 w-full sm:w-1/2"
				onSubmit={handleSubmit}
			>
				{isFilled && (
					<div>
						<CartTotal />
						<Title
							text1="PAYMENT METHOD"
							text2=""
							hideLine={true}
							className="hidden sm:flex sm:justify-start text-sm sm:self-start mt-10 mb-4 sm:mb-0"
						/>
						<div className="flex gap-4 justify-self-end sm:justify-self-start my-4">
							{/* STATE FOR PAY TYPE */}
							<label
								htmlFor="cash-on-delivery"
								className="cursor-pointer flex justify-center items-center py-1 px-3 border border-gray-500 rounded-sm"
								onClick={() => (cashRef.current!.checked = true)}
							>
								<input
									ref={cashRef}
									type="radio"
									name="payment-method"
									value="cash"
									className="radio mr-2"
									onClick={() => setPayType("cash")}
								/>
								<span>Cash On Delivery</span>
							</label>
							<label
								htmlFor="stripe"
								className="cursor-pointer flex justify-center items-center py-1 px-3 border border-gray-500 rounded-sm"
								onClick={() => (stripeRef.current!.checked = true)}
							>
								<input
									ref={stripeRef}
									type="radio"
									name="payment-method"
									value="stripe"
									className="radio mr-2"
									onClick={() => setPayType("stripe")}
								/>
								<img className="w-[3rem] h-[1.5rem]" src={stripeImg} />
							</label>
						</div>
						<div className="flex gap-4 justify-self-end">
							<Button type="submit" className="self-end mt-0">
								Pay Now
							</Button>
						</div>
					</div>
				)}
			</form>
		</div>
	);
};
