import React, { useRef } from "react";

const Modal = ({ setMovies, setShowModal, initialData, children }) => {
    const formRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
            setShowModal(false);
        }
    };
    console.log("sdjfhkjh");

    console.log(initialData);

    return (
        <div
            onClick={handleOutsideClick}
            className="w-full z-50 min-h-screen overflow-y-auto fixed inset-0 bg-transparent backdrop-blur-sm"
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    ref: formRef,
                    setMovies,
                    setShowModal,
                    initialData,
                }),
            )}
        </div>
    );
};

export default Modal;
