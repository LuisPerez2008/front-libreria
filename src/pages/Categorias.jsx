import { useState } from "react";
import { Paginacion } from "../components/Paginacion";
import { Filtro } from "../components/Filtro";

const categorias = [
    "Ficción",
    "No Ficción",
    "Ciencia",
    "Historia",
    "Biografías",
    "Tecnología",
];
export const Categorias = () => {
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
        <section className="md:max-w-[80%] lg:max-w-[70%] w-[90%]  mx-auto">
            <div
                className={`flex flex-col md:flex-row  w-full  space-y-10  mt-3 gap-4 transition-all duration-300`}
            >
                <Filtro />
                <Paginacion />
            </div>
        </section>
    );
};
