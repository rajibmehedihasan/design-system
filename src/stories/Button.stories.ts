import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/atoms/Button";
import { borderRadiusClass } from "../utils";

const meta: Meta<typeof Button> = {
    title: "atoms/Button",
    component: Button,
    parameters: {},
    tags: ["autodocs"],
    argTypes: {
        buttonVariant: {
            name: "Button Variant",
            description: "Choose which type of button you want to use",
            options: ["primary", "tertiary", "success", "warning", "danger"],
            control: "select",
        },
        outlined: {
            name: "Outlined",
            description: "Applies an outlined style to the button",
            control: "boolean",
        },
        buttonText: {
            name: "Button Text",
            description: "Text to display on the button",
            control: "text",
        },
        buttonIcon: {
            name: "Button Icon",
            description: "SVG icon to display within the button",
            control: "text", // Storybook doesn't support SVGs directly, so this will just be an input for the icon's code.
        },
        disabled: {
            name: "Disabled",
            description: "Disables the button if true",
            control: "boolean",
        },
        fullWidth: {
            name: "Full Width",
            description: "Sets the button to take full width",
            control: "boolean",
        },
        borderRadius: {
            name: "Border Radius",
            description: "Choose the border radius size",
            control: "select",
            options: Object.keys(borderRadiusClass),
            mapping: borderRadiusClass,
        },
    },
    args: {
        type: "button",
        onClick: fn(),
        disabled: false,
        fullWidth: false,
        borderRadius: "rounded-m",
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        buttonVariant: "primary",
        buttonText: "Primary Button",
    },
};

export const Outlined: Story = {
    args: {
        buttonVariant: "primary",
        buttonText: "Outlined Primary Button",
        outlined: true,
    },
};

export const Tertiary: Story = {
    args: {
        buttonVariant: "tertiary",
        buttonText: "Tertiary Button",
    },
};

export const Success: Story = {
    args: {
        buttonVariant: "success",
        buttonText: "Success Button",
    },
};

export const Warning: Story = {
    args: {
        buttonVariant: "warning",
        buttonText: "Warning Button",
    },
};

export const Danger: Story = {
    args: {
        buttonVariant: "danger",
        buttonText: "Danger Button",
    },
};

export const WithIcon: Story = {
    args: {
        buttonVariant: "primary",
        buttonText: "Save",
        buttonIcon: `<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.41083 4.41073C4.73626 4.0853 5.2639 4.0853 5.58934 4.41073L10.0001 8.82148L14.4108 4.41073C14.7363 4.0853 15.2639 4.0853 15.5893 4.41073C15.9148 4.73617 15.9148 5.26381 15.5893 5.58925L11.1786 9.99999L15.5893 14.4107C15.9148 14.7362 15.9148 15.2638 15.5893 15.5892C15.2639 15.9147 14.7363 15.9147 14.4108 15.5892L10.0001 11.1785L5.58934 15.5892C5.2639 15.9147 4.73626 15.9147 4.41083 15.5892C4.08539 15.2638 4.08539 14.7362 4.41083 14.4107L8.82157 9.99999L4.41083 5.58925C4.08539 5.26381 4.08539 4.73617 4.41083 4.41073Z"
                fill="white"
            />
        </svg>`,
    },
};
