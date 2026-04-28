import React from "react";

const Hero = ({ movie }) => {
    return (
        <section className="relative h-screen w-full flex items-end justify-center p-20 overflow-hidden">
            <div
                style={{ backgroundImage: `url('${movie.image.url}')` }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            ></div>

            <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/50 to-black/45 "></div>

            <div className="relative z-9 flex items-end gap-10">
                <div>
                    <h1 className="text-primary font-semibold text-6xl drop-shadow-lg">
                        Inception
                    </h1>

                    <p className="text-white">
                        <span className="font-mono text-primary/60">
                            Christopher Nolan
                        </span>{" "}
                        2010 | Sci-Fi | ★★★★★
                    </p>

                    <p className="text-white/80 max-w-xl">
                        Un voleur qui s'infiltre dans les rêves des gens pour
                        leur dérober des secrets se voit proposer une dernière
                        mission : implanter une idée dans l'esprit d'un
                        individu.
                    </p>
                </div>

                <img
                    width={250}
                    className="rounded-xl shadow-2xl"
                    src={movie.image.url}
                    alt=""
                />
            </div>
        </section>
    );
};

export default Hero;
