
import { Paginacion } from "../components/Paginacion";
import { Filtro } from "../components/Filtro";


export const Categorias = () => {
    return (
        <section className="md:max-w-[80%] lg:max-w-[70%] w-[90%]  mx-auto space-y-10">
            <div>
                <img src="./banner.png" alt="" className="hidden md:block"/>
                <img src="./banner-2.png" alt="" className="block md:hidden"/>
            </div>
            <div
                className={`flex flex-col md:flex-row  w-full  space-y-10  mt-3 gap-4 transition-all duration-300`}
            >
                <Filtro />
                <Paginacion />
            </div>
        </section>
    );
};
