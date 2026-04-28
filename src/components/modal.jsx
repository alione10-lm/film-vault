import { useRef } from "react";
import AddMovieForm from "./addMovieForm";

const Modal = ({ setMovies, setShowModal }) => {
    const formRef = useRef(null);

    const handleOutsideClick = (e) => {
        console.log(formRef.current);
        console.log(e.target);

        console.log(formRef.current.contains(e.target));
        if (formRef.current && !formRef.current.contains(e.target)) {
            setShowModal(false);
        }
    };

    return (
        <div
            onClick={handleOutsideClick}
            className="w-full z-50 min-h-screen overflow-y-auto fixed inset-0 bg-transparent backdrop-blur-sm"
        >
            <AddMovieForm
                ref={formRef}
                setMovies={setMovies}
                setShowModal={setShowModal}
            />
        </div>
    );
};

export default Modal;
