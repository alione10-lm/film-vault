import { useState } from "react";
import { PopcornIcon } from "lucide-react";
import Card from "../components/card";
import Filter from "../components/filter";
import Drawer from "../components/drawer";
import MovieDetails from "../components/movieDetails";

const AllFilms = ({ movies, setMovies, setShowModal, openUpdateModal }) => {
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedRate, setSelectedRate] = useState("");

    const filteredMovies = movies.filter((movie) => {
        const matchGenre =
            selectedGenre === "" || movie.genres.includes(selectedGenre);

        const matchRate =
            selectedRate === "" ||
            movie.rate.aggregaterate >= Number(selectedRate);

        return matchGenre && matchRate;
    });

    return (
        <section className="h-screen w-full p-10 mt-10">
            <div className="flex w-full flex-col items-start gap-1">
                <h1 className="text-2xl flex items-center gap-2 font-bold">
                    <PopcornIcon className="text-primary" />
                    Full Catalog
                </h1>
                <div className="w-full bg-primary/20 h-[0.5px]"></div>
            </div>

            <Filter
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
                selectedRate={selectedRate}
                onRateChange={setSelectedRate}
            />

            {filteredMovies.length === 0 ? (
                <div className="w-full flex flex-col items-center justify-center mt-20 gap-3 text-card-foreground/50">
                    <PopcornIcon size={40} />
                    <p className="text-sm">No movies match your filters.</p>
                </div>
            ) : (
                <div className="w-full grid grid-cols-4 gap-3">
                    {filteredMovies.map((movie, i) => (
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
            )}

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
                        setOpen={setOpen}
                        movie={selectedMovie}
                        setMovies={setMovies}
                        setShowModal={setShowModal}
                    />
                </Drawer>
            )}
        </section>
    );
};

export default AllFilms;
