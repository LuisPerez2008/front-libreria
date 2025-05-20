import { useLocation } from "react-router";
import { useState } from "react";

export const DetalleLibro = () => {
    const location = useLocation();
    const libro = location.state?.libro;
    const [activo, setActivo] = useState("info");

    return (
        <div className="w-[90%]  lg:w-[70%] mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 w-[100%] lg:w-[80%] mx-auto md:mx-0 ">
                <div className="flex justify-center items-center  ">
                    <img
                        src={libro.imagen}
                        alt={`${libro.titulo}`}
                        className="w-56 min-w-32"
                    />
                </div>

                <div className="flex flex-col justify-center text-center md:text-left ">
                    <h1 className="text-2xl  font-semibold text-blue-secondary mb-4">
                        {libro.titulo}
                    </h1>

                    <span className=" mb-6 block">Mikecrack</span>
                    <hr className="mb-6 border-gray-500" />
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-2xl font-bold">
                            S/ {libro.precio}
                        </span>
                    </div>

                    <div className="flex gap-4 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="shadow-top flex justify-center items-center gap-4 fixed bottom-0 left-0 right-0 mx-auto w-full md:w-auto z-5 bg-primary px-4 py-2 md:p-0 md:static  ">
                                <button className="bg-yellow-secondary hover:bg-yellow-secondary/70 text-black font-bold px-6 py-2 rounded cursor-pointer transition-all duration-300">
                                    AÑADIR AL CARRITO
                                </button>
                                <span className="md:hidden font-bold text-2xl text-blue-800">
                                    S/. {libro.precio}
                                </span>
                            </div>
                            <div className="border border-gray-300 rounded flex items-center">
                                <input
                                    type="number"
                                    min="1"
                                    defaultValue="1"
                                    className="w-12 text-center p-2 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className="flex items-center gap-2 cursor-pointer text-blue-600 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                            </svg>

                            <span>Añadir a la Lista de Deseos</span>
                        </button>

                        <button className="flex items-center gap-2 cursor-pointer text-blue-600 hover:underline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <span>Compartir</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}

            <div className=" mt-12 w-[90%] md:w-[80%] ">
                <div className="grid md:grid-cols-2 border-b border-gray-300 transition-all duration-300">
                    <button
                        onClick={() => setActivo("info")}
                        className={`py-3 px-4 md:text-center text-left font-bold  border-b-4 cursor-pointer ${
                            activo === "info"
                                ? "border-blue-secondary text-blue-secondary"
                                : "border-transparent text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        MÁS INFORMACIÓN
                    </button>
                    <button
                        onClick={() => setActivo("stock")}
                        className={`py-3 px-4  md:text-center text-left font-bold border-b-4 cursor-pointer ${
                            activo === "stock"
                                ? "border-blue-secondary text-blue-secondary"
                                : "border-transparent text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        DISPONIBILIDAD DE STOCK
                    </button>
                </div>

                {/* Contenido según opción activa */}
                <div className="p-6 text-gray-700">
                    {activo === "info" && (
                        <>
                            <h3 className="text-xl font-bold mb-4">
                                Sinopsis:
                            </h3>
                            <p>
                                Se avecina una batalla sin precedentes: Mike y
                                sus amigos deberán descubrir el secreto que
                                oculta el laberinto si quieren salvar su
                                dimensión. Un nuevo enemigo ha aparecido:
                                ¡Karma, el poseedor del tercer cristal
                                legendario! Su ambición por reunir los tres
                                cristales podría sumir al multiverso en el caos.
                                Para detenerlo, Mike, Akela y sus amigos deberán
                                adentrarse en un profundo y enigmático
                                laberinto, repleto de trampas, acertijos y
                                peligros. Su misión: encontrar una solución que
                                les permita enfrentarse a Karma y salvar el
                                equilibrio del universo. ¿Lograrán salir del
                                laberinto y detener a Karma antes de que sea
                                demasiado tarde?
                            </p>
                        </>
                    )}

                    {activo === "stock" && (
                        <p>Información sobre disponibilidad de stock.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
