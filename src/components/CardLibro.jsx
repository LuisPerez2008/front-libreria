import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../contextos/CartContext";


export const CardLibro = ({ libro , agregarAlCart}) => {
    const itemLibro = {
        id: libro.id,
        titulo: libro.titulo,
        img : libro.img,
        autor: libro.autor,
        precio: libro.precio,

    }

    return (
        <div className=" space-y-2 rounded-lg h-full min-h-[350px] bg-primary group text-center">
            <div className="relative h-auto">
                <Link to={`/libro/${libro.id}`} state={{ libro }}>
                    <img
                        src={libro.img ? `data:image/jpeg;base64,${libro.img}` : "/placeholder.jpg"}
                        alt={libro.titulo}
                        className=" object-cover max-w-[80%] max-h-[195px] min-h-[200px] mx-auto "
                    />
                </Link>

                <div className="absolute   hidden group-hover:block transition-all duration-300 py-1 bottom-0 left-0 w-full bg-primary">
                    <button className=" rounded-md font-bold text-sm py-1 text-blue-secondary bg-yellow-secondary w-[90%] mx-auto cursor-pointer hover:bg-yellow-500 transition-all duration-300 "
                        onClick={() => agregarAlCart(itemLibro)}>
                        Añadir al Carrito
                    </button>
                </div>
            </div>

            <h2 className=" text-[0.9rem] min-h-[40px] max-h-[40px]  text-ellipsis overflow-hidden line-clamp-2  ">
                {libro.titulo}
            </h2>
            <p className="text-sm text-gray-600  min-h-[40px] max-h-[50px]  text-ellipsis overflow-hidden line-clamp-2 ">
                {libro.autor}
            </p>
            <p className="text-lg font-bold mt-2 text-blue-secondary ">
                S/.{libro.precio.toFixed(2)}
            </p>
        </div>
    );
};
