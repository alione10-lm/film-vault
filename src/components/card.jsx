import React from "react";

const Card = ({ image, title, genre, date, rating, full = false }) => {
    return (
        <div className="overflow-hidden  rounded-lg border border-secondary cursor-pointer  hover:-translate-y-1 duration-300 relative    ">
            <figure>
                <img
                    src={image}
                    alt="card image"
                    className="aspect-video w-full"
                />
            </figure>
            <div className="p-6">
                <header>
                    <p className="text-card-foreground/70 text-xs mb-1">
                        {genre.join(" - ")}
                    </p>
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
                        ⭐⭐⭐⭐⭐
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
