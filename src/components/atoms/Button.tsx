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
    onClick?: () => MouseEventHandler;

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
    // fullWidth,
}: ButtonProps) => {
    return (
        <button
            className={`bg-primary-300 text-white-100 py-2.5 px-5 rounded-m`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText || "Button"}
        </button>
    );
};

export default Button;
