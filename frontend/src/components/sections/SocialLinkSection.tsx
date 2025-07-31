import { Title } from "../Title";
import { AiFillInstagram } from "react-icons/ai";

export const SocialLinkSection = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center w-full">
			<Title text1="FOLLOW" text2="US" />
			<p className="text-2xl font-medium text-gray-800 mt-4 mb-2">
				Get early access to new releases!
			</p>
			<div className="flex justify-center items-center bg-gray-700 rounded-full size-8 mx-auto">
				<AiFillInstagram className="text-xl mx-auto text-white hover:scale-110 transition-transform" />
			</div>
		</div>
	);
};
