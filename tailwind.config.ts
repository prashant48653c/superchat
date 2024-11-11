import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        second: "var(--secondary)",

        lightblue: '#f0f8ff',   // Alice Blue
        lightgoldenrod: '#fafad2', // Light Goldenrod Yellow
        lightcyan: '#e0ffff',    // Light Cyan
        whitesmoke: '#f5f5f5',
      },
      borderColor: {
        lightblue: '#ebac72',         // Alice Blue Border
        lightgoldenrod: '#ddc1d2',    // Light Goldenrod Yellow Border
        lightcyan: '#c2e8ff',         // Light Cyan Border
        whitesmoke: '#dcf9de',        // White Smoke Border
      },
    },
  },
  plugins: [],
} satisfies Config;
