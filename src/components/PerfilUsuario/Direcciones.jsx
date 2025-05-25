export const Direcciones = ({ userData }) => {
    return (
        <div className="bg-primary rounded-lg shadow-lg shadow-blue-secondary/50 overflow-hidden">
            <div className="p-4 border-b flex bg-yellow-secondary justify-between items-center">
                <h2 className="font-medium">Mis direcciones</h2>
                <button className="bg-blue-secondary px-2 py-2 text-white  rounded-md cursor-pointer">Agregar dirección</button>
            </div>

            <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userData.addresses.map((address) => (
                        <div
                            key={address.id}
                            className={`p-4 border rounded-md relative ${
                                address.isDefault
                                    ? "border-blue-200 bg-blue-50"
                                    : ""
                            }`}
                        >
                            {address.isDefault && (
                                <span className="absolute top-2 right-2 bg-blue-300  px-2 py-1 rounded-md">
                                    Predeterminada
                                </span>
                            )}
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">{address.type}</h3>
                                <div className="flex gap-2">
                                    <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="size-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                            />
                                        </svg>
                                    </button>
                                    {!address.isDefault && (
                                        <button className="text-red-500 hover:text-red-700 cursor-pointer">
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
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="text-sm space-y-1">
                                <p>
                                    {userData.name} {userData.lastName}
                                </p>
                                <p>
                                    {address.street} {address.number}
                                </p>
                                <p>
                                    {address.city}, {address.state}{" "}
                                    {address.zipCode}
                                </p>
                                <p>Chile</p>
                                <p className="mt-2">{userData.phone}</p>
                            </div>
                            {!address.isDefault && (
                                <button
                                    className="mt-3 text-xs h-7 hover:bg-blue-50 px-2 rounded-md cursor-pointer bg-blue-secondary/20"
                                >
                                    Establecer como predeterminada
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
