import type { Preview } from "@storybook/react";
import "../src/assets/styles/globals.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        html: {
            highlighter: {
                showLineNumbers: true, // default: false
                wrapLines: false, // default: true
            },
        },
    },
};

export default preview;
