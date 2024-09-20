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
        "darkbg": "#181818",
        "darktext": "#ffffff",
        "lightnavbg": "#BCB8B1",
        "darknavbg": "#3d3d3d",
        "darkforminput": "#212121",
      },
    },
  },
  plugins: [],
};
