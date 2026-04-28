import { useEffect, useRef } from "react";

export default function Drawer({
    isOpen,
    onClose,
    children,
    side = "right",
    width = "w-full sm:w-96",
    title = "Drawer",
}) {
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        }

        function handleEsc(e) {
            if (e.key === "Escape") onClose();
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    const basePosition = side === "left" ? "left-0" : "right-0";
    const translateClosed =
        side === "left" ? "-translate-x-full" : "translate-x-full";

    return (
        <div
            className={`fixed inset-0 z-50 ${
                isOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
        >
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
            />

            <aside
                ref={ref}
                className={`
          absolute top-0 h-full bg-background shadow-2xl
          ${basePosition} ${width}
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : translateClosed}
        `}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="px-2 py-1 rounded hover:bg-secondary"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-4 overflow-y-auto h-[calc(100%-56px)]">
                    {children}
                </div>
            </aside>
        </div>
    );
}
