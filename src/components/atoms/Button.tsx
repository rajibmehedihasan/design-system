import { MouseEventHandler } from "react";

type ButtonProps = {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => MouseEventHandler<HTMLButtonElement>;

    type?: "submit" | "reset" | "button";

    disabled?: boolean;
    buttonText?: String;
    fullWidth?: boolean;
};

const Button = ({
    type = "button",
    onClick,
    disabled = false,
    buttonText,
    fullWidth,
}: ButtonProps) => {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                fullWidth ? "w-full" : ""
            }`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText || "Button"}
        </button>
    );
};

export default Button;
