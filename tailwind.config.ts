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
				},
				// New coordinated animations
				'breathe-left-coord': {
					"0%, 100%": { 
						opacity: "0.25", 
						transform: "scale(0.98) translateX(-2px)" 
					},
					"33%": { 
						opacity: "0.5", 
						transform: "scale(1.02) translateX(3px)" 
					},
					"66%": { 
						opacity: "0.4", 
						transform: "scale(1.0) translateX(1px)" 
					}
				},
				'breathe-right-coord': {
					"0%, 100%": { 
						opacity: "0.4", 
						transform: "scale(1.0) translateX(1px)" 
					},
					"33%": { 
						opacity: "0.25", 
						transform: "scale(0.98) translateX(2px)" 
					},
					"66%": { 
						opacity: "0.5", 
						transform: "scale(1.02) translateX(-3px)" 
					}
				},
				'cross-flow-enhanced': {
					"0%": { opacity: "0.15" },
					"20%": { opacity: "0.35" },
					"40%": { opacity: "0.25" },
					"60%": { opacity: "0.45" },
					"80%": { opacity: "0.3" },
					"100%": { opacity: "0.15" }
				},
				'flow-pulse': {
					"0%, 100%": { 
						opacity: "0.1", 
						transform: "scale(1) rotate(0deg)" 
					},
					"25%": { 
						opacity: "0.2", 
						transform: "scale(1.02) rotate(0.5deg)" 
					},
					"50%": { 
						opacity: "0.15", 
						transform: "scale(0.98) rotate(-0.5deg)" 
					},
					"75%": { 
						opacity: "0.25", 
						transform: "scale(1.01) rotate(0.3deg)" 
					}
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
				'cross-flow': 'cross-flow 25s ease-in-out infinite',
				// New coordinated animations
				'breathe-left-coord': 'breathe-left-coord 28s ease-in-out infinite 2s',
				'breathe-right-coord': 'breathe-right-coord 24s ease-in-out infinite',
				'cross-flow-enhanced': 'cross-flow-enhanced 32s ease-in-out infinite 1s',
				'flow-pulse': 'flow-pulse 35s ease-in-out infinite 0.5s'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
