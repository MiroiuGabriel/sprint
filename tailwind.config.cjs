/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				button: {
					primary: {
						default: '#4C1D95',
						hover: '#6312E2',
						pressed: '#350088',
						disabled: '#948D9E',
					},
					secondary: {
						default: '#F2EAFF',
						hover: '#E3D1FF',
						pressed: '#CEAEFF',
						disabled: '#E1E1E1',
					},
					disabled: '#e1e1e199',
				},
			},
			boxShadow: {
				button: '0px 1px 2px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
