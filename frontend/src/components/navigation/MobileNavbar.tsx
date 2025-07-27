import { NavLink } from "react-router-dom";

interface MobileNavbarProps {
	toggle: {
		visible: boolean;
		setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	};
}
export const MobileNavbar = ({ toggle }: MobileNavbarProps) => {
	return (
		<nav
			className={`absolute top-0 right-0 bottom-0 overflow-hidden flex flex-col pt-12 gap-4 justify-start items-start pl-6  transition-all ${
				toggle.visible ? "w-full bg-white" : "w-0 bg-transparent"
			}`}
		>
			<span
				className="font-bold self-start mb-4 cursor-pointer"
				onClick={() => toggle.setVisible(false)}
			>
				CLOSE
			</span>
			<NavLink
				onClick={() => toggle.setVisible(false)}
				className="flex flex-col justify-center items-start cursor-pointer"
				to={""}
			>
				HOME
				<hr className="w-full border-none h-[1.5px] bg-transparent" />
			</NavLink>
			<NavLink
				onClick={() => toggle.setVisible(false)}
				className="flex flex-col justify-center items-start cursor-pointer"
				to={"products"}
			>
				PRODUCTS
				<hr className="w-full border-none h-[1.5px] bg-transparent" />
			</NavLink>
			<NavLink
				onClick={() => toggle.setVisible(false)}
				className="flex flex-col justify-start items-start cursor-pointer"
				to={"about"}
			>
				ABOUT
				<hr className="w-full border-none h-[1.5px] bg-transparent" />
			</NavLink>
			<NavLink
				onClick={() => toggle.setVisible(false)}
				className="flex flex-col justify-center items-start cursor-pointer"
				to={"contact"}
			>
				CONTACT
				<hr className="w-full border-none h-[1.5px] bg-transparent" />
			</NavLink>
			<NavLink
				onClick={() => toggle.setVisible(false)}
				className="flex flex-col justify-center items-start cursor-pointer"
				to={"cart"}
			>
				MY CART
				<hr className="w-full border-none h-[1.5px] bg-transparent" />
			</NavLink>
		</nav>
	);
};
