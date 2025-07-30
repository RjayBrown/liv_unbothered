import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="px-6 sm:px-24">
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-32 mx-auto text-small">
				<div>
					<h1 className="mb-5 w-32">LOGO</h1>
					<p className="w-full md:w-2/3 text-gray-600">
						ONE SENTENCE BRAND TAGLINE CAN GO HERE
					</p>
				</div>
				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<ul className="flex flex-col text-gray-600 gap-1">
						<Link to={""}>
							<li>Home</li>
						</Link>
						<Link to={"about"}>
							<li>About</li>
						</Link>
						<Link to={""}>
							<li>Delivery</li>
						</Link>
						<Link to={""}>
							<li>Privacy Policy</li>
						</Link>
					</ul>
				</div>
				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<ul className="flex flex-col text-gray-600 gap-1">
						<li>1 (000) 000-0000</li>
						<li>store@email.com</li>
					</ul>
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
