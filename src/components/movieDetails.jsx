import { VideoIcon } from "lucide-react";
import Button from "./button";

export default function MovieDetails({ movie }) {
    return (
        <div className="space-y-4">
            <img src={movie.image.url} className="w-full rounded-lg" />

            <h2 className="text-xl font-bold">{movie.title}</h2>

            <p className="text-sm text-gray-500">
                {movie.date} • {movie.genres.join(", ")}
            </p>

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
                                <img
                                    src={actor.image}
                                    alt={actor.name}
                                    className="w-6 h-6 rounded-full object-cover"
                                />

                                <span className="text-xs">{actor.name}</span>
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

            <Button variant={"ghost"} className="w-full">
                watch trailer
                <VideoIcon size={14} />
            </Button>
        </div>
    );
}
