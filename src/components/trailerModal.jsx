import { XIcon } from "lucide-react";

const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;
    const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const Trailer = ({
    setShowTrailer,
    trailerUrl = "https://youtu.be/NmzuHjWmXOc?si=XmRfP2VfPkBmSQ1I",
}) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowTrailer(false)}
        >
            <div
                className="relative w-full max-w-3xl mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setShowTrailer(false)}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer"
                >
                    <XIcon size={24} />
                </button>

                {getYoutubeEmbedUrl(trailerUrl) ? (
                    <iframe
                        src={getYoutubeEmbedUrl(trailerUrl)}
                        className="w-full aspect-video rounded-lg"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                ) : (
                    <div className="w-full aspect-video rounded-lg bg-secondary flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">
                            No trailer available
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trailer;
