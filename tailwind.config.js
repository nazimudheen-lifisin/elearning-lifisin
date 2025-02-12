/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'message-icon': "url(./src/assets/svg/message.svg)"
			}
		}
	},
	plugins: [],
}
