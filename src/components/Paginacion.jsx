import { use } from "react";
import { CardLibro } from "./CardLibro";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../contextos/CartContext";

export const Paginacion = ({libros}) => {
    const {agregarAlCart, cartItems} = useContext(CartContext)
    console.log(cartItems)
    useEffect(() => {

    }, [libros]);

    if(libros.length === 0) {
        return (
            <div className="w-full flex justify-center items-center flex-col mb-4">
                <p className="text-gray-500 h-23">No hay libros disponibles por ahora</p>
                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHM3eGt3MDcydDNwdHhucTlxN2syOXBva2h6MzVvNGtoaXdtZnRpZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT77Y1T0zY1gR5qe5O/giphy.webp" alt="" />
            </div>
        );
    }
    return (
        <>
            <div className=" w-full grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2 lg:gap-3">
                {libros.map((libro) => (
                    <CardLibro key={libro.id} libro={libro} agregarAlCart={agregarAlCart} />
                ))}
            </div>
        </>
    );
};
