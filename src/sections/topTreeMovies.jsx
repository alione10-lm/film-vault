import { Gem } from "lucide-react";
import Card from "../components/card";

import Drawer from "../components/drawer";
import { useState } from "react";
import MovieDetails from "../components/movieDetails";

const TopTreeMovies = ({
    movies,
    setMovies,
    setShowModal,
    openUpdateModal,
}) => {
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <section className="h-screen w-full p-10 mt-10">
            <div className="flex w-full flex-col items-start gap-1">
                <h1 className="text-2xl flex items-center   gap-2 font-bold">
                    <Gem className="text-primary" />
                    Top 3 Movies
                </h1>

                <div className="w-full bg-primary/20 h-[0.5px]"></div>
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
                    <MovieDetails
                        closeDrawer={() => setOpen(false)}
                        openUpdateModal={openUpdateModal}
                        movie={selectedMovie}
                        setMovies={setMovies}
                        setOpen={setOpen}
                    />
                </Drawer>
            )}
        </section>
    );
};

export default TopTreeMovies;
