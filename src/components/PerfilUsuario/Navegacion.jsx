export const Navegacion = ({setActiveTab, activeTab, iconos ,usuario}) => {
   
    return (
        <div>
            <div className="md:col-span-1">
                <div className="bg-primary rounded-lg shadow-sm overflow-hidden ">
                    <div className="p-4 flex items-center space-x-3 border-b">
                        <div className="h-10 w-10">
                            <img
                                src={"/logo.png"}
                                alt={`${usuario.nombre} ${usuario.apellido}`}
                            />
                        </div>
                        <div>
                            <p className="font-medium">
                                {usuario.nombre} {usuario.apellido}
                            </p>
                            <p className="text-sm text-gray-500">
                                {usuario.correo}
                            </p>
                        </div>
                    </div>

                    <div className="p-2">
                        <nav className="space-y-1">
                            <button
                                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md ${
                                    activeTab === "perfil"
                                        ? "bg-yellow-secondary font-medium"
                                        : "text-gray-700 hover:bg-yellow-secondary/20"
                                }`}
                                onClick={() => setActiveTab("perfil")}
                            >
                                {iconos.perfil}
                                <span>Información personal</span>
                            </button>

                            <button
                                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md ${
                                    activeTab === "pedidos"
                                        ? "bg-yellow-secondary font-medium"
                                        : "text-gray-700 hover:bg-yellow-secondary/20"
                                }`}
                                onClick={() => setActiveTab("pedidos")}
                            >
                                {iconos.pedidos}
                                <span>Mis pedidos</span>
                            </button>

                            <button
                                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md ${
                                    activeTab === "direcciones"
                                        ? "bg-yellow-secondary font-medium"
                                        : "text-gray-700 hover:bg-yellow-secondary/20"
                                }`}
                                onClick={() => setActiveTab("direcciones")}
                            >
                                {iconos.direcciones}
                                <span>Mis direcciones</span>
                            </button>

                            <hr className="my-2" />

                            <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md text-red-600 hover:bg-red-50">
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
                                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                                    />
                                </svg>

                                <span>Cerrar sesión</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
