const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				launch: {
					'0%': { transform: 'scale(95%)', opacity: '0%' },
					'100%': { transform: 'scale(100%)', opacity: '100%' }
				},
				brighten: {
					'0%': { opacity: '0%' },
					'100%': { opacity: '100%' }
				},
				flash: {
					'0%': { opacity: '0%' },
					'25%': { opacity: '100%' },
					'90%': { opacity: '100%' },
					'100%': { opacity: '0%' }
				},
				wipe: {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0%)' }
				},
				homebutton: {
					'0%': {
						backgroundColor: 'rgb(226, 232, 240)',
						textColor: 'rgb(0, 0, 0)',
						padding: '0px'
					},
					'100%': {
						backgroundColor: 'rgb(30, 41, 59)',
						textColor: 'rgb(255, 255, 255)',
						padding: '5px'
					}
				}
			},
			animation: {
				launch: 'launch 0.2s ease-in',
				wipe: 'wipe .2s ease-out',
				flash: 'flash 2s ease-in-out',
				brighten: 'brighten 0.6s ease-in',
				homebutton: 'homebutton 1s ease-in-out'
			},
			fontFamily: {
				'circular': ['brand-medium'],
				'circularbold': ['brand-bold'],
			},
		}
	},

	plugins: []
};

module.exports = config;
