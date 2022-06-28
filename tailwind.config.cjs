/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				barlow: ['Barlow'],
				'roboto-mono': ['Roboto Mono']
			}
		}
	},
	darkMode: ['class', '[data-mode="dark"]'],
	plugins: [require('@tailwindcss/typography')]
};
