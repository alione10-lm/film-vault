import Button from "../components/button";

const Hero = ({ movie }) => {
    console.log(movie.genres);

    return (
        <section className="relative h-screen w-full flex items-center justify-center p-20 overflow-hidden">
            <div
                style={{ backgroundImage: `url('${movie.image.url}')` }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            ></div>

            <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/50 to-black/45 "></div>

            <div className="relative z-9 flex items-end gap-10">
                <div>
                    <h1 className="text-primary font-semibold text-6xl drop-shadow-lg">
                        {movie.title}
                    </h1>

                    <p className=" text-primary/60">
                        {movie.genres.join(" - ")}
                    </p>

                    <p className="text-secondary-foreground/70 text-sm max-w-xl">
                        {movie.plot}
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Button>watch trailer</Button>
                        <Button variant={"ghost"}>show details</Button>
                    </div>
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
