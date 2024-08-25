import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/atoms/Input";

const borderRadiusClass = {
    "Rounded 0": "",
    "Rounded xs": "rounded-xs",
    "Rounded s": "rounded-s",
    "Rounded m": "rounded-m",
    "Rounded l": "rounded-l",
    "Rounded xl": "rounded-xl",
};

const meta: Meta<typeof Input> = {
    title: "atoms/Input",
    component: Input,
    argTypes: {
        type: {
            name: "Type",
            control: "select",
            options: [
                "text",
                "password",
                "email",
                "number",
                "tel",
                "url",
                "search",
                "date",
            ],
        },
        value: {
            name: "Value",
            control: "text",
        },
        placeholder: {
            name: "Placeholder",
            control: "text",
        },
        disabled: {
            name: "Disabled",
            control: "boolean",
        },
        readOnly: {
            name: "Read Only",
            control: "boolean",
        },
        required: {
            name: "Required",
            control: "boolean",
        },
        maxLength: {
            name: "Max Length",
            control: "number",
        },
        minLength: {
            name: "Min Length",
            control: "number",
        },
        pattern: {
            name: "Pattern",
            control: "text",
        },
        fullWidth: {
            name: "Full Width",
            control: "boolean",
        },
        borderRadius: {
            name: "Border Radius",
            control: "select",
            options: Object.keys(borderRadiusClass),
            mapping: borderRadiusClass,
        },
        inputClassName: {
            name: "Custom Class",
            control: "text",
        },
    },
    args: {
        type: "text",
        placeholder: "Enter text...",
        disabled: false,
        readOnly: false,
        required: false,
        fullWidth: false,
        borderRadius: "rounded-m",
        onChange: (e) => console.log(e.target.value),
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        value: "",
    },
};

export const Disabled: Story = {
    args: {
        value: "Disabled Input",
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        value: "Full Width Input",
        fullWidth: true,
    },
};

export const WithPlaceholder: Story = {
    args: {
        placeholder: "Custom Placeholder",
    },
};

export const WithPattern: Story = {
    args: {
        pattern: "\\d*",
        placeholder: "Numbers only",
    },
};
