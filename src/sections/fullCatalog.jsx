import { useState } from "react";
import { PopcornIcon } from "lucide-react";
import Card from "../components/card";
import Filter from "../components/filter";
import Drawer from "../components/drawer";
import MovieDetails from "../components/movieDetails";

const AllFilms = ({ movies, setMovies, setShowModal }) => {
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <section className="h-screen w-fuall p-10 mt-10">
            <div className="flex w-full flex-col items-start gap-1">
                <h1 className="text-2xl flex items-center   gap-2 font-bold">
                    <PopcornIcon className="text-primary" />
                    Full Catalog
                </h1>
                <div className="w-full bg-primary/20 h-[0.5px]"></div>
            </div>

            <Filter />
            <div className="w-full grid grid-cols-4 gap-3 ">
                {movies.map((movie, i) => (
                    <Card
                        selectMovie={() => {
                            setSelectedMovie(movie);
                            setOpen(true);
                        }}
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
                        setOpen={setOpen}
                        movie={selectedMovie}
                        setMovies={setMovies}
                    />
                </Drawer>
            )}
        </section>
    );
};

export default AllFilms;
