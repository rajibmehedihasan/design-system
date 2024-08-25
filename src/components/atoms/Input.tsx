import { ChangeEventHandler, FocusEventHandler } from "react";

type InputProps = {
    type?:
        | "text"
        | "password"
        | "email"
        | "number"
        | "tel"
        | "url"
        | "search"
        | "date";
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    inputClassName?: string;
    fullWidth?: boolean;
    borderRadius?: string;
};

const Input = ({
    type = "text",
    value,
    placeholder = "",
    disabled = false,
    readOnly = false,
    required = false,
    maxLength,
    minLength,
    pattern,
    onChange,
    onFocus,
    onBlur,
    inputClassName = "",
    fullWidth = false,
    borderRadius = "rounded-m",
}: InputProps) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`border-black-500 hover:border-black-300 border-m focus:border-primary-300 active:border-primary-300 disabled:border-black-600 placeholder:text-black-300 text-black-100 disabled:placeholder:text-black-400 focus:outline-none focus:ring-2 focus:ring-primary-300 ${borderRadius} ${fullWidth ? "w-full" : ""} py-2 px-3 transition-all ${inputClassName}`}
        />
    );
};

export default Input;
