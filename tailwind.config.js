/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: "500px",
				},
			},
			colors: {
				primary: "#1E2128",
				lightRed: "#E27469",
				darkRed: "#D74634",
			},
			textColor: {
				link: "#007AED",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			gridTemplateColumns: {
				25: "repeat(25, minmax(0, 1fr))",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
