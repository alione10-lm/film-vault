export const getTopMovie = (movies) => {
    return movies
        .sort((a, b) => b.rate.aggregaterate - a.rate.aggregaterate)
        .slice(0, 1);
};
