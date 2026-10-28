/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--foreground))",
        },
        surface: "hsl(var(--surface))",
        muted: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Anuphan"', "Georgia", "serif"],
        sans: ['"Inter"', '"Anuphan"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
