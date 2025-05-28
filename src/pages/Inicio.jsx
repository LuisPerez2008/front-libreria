import { CarruselLibros } from "../components/CarruselLibros";
import { Carrusel } from "../components/Carrusel";
import { Link } from "react-router";
import { API_BASE_URL } from "../config/baseURL";
import { useEffect, useState } from "react";
import axios from "axios";

export const Inicio = () => {
    const [libros, setLibros] = useState([]);
    

    useEffect(() => {
        axios
            .get(API_BASE_URL + "/libros")
            .then(response => {
                setLibros(response.data);
                
            })
            .catch((error) => {
                console.error("Error fetching libros:", error);
            });
    }, []);

   

    return (
        <section className="space-y-10 mb-10">
            <Carrusel />
            <div className="max-w-[90%] md:max-w-[70%] mx-auto ">
                <Link to="/categorias">
                    <img
                        src="/barra2-chico.png"
                        alt=""
                        className="block w-full xs:hidden cursor-pointer"
                    />
                    <img
                        src="/barra2-img.png"
                        alt=""
                        className="w-full hidden object-contain xs:block cursor-pointer"
                    />
                </Link>
            </div>
            <CarruselLibros libros={libros}/>
            <div className="max-w-[90%] md:max-w-[70%] mx-auto">
                <Link to="/categorias">
                    <img
                        src="/barra1-chico.png"
                        alt=""
                        className="block w-full xs:hidden cursor-pointer"
                    />
                    <img
                        src="/barra-img.png"
                        alt=""
                        className="w-full hidden object-contain xs:block cursor-pointer"
                    />
                </Link>
            </div>
            <CarruselLibros libros={libros} />
        </section>
    );
};
