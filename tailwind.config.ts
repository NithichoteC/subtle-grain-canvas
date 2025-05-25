
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
			fontFamily: {
				roboto: ['"Roboto Flex"', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				},
				dark: {
					DEFAULT: '#171717',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
				// Standard speed animations
				first: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				second: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(-360deg)",
					},
				},
				third: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				fourth: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(-360deg)",
					},
				},
				fifth: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				// New side block animations
				'breathe-left': {
					"0%, 100%": { 
						opacity: "0.3", 
						transform: "scale(1) translateX(0)" 
					},
					"50%": { 
						opacity: "0.6", 
						transform: "scale(1.05) translateX(5px)" 
					}
				},
				'breathe-right': {
					"0%, 100%": { 
						opacity: "0.3", 
						transform: "scale(1) translateX(0)" 
					},
					"50%": { 
						opacity: "0.6", 
						transform: "scale(1.05) translateX(-5px)" 
					}
				},
				'cross-flow': {
					"0%, 100%": { opacity: "0.2" },
					"25%": { opacity: "0.4" },
					"50%": { opacity: "0.3" },
					"75%": { opacity: "0.5" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Standard animations
				first: "first 20s linear infinite",
				second: "second 40s linear infinite",
				third: "third 40s linear infinite",
				fourth: "fourth 60s linear infinite",
				fifth: "fifth 60s linear infinite",
				// Slow animations (for left side)
				"first-slow": "first 32s linear infinite",
				"second-slow": "second 62s linear infinite",
				"third-slow": "third 62s linear infinite",
				"fourth-slow": "fourth 92s linear infinite",
				"fifth-slow": "fifth 92s linear infinite",
				// Fast animations (for right side)
				"first-fast": "first 12s linear infinite",
				"second-fast": "second 28s linear infinite",
				"third-fast": "third 28s linear infinite",
				"fourth-fast": "fourth 38s linear infinite",
				"fifth-fast": "fifth 38s linear infinite",
				// New side block animations
				'breathe-left': 'breathe-left 22s ease-in-out infinite 3s',
				'breathe-right': 'breathe-right 18s ease-in-out infinite',
				'cross-flow': 'cross-flow 25s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
