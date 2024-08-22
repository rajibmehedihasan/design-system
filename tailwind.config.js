/** @type {import('tailwindcss').Config} */

import {
    colorVariables,
    spacingVariables,
    borderWidthVariables,
    borderRadiusVariables,
} from "./src/assets/styles/tailwind";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            base: "15px",
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-family-sans)"],
                serif: ["var(--font-family-serif)"],
                mono: ["var(--font-family-mono)"],
            },
            colors: {
                ...colorVariables,
            },
            textColor: {
                ...colorVariables,
            },
            spacing: {
                base: "var(--spacing-base)",
            },
            borderWidth: {
                ...borderWidthVariables,
            },
            borderRadius: {
                ...borderRadiusVariables,
            },
        },
    },
    plugins: [],
};
