/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				home: "url('./assets/img.png')",
				info: "url('./assets/img.png')",
				cta: "url('./assets/img.png')",
			},
		},
	},
	plugins: [],
};
