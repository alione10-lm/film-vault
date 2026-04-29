const Tag = ({ children }) => {
    return (
        <span className="text-card-foreground/70 text-xs bg-secondary p-1 rounded-sm mb-1 mr-2">
            {children}
        </span>
    );
};

export default Tag;
