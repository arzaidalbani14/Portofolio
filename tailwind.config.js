/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#001A6E', // Deep Blue
                primary: '#E1FFBB',   // Light Green (Main Text)
                secondary: '#074799', // Medium Blue
                accent: '#009990',    // Teal
                light: '#E1FFBB',     // Alias for consistency with old code if needed, but mapped to main text color
                white: '#ffffff',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
