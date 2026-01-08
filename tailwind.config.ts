import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				black: '#000000',
  				navy: '#001F3F',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			accent: {
  				white: '#FFFFFF',
  				'metallic-gray': '#A9A9A9',
  				olive: '#556B2F',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			heading: [
  				'Futura',
  				'Helvetica Neue',
  				'Arial',
  				'sans-serif'
  			],
  			body: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.8s ease-in-out',
  			'slide-up': 'slideUp 0.8s ease-out',
  			distort: 'distort 0.3s ease-in-out',
  			grain: 'grain 8s steps(10) infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(30px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			distort: {
  				'0%, 100%': {
  					transform: 'scale(1) skew(0deg)'
  				},
  				'50%': {
  					transform: 'scale(1.02) skew(1deg)'
  				}
  			},
  			grain: {
  				'0%, 100%': {
  					transform: 'translate(0, 0)'
  				},
  				'10%': {
  					transform: 'translate(-5%, -5%)'
  				},
  				'20%': {
  					transform: 'translate(-10%, 5%)'
  				},
  				'30%': {
  					transform: 'translate(5%, -10%)'
  				},
  				'40%': {
  					transform: 'translate(-5%, 15%)'
  				},
  				'50%': {
  					transform: 'translate(-10%, 5%)'
  				},
  				'60%': {
  					transform: 'translate(15%, 0%)'
  				},
  				'70%': {
  					transform: 'translate(0%, 15%)'
  				},
  				'80%': {
  					transform: 'translate(-15%, 10%)'
  				},
  				'90%': {
  					transform: 'translate(10%, 5%)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config

