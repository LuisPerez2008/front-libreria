import { Link } from "react-router";

export const CardLibro = ({ libro }) => {
    return (
        <div className=" space-y-2 rounded-lg h-full min-h-[350px] bg-primary group text-center">
            <div className="relative h-auto">
                <Link to={`/libro/${libro.id}`} state={{ libro }}>
                    <img
                        src={libro.imagen}
                        alt={libro.titulo}
                        className=" object-cover max-w-[80%] mx-auto "
                    />
                </Link>

                <div className="absolute   hidden group-hover:block transition-all duration-300 py-1 bottom-0 left-0 w-full bg-primary">
                    <button className=" rounded-md font-bold text-sm py-1 text-blue-secondary bg-yellow-secondary w-[90%] mx-auto cursor-pointer hover:bg-yellow-500 transition-all duration-300 ">
                        Añadir al Carrito
                    </button>
                </div>
            </div>

            <h2 className=" text-[0.9rem] min-h-[40px] max-h-[40px]  text-ellipsis overflow-hidden line-clamp-2 ">
                {libro.titulo}
            </h2>
            <p className="text-sm text-gray-600  min-h-[40px] max-h-[50px]  text-ellipsis overflow-hidden line-clamp-2">
                Navarro Durán, Rosa y Rovira, Francesc asdasdaddddddddd
            </p>
            <p className="text-lg font-bold mt-2 text-blue-secondary ">
                S/.{libro.precio.toFixed(2)}
            </p>
        </div>
    );
};
