import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	const [visible, setVisible] = useState<Boolean>(false);
	return (
		<header className="flex justify-between items-center p-6 md:px-24 mb-5">
			<NavLink to={""} className="w-1/3 justify-self-start">
				<h1>LOGO</h1>
			</NavLink>
			<nav className="hidden sm:flex justify-center items-center gap-4 w-1/3">
				<NavLink className="flex flex-col justify-center items-center" to={""}>
					Home
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
				<NavLink
					className="flex flex-col justify-center items-center"
					to={"about"}
				>
					About
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
				<NavLink
					className="flex flex-col justify-center items-center"
					to={"contact"}
				>
					Contact
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
			</nav>

			<div className="flex gap-4 w-1/3 justify-end items-center">
				<NavLink
					to={"login"}
					className="my-3 px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded w-fit transition-colors"
				>
					Log-In / Register
				</NavLink>
				<h1
					onClick={() => setVisible(true)}
					className="cursor-pointer sm:hidden"
				>
					MENU
				</h1>
				<div
					className={`absolute top-0 right-0 bottom-0 overflow-hidden flex flex-col pt-12 gap-4 justify-start items-start pl-6 bg-white transition-all ${
						visible ? "w-full " : "w-0"
					}`}
				>
					<span
						className="text-red-800 self-start mb-4"
						onClick={() => setVisible(false)}
					>
						Go Back
					</span>
					<NavLink
						onClick={() => setVisible(false)}
						className="flex flex-col justify-center items-start"
						to={""}
					>
						Home
						<hr className=" border-none h-[1.5px] bg-transparent" />
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="flex flex-col justify-center items-start"
						to={"collection"}
					>
						Collection
						<hr className="w-full border-none h-[1.5px] bg-transparent" />
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="flex flex-col justify-start items-start"
						to={"about"}
					>
						About
						<hr className="w-full border-none h-[1.5px] bg-transparent" />
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="flex flex-col justify-center items-center"
						to={"contact"}
					>
						Contact
						<hr className="w-full border-none h-[1.5px] bg-transparent" />
					</NavLink>
				</div>
			</div>
		</header>
	);
};
