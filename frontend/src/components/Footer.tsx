import { Link } from "react-router-dom";

import { FaEnvelope } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

export const Footer = () => {
	return (
		<footer className="px-6 sm:px-24">
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-8 mx-auto text-small">
				<div>
					<h1 className="mb-5 w-32">LOGO</h1>
					<p className="w-full md:w-2/3 text-gray-600">
						ONE SENTENCE BRAND TAGLINE CAN GO HERE
					</p>
				</div>
				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<div className="flex flex-col text-gray-600 gap-1">
						<Link
							className="hover:font-semibold hover:text-red-700 transition-all w-fit"
							to={""}
						>
							Home
						</Link>
						<Link
							className="hover:font-semibold hover:text-red-700 transition-all w-fit"
							to={"about"}
						>
							About
						</Link>
						<Link
							className="hover:font-semibold hover:text-red-700 transition-all w-fit"
							to={""}
						>
							Delivery
						</Link>
						<Link
							className="hover:font-semibold hover:text-red-700 transition-all w-fit"
							to={""}
						>
							Privacy Policy
						</Link>
					</div>
				</div>
				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<div>
						<p className="text-gray-700 flex justify-start items-center gap-2">
							<FaSquarePhone className="text-sm" /> 1 (000) 000-0000
						</p>
						<p className="text-gray-700 flex justify-start items-center gap-2">
							<FaEnvelope className="text-sm" />
							store@email.com
						</p>
					</div>
				</div>
			</div>
			<div>
				<hr />
				<p className="text-sm py-5 text-center">
					&copy; Copyright 2025 by LIV UNBOTHERED - All Rights Reserved
				</p>
			</div>
		</footer>
	);
};
