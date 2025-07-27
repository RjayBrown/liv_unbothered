import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../utils/hooks/useStoreContext";
import { MobileNavbar } from "./MobileNavbar";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";

export const Navbar = () => {
	const { user, updateUser } = useStoreContext();
	const [visible, setVisible] = useState<boolean>(false);
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<header className="flex justify-between items-center cursor-pointer px-6 sm:px-0 py-6 md:mx-24 mb-12 border border-b-gray-300 border-l-0 border-r-0 border-t-0">
			<h1
				onClick={() => {
					user === "Me" ? updateUser("You") : updateUser("Me");
					navigate("");
				}} // remove after finishing home page
			>
				LOGO {user}
			</h1>

			<nav className="hidden sm:flex justify-center items-center gap-4">
				<NavLink className="flex flex-col justify-center items-center" to={""}>
					HOME
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
				<NavLink
					className="flex flex-col justify-center items-center"
					to={"products"}
				>
					PRODUCTS
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
				<NavLink
					className="flex flex-col justify-center items-center"
					to={"about"}
				>
					ABOUT
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
				<NavLink
					className="flex flex-col justify-center items-center"
					to={"contact"}
				>
					CONTACT
					<hr className="w-2/4 border-none h-[1.5px] bg-transparent" />
				</NavLink>
			</nav>

			<div className="flex justify-center items-center gap-4">
				<span
					className="cursor-pointer"
					onClick={() => {
						if (location.pathname !== "/products") {
							navigate("/products");
						}
					}}
				>
					<IoSearch className="text-lg" />
				</span>
				<div className="flex justify-center items-center relative">
					<Link to="login">
						<FaRegCircleUser className="text-lg" />
					</Link>
				</div>
				<Link to="cart" className="relative">
					<PiShoppingCartBold className="text-lg" />
					<span className=" absolute right-[-7px] bottom-[-7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
						{0}
					</span>
				</Link>
				<MobileNavbar toggle={{ visible, setVisible }} />
			</div>
		</header>
	);
};
