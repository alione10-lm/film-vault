import { BadgePlus } from "lucide-react";
import Button from "./button";
import Modal from "./modal";
import AddMovieForm from "./addMovieForm";
const Navbar = ({ setShowModal, showModal, setMovies, openAddModal }) => {
    return (
        <div className="w-full z-10  fixed top-0 " id="test ">
            <header className="w-full bg-background/90 backdrop:filter    flex items-center justify-between p-4  ">
                <p>
                    film<span className="text-primary">vault</span>
                </p>
                <Button onClick={openAddModal}>
                    <BadgePlus className="size-4" />
                    add movie
                </Button>
                {showModal && (
                    <Modal
                        setShowModal={setShowModal}
                        setMovies={setMovies}
                        showModal={showModal}
                    >
                        <AddMovieForm />
                    </Modal>
                )}
            </header>
        </div>
    );
};

export default Navbar;
