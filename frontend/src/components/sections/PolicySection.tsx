import { FaExchangeAlt, FaBox, FaPhoneAlt } from "react-icons/fa";

export const PolicySection = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md-text-base text-gray-700">
			<div className="flex flex-col items-center justify-center gap-2">
				{/* exchange icon */}
				<div className="mx-auto">
					<div className="flex justify-center items-center bg-gray-700 rounded-full size-12 mx-auto p-2">
						<FaExchangeAlt className="text-2xl mx-auto text-white hover:scale-105 transition-transform" />
					</div>
					<p className="font-semibold text-lg mt-2 mx-auto">
						Easy Exchange Policy
					</p>
				</div>
				<p className="text-gray-400">We offer hassle-free exchanges!</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				{/* returns icon */}
				<div className="mx-auto">
					<div className="flex justify-center items-center bg-gray-700 rounded-full size-12 mx-auto p-2">
						<FaBox className="text-2xl mx-auto text-white hover:scale-110 transition-transform" />
					</div>
					<p className="font-semibold text-lg mt-2 mx-auto">
						7-Day Return Policy
					</p>
				</div>
				<p className="text-gray-400">We offer free returns within 7 days!</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				{/* support icon */}
				<div className="mx-auto">
					<div className="flex justify-center items-center bg-gray-700 rounded-full size-12 mx-auto p-2 ">
						<FaPhoneAlt className="text-2xl mx-auto text-white hover:scale-105 transition-transform" />
					</div>
					<p className="font-semibold text-lg mt-2 mx-auto">
						24/7 Customer Support
					</p>
				</div>
				<p className="text-gray-400">We provide 24/7 customer support!!</p>
			</div>
		</div>
	);
};
