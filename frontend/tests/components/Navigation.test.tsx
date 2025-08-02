import { render, screen } from "@testing-library/react";

import { AboutPage } from "../../src/pages/AboutPage";
import { ContactPage } from "../../src/pages/ContactPage";

describe("About Page", () => {
	it("Renders the route name on the page", () => {
		render(<AboutPage />);
		expect(screen.getByText("Who We Are")).toBeInTheDocument();
	});
});

describe("Contact Page", () => {
	it("Renders the route name on the page", () => {
		render(<ContactPage />);
		expect(screen.getByText("Reach Out")).toBeInTheDocument();
	});
});
