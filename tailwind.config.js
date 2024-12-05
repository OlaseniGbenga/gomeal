/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/shadcn/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        pink: "hsl(var(--pink))",
        ash: "hsl(var(--ash))",
        black: "hsl(var(--black))",
        white: "hsl(var(--white))",
        dark: {
          white: "hsl(var(--dark-white))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "hsl(var(--secondary-light))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, hsl(var(--linear-start)), hsl(var(--linear-end)))",
        "gradient-warning":
          "linear-gradient(to right, hsl(22, 87%, 55%), hsl(91, 51%, 48%))",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      screens: {
        vsm: { max: "350px" },
        sm: { max: "480px" },
        md: { max: "767px" },
        lg: { max: "800px" },
        xl: { max: "1024px" },
        "1xl": { max: "1120px" },
        "2xl": { max: "1280px" },
        "3xl": { max: "1366px" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
