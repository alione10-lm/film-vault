const Button = ({ children, onClick, className, type = "button" }) => {
    return (
        <button
            className={`bg-primary text-sm hover:bg-primary/80 cursor-pointer flex items-center justify-center gap-1 p-3 rounded-lg text-primary-foreground transition duration-300 font-semibold  ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
