module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'nav-bg': 'url(/offset-315-crop.png)',
				'offset-315': 'url(/offset-315.jpg)',
				'grunge-overlay': 'url(/sm-md-grunge-black-66.svg)',
				'blast-overlay': 'url(/blast-flame-black.svg)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
