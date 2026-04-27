import { Gem } from "lucide-react";
import Card from "../components/card";

const TopTreeMovies = () => {
    return (
        <section className="h-screen w-full p-10 mt-10">
            <div className="flex w-full items-center gap-5">
                <h1 className="text-3xl flex items-center   gap-2 font-bold">
                    <Gem className="text-primary" />
                    Top 3 Movies
                </h1>

                <div className="w-[50%] bg-primary/20 h-0.5"></div>
            </div>

            <div className="w-full  grid grid-cols-3 gap-3 mt-10">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Card
                        full={true}
                        key={i}
                        image={
                            "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg"
                        }
                        title={"Memories of the past"}
                        genre={["Action", "Comedy"]}
                        date={"jun 3 2023"}
                        rating={4.5}
                    />
                ))}
            </div>
        </section>
    );
};

export default TopTreeMovies;
