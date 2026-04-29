const Button = ({
    children,
    onClick,
    className = "",
    type = "button",
    variant,
}) => {
    const base =
        "text-sm cursor-pointer flex items-center justify-center gap-1 p-3 rounded-lg transition duration-300 font-semibold";

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        ghost: "bg-transparent text-primary border border-primary   hover:bg-primary/10",
        destructive: "bg-red-500 text-white hover:bg-red-500/90 ",
    };

    const selected = variants[variant] ?? variants.default;

    return (
        <button
            className={`${base} ${selected} ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
