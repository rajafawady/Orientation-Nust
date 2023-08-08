/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'pale-pink': '#F9D8D7',
				'ultra-red': '#F26E83',
				'tyrian-purple': '#720240',
				'prussian-blue': '#112E49',
				'lapis-lazuli': '#12629E',
			},
			fontFamily: {
				montserrat: ['Montserrat'],
				mont: ['Montserrat-Light'],
				vogue: ['Vogue'],
				brittany: ['Brittany-Signature'],
				poppins: ['Poppins', 'Noto Sans Regular', 'Helvetica Neue', 'sans-serif', 'Arial'],
				latoRegular: ['Lato-Regular'],
				latoBold: ['Lato-Bold'],
				latoLight: ['Lato-Light'],
				aspectRange: ['Aspect-Range'],
				goodnightLondonSans: ['Goodnight-London-Sans'],
				goodnightLondonScript: ['Goodnight-London-Script'],
			},
			keyframes: {
				expand: {
					'0%': {
						transform: 'scale(1.1)',
					},
					'50%': {
						transform: 'scale(0.98)',
					},
					'100%': {
						transform: 'scale(1.1)',
					},
				},
			},
			animation: {
				expand: 'expand 1s ease-in-out infinite',
			},
			screens: {
				xs: '400px',
			},
		},
	},
	daisyui: {
		themes: ['light'],
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('daisyui'),
	],
};
