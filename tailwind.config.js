/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "darkBg": "#181818",
        "darkText": "#ffffff",
        "lightNavBg": "#BCB8B1",
        "darkNavBg": "#3d3d3d",
        "darkFormInput": "#212121",
      },
    },
  },
  plugins: [],
};
