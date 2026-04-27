import React from "react";

const Modal = () => {
    return (
        <div className="w-full z-50 h-screen fixed top-0 left-0 right-0 bottom-0 bg-transparent backdrop-blur-sm flex items-center justify-center">
            <form action="">
                <input
                    type="text"
                    className="w-full border-secondary border rounded-lg p-2 text-sm text-card-foreground/70 bg-background focus:outline-none transition-colors duration-300 focus:border-primary"
                    placeholder="movie title..."
                />
                <input
                    type="text"
                    className="w-full border-secondary border rounded-lg p-2 text-sm text-card-foreground/70 bg-background focus:outline-none transition-colors duration-300 focus:border-primary mt-4"
                    placeholder="movie genre..."
                />
                <input
                    type="text"
                    className="w-full border-secondary border rounded-lg p-2 text-sm text-card-foreground/70 bg-background focus:outline-none transition-colors duration-300 focus:border-primary mt-4"
                    placeholder="movie release date..."
                />
                <input
                    type="text"
                    className="w-full border-secondary border rounded-lg p-2 text-sm text-card-foreground/70 bg-background focus:outline-none transition-colors duration-300 focus:border-primary mt-4"
                    placeholder="movie rating..."
                />
                <button
                    className="w-full cursor-pointer bg-primary text-white rounded-lg p-2 mt-4 hover:bg-primary/90 transition-colors duration-300"
                    type="submit"
                >
                    Add Movie
                </button>

                <button
                    className="w-full cursor-pointer bg-secondary text-secondary-foreground rounded-lg p-2 mt-4 hover:bg-secondary/90 transition-colors duration-300"
                    type="button"
                >
                    cancel
                </button>
            </form>
        </div>
    );
};

export default Modal;
