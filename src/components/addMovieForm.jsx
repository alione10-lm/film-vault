import { useState } from "react";
import Button from "./button";

const AddMovieForm = () => {
    const [acteurs, setActeurs] = useState([""]);
    const [note, setNote] = useState(0);
    const [hovered, setHovered] = useState(0);
    const [form, setForm] = useState({
        titre: "",
        description: "",
        annee: "",
        genre: "",
        realisateur: "",
        imageUrl: "",
        trailerUrl: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const addActeur = () => setActeurs([...acteurs, ""]);
    const removeActeur = (i) =>
        acteurs.length > 1 && setActeurs(acteurs.filter((_, idx) => idx !== i));
    const updateActeur = (i, val) =>
        setActeurs(acteurs.map((a, idx) => (idx === i ? val : a)));

    const handleSubmit = () => {
        const data = {
            ...form,
            annee: parseInt(form.annee),
            acteurs: acteurs.filter(Boolean),
            note,
        };
        console.log(data);
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <form className="grid grid-cols-2 border border-secondary gap-4 bg-background px-6 py-4 rounded-lg ">
                <p className="col-span-2 text-xs font-medium uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2">
                    Informations générales
                </p>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Titre
                    </label>
                    <input
                        name="titre"
                        value={form.titre}
                        onChange={handleChange}
                        placeholder="Ex: Inception"
                        className="input "
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
                        className="input  resize-none"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Année de sortie
                    </label>
                    <input
                        name="annee"
                        type="number"
                        value={form.annee}
                        onChange={handleChange}
                        placeholder="2024"
                        min="1888"
                        max="2099"
                        className="input "
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Genre
                    </label>
                    <select
                        name="genre"
                        value={form.genre}
                        onChange={handleChange}
                        className="input bg-background"
                    >
                        <option value="" disabled>
                            Choisir un genre
                        </option>
                        {[
                            "Action",
                            "Aventure",
                            "Animation",
                            "Comédie",
                            "Drame",
                            "Fantastique",
                            "Horreur",
                            "Romance",
                            "Science-fiction",
                            "Thriller",
                            "Documentaire",
                            "Autre",
                        ].map((g) => (
                            <option key={g}>{g}</option>
                        ))}
                    </select>
                </div>

                <div className="col-span-2 flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground">
                        Réalisateur
                    </label>
                    <input
                        name="realisateur"
                        value={form.realisateur}
                        onChange={handleChange}
                        placeholder="Ex: Christopher Nolan"
                        className="input "
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
                                className="input "
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
                        className="input "
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
                        className="input "
                    />
                </div>

                <p className="col-span-2 text-xs font-medium uppercase tracking-widest text-gray-400 border-b border-secondary pb-2 mt-2">
                    Évaluation
                </p>

                <div className="col-span-2 mt-2">
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full py-2.5 rounded-lg transition-colors active:scale-99"
                    >
                        Ajouter le film
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddMovieForm;
