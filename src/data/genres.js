import { movies } from "./movies";

export function getUniqueGenres() {
    return [...new Set(movies.flatMap((movie) => movie.genres))].sort();
}
