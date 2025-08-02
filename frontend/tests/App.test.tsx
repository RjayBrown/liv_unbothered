import "@testing-library/jest-dom"; // extend matcher properties for test cases

import { describe, it, expect, test } from "vitest";
// import { render, screen } from "@testing-library/react";
// import { App } from "../src/App";

describe("Test App", () => {
	const sum = (a: number, b: number): number => a + b;

	test("adds 1 + 2 to equal 3", () => {
		expect(sum(1, 2)).toBe(3);
	});
});
