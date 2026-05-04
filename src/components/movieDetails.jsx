import { useState } from "react";
import { VideoIcon } from "lucide-react";
import Button from "./button";
import Tag from "./tag";
import Modal from "./modal";
import UpdateMovieForm from "./updateMovieFrom";
import Trailer from "./trailerModal";

export default function MovieDetails({
    movie,
    setMovies,
    setOpen,
    setShowModal,
    showModal,
    openUpdateModal,
    selectedMovie,
    closeDrawer,
}) {
    const [showTrailer, setShowTrailer] = useState(false);

    function handleDelete(id) {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this movie?",
        );
        if (!confirmDelete) return;
        setMovies((prev) => prev.filter((m) => m.id !== id));
        setOpen(false);
    }

    return (
        <div className="space-y-4">
            <img src={movie.image.url} className="w-full rounded-lg" />

            <h2 className="text-xl font-bold">{movie.title}</h2>

            <div className="text-sm flex gap-2 text-gray-500">
                {movie.date} •{" "}
                <div className="flex flex-wrap">
                    {movie.genres.map((genre, index) => (
                        <Tag key={index}>{genre}</Tag>
                    ))}
                </div>
            </div>

            <p className="text-sm">{movie.description}</p>

            {movie.director && (
                <p className="text-sm">
                    <span className="font-semibold">Director:</span>{" "}
                    {movie.director}
                </p>
            )}

            {movie.actors && (
                <div>
                    <p className="font-semibold text-sm mb-2">Actors:</p>
                    <div className="flex flex-wrap gap-3">
                        {movie.actors.map((actor, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 bg-secondary/40 px-2 py-1 rounded-full"
                            >
                                <span className="text-xs">{actor}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex items-center gap-2">
                <span className="font-semibold">
                    ⭐ {movie.rate.aggregaterate}
                </span>
            </div>

            <Button
                variant="ghost"
                className="w-full"
                onClick={() => setShowTrailer(true)}
            >
                Watch Trailer
                <VideoIcon size={14} />
            </Button>

            <div className="flex gap-2 mt-4">
                <Button
                    className="flex-1"
                    onClick={() => {
                        closeDrawer();
                        openUpdateModal(movie);
                    }}
                >
                    Edit
                </Button>

                {showModal && (
                    <Modal
                        setShowModal={setShowModal}
                        setMovies={setMovies}
                        initialData={selectedMovie}
                    >
                        <UpdateMovieForm />
                    </Modal>
                )}

                <Button
                    onClick={() => {
                        handleDelete(movie.id);
                        closeDrawer();
                    }}
                    variant="destructive"
                    className="flex-1"
                >
                    Delete
                </Button>
            </div>

            {showTrailer && (
                <Trailer
                    url={movie.trailerUrl}
                    setShowTrailer={setShowTrailer}
                />
            )}
        </div>
    );
}
