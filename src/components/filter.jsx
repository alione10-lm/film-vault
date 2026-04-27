import React from "react";

const Filter = () => {
    const Categories = [
        "Action",
        "Comedy",
        "Drama",
        "Horror",
        "Sci-Fi",
        "Romance",
        "Thriller",
        "Fantasy",
        "Animation",
        "Documentary",
    ];

    return (
        <div className=" mt-10 mb-4">
            <div className="flex items-center w-full gap-2">
                filter :
                {Categories.map((category) => (
                    <button
                        key={category}
                        className={
                            "px-4 py-2 rounded-lg cursor-pointer border border-secondary text-sm text-card-foreground/70 hover:bg-primary/20 hover:border-primary transition-colors duration-300"
                        }
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span>rate:</span>
                <select
                    className="w-full border-secondary border rounded-lg p-2 text-sm text-card-foreground/70 bg-background focus:outline-none transition-colors duration-300 focus:border-primary"
                    name=""
                    id=""
                    defaultChecked
                >
                    <option value="" defaultChecked>
                        All Categories
                    </option>
                    {Categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;
