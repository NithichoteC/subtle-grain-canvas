
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
						transform: "rotate(0deg) scale(1)",
					},
					"33%": {
						transform: "rotate(120deg) scale(1.1)",
					},
					"66%": {
						transform: "rotate(240deg) scale(0.9)",
					},
					"100%": {
						transform: "rotate(360deg) scale(1)",
					},
				},
				second: {
					"0%": {
						transform: "rotate(0deg) translateX(0)",
					},
					"25%": {
						transform: "rotate(-90deg) translateX(20px)",
					},
					"50%": {
						transform: "rotate(-180deg) translateX(0)",
					},
					"75%": {
						transform: "rotate(-270deg) translateX(-20px)",
					},
					"100%": {
						transform: "rotate(-360deg) translateX(0)",
					},
				},
				third: {
					"0%": {
						transform: "rotate(0deg) translateY(0)",
					},
					"20%": {
						transform: "rotate(72deg) translateY(-15px)",
					},
					"40%": {
						transform: "rotate(144deg) translateY(10px)",
					},
					"60%": {
						transform: "rotate(216deg) translateY(-5px)",
					},
					"80%": {
						transform: "rotate(288deg) translateY(15px)",
					},
					"100%": {
						transform: "rotate(360deg) translateY(0)",
					},
				},
				fourth: {
					"0%": {
						transform: "rotate(0deg) scale(1) skew(0deg)",
					},
					"25%": {
						transform: "rotate(-90deg) scale(1.2) skew(5deg)",
					},
					"50%": {
						transform: "rotate(-180deg) scale(0.8) skew(0deg)",
					},
					"75%": {
						transform: "rotate(-270deg) scale(1.1) skew(-5deg)",
					},
					"100%": {
						transform: "rotate(-360deg) scale(1) skew(0deg)",
					},
				},
				fifth: {
					"0%": {
						transform: "rotate(0deg) translateX(0) translateY(0)",
					},
					"20%": {
						transform: "rotate(72deg) translateX(30px) translateY(-20px)",
					},
					"40%": {
						transform: "rotate(144deg) translateX(-10px) translateY(25px)",
					},
					"60%": {
						transform: "rotate(216deg) translateX(-25px) translateY(-15px)",
					},
					"80%": {
						transform: "rotate(288deg) translateX(15px) translateY(30px)",
					},
					"100%": {
						transform: "rotate(360deg) translateX(0) translateY(0)",
					},
				},
				// New organic animations for left side
				'organic-breathe': {
					"0%": {
						transform: "scale(1) rotate(0deg)",
						filter: "hue-rotate(0deg)"
					},
					"25%": {
						transform: "scale(1.02) rotate(1deg)",
						filter: "hue-rotate(5deg)"
					},
					"50%": {
						transform: "scale(1.05) rotate(0deg)",
						filter: "hue-rotate(10deg)"
					},
					"75%": {
						transform: "scale(1.02) rotate(-1deg)",
						filter: "hue-rotate(5deg)"
					},
					"100%": {
						transform: "scale(1) rotate(0deg)",
						filter: "hue-rotate(0deg)"
					}
				},
				'organic-flow': {
					"0%": {
						transform: "translateX(0) translateY(0) rotate(0deg)",
						opacity: "0.25"
					},
					"33%": {
						transform: "translateX(10px) translateY(-15px) rotate(3deg)",
						opacity: "0.35"
					},
					"66%": {
						transform: "translateX(-5px) translateY(10px) rotate(-2deg)",
						opacity: "0.30"
					},
					"100%": {
						transform: "translateX(0) translateY(0) rotate(0deg)",
						opacity: "0.25"
					}
				},
				'wave-flow': {
					"0%": {
						transform: "translateX(0) skewX(0deg)",
						backgroundPosition: "0% 0%"
					},
					"50%": {
						transform: "translateX(5px) skewX(2deg)",
						backgroundPosition: "100% 50%"
					},
					"100%": {
						transform: "translateX(0) skewX(0deg)",
						backgroundPosition: "200% 100%"
					}
				},
				'color-breathe': {
					"0%": {
						filter: "hue-rotate(0deg) brightness(1)",
						transform: "scale(1)"
					},
					"50%": {
						filter: "hue-rotate(15deg) brightness(1.1)",
						transform: "scale(1.1)"
					},
					"100%": {
						filter: "hue-rotate(0deg) brightness(1)",
						transform: "scale(1)"
					}
				},
				// New tech animations for right side
				'tech-pulse': {
					"0%": {
						transform: "scale(1)",
						filter: "contrast(1) brightness(1)"
					},
					"25%": {
						transform: "scale(0.98)",
						filter: "contrast(1.1) brightness(0.95)"
					},
					"50%": {
						transform: "scale(1.02)",
						filter: "contrast(1.2) brightness(1.05)"
					},
					"75%": {
						transform: "scale(0.99)",
						filter: "contrast(1.1) brightness(0.98)"
					},
					"100%": {
						transform: "scale(1)",
						filter: "contrast(1) brightness(1)"
					}
				},
				'tech-grid': {
					"0%": {
						transform: "translateX(0) translateY(0)",
						backgroundPosition: "0% 0%"
					},
					"25%": {
						transform: "translateX(2px) translateY(-1px)",
						backgroundPosition: "25% 25%"
					},
					"50%": {
						transform: "translateX(-1px) translateY(2px)",
						backgroundPosition: "50% 50%"
					},
					"75%": {
						transform: "translateX(1px) translateY(-1px)",
						backgroundPosition: "75% 75%"
					},
					"100%": {
						transform: "translateX(0) translateY(0)",
						backgroundPosition: "100% 100%"
					}
				},
				'angular-sweep': {
					"0%": {
						transform: "rotate(0deg) scaleX(1)",
						backgroundPosition: "0% 0%"
					},
					"50%": {
						transform: "rotate(1deg) scaleX(1.01)",
						backgroundPosition: "100% 50%"
					},
					"100%": {
						transform: "rotate(0deg) scaleX(1)",
						backgroundPosition: "200% 100%"
					}
				},
				'scan-lines': {
					"0%": {
						transform: "translateY(0)",
						opacity: "0.15"
					},
					"50%": {
						transform: "translateY(-2px)",
						opacity: "0.25"
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "0.15"
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				first: "first 25s ease-in-out infinite",
				second: "second 35s ease-in-out infinite",
				third: "third 30s ease-in-out infinite",
				fourth: "fourth 45s ease-in-out infinite",
				fifth: "fifth 40s ease-in-out infinite",
				// New organic animations (left side)
				'organic-breathe': 'organic-breathe 8s ease-in-out infinite',
				'organic-flow': 'organic-flow 12s ease-in-out infinite',
				'wave-flow': 'wave-flow 15s linear infinite',
				'color-breathe': 'color-breathe 10s ease-in-out infinite',
				// New tech animations (right side) 
				'tech-pulse': 'tech-pulse 6s ease-in-out infinite',
				'tech-grid': 'tech-grid 18s linear infinite',
				'angular-sweep': 'angular-sweep 14s linear infinite',
				'scan-lines': 'scan-lines 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
