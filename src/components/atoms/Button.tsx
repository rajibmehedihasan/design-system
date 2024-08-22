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
    buttonText?: string;
    fullWidth?: boolean;
    buttonIcon?: HTMLAllCollection;
    buttonType?: string;
    borderRadius?: "S" | "M" | "L";
};

const Button = ({
    buttonType,
    type = "button",
    onClick,
    disabled = false,
    buttonText,
    buttonIcon,
    borderRadius,
    fullWidth,
}: ButtonProps) => {
    return (
        <button
            className={`${buttonType === "outlined" ? "border-primary-300 border-m text-black-100 hover:bg-primary-700 active:bg-primary-600 focus:bg-primary-600 disabled:border-black-500" : "bg-primary-300 text-white-100 hover:bg-primary-400 active:bg-primary-200 focus:bg-primary-200"}${
                borderRadius === "S" ? " rounded" : " rounded-m"
            }${fullWidth ? " w-full" : ""} py-2 px-5 font-medium transition-colors disabled:bg-black-600 disabled:text-black-400`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText || "Button"}
        </button>
    );
};

export default Button;
