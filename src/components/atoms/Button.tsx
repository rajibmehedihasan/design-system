import { MouseEventHandler } from "react";

type ButtonProps = {
    /**
     * Specifies the type of button (`submit`, `reset`, `button`).
     * Defaults to `"button"`.
     */
    type?: "submit" | "reset" | "button";

    /**
     * Disables the button if set to `true`.
     * Defaults to `false`.
     */
    disabled?: boolean;

    /**
     * The text to be displayed on the button.
     * If not provided, it defaults to `"Button"`.
     */
    buttonText?: string;

    /**
     * Determines whether the button should take up the full width of its container.
     * Defaults to `false`.
     */
    fullWidth?: boolean;

    /**
     * The SVG icon to be displayed within the button.
     * Accepts a string containing SVG code.
     */
    buttonIcon?: string;

    /**
     * The style variant of the button.
     * This affects the button's appearance.
     */
    buttonVariant?: "primary" | "tertiary" | "success" | "warning" | "danger";

    /**
     * Whether the button should have an outlined style.
     * If set to `true`, the button will use the `outlined` variant style.
     */
    outlined?: boolean;

    /**
     * The border radius class to be applied to the button.
     * This should be a Tailwind CSS class (e.g., `"rounded-[3px]"`).
     */
    borderRadius?: string;

    /**
     * Optional click handler.
     * The function to be executed when the button is clicked.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
    buttonVariant = "primary",
    outlined = false,
    type = "button",
    onClick,
    disabled = false,
    buttonText = "Button",
    buttonIcon,
    borderRadius,
    fullWidth = false,
}: ButtonProps) => {
    const variantClass = outlined
        ? {
              primary:
                  "border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white-100 active:bg-primary-200 active:text-white-100 focus:bg-primary-200 focus:text-white-100 border-m",
              tertiary:
                  "border-grey-300 text-grey-300 hover:bg-grey-300 hover:text-white-100 active:bg-grey-200 active:text-white-100 focus:bg-grey-200 focus:text-white-100 border-m",
              success:
                  "border-green-500 text-green-500 hover:bg-green-500 hover:text-white-100 active:bg-green-400 active:text-white-100 focus:bg-green-400 focus:text-white-100 border-m",
              warning:
                  "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black-100 active:bg-yellow-400 active:text-black-100 focus:bg-yellow-400 focus:text-black-100 border-m",
              danger: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white-100 active:bg-red-400 active:text-white-100 focus:bg-red-400 focus:text-white-100 border-m",
          }[buttonVariant]
        : {
              primary:
                  "bg-primary-300 text-white-100 hover:bg-primary-400 active:bg-primary-200 focus:bg-primary-200",
              tertiary:
                  "bg-grey-500 text-black-100 hover:bg-primary-700 active:bg-primary-600 focus:bg-primary-600",
              success:
                  "bg-green-500 text-white-100 hover:bg-green-600 active:bg-green-400 focus:bg-green-400",
              warning:
                  "bg-yellow-500 text-black-100 hover:bg-yellow-600 active:bg-yellow-400 focus:bg-yellow-400",
              danger: "bg-red-500 text-white-100 hover:bg-red-600 active:bg-red-400 focus:bg-red-400",
          }[buttonVariant];

    return (
        <button
            className={`${variantClass} ${borderRadius} ${
                fullWidth ? "w-full" : ""
            } py-2 px-5 font-medium transition-colors disabled:bg-black-600 disabled:text-black-400 flex items-center justify-center`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonIcon && (
                <span
                    className="mr-2"
                    dangerouslySetInnerHTML={{ __html: buttonIcon }}
                />
            )}
            {buttonText}
        </button>
    );
};

export default Button;
