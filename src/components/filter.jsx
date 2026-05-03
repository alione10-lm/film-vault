import { getUniqueGenres } from "../data/genres";

const Filter = ({
    selectedGenre,
    onGenreChange,
    selectedRate,
    onRateChange,
}) => {
    const Categories = getUniqueGenres();

    return (
        <div className="mt-10 mb-4">
            <div className="flex items-center w-full flex-wrap gap-2">
                filter :
                <button
                    onClick={() => onGenreChange("")}
                    className={`px-4 py-2 rounded-lg cursor-pointer border text-sm transition-colors duration-300
                        ${
                            selectedGenre === ""
                                ? "bg-primary/20 border-primary text-card-foreground"
                                : "border-secondary text-card-foreground/70 hover:bg-primary/20 hover:border-primary"
                        }`}
                >
                    All
                </button>
                {Categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onGenreChange(category)}
                        className={`px-4 py-2 rounded-lg cursor-pointer border text-sm transition-colors duration-300
                            ${
                                selectedGenre === category
                                    ? "bg-primary/20 border-primary text-card-foreground"
                                    : "border-secondary text-card-foreground/70 hover:bg-primary/20 hover:border-primary"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span>rate:</span>
                <select
                    value={selectedRate}
                    onChange={(e) => onRateChange(e.target.value)}
                    className="w-full border-secondary border rounded-lg p-2 text-sm text-card-foreground/70 bg-background focus:outline-none transition-colors duration-300 focus:border-primary"
                >
                    <option value="">All Categories</option>
                    <option value="1">★ 1+</option>
                    <option value="2">★★ 2+</option>
                    <option value="3">★★★ 3+</option>
                    <option value="4">★★★★ 4+</option>
                    <option value="5">★★★★★ 5</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
