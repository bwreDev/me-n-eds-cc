module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'offset-315': 'url(/images/offset-315.jpg)',
				'grunge-overlay': 'url(/svg/sm-md-grunge-black-66.svg)',
				'blast-overlay': 'url(/svg/blast-flame-black.svg)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
