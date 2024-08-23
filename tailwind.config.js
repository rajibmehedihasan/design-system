/** @type {import('tailwindcss').Config} */

import {
    colorVariables,
    spacingVariables,
    borderWidthVariables,
    borderRadiusVariables,
    fontSizeVariables,
    lineHeightVariables,
} from "./src/assets/styles/tailwind";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-family-sans)"],
                serif: ["var(--font-family-serif)"],
                mono: ["var(--font-family-mono)"],
            },
            fontSize: {
                ...fontSizeVariables,
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
            lineHeight: {
                ...lineHeightVariables,
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".text-html": {
                    fontSize: "var(--font-size-html)", // Custom font size using CSS variable
                },
                ".text-body": {
                    fontSize: "var(--font-size-body)", // Custom font size using CSS variable
                },
                ".leading-base": {
                    lineHeight: "var(--line-height-base)",
                },
            };

            addUtilities(newUtilities);
        },
    ],
};
