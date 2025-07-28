import { Hero } from "../components/sections/Hero";
import { LatestCollection } from "../components/sections/LatestCollection";
import { BestSellers } from "../components/sections/BestSellers";
import { OurPolicy } from "../components/sections/OurPolicy";
import { SocialLinkSection } from "../components/sections/SocialLinkSection";

export const Home = () => {
	return (
		<div className="px-6 sm:px-24">
			<Hero />
			<LatestCollection />
			<BestSellers />
			<OurPolicy />
			<SocialLinkSection />
		</div>
	);
};
