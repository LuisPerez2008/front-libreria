import { CarruselLibros } from "../components/CarruselLibros";
import { Carrusel } from "../components/Carrusel";


export const Inicio = () => {
    return (
        <section className="space-y-10 mb-10">
         <Carrusel />
         <div className="max-w-[90%] md:max-w-[70%] mx-auto ">
            <img src="/barra2-chico.png" alt="" className="block w-full xs:hidden cursor-pointer"/>
            <img src="/barra2-img.png" alt="" className="w-full hidden object-contain xs:block cursor-pointer" />

         </div>
         <CarruselLibros />
         <div className="max-w-[90%] md:max-w-[70%] mx-auto">
            <img src="/barra1-chico.png" alt="" className="block w-full xs:hidden cursor-pointer"/>
            <img src="/barra-img.png" alt="" className="w-full hidden object-contain xs:block cursor-pointer" />
         </div>
         <CarruselLibros />
        </section>
    );
};
