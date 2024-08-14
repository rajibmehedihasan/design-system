/** @type {import('tailwindcss').Config} */

const colorVariables = require("./src/assets/styles/tailwind/colors").default;

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ...colorVariables,
            },
            textColor: {
                ...colorVariables,
            },
            spacing: {
                base: "var(--spacing-base)",
            },
            fontSize: {
                base: "var(--font-size-base)",
            },
        },
    },
    plugins: [],
};
