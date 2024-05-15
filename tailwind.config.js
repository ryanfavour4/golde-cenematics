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
        primary: "#525AA0",
        secondary: "#EDEFFF",
        complementary: "null",
        dark: "#202229",
        light: "#FAFAFA"
      },
      translate: ['group-hover', 'hover']
    }
  },
  plugins: [],
}
