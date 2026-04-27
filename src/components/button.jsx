import { BadgePlus } from "lucide-react";
import React from "react";

const Button = ({ children, onClick }) => {
    return (
        <button
            className="bg-primary text-sm hover:bg-primary/80 cursor-pointer flex items-center gap-1 p-3 rounded-lg text-primary-foreground duration-300 font-semibold "
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
