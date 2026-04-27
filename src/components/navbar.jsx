import { BadgePlus } from "lucide-react";
import Button from "./button";
const Navbar = ({ setShowModal }) => {
    return (
        <div className="w-full z-10 top-10 rounded-md " id="test ">
            <header className="w-full bg-background/90 backdrop:filter rounded-md  flex items-center justify-between p-4  ">
                <p>
                    film<span className="text-primary">vault</span>
                </p>
                <Button onClick={() => setShowModal(true)}>
                    <BadgePlus className="size-4" />
                    add movie
                </Button>
            </header>
        </div>
    );
};

export default Navbar;
