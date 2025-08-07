import type React from "react";
import { Button } from "../buttons/Button";
import { Title } from "../Title";

interface DeliveryProps {
	state: {
		isFilled: boolean;
		setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
	};
}

// add refs and submit logic
export const DeliveryInfoForm = ({ state }: DeliveryProps) => {
	return (
		<form className="flex flex-col justify-start items-start sm:w-1/2">
			<Title
				text1="DELIVERY"
				text2="INFORMATION"
				hideLine={true}
				className="my-12 sm:my-8 self-center sm:self-start"
			/>
			<div className="flex gap-3 w-full">
				<label htmlFor="firstname" className="w-1/2">
					<input
						type="text"
						id="firstname"
						placeholder="First Name"
						className="py-1 px-2 my-2 w-full border border-gray-400 rounded-sm"
						required
					/>
				</label>
				<label htmlFor="lastname" className="w-1/2">
					<input
						type="text"
						id="lastname"
						placeholder="Last Name"
						className="py-1 px-2 my-2 w-full border border-gray-400 rounded-sm"
						required
					/>
				</label>
			</div>
			<div className="flex gap-3 w-full">
				<label htmlFor="email" className="w-1/2">
					<input
						type="email"
						id="email"
						placeholder="Email Address"
						className="py-1 px-2 my-2 w-full border border-gray-400 rounded-sm"
						required
					/>
				</label>
				<label htmlFor="phone" className="w-1/2">
					<input
						type="tel"
						placeholder="Phone Number"
						className="py-1 px-2 my-2 w-full border border-gray-400 rounded-sm"
						required
					/>
				</label>
			</div>
			<label htmlFor="street" className="w-full">
				<input
					type="text"
					id="street"
					placeholder="Street"
					className="py-1 px-2 my-2 w-full border border-gray-400 rounded-sm"
					required
				/>
			</label>
			<div className="flex gap-3 w-full">
				<label htmlFor="city" className="w-1/2 self-center">
					<input
						type="text"
						id="city"
						placeholder="City"
						className="py-1 px-2 my-2 w-full border border-gray-400 rounded-sm"
						required
					/>
				</label>
				<label htmlFor="state" className="w-1/2 self-center">
					<input
						type="text"
						id="state"
						placeholder="State"
						className="py-1 px-2 my-2 w-full border border-gray-400 rounded-sm"
						required
					/>
				</label>
			</div>
			<div className="flex gap-3 w-full">
				<label htmlFor="zip" className="w-1/2 self-center">
					<input
						type="text"
						id="zip"
						placeholder="Zip"
						className="py-1 px-2 my-2 w-full border border-gray-400 rounded-sm"
						required
					/>
				</label>
				<Button
					className="px-2 py-1 w-1/2 sm:w-1/2 h-[34px] my-2 border border-gray-400 rounded-sm"
					onClick={() => state.setIsFilled(true)}
				>
					Finish Order
				</Button>
			</div>
		</form>
	);
};
