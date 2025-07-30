import img from "../../assets/LIV-UNBOTHERED.jpg";

export const HeroSection = () => {
	return (
		<div className="flex flex-col sm:flex-row border border-gray-400 mx-auto">
			<HeroLeft />
			<HeroRight />
		</div>
	);
};

export function HeroLeft() {
	return (
		<div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
			<div className="text-[#414141]">
				<div className="flex items-center gap-2">
					<p className="font-semibold text-sm md:text-base">FEATURING OUR</p>
					<p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
				</div>
				<h1 className="changa-one-regular text-gray-800 text-4xl sm:py-3 lg:text-5xl leading-relax">
					LATEST RELEASE
				</h1>
				<div className="flex justify-end items-center gap-2">
					<p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
					<p className="font-semibold text-sm md:text-base">SHOP NOW</p>
				</div>
			</div>
		</div>
	);
}

export function HeroRight() {
	return (
		<>
			<img
				className="img w-full sm:w-1/2 h-[20rem] sm:h-[30rem] border sm:border-l-gray-500"
				src={img}
				alt=""
			/>
		</>
	);
}
