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
				"first-right-sync": {
					"0%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(540deg)",
					},
				},
				"second-right-sync": {
					"0%": {
						transform: "rotate(90deg)",
					},
					"100%": {
						transform: "rotate(-270deg)",
					},
				},
				"third-right-sync": {
					"0%": {
						transform: "rotate(270deg)",
					},
					"100%": {
						transform: "rotate(630deg)",
					},
				},
				"fourth-right-sync": {
					"0%": {
						transform: "rotate(45deg)",
					},
					"100%": {
						transform: "rotate(-315deg)",
					},
				},
				"fifth-right-sync": {
					"0%": {
						transform: "rotate(135deg)",
					},
					"100%": {
						transform: "rotate(495deg)",
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				first: "first 20s linear infinite",
				second: "second 40s linear infinite",
				third: "third 40s linear infinite",
				fourth: "fourth 60s linear infinite",
				fifth: "fifth 60s linear infinite",
				"first-right-sync": "first-right-sync 20s linear infinite",
				"second-right-sync": "second-right-sync 40s linear infinite",
				"third-right-sync": "third-right-sync 40s linear infinite",
				"fourth-right-sync": "fourth-right-sync 60s linear infinite",
				"fifth-right-sync": "fifth-right-sync 60s linear infinite",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
