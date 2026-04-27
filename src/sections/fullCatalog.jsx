import React from "react";
import { PopcornIcon } from "lucide-react";
import Card from "../components/card";
import Filter from "../components/filter";

const AllFilms = () => {
    return (
        <section className="h-screen w-fuall p-10 mt-10">
            <div className="flex w-full items-center gap-5">
                <h1 className="text-3xl flex items-center   gap-2 font-bold">
                    <PopcornIcon className="text-primary" />
                    Full Catalog
                </h1>

                <div className="w-[50%] bg-primary/20 h-0.5"></div>
            </div>

            <Filter />
            <div className="w-full grid grid-cols-4 gap-3 ">
                {Array.from({ length: 8 }).map((_, i) => (
                    <Card
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

export default AllFilms;
