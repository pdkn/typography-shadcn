/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ['IBM Plex Serif', 'serif'],
        sans: ['PT Sans', 'sans-serif'],
        display: ['Noto Sans Display', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        charcoal: "hsl(var(--color-charcoal-hsl) / <alpha-value>)",
        grey: "hsl(var(--color-grey-hsl) / <alpha-value>)",
        white: "hsl(var(--color-white-hsl) / <alpha-value>)",
        "cream": "hsl(var(--color-cream-hsl) / <alpha-value>)",
        "green": "hsl(var(--color-green-hsl) / <alpha-value>)",
        "blue": "hsl(var(--color-blue-hsl) / <alpha-value>)",
        "green-bg": "hsl(var(--color-green-bg-hsl) / <alpha-value>)",
        "blue-bg": "hsl(var(--color-blue-bg-hsl) / <alpha-value>)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      animationDuration: {
				"660": "0.66s",
			},
    },
  },
  safelist: [
    "animate-in",
    "running",
    // "font-sans",
    // "bg-blue-bg",
    // "bg-green-bg",
    // "text-orange-700",

  ],
  plugins: [require("tailwindcss-animate")],
}

