import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import FullCatalog from "./sections/fullCatalog";
import TopTreeMovies from "./sections/topTreeMovies";
import Modal from "./components/modal";
import AddMovieForm from "./components/addMovieForm";
import UpdateMovieForm from "./components/updateMovieFrom";

import { movies as Data } from "./data/movies";
import { getTopMovie } from "./utils/getTopMovie";

const STORAGE_KEY = "filmvault_movies";

const getMoviesFromStorage = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Data));
    return Data;
};

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState(getMoviesFromStorage);

    const saveMovies = (updater) => {
        setMovies((prev) => {
            const updated =
                typeof updater === "function" ? updater(prev) : updater;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const openAddModal = () => {
        setSelectedMovie(null);
        setModalContent(<AddMovieForm />);
        setShowModal(true);
    };

    const openUpdateModal = (movie) => {
        setSelectedMovie(movie);
        setModalContent(<UpdateMovieForm />);
        setShowModal(true);
    };

    return (
        <div className="App relative">
            <Navbar openAddModal={openAddModal} />
            <Hero
                setMovies={saveMovies}
                openUpdateModal={openUpdateModal}
                movie={getTopMovie(movies)[0]}
            />
            <TopTreeMovies
                movies={movies}
                setMovies={saveMovies}
                openUpdateModal={openUpdateModal}
            />
            <FullCatalog
                movies={movies}
                setMovies={saveMovies}
                openUpdateModal={openUpdateModal}
            />
            {showModal && (
                <Modal
                    setMovies={saveMovies}
                    setShowModal={setShowModal}
                    initialData={selectedMovie}
                >
                    {modalContent}
                </Modal>
            )}
        </div>
    );
};

export default App;
