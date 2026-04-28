import React from "react";
import { PopcornIcon } from "lucide-react";
import Card from "../components/card";
import Filter from "../components/filter";
import { movies } from "../data/movies";

const AllFilms = () => {
    return (
        <section className="h-screen w-fuall p-10 mt-10">
            <div className="flex w-full items-center gap-5">
                <h1 className="text-3xl flex items-center   gap-2 font-bold">
                    <PopcornIcon className="text-primary" />
                    Full Catalog
                </h1>

                <div className="w-[50%] bg-primary/20 h-0.5"></div>
            </div>

            <Filter />
            <div className="w-full grid grid-cols-4 gap-3 ">
                {movies.slice(0, 8).map((movie, i) => (
                    <Card
                        key={i}
                        image={movie.image.url}
                        title={movie.title}
                        genre={movie.genres}
                        date={movie.date}
                        rating={movie.rate.aggregaterate}
                    />
                ))}
            </div>
        </section>
    );
};

export default AllFilms;
