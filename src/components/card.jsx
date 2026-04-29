import Tag from "./tag";

const Card = ({
    image,
    title,
    genres = [],
    date,
    rating,
    full = false,
    selectMovie,
}) => {
    return (
        <div
            onClick={selectMovie}
            className="overflow-hidden group  rounded-lg border border-secondary cursor-pointer  hover:-translate-y-1 duration-300 relative    "
        >
            <figure>
                <img
                    src={image}
                    alt="card image"
                    className="aspect-square group-hover:scale-105 transition-all duration-300 w-full"
                />
            </figure>
            <div className="p-4">
                <header>
                    <div className="w-full flex flex-wrap">
                        {genres.map((genre, i) => (
                            <Tag key={i}>{genre}</Tag>
                        ))}
                    </div>
                    <h3 className="text-xl text-card-foreground/90 font-medium ">
                        {title}
                    </h3>
                </header>
                <div
                    className={`${full ? "flex w-full gap-10 justify-between mt-4" : "mt-2"}`}
                >
                    <p className="text-xs mb-2 text-card-foreground/70">
                        By George, {date}
                    </p>
                    <p className="text-xs ">
                        {rating} <span className="text-primary ">/5</span>
                        <span className="text-amber-400">★</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
