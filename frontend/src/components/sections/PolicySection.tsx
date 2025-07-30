import { FaExchangeAlt, FaBox, FaPhoneAlt } from "react-icons/fa";

export const PolicySection = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md-text-base text-gray-700">
			<div className="flex flex-col items-center justify-center gap-2">
				{/* exchange icon */}
				<FaExchangeAlt className="text-3xl text-cyan-600 hover:scale-110 transition-transform" />
				<p className="font-semibold text-lg mt-2">Easy Exchange Policy</p>
				<p className="text-gray-400">We offer hassle-free exchanges!</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				{/* returns icon */}
				<FaBox className="text-3xl text-stone-500 hover:scale-110 transition-transform" />

				<p className="font-semibold text-lg mt-2">7-Day Return Policy</p>
				<p className="text-gray-400">We offer free returns within 7 days!</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				{/* support icon */}
				<FaPhoneAlt className="text-3xl text-green-600 hover:scale-110 transition-transform" />

				<p className="font-semibold text-lg mt-2">24/7 Customer Support</p>
				<p className="text-gray-400">We provide 24/7 customer support!!</p>
			</div>
		</div>
	);
};
