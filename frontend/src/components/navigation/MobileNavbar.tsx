import { CgMenuRightAlt } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

interface MobileNavbarProps {
	toggle: {
		visible: boolean;
		setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	};
}
export const MobileNavbar = ({ toggle }: MobileNavbarProps) => {
	return (
		<>
			<h1
				onClick={() => toggle.setVisible(true)}
				className="cursor-pointer text-2xl sm:hidden"
			>
				<CgMenuRightAlt />
			</h1>
			<nav
				className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white z-10 transition-all ${
					toggle.visible ? "w-full" : "w-0"
				}`}
			>
				<div className="pl-6 flex flex-col gap-4 justify-start items-start">
					<span
						className="flex justify-center items-center gap-2 font-bold self-start py-6 cursor-pointer"
						onClick={() => toggle.setVisible(false)}
					>
						CLOSE <FaArrowRightLong />
					</span>
					<NavLink
						onClick={() => toggle.setVisible(false)}
						className={({ isActive }) =>
							isActive
								? "active font-bold"
								: "flex flex-col justify-center items-start cursor-pointer"
						}
						to={""}
					>
						HOME
						<hr className="w-3/5 mt-1 border-none h-[2.5px] bg-transparent" />
					</NavLink>
					<NavLink
						onClick={() => toggle.setVisible(false)}
						className={({ isActive }) =>
							isActive
								? "active font-bold"
								: "flex flex-col justify-center items-start cursor-pointer"
						}
						to={"products"}
					>
						PRODUCTS
						<hr className="w-3/5 mt-1 border-none h-[2.5px] bg-transparent" />
					</NavLink>
					<NavLink
						onClick={() => toggle.setVisible(false)}
						className={({ isActive }) =>
							isActive
								? "active font-bold"
								: "flex flex-col justify-center items-start cursor-pointer"
						}
						to={"about"}
					>
						ABOUT
						<hr className="w-3/5 mt-1 border-none h-[2.5px] bg-transparent" />
					</NavLink>
					<NavLink
						onClick={() => toggle.setVisible(false)}
						className={({ isActive }) =>
							isActive
								? "active font-bold"
								: "flex flex-col justify-center items-start cursor-pointer"
						}
						to={"contact"}
					>
						CONTACT
						<hr className="w-3/5 mt-1 border-none h-[2.5px] bg-transparent" />
					</NavLink>
					<NavLink
						onClick={() => toggle.setVisible(false)}
						className={({ isActive }) =>
							isActive
								? "active font-bold"
								: "flex flex-col justify-center items-start cursor-pointer"
						}
						to={"cart"}
					>
						MY CART
						<hr className="w-3/5 mt-1 border-none h-[2.5px] bg-transparent" />
					</NavLink>
				</div>
			</nav>
		</>
	);
};
