import "@testing-library/jest-dom"; // extend matcher properties for test cases

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Products } from "../src/pages/Products";
import { About } from "../src/pages/About";
import { Contact } from "../src/pages/Contact";

describe("Products Page", () => {
	it("Renders the route name on the page", () => {
		render(<Products />);
		expect(screen.getByText("Products")).toBeInTheDocument();
	});
});

describe("About Page", () => {
	it("Renders the route name on the page", () => {
		render(<About />);
		expect(screen.getByText("About")).toBeInTheDocument();
	});
});

describe("Contact Page", () => {
	it("Renders the route name on the page", () => {
		render(<Contact />);
		expect(screen.getByText("Contact")).toBeInTheDocument();
	});
});
