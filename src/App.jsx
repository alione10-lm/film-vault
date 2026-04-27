import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import FullCatalog from "./sections/fullCatalog";
import TopTreeMovies from "./sections/topTreeMovies";
import Modal from "./components/modal";
const App = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="App relative">
            <Navbar setShowModal={setShowModal} />
            <Hero />
            <TopTreeMovies />
            <FullCatalog />
            {showModal && <Modal setShowModal={setShowModal} />}
        </div>
    );
};

export default App;
