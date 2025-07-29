import { Title } from "../components/Title";
import { SocialLinkSection } from "../components/sections/SocialLinkSection";
import img from "../assets/LIV-UNBOTHERED.jpg";

export const About = () => {
	return (
		<div className="px-6 sm:px-24 flex flex-col justify-center items-center w-full">
			<div className="mb-7">
				<Title text1="ABOUT" text2="US" />
			</div>
			<div className="flex flex-col lg:flex-row justify-around mx-auto mb-24 w-full lg:w-4/5 gap-8">
				<div className="sm:h-[300px] lg:h-[570px] w-full lg:w-[45%] border border-black ">
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
			<div className="mb-7">
				<Title text1="WHY" text2="CHOOSE US" />
			</div>
			<div className="flex flex-col lg:flex-row justify-center items-center mb-24 w-full">
				<div className="flex flex-col justify-center items-center sm:items-start gap-8 border border-gray-300 lg:border-r-0 sm:p-8 lg:p-12 h-[300px] w-full sm:w-3/4 lg:w-1/3 text-center">
					<p className="font-semibold mx-auto">Quality Assurance</p>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
						vitae dolor doloribus cumque impedit laborum!
					</p>
				</div>
				<div className="flex flex-col justify-center items-center sm:items-start gap-8 border border-gray-300 lg:border-r-0 sm:p-8 lg:p-12 h-[300px] w-full sm:w-3/4 lg:w-1/3 text-center">
					<p className="font-semibold mx-auto">Convenience</p>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
						vitae dolor doloribus cumque impedit laborum!
					</p>
				</div>
				<div className="flex flex-col justify-center items-center sm:items-start gap-8 border border-gray-300 sm:p-8 lg:p-12 h-[300px] w-full sm:w-3/4 lg:w-1/3 text-center">
					<p className="font-semibold mx-auto">Personal Service</p>
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
