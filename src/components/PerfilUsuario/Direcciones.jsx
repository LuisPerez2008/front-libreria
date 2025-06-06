import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import axios from "axios";
import { API_BASE_URL } from "../../config/baseURL";
import { useForm } from "react-hook-form";

export const Direcciones = ({ usuario }) => {
    const [direcciones, setDirecciones] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    // Hook para el formulario del modal
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    useEffect(() => {
        if (!usuario || !usuario.id) return;
        axios
            .get(`${API_BASE_URL}/direcciones/cliente/${usuario.id}`)
            .then((res) => setDirecciones(res.data))
            .catch(() => setDirecciones([]));
    }, [usuario]);

    // Guardar nueva dirección
    const guardarDireccion = (data) => {
        const payload = {
            ...data,
            cliente: { id: usuario.id },
        };

        console.log(payload);

        axios
            .post(`${API_BASE_URL}/direcciones/guardar`, payload)
            .then((res) => {
                setDirecciones((prev) => [...prev, res.data]);
                setModalOpen(false);
                reset();
            })
            .catch(() => alert("Error al guardar dirección"));
    };

    return (
        <div className="bg-primary rounded-lg shadow-lg shadow-blue-secondary/50 overflow-hidden">
            <div className="p-4 border-b flex bg-yellow-secondary justify-between items-center">
                <h2 className="font-medium">Mis direcciones</h2>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-blue-secondary px-2 py-2 text-white rounded-md cursor-pointer"
                >
                    Agregar dirección
                </button>
            </div>

            <div className="p-4">
                {direcciones.length === 0 ? (
                    <div>No tienes direcciones, agrega una dirección</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {direcciones.map((address) => (
                            <div
                                key={address.id}
                                className={`p-4 border rounded-md relative ${
                                    address.espredeterminado
                                        ? "border-blue-200 bg-blue-50"
                                        : ""
                                }`}
                            >
                                {address.espredeterminado && (
                                    <span className="absolute top-2 right-2 bg-blue-300 px-2 py-1 rounded-md">
                                        Predeterminada
                                    </span>
                                )}
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-medium">
                                        {address.tipo}
                                    </h3>
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
                                        {!address.espredeterminado && (
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
                                        {usuario.nombre} {usuario.apellido}
                                    </p>
                                    <p>
                                        {address.calle} {address.numero}
                                    </p>
                                    <p>
                                        {address.ciudad},{" "}
                                        {address.codigo_postal}
                                    </p>
                                    <p>Perú</p>
                                    <p className="mt-2">{usuario.telefono}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-40">
                    <div className="bg-primary rounded-lg shadow-lg w-full max-w-md p-6 relative">
                        <button
                            onClick={() => {
                                setModalOpen(false);
                                reset();
                            }}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">
                            Registrar Nueva Dirección
                        </h2>

                        <form
                            onSubmit={handleSubmit(guardarDireccion)}
                            className="space-y-4"
                            autoComplete="off"
                        >
                            <div>
                                <label className="block mb-1">
                                    Nombre de dirección:
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ejm: Casa"
                                    {...register("tipo", {
                                        required: "Tipo es requerido",
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {errors.tipo && (
                                    <p className="text-red-600">
                                        {errors.tipo.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-1">Direccion:</label>
                                <input
                                    type="text"
                                    {...register("calle", {
                                        required: "Calle es requerida",
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {errors.calle && (
                                    <p className="text-red-600">
                                        {errors.calle.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-1">Número:</label>
                                <input
                                    type="text"
                                    {...register("numero", {
                                        required: "Número es requerido",
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {errors.numero && (
                                    <p className="text-red-600">
                                        {errors.numero.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-1">
                                    Ciudad / distrito:
                                </label>
                                <input
                                    type="text"
                                    {...register("ciudad", {
                                        required: "Ciudad es requerida",
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {errors.ciudad && (
                                    <p className="text-red-600">
                                        {errors.ciudad.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-1">
                                    Código Postal:
                                </label>
                                <input
                                    type="text"
                                    {...register("codigo_postal", {
                                        required: "Código postal es requerido",
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                />
                                {errors.codigo_postal && (
                                    <p className="text-red-600">
                                        {errors.codigo_postal.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-secondary text-white px-6 py-2 rounded w-full"
                            >
                                Guardar Dirección
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
