/** @type {import('tailwindcss').Config} */
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
      },
      keyframes: {
        "trail": {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
      },
      animation: {
        "trail": "trail var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
};
