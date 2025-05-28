import { useState } from "react";

export const DatosPersonales = ({ usuario}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            <div className="bg-primary rounded-lg shadow-lg shadow-blue-secondary/50 overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center bg-yellow-secondary">
                    <h2 className="font-medium">Información personal</h2>
                    <button
                        className="flex items-center gap-1 border-1 rounded-md px-3 py-1 bg-primary cursor-pointer text-sm text-gray-700 hover:bg-gray-50"
                        onClick={openModal}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                        </svg>
                        Editar
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex flex-col items-center">
                            <div className="h-24 w-24">
                                <img
                                    src={"/logo.png"}
                                    alt={`${usuario.nombre} ${usuario.apellido}`}
                                />
                            </div>
                            <button className="mt-2 px-2 py-1 rounded-md text-sm hover:bg-yellow-secondary/10 cursor-pointer">
                                Cambiar foto
                            </button>
                        </div>

                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Nombre</p>
                                <p className="font-medium">{usuario.nombre}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Apellido
                                </p>
                                <p className="font-medium">
                                    {usuario.apellido}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Correo electrónico
                                </p>
                                <p className="font-medium">{usuario.correo}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Teléfono
                                </p>
                                <p className="font-medium">{usuario.telefono}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Tipo de documento
                                </p>
                                <p className="font-medium">
                                    {usuario.documento?.tipo}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Número de documento
                                </p>
                                <p className="font-medium">
                                    {usuario.numerodocumento}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {isOpen && (
                    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-slate-300/45 bg-opacity-50">
                        <div className="relative bg-primary rounded-lg shadow  w-full max-w-2xl p-4">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b p-4 ">
                                <h3 className="text-xl font-semibold text-gray-900 ">
                                    Editar Informacion
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex items-center justify-center "
                                >
                                    <span className="sr-only">Cerrar</span>
                                    <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1l12 12M13 1L1 13"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-4 space-y-4">
                               
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Nombres"
                                className="w-full border-1 py-2 px-4 rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Apellidos"
                                className="w-full border-1 py-2 px-4 rounded-md"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Correo"
                                className="w-full border-1 py-2 px-4 rounded-md "
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Telefono"
                                className="w-full border-1 py-2 px-4 rounded-md "
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <select className="w-full px-4 py-2 rounded-md border-1 text-gray-700 focus:outline-none ">
                                <option value="" disabled>Documento</option>
                                <option value="opcion1">DNI</option>
                                <option value="opcion2">Ruc</option>
                                <option value="opcion3">CE</option>
                            </select>
                            <input
                                type="email"
                                placeholder="Numero de documento"
                                className="w-full border-1 py-2 px-4 rounded-md "
                            />
                        </div>
                        
                       
                    </form>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-end p-4 border-t ">
                                <button
                                    onClick={closeModal}
                                    className="text-white bg-blue-secondary/80 hover:bg-blue-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 cursor-pointer transition-colors duration-200 ease-in-out"
                                >
                                    Aceptar
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-secondary cursor-pointer transition-colors duration-200 ease-in-out"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
