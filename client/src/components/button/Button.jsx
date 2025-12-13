import clsx from "clsx";

const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-accentColor/40";

const variants = {
    primary:
        "bg-accentColor text-light hover:opacity-90 shadow-md",
    outline:
        "border border-accentColor text-accentColor hover:bg-accentColor hover:text-light",
    danger:
        "bg-redColor text-light hover:opacity-90",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                baseStyles,
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
