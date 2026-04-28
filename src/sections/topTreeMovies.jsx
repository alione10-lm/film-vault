import { Gem } from "lucide-react";
import Card from "../components/card";
import { movies } from "../data/movies";

import Drawer from "../components/drawer";
import { useState } from "react";
import MovieDetails from "../components/movieDetails";

const TopTreeMovies = () => {
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <section className="h-screen w-full p-10 mt-10">
            <div className="flex w-full items-center gap-5">
                <h1 className="text-3xl flex items-center   gap-2 font-bold">
                    <Gem className="text-primary" />
                    Top 3 Movies
                </h1>

                <div className="w-[50%] bg-primary/20 h-0.5"></div>
            </div>

            <div className="w-full  grid grid-cols-3 gap-3 mt-10">
                {movies
                    .sort((a, b) => b.rate.aggregaterate - a.rate.aggregaterate)
                    .slice(0, 3)
                    .map((movie, i) => (
                        <Card
                            selectMovie={() => {
                                setSelectedMovie(movie);
                                setOpen(true);
                            }}
                            full={true}
                            key={i}
                            image={movie.image.url}
                            title={movie.title}
                            genres={movie.genres}
                            date={movie.date}
                            rating={movie.rate.aggregaterate}
                        />
                    ))}
            </div>

            {selectedMovie && (
                <Drawer
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    side="right"
                    title="details"
                >
                    <MovieDetails movie={selectedMovie} />
                </Drawer>
            )}
        </section>
    );
};

export default TopTreeMovies;
