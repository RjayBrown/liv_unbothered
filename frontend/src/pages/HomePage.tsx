import { HeroSection } from "../components/sections/HeroSection";
import { LatestProductsSection } from "../components/sections/LatestProductsSection";
import { BestSellersSection } from "../components/sections/BestSellersSection";
import { PolicySection } from "../components/sections/PolicySection";
import { SocialLinkSection } from "../components/sections/SocialLinkSection";

export const HomePage = () => {
	return (
		<div className="mx-4 sm:mx-24">
			<HeroSection />
			<LatestProductsSection />
			<BestSellersSection />
			<PolicySection />
			<SocialLinkSection />
		</div>
	);
};
