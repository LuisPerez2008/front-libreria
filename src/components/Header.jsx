import { useState, useEffect } from "react";
import { Link } from "react-router";
import { MenuPerfil } from "./MenuPerfil";
import { CartContext } from "../contextos/CartContext";
import { useContext } from "react";
const menuItems = [
    { name: "Inicio", to: "/" },
    { name: "Libros", to: "/categorias" },
    { name: "Nosotros", to: "/nosotros" },
    { name: "Blog", to: "/blog" },
    { name: "Contactanos", to: "/contactanos" },
];

export const Header = () => {

    const { totalItems} = useContext(CartContext)

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const storedUsuario = localStorage.getItem("usuario");
        if (storedUsuario) {
            setUsuario(JSON.parse(storedUsuario));
        }
        
    }, []);

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <header className="bg-primary border-b-1 shadow-lg shasow-b-black-200">
            <section className=" px-4 py-2 bg-yellow-secondary ">
                <article className="flex items-center md:mx-auto justify-end md:max-w-[80%] lg:max-w-[70%]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 stroke-blue-secondary"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 stroke-blue-secondary"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </article>
            </section>

            <section className="principal pt-1 px-4 md:mx-auto md:max-w-[80%] lg:max-w-[70%]">
                <article className="logo">
                    <Link to="/inicio">
                        <img
                            src="logo-2.png"
                            alt=""
                            className="w-30 cursor-pointer"
                        />
                    </Link>
                </article>
                <article className="sesion flex justify-end items-center gap-3">
                    <div className="relative group">
                        <Link
                            className="grid place-items-center -space-y-1"
                            to={usuario ? "#" : "/inicio-sesion"}
                            onClick={(e) => {
                                if (usuario) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-8 stroke-blue-secondary cursor-pointer hover:fill-blue-secondary hover:stroke-yellow-secondary transition-all duration-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                            <span className="text-sm">
                                {usuario
                                    ? `Hola, ${usuario.nombre.split(" ")[0]} ${
                                          usuario.apellido.split(" ")[0]
                                      }`
                                    : "Iniciar Sesion"}
                            </span>
                        </Link>
                        <MenuPerfil usuario={usuario} />
                    </div>
                    <Link to={"/carrito"} className="relative  w-13">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-10 stroke-blue-secondary cursor-pointer hover:fill-blue-secondary hover:stroke-yellow-secondary transition-all duration-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                        {totalItems  !== 0 ?  <span className="absolute top-1/2 right-0 rounded-full w-4 h-4 p-0.5 bg-yellow-secondary text-sm font-semibold flex justify-center items-center">{totalItems}</span> : "" }
                       
                    </Link>
                </article>
                <article className="buscador flex items-center justify-between px-2 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-10 stroke-blue-secondary md:hidden z-30 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    <div className="flex-grow flex justify-center px-3 md:px-16 py-2 ">
                        <label className="flex border-1 rounded-lg md:w-full  pl-1 ">
                            <input
                                type="text"
                                placeholder="Busca en toda la tienda"
                                className=" w-full p-2 focus:outline-none "
                            />
                            <div className="bg-yellow-secondary h-auto w-10 rounded-br-lg rounded-tr-lg grid place-items-center cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 stroke-blue-secondary  rounded-br-xl rounded-tr-xl "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>
                        </label>
                    </div>
                </article>
            </section>

            <section
                className={`absolute top-25 left-0 right-0 bg-white md:bg-primary h-full md:h-auto md:flex md:items-center md:justify-center md:relative md:top-0 -translate-x-full ${
                    isOpen ? "translate-x-0" : ""
                } transition-transform duration-300 md:translate-x-0 z-20  md:z-0 mx-auto `}
            >
                <nav
                    className={`relative  items-center flex mt-16 md:mt-2 lg:mt-0 md:block md:max-w-[80%] lg:max-w-[100%]  md:py-4 `}
                >
                    <ul className="flex flex-col items-center justify-center space-y-6 md:space-y-0  md:gap-6 p-4 md:p-0 md:flex md:flex-row w-full md:justify-center md:items-center ">
                        {menuItems.map(({ name, to }, index) => (
                            <li
                                key={name}
                                className={`${
                                    index === menuItems.length - 1
                                        ? "w-full text-center border-b-2 border-blue-secondary md:border-none pb-3 md:pb-0"
                                        : " md:after:content-['|'] lg:after:ml-10 w-full text-center border-b-2 border-blue-secondary md:border-none pb-3 md:pb-0"
                                }  `}
                            >
                                <Link
                                    to={to}
                                    onClick={closeMenu}
                                    className="px-4 py-2 hover:bg-blue-secondary hover:text-white text-2xl md:text-lg font-semibold text-blue-secondary rounded-md transition-all duration-300"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </header>
    );
};
