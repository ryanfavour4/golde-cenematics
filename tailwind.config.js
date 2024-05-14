/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CC7F2E",
        secondary: "null",
        complementary: "null",
        dark: "#121212",
        light: "#FAFAFA"
      },
      translate: ['group-hover', 'hover']
    }
  },
  plugins: [],
}
