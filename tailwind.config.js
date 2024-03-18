/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('./assets/MARCSONIC.svg')",
        'signup-image': "url('./assets/signup_image.png')",
        'signin-image': "url('./assests/signin_image.svg')",
      }
    },
  },
  plugins: [],
}

