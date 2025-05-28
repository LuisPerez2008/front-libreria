import { Paginacion } from "../components/Paginacion";
import { Filtro } from "../components/Filtro";
import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const Categorias = () => {
    const { data: libros, error, loading } = useFetchData("/libros"); // solo pones el endpoint relativo

    const [librosFiltrados, setLibrosFiltrados] = useState([]);
    const [selectedCategorias, setSelectedCategorias] = useState([]);

    // Cuando libros cambian, inicializa librosFiltrados
    useEffect(() => {
        if (libros.length) {
            setLibrosFiltrados(libros);
        }
    }, [libros]);

    // Función para filtrar libros según categorías seleccionadas
    const filterLibros = () => {
        if (selectedCategorias.length === 0) {
            setLibrosFiltrados(libros);
        } else {
            const filtrados = libros.filter((libro) =>
                selectedCategorias.includes(libro.categoria.nombre)
            );
            setLibrosFiltrados(filtrados);
        }
    };

    if (loading) return <p>Cargando libros...</p>;
    if (error) return <p>Error al cargar libros: {error.message}</p>;

    return (
        <section className="md:max-w-[80%] lg:max-w-[70%] w-[90%]  mx-auto space-y-10">
            <div>
                <img src="./banner.png" alt="" className="hidden md:block" />
                <img src="./banner-2.png" alt="" className="block md:hidden" />
            </div>
            <div
                className={`flex flex-col md:flex-row  w-full  space-y-10  mt-3 gap-4 transition-all duration-300`}
            >
                <Filtro
                    selectedCategorias={selectedCategorias}
                    setSelectedCategorias={setSelectedCategorias}
                    filterLibros={filterLibros}
                />
                <Paginacion libros={librosFiltrados} />
            </div>
        </section>
    );
};
