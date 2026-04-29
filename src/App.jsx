import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import FullCatalog from "./sections/fullCatalog";
import TopTreeMovies from "./sections/topTreeMovies";
import Modal from "./components/modal";

import { movies as Data } from "./data/movies";
import { getTopMovie } from "./utils/getTopMovie";
const App = () => {
    const [showModal, setShowModal] = useState(false);

    const [movies, setMovies] = useState(Data);

    return (
        <div className="App relative">
            <Navbar setShowModal={setShowModal} />
            <Hero setMovies={setMovies} movie={getTopMovie(movies)[0]} />
            <TopTreeMovies
                movies={movies}
                setMovies={setMovies}
                movies={movies}
            />
            <FullCatalog movies={movies} setMovies={setMovies} />
            {showModal && (
                <Modal setMovies={setMovies} setShowModal={setShowModal} />
            )}
        </div>
    );
};

export default App;
