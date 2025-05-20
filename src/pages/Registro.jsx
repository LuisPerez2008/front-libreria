import { Link } from "react-router";
export const Registro = () => {
    return (
        <div className="flex flex-col items-center justify-center my-10  bg-primary p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="space-y-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-medium">Registrarse</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Crea una nueva cuenta para comenzar.
                        </p>
                    </div>

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
                        <div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="w-full border-1 py-2 px-4 rounded-md "
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Confirmar contraseña"
                                className="w-full border-1 py-2 px-4 rounded-md"
                            />
                        </div>
                        <button className="block mx-auto bg-blue-secondary w-[70%] text-white hover:bg-gray-800 py-2 px-4 rounded-md">
                            REGISTRARSE
                        </button>
                    </form>

                    <div className="text-center text-sm">
                        <Link
                            className="text-gray-600 hover:underline"
                            to="/inicio-sesion"
                        >
                            ¿Ya tienes cuenta? Iniciar sesión
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
