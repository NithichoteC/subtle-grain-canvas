
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
				// Left side flowing animations
				first: {
					"0%": {
						transform: "translate(0px, 0px)",
					},
					"25%": {
						transform: "translate(-30px, -40px)",
					},
					"50%": {
						transform: "translate(20px, -80px)",
					},
					"75%": {
						transform: "translate(-15px, -120px)",
					},
					"100%": {
						transform: "translate(0px, 0px)",
					},
				},
				second: {
					"0%": {
						transform: "translate(0px, -200px)",
					},
					"33%": {
						transform: "translate(40px, -120px)",
					},
					"66%": {
						transform: "translate(-25px, -40px)",
					},
					"100%": {
						transform: "translate(0px, -200px)",
					},
				},
				third: {
					"0%": {
						transform: "translate(-20px, -100px)",
					},
					"20%": {
						transform: "translate(35px, -60px)",
					},
					"40%": {
						transform: "translate(-10px, -20px)",
					},
					"60%": {
						transform: "translate(25px, -160px)",
					},
					"80%": {
						transform: "translate(-30px, -180px)",
					},
					"100%": {
						transform: "translate(-20px, -100px)",
					},
				},
				fourth: {
					"0%": {
						transform: "translate(10px, -150px)",
					},
					"40%": {
						transform: "translate(-35px, -90px)",
					},
					"80%": {
						transform: "translate(15px, -30px)",
					},
					"100%": {
						transform: "translate(10px, -150px)",
					},
				},
				fifth: {
					"0%": {
						transform: "translate(-15px, -60px)",
					},
					"30%": {
						transform: "translate(20px, -140px)",
					},
					"60%": {
						transform: "translate(-25px, -200px)",
					},
					"90%": {
						transform: "translate(30px, -20px)",
					},
					"100%": {
						transform: "translate(-15px, -60px)",
					},
				},
				// Right side flowing animations (asymmetric patterns)
				"first-right": {
					"0%": {
						transform: "translate(0px, -50px)",
					},
					"25%": {
						transform: "translate(35px, -20px)",
					},
					"50%": {
						transform: "translate(-20px, -100px)",
					},
					"75%": {
						transform: "translate(25px, -180px)",
					},
					"100%": {
						transform: "translate(0px, -50px)",
					},
				},
				"second-right": {
					"0%": {
						transform: "translate(25px, -180px)",
					},
					"35%": {
						transform: "translate(-30px, -100px)",
					},
					"70%": {
						transform: "translate(15px, -20px)",
					},
					"100%": {
						transform: "translate(25px, -180px)",
					},
				},
				"third-right": {
					"0%": {
						transform: "translate(20px, -120px)",
					},
					"25%": {
						transform: "translate(-25px, -80px)",
					},
					"50%": {
						transform: "translate(30px, -40px)",
					},
					"75%": {
						transform: "translate(-15px, -160px)",
					},
					"100%": {
						transform: "translate(20px, -120px)",
					},
				},
				"fourth-right": {
					"0%": {
						transform: "translate(-10px, -200px)",
					},
					"45%": {
						transform: "translate(25px, -60px)",
					},
					"90%": {
						transform: "translate(-20px, -10px)",
					},
					"100%": {
						transform: "translate(-10px, -200px)",
					},
				},
				"fifth-right": {
					"0%": {
						transform: "translate(15px, -30px)",
					},
					"33%": {
						transform: "translate(-20px, -110px)",
					},
					"66%": {
						transform: "translate(35px, -170px)",
					},
					"100%": {
						transform: "translate(15px, -30px)",
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Left side animations with varied timings
				first: "first 25s ease-in-out infinite",
				second: "second 35s ease-in-out infinite 3s",
				third: "third 30s ease-in-out infinite 8s", 
				fourth: "fourth 40s ease-in-out infinite 12s",
				fifth: "fifth 28s ease-in-out infinite 5s",
				// Right side animations with different timings for asymmetry
				"first-right": "first-right 22s ease-in-out infinite 2s",
				"second-right": "second-right 38s ease-in-out infinite 7s",
				"third-right": "third-right 32s ease-in-out infinite 1s",
				"fourth-right": "fourth-right 42s ease-in-out infinite 15s",
				"fifth-right": "fifth-right 26s ease-in-out infinite 10s",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
