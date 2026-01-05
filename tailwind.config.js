/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050c20', // Deep Blue
                primary: '#defdb5',   // Light Green (Main Text)
                secondary: '#074799', // Medium Blue
                accent: '#d8cd37',    // Gold
                light: '#E1FFBB',     // Alias
                white: '#e7e7e7',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
