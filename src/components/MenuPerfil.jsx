import { Link } from "react-router";

export const MenuPerfil = ({usuario}) => {

    const cerrarSesion = () =>{
        localStorage.removeItem("usuario");
    }
    return (
        <div className={`absolute bg-white md:z-30 rounded-md right-0.5shadow-lg shadow-blue-secondary/50 hidden w-56 h-auto overflow-hidden ${!usuario ? " hidden" : "group-hover:block"}`}>
            <section className="w-full border-b-1">
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium ">Nombre</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                            luis@gmail.com
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-start justify-start gap-2 p-1 bg-white  ">
                <Link
                    to="/perfil-usuario"
                    className=" hover:bg-yellow-secondary/30 w-full rounded-md py-1 px-2 cursor-pointer transition-colors duration-200 ease-in-out"
                >
                    Mi Perfil
                </Link>

                <Link
                    to="/pedidos"
                    className="w-full hover:bg-yellow-secondary/30 rounded-md py-1 px-2 cursor-pointer transition-colors duration-200 ease-in-out"
                >
                    Pedidos
                </Link>
            </section>
            <section className="flex flex-col items-start justify-start gap-2 p-1 bg-white  shadow-md border-t-1">
                <a href="/" className="hover:bg-red-200 w-full rounded-md py-1 px-2 cursor-pointer transition-colors duration-200 ease-in-out">
                <span className="" onClick={cerrarSesion}>
                    Cerrar Sesión
                </span>
                </a>
            </section>
        </div>
    );
};
