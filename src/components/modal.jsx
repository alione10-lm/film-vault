import React from "react";
import AddMovieForm from "./addMovieForm";

const Modal = ({ setMovies, setShowModal }) => {
    return (
        <div className="w-full z-50 min-h-screen overflow-y-auto fixed inset-0 bg-transparent backdrop-blur-sm">
            <AddMovieForm />
        </div>
    );
};

export default Modal;
