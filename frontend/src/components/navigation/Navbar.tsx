import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../utils/hooks/useStoreContext";
import { MobileNavbar } from "./MobileNavbar";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";

export const Navbar = () => {
	const { user, updateUser, setShowSearch } = useStoreContext();
	const [visible, setVisible] = useState<boolean>(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const body = document.querySelector("body");
		if (body) {
			visible ? (body!.style.overflow = "hidden") : (body!.style.overflow = "");
		}
	}, [visible]);

	return (
		<header className="flex justify-between items-center cursor-pointer px-4 sm:px-0 py-6 md:mx-24">
			<h1
				onClick={() => {
					navigate("");
				}}
				className="w-1/3 justify-self-start"
			>
				LOGO
			</h1>

			<nav className="hidden sm:flex justify-center items-center w-1/3 gap-4">
				<NavLink
					className={({ isActive }) =>
						`flex flex-col gap-1 w-[4rem] justify-center items-center text-sm text-gray-700 transition-all ${isActive ? "active font-semibold hover:text-gray-800 scale-105" : "hover:text-red-700"}`
					}
					to={""}
				>
					HOME
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`flex flex-col gap-1 w-[4rem] justify-center items-center text-sm text-gray-700 transition-all ${isActive ? "active font-semibold hover:text-gray-800 scale-105" : "hover:text-red-700"}`
					}
					to={"products"}
				>
					PRODUCTS
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`flex flex-col gap-1 w-[4rem] justify-center items-center text-sm text-gray-700 transition-all ${isActive ? "active font-semibold hover:text-gray-800 scale-105" : "hover:text-red-700"}`
					}
					to={"about"}
				>
					ABOUT
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`flex flex-col gap-1 w-[4rem] justify-center items-center text-sm text-gray-700 transition-all ${isActive ? "active font-semibold hover:text-gray-800 scale-105" : "hover:text-red-700"}`
					}
					to={"contact"}
				>
					CONTACT
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
			</nav>

			<div className="flex justify-end items-center gap-4 justify-self-end w-1/3">
				<span
					className="cursor-pointer"
					onClick={() => {
						if (location.pathname !== "/products") {
							navigate("/products");
						}

						setShowSearch(true);
					}}
				>
					<IoSearch className="text-xl" />
				</span>
				<div
					className="flex justify-center items-center relative"
					onClick={() => console.log("click!")}
				>
					<Link to="login">
						<FaRegCircleUser className="text-xl" />
					</Link>
				</div>
				<Link to="cart" className="relative">
					<PiShoppingCartBold className="text-xl" />
					<span className=" absolute right-[-7px] bottom-[-7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
						{0}
					</span>
				</Link>
				<MobileNavbar toggle={{ visible, setVisible }} />
			</div>
			<div className="hidden sm:absolute top-[4rem]">
				<h1 className="text-center text-gray-500 w-fit mx-auto mr-2">
					Hello{" "}
					<span
						className="text-gray-800"
						onClick={() =>
							user === "You" ? updateUser("Me") : updateUser("You")
						}
					>
						{user}!
					</span>
				</h1>
			</div>
		</header>
	);
};
