import { nextui } from "@nextui-org/react";
import tailwindScrollbar from "tailwind-scrollbar";

const config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"light-gray": "#fafafa",
				"dark-gray": "#7a7a7a",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				"default-theme": {
					colors: {
						primary: {
							50: "#e3f3ff",
							100: "#bed9f4",
							200: "#97c0e8",
							300: "#6fa6de",
							400: "#488dd2",
							500: "#3074ba",
							600: "#235a91",
							700: "#174068",
							800: "#092741",
							900: "#000e1b",

							DEFAULT: "#1b4b7a",
						},

						secondary: {
							50: "#fbf4e6",
							100: "#e8dec8",
							200: "#d6c8a8",
							300: "#c6b287",
							400: "#b59c66",
							500: "#9b824c",
							600: "#79653a",
							700: "#574829",
							800: "#352b16",
							900: "#150e00",

							DEFAULT: "#d7c9aa",
						},
					},
				},
			},
		}),
		tailwindScrollbar,
	],
};
export default config;
