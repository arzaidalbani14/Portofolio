/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050c20ff', // Deep Blue
                primary: '#defdb5ff',   // Light Green (Main Text)
                secondary: '#074799', // Medium Blue
                accent: '#d8cd37ff',    // Teal
                light: '#E1FFBB',     // Alias for consistency with old code if needed, but mapped to main text color
                white: '#e7e7e7ff',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
