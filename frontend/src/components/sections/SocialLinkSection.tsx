import { FaInstagram } from "react-icons/fa6";

export const SocialLinkSection = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center w-full">
			<p className="text-2xl font-medium text-gray-800">
				Follow for access to new releases!
			</p>
			<FaInstagram className="text-3xl mt-3 cursor-pointer hover:text-[#e56969] hover:scale-105 transition-all" />
		</div>
	);
};
