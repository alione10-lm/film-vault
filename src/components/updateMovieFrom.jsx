import { useState } from "react";
import Button from "./button";
import { getUniqueGenres } from "../data/genres";

const UpdateMovieForm = ({ setMovies, setShowModal, initialData, ref }) => {
    const generes = getUniqueGenres();

    const [acteurs, setActeurs] = useState(
        initialData?.actors?.length ? initialData.actors : [""],
    );
    const [rate, setRate] = useState(initialData?.rate?.aggregaterate || 0);
    const [hovered, setHovered] = useState(0);
    const [form, setForm] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        date: initialData?.date ? String(initialData.date) : "",
        genres: initialData?.genres || [],
        director: initialData?.director || "",
        imageUrl: initialData?.image?.url || "",
        trailerUrl: initialData?.trailerUrl || "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const toggleGenre = (genre) =>
        setForm((prev) => ({
            ...prev,
            genres: prev.genres.includes(genre)
                ? prev.genres.filter((g) => g !== genre)
                : [...prev.genres, genre],
        }));

    const addActeur = () => setActeurs([...acteurs, ""]);
    const removeActeur = (i) =>
        acteurs.length > 1 && setActeurs(acteurs.filter((_, idx) => idx !== i));
    const updateActeur = (i, val) =>
        setActeurs(acteurs.map((a, idx) => (idx === i ? val : a)));

    const handleSubmit = (e) => {
        e.preventDefault();
        const updated = {
            ...initialData,
            ...form,
            date: parseInt(form.date),
            actors: acteurs.filter(Boolean),
            rate: { aggregaterate: rate },
            image: { url: form.imageUrl },
        };

        setMovies((prev) => prev.map((m) => (m === initialData ? updated : m)));
        setShowModal(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-6" ref={ref}>
            <form
                className="grid grid-cols-2 border border-secondary gap-4 bg-background px-6 py-4 rounded-lg"
                onSubmit={handleSubmit}
            >
                <p className="col-span-2 text-xs font-medium uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2">
                    Informations générales
                </p>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Titre
                    </label>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Ex: Inception"
                        className="input"
                    />
                </div>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Synopsis du film..."
                        rows={3}
                        className="input resize-none"
                    />
                </div>

                <div className="flex col-span-2 flex-col w-full gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Année de sortie
                    </label>
                    <input
                        name="date"
                        type="number"
                        value={form.date}
                        onChange={handleChange}
                        placeholder="2024"
                        min="1888"
                        max="2099"
                        className="input w-full"
                    />
                </div>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Genre
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {generes.map((genre) => {
                            const isSelected = form.genres.includes(genre);
                            return (
                                <button
                                    key={genre}
                                    type="button"
                                    onClick={() => toggleGenre(genre)}
                                    className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer
                                        ${
                                            isSelected
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "bg-transparent text-foreground border-secondary hover:border-primary/50"
                                        }`}
                                >
                                    {genre}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Réalisateur
                    </label>
                    <input
                        name="director"
                        value={form.director}
                        onChange={handleChange}
                        placeholder="Ex: Christopher Nolan"
                        className="input"
                    />
                </div>

                <p className="col-span-2 text-xs font-medium uppercase tracking-widest text-foreground border-b border-secondary pb-2 mt-2">
                    Casting
                </p>

                <div className="col-span-2 flex flex-col gap-2">
                    <label className="text-xs font-medium text-foreground">
                        Acteurs principaux
                    </label>
                    {acteurs.map((acteur, i) => (
                        <div key={i} className="flex gap-2 items-center">
                            <input
                                value={acteur}
                                onChange={(e) =>
                                    updateActeur(i, e.target.value)
                                }
                                placeholder="Nom de l'acteur"
                                className="input"
                            />
                            <button
                                type="button"
                                onClick={() => removeActeur(i)}
                                className="p-2 text-gray-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addActeur}
                        className="text-sm cursor-pointer text-gray-400 border border-dashed border-secondary rounded-lg px-3 py-2 text-left hover:border-primary/50 hover:text-gray-600 transition-colors"
                    >
                        + Ajouter un acteur
                    </button>
                </div>

                <p className="col-span-2 text-xs font-medium uppercase tracking-widest text-gray-400 border-b border-secondary pb-2 mt-2">
                    Médias
                </p>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Image (URL)
                    </label>
                    <input
                        name="imageUrl"
                        type="url"
                        value={form.imageUrl}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="input"
                    />
                </div>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Trailer (URL)
                    </label>
                    <input
                        name="trailerUrl"
                        type="url"
                        value={form.trailerUrl}
                        onChange={handleChange}
                        placeholder="https://youtube.com/..."
                        className="input"
                    />
                </div>

                <p className="col-span-2 text-xs font-medium uppercase tracking-widest text-gray-400 border-b border-secondary pb-2 mt-2">
                    Évaluation
                </p>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Note
                    </label>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                type="button"
                                key={star}
                                onClick={() => setRate(star)}
                                onMouseEnter={() => setHovered(star)}
                                onMouseLeave={() => setHovered(0)}
                                className={`text-2xl cursor-pointer transition-colors ${
                                    star <= (hovered || rate)
                                        ? "text-amber-400"
                                        : "text-gray-200"
                                }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col-span-2 mt-2">
                    <Button
                        type="submit"
                        className="w-full py-2.5 rounded-lg transition-colors active:scale-99"
                    >
                        Mettre à jour
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMovieForm;
