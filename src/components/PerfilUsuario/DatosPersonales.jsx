import { useState, useEffect } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../config/baseURL";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const DatosPersonales = ({ usuario }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nombres: "",
            apellidos: "",
            correo: "",
            telefono: "",
            documentoId: "",
            numeroDocumento: "",
        },
    });

    
    const guardarCambios = (data) => {
        const clienteActualizar = {
            nombre: data.nombres,
            apellido: data.apellidos,
            correo: data.correo,
            telefono: data.telefono,
            documento: {id: data.documentoId},
            numerodocumento: data.numeroDocumento,
        }
        
        axios.put(API_BASE_URL + "/clientes/" + usuario.id +"/dto", clienteActualizar).then(res => {
            console.log(res.data);
            
           localStorage.setItem('usuario', JSON.stringify(res.data));
            closeModal();

            
        }).catch(err => {
            console.error(err);
        });
        toast.success("Datos actualizados exitosamente");
         setTimeout(() => {

          window.location.reload();
          
        }, 1000); 

    };

    

    useEffect(() => {
        if (usuario) {
            reset({
                nombres: usuario.nombre || "",
                apellidos: usuario.apellido || "",
                correo: usuario.correo || "",
                telefono: usuario.telefono || "",
                documentoId: usuario.documento?.id || "",
                numeroDocumento: usuario.numerodocumento || "",
            });
        }
    }, [usuario, reset]);

    const { data: documentos, loading, error } = useFetchData("/documentos");

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
                                <p className="font-medium">
                                    {usuario.telefono}
                                </p>
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
                        <div className="relative bg-primary rounded-lg shadow w-full max-w-2xl p-4">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b p-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Editar Información
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
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
                            <form
                                onSubmit={handleSubmit(guardarCambios)}
                                className="p-4 space-y-4"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="nombres"
                                            className="block mb-1 font-medium"
                                        >
                                            Nombres
                                        </label>
                                        <input
                                            id="nombres"
                                            type="text"
                                            placeholder="Nombres"
                                            {...register("nombres", {
                                                required: true,
                                            })}
                                            className="w-full border-1 py-2 px-4 rounded-md"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="apellidos"
                                            className="block mb-1 font-medium"
                                        >
                                            Apellidos
                                        </label>
                                        <input
                                            id="apellidos"
                                            type="text"
                                            placeholder="Apellidos"
                                            {...register("apellidos", {
                                                required: true,
                                            })}
                                            className="w-full border-1 py-2 px-4 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="correo"
                                        className="block mb-1 font-medium"
                                    >
                                        Correo
                                    </label>
                                    <input
                                        id="correo"
                                        type="email"
                                        placeholder="Correo"
                                        {...register("correo", {
                                            required: true,
                                        })}
                                        className="w-full border-1 py-2 px-4 rounded-md"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="telefono"
                                        className="block mb-1 font-medium"
                                    >
                                        Teléfono
                                    </label>
                                    <input
                                        id="telefono"
                                        type="tel"
                                        placeholder="Teléfono"
                                        {...register("telefono", {
                                            required: true,
                                        })}
                                        className="w-full border-1 py-2 px-4 rounded-md"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="documentoId"
                                            className="block mb-1 font-medium"
                                        >
                                            Documento
                                        </label>
                                        <select
                                            id="documentoId"
                                            {...register("documentoId", {
                                                required: true,
                                            })}
                                            className="w-full px-4 py-2 rounded-md border-1 text-gray-700 focus:outline-none"
                                        >
                                            <option value="" disabled>
                                                Seleccione documento
                                            </option>
                                            {documentos.map((documento) => (
                                                <option
                                                    key={documento.id}
                                                    value={documento.id}
                                                >
                                                    {documento.tipo}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="numeroDocumento"
                                            className="block mb-1 font-medium"
                                        >
                                            Número de documento
                                        </label>
                                        <input
                                            id="numeroDocumento"
                                            type="text"
                                            placeholder="Número de documento"
                                            {...register("numeroDocumento", {
                                                required: true,
                                            })}
                                            className="w-full border-1 py-2 px-4 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-4 border-t">
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-secondary/80 hover:bg-blue-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 cursor-pointer transition-colors duration-200 ease-in-out"
                                    >
                                        Guardar cambios
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-secondary cursor-pointer transition-colors duration-200 ease-in-out"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
