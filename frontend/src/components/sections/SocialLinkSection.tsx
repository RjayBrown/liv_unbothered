import { FaInstagram } from "react-icons/fa6";
import { Title } from "../Title";

export const SocialLinkSection = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center w-full">
			<Title text1="FOLLOW" text2="US" />
			<p className="text-2xl font-medium text-gray-800 mt-4">
				Get early access to new releases!
			</p>
			<FaInstagram className="text-3xl mt-3 cursor-pointer hover:text-[#e56969] hover:scale-105 transition-all" />
		</div>
	);
};
