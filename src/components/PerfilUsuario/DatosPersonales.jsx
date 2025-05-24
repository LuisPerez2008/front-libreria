export const DatosPersonales = ({userData}) => {
  return (
    <div className="bg-primary rounded-lg shadow-lg shadow-blue-secondary/50 overflow-hidden">
                            <div className="p-4 border-b flex justify-between items-center bg-yellow-secondary">
                                <h2 className="font-medium">
                                    Información personal
                                </h2>
                                <button className="flex items-center gap-1 border-1 rounded-md px-3 py-1 bg-primary cursor-pointer text-sm text-gray-700 hover:bg-gray-50">
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
                                                alt={`${userData.name} ${userData.lastName}`}
                                            />
                                        </div>
                                        <button className="mt-2 px-2 py-1 rounded-md text-sm hover:bg-yellow-secondary/10 cursor-pointer">
                                            Cambiar foto
                                        </button>
                                    </div>

                                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Nombre
                                            </p>
                                            <p className="font-medium">
                                                {userData.name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Apellido
                                            </p>
                                            <p className="font-medium">
                                                {userData.lastName}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Correo electrónico
                                            </p>
                                            <p className="font-medium">
                                                {userData.email}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Teléfono
                                            </p>
                                            <p className="font-medium">
                                                {userData.phone}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Tipo de documento
                                            </p>
                                            <p className="font-medium">
                                                {userData.documentType}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Número de documento
                                            </p>
                                            <p className="font-medium">
                                                {userData.documentNumber}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Fecha de nacimiento
                                            </p>
                                            <p className="font-medium">
                                                {new Date(
                                                    userData.birthDate
                                                ).toLocaleDateString("es-CL")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}