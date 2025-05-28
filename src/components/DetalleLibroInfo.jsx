export const DetalleLibroInfo = ({ setActivo, activo, libro }) => {
    return (
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
                        <h3 className="text-xl font-bold mb-4">Sinopsis:</h3>
                        <p>
                            {libro.sinopsis ||
                                "No hay sinopsis disponible para este libro."}
                        </p>
                    </>
                )}

                {activo === "stock" && (
                    <p>Información sobre disponibilidad de stock.</p>
                )}
            </div>
        </div>
    );
};
