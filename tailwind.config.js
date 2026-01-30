/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "rgb(var(--border))",
                input: "rgb(var(--input))",
                ring: "rgb(var(--accent))",
                background: "rgb(var(--background-start-rgb))",
                foreground: "rgb(var(--foreground-rgb))",
                primary: {
                    DEFAULT: "rgb(var(--accent))",
                    foreground: "rgb(var(--accent-foreground))",
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
};

