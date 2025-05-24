export const DetalleLibroInfo = ({ setActivo, activo }) => {
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
                            Se avecina una batalla sin precedentes: Mike y sus
                            amigos deberán descubrir el secreto que oculta el
                            laberinto si quieren salvar su dimensión. Un nuevo
                            enemigo ha aparecido: ¡Karma, el poseedor del tercer
                            cristal legendario! Su ambición por reunir los tres
                            cristales podría sumir al multiverso en el caos.
                            Para detenerlo, Mike, Akela y sus amigos deberán
                            adentrarse en un profundo y enigmático laberinto,
                            repleto de trampas, acertijos y peligros. Su misión:
                            encontrar una solución que les permita enfrentarse a
                            Karma y salvar el equilibrio del universo. ¿Lograrán
                            salir del laberinto y detener a Karma antes de que
                            sea demasiado tarde?
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
