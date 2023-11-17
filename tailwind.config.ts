import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue: "#6C63FF",
      secondary: "#E5E8F0",
      writing: "#2B2B2B",
      dark1: "#121212",
      transparent: "transparent",
      gray: "#374151",
      gray50: "#f9fafb",
      gray300: "#d1d5db",
    },
    fontFamily: {
      shareTech: "'Share Tech Mono', monospace",
      firaSans: "'Fira Sans', sans-serif",
    },
  },
  plugins: [],
};
export default config;
