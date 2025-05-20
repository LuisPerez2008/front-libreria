import { useState } from "react";
const categorias = [
    "Ficción",
    "No Ficción",
    "Ciencia",
    "Historia",
    "Biografías",
    "Tecnología",
];
export const Filtro = () => {
    const [openCategorias, setOpenCategorias] = useState(false);
    const [openPrecio, setOpenPrecio] = useState(false);
    const [openFiltro, setOpenFiltro] = useState(false);
    

    const handleFiltro = () => {
        setOpenCategorias(false);
        setOpenPrecio(false);
    };

    const handleFiltroMovil = () => {
        setOpenFiltro(!openFiltro);
    };

    const handleCategorias = () => {
        setOpenCategorias(!openCategorias);
    };
    const handlePrecio = () => {
        setOpenPrecio(!openPrecio);
    };

    const arrowOpen = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    );

    const arrowClose = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
        </svg>
    );
    return (
        <div className="md:max-w-[30%] md:w-[30%] w-full h-auto">
            <button
                className="md:hidden flex justify-end w-full  text-blue-secondary cursor-pointer p-2 rounded"
                onClick={handleFiltroMovil}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                    />
                </svg>
            </button>
            <div
                className={`${
                    openFiltro ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } md:block md:max-h-auto md:opacity-100 transition-all duration-300 `}
            >
                <div className="">
                    <div className="flex items-center justify-between bg-blue-secondary text-white p-2 rounded-tl-lg rounded-tr-lg">
                        <h2
                            className="text-lg font-semibold cursor-pointer "
                            onClick={handleCategorias}
                        >
                            Categorias
                        </h2>
                        <span
                            onClick={handleCategorias}
                            className="cursor-pointer"
                        >
                            {!openCategorias ? arrowOpen : arrowClose}
                        </span>
                    </div>

                    <form
                        className={`flex flex-col  p-4 ${
                            openCategorias
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                        } transition-all duration-300 overflow-hidden`}
                    >
                        {categorias.map((categoria) => (
                            <label
                                key={categoria}
                                className="flex items-center mb-2 cursor-pointer text-black "
                            >
                                <input
                                    type="checkbox"
                                    value={categoria}
                                    className="mr-2 w-4 h-4 rounded-md accent-yellow-secondary    focus:ring-1 "
                                />
                                {categoria}
                            </label>
                        ))}
                    </form>
                </div>
                <div>
                    <div className="flex items-center justify-between bg-blue-secondary text-white p-2 rounded-tl-lg rounded-tr-lg">
                        <h2
                            className="text-lg font-semibold cursor-pointer "
                            onClick={handlePrecio}
                        >
                            Precio
                        </h2>
                        <span onClick={handlePrecio} className="cursor-pointer">
                            {!openPrecio ? arrowOpen : arrowClose}
                        </span>
                    </div>
                    <form
                        className={`flex flex-col  p-4 ${
                            openPrecio
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                        } transition-all duration-300 overflow-hidden`}
                    >
                        <div>
                          
                          
                        </div>
                    </form>
                </div>
                <div className="flex flex-row justify-between w-full p-4  gap-2">
                    <button
                        className={`bg-blue-secondary hidden md:block cursor-pointer  text-white py-2 px-4 hover:bg-blue-secondary/85 ${
                            openCategorias || openPrecio
                                ? " "
                                : "bg-gray-400 hover:bg-gray-400 cursor-help"
                        }`}
                        onClick={handleFiltro}
                    >
                        Cerrar
                    </button>
                    <button className="bg-blue-secondary cursor-pointer text-white py-2 px-4 hover:bg-blue-secondary/85">
                        Aplicar
                    </button>
                </div>
            </div>
        </div>
    );
};
