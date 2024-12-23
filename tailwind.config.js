/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			'dark-mode': '#101214',
  			base: {
  				white: '#FFFFFF',
  				black: '#000000',
  				modal: '#131416'
  			},
  			'dark-gray': {
  				'50': '#CCCCCC',
  				'60': '#A1A1A1',
  				'70': '#868686',
  				'80': '#6E6E6E',
  				'90': '#545454',
  				DEFAULT: '#CCCCCC'
  			},
  			primary: {
  				'10': '#262F04',
  				'20': '#4D5E08',
  				'30': '#738D0C',
  				'40': '#99BC10',
  				'50': '#BFEB14',
  				'60': '#D2F159',
  				'70': '#D9F372',
  				'80': '#E5F7A1',
  				'90': '#F2FBD0',
  				DEFAULT: '#BFEB14'
  			},
  			gray: {
  				'10': '#17191C',
  				'20': '#222222',
  				'30': '#454B54',
  				'40': '#5C6470',
  				'50': '#737D8C',
  				'60': '#8F97A3',
  				'70': '#ABB1BA',
  				'80': '#C7CBD1',
  				'90': '#E3E5E8',
  				DEFAULT: '#737D8C'
  			},
  			success: {
  				'10': '#092A14',
  				'20': '#125428',
  				'30': '#1C7D3D',
  				'40': '#25A751',
  				'50': '#41D573',
  				'60': '#58DA84',
  				'70': '#82E3A3',
  				'80': '#ABEDC1',
  				'90': '#D5F6E0',
  				DEFAULT: '#41D573'
  			},
  			warning: {
  				'10': '#320103',
  				'20': '#640207',
  				'30': '#96030A',
  				'40': '#C7050E',
  				'50': '#F90611',
  				'60': '#FB4F57',
  				'70': '#FC6970',
  				'80': '#FD9BA0',
  				'90': '#FECDCF',
  				DEFAULT: '#F90611'
  			},
  			stroke: {
  				'10': '#1A1A1A',
  				'20': '#333333',
  				'30': '#4D4D4D',
  				'40': '#666666',
  				'50': '#7F7F7F',
  				'60': '#999999',
  				'70': '#B3B3B3',
  				'80': '#D9D9D9',
  				'90': '#FFFFFF',
  				DEFAULT: '#7F7F7F'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
