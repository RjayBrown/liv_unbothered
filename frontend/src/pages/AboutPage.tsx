import { Title } from "../components/Title";
import { SocialLinkSection } from "../components/sections/SocialLinkSection";
import img from "../assets/LIV-UNBOTHERED.jpg";
import { FaBagShopping, FaComment, FaSwatchbook } from "react-icons/fa6";

export const AboutPage = () => {
	return (
		<div className="px-6 sm:px-24 flex flex-col justify-center items-center w-full">
			<div className="mb-7">
				<Title text1="ABOUT" text2="US" />
			</div>
			<div className="flex flex-col lg:flex-row justify-around mx-auto mb-24 w-full lg:w-4/5 gap-8">
				<div className="sm:h-[300px] lg:h-[570px] w-full lg:w-[45%] border border-gray-300 ">
					<img src={img} className="w-full h-full"></img>
				</div>
				<div className="flex flex-col justify-start w-full lg:w-2/5 gap-6">
					<p className="font-semibold text-gray-700 text-xl">Who We Are</p>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sed
						similique saepe deleniti ratione perferendis enim eveniet veniam
						esse quam!
					</p>

					<p className="font-semibold text-gray-700 text-xl">Inspiration</p>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						maiores molestiae nostrum sit ipsa alias dolores sunt tempore,
						eveniet sapiente quibusdam. Vitae repellendus nulla distinctio non
						quasi, officia eligendi ad sit optio itaque saepe deleniti
						voluptates eveniet veniam totam minima dolores obcaecati
						consequuntur corporis minus eos. Asperiores dicta cumque quod!
					</p>

					<p className="font-semibold text-gray-700 text-xl">Our Mission</p>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						maiores molestiae nostrum sit ipsa alias dolores sunt tempore,
						eveniet sapiente quibusdam. Vitae repellendus nulla distinctio non
						quasi, officia eligendi.
					</p>
				</div>
			</div>

			<Title text1="WHY" text2="CHOOSE US" />
			<div className="flex flex-col lg:flex-row gap-0 sm:gap-8 justify-center items-center mb-24 w-full">
				<div className="flex flex-col justify-center items-center sm:items-start gap-4 sm:p-8 lg:p-12 h-[250px] w-full sm:w-3/4 lg:w-1/3 text-center">
					<div className="mx-auto">
						<div className="flex justify-center items-center bg-gray-700 rounded-full size-10 mx-auto">
							<FaBagShopping className="text-xl mx-auto text-white hover:scale-110 transition-transform" />
						</div>
						<p className="font-semibold mx-auto mt-2">Convenience</p>
					</div>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
						vitae dolor doloribus cumque impedit laborum!
					</p>
				</div>
				<div className="flex flex-col justify-center items-center sm:items-start gap-4 sm:p-8 lg:p-12 h-[250px] w-full sm:w-3/4 lg:w-1/3 text-center">
					<div className="mx-auto">
						<div className="flex justify-center items-center bg-gray-700 rounded-full size-10 mx-auto">
							<FaComment className="text-xl mx-auto text-white hover:scale-110 transition-transform" />
						</div>
						<p className="font-semibold mx-auto mt-2">Personal Service</p>
					</div>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
						vitae dolor doloribus cumque impedit laborum!
					</p>
				</div>
				<div className="flex flex-col justify-center items-center sm:items-start gap-4 sm:p-8 lg:p-12 h-[250px] w-full sm:w-3/4 lg:w-1/3 text-center">
					<div className="mx-auto">
						<div className="flex justify-center items-center bg-gray-700 rounded-full size-10 mx-auto">
							<FaSwatchbook className="text-xl mx-auto text-white hover:scale-110 transition-transform" />
						</div>
						<p className="font-semibold mx-auto mt-2">Quality Assurance</p>
					</div>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
						vitae dolor doloribus cumque impedit laborum!
					</p>
				</div>
			</div>
			<SocialLinkSection />
		</div>
	);
};
