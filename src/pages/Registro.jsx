import { Link, useNavigate } from "react-router";
import { API_BASE_URL } from "../config/baseURL";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Registro = () => {
    const [documentos, setDocumentos] = useState([]);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        axios.get(API_BASE_URL + "/documentos").then((response) => {
            setDocumentos(response.data);
        }); // Aquí podrías hacer algo al montar el componente, como cargar datos iniciales
    }, []);

    const onSubmit = (data) => {

        console.log(data)
        const userRegister = {
            nombre: data.nombres,
            apellido: data.apellidos,
            correo: data.correo,
            contra: data.password,
            telefono: data.telefono,
            documento: { id: data.documento },
            numerodocumento: data.numeroDocumento,
        };

        console.log(userRegister)
        axios
            .post(API_BASE_URL + "/clientes", userRegister)
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Usuario registrado exitosamente");
                    setTimeout(() => {
                        navigate("/inicio-sesion");
                    }, 3000);
                   
                } else {
                    toast.error("Error al registrar el usuario");
                }
            })
            .catch((error) => {
                toast.error("Error al registrar el usuario");
            });
    };

    const password = watch("password");

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

                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Nombres"
                                className="w-full border-1 py-2 px-4 rounded-md"
                                {...register("nombres", {
                                    required: "El nombre es obligatorio",
                                })}
                            />
                            {errors.nombres && (
                                <p className="text-red-600 text-sm">
                                    {errors.nombres.message}
                                </p>
                            )}

                            <input
                                type="text"
                                placeholder="Apellidos"
                                className="w-full border-1 py-2 px-4 rounded-md"
                                {...register("apellidos", {
                                    required: "El apellido es obligatorio",
                                })}
                            />
                            {errors.apellidos && (
                                <p className="text-red-600 text-sm">
                                    {errors.apellidos.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Correo"
                                className="w-full border-1 py-2 px-4 rounded-md"
                                {...register("correo", {
                                    required: "El correo es obligatorio",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Correo inválido",
                                    },
                                })}
                            />
                            {errors.correo && (
                                <p className="text-red-600 text-sm">
                                    {errors.correo.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="tel"
                                placeholder="Teléfono"
                                className="w-full border-1 py-2 px-4 rounded-md"
                                {...register("telefono", {
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Solo números permitidos",
                                    },
                                    minLength: {
                                        value: 9,
                                        message: "Mínimo 9 caracteres",
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: "maximo 9 caracteres",
                                    },
                                })}
                            />
                            {errors.telefono && (
                                <p className="text-red-600 text-sm">
                                    {errors.telefono.message}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <select
                                className="w-full px-4 py-2 rounded-md border-1 text-gray-700 focus:outline-none"
                                {...register("documento", {
                                    required: "El documento es obligatorio",
                                })}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Documento
                                </option>
                                {documentos.map((doc) => {
                                    return (
                                        <option key={doc.id} value={doc.id}>
                                            {doc.tipo}
                                        </option>
                                    );
                                })}
                            </select>
                            {errors.documento && (
                                <p className="text-red-600 text-sm">
                                    {errors.documento.message}
                                </p>
                            )}

                            <input
                                type="text"
                                placeholder="Número de documento"
                                className="w-full border-1 py-2 px-4 rounded-md"
                                {...register("numeroDocumento")}
                            />
                            {errors.numeroDocumento && (
                                <p className="text-red-600 text-sm">
                                    {errors.numeroDocumento.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="w-full border-1 py-2 px-4 rounded-md"
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 6,
                                        message: "Mínimo 6 caracteres",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-red-600 text-sm">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Confirmar contraseña"
                                className="w-full border-1 py-2 px-4 rounded-md"
                                {...register("confirmPassword", {
                                    required: "Confirma la contraseña",
                                    validate: (value) =>
                                        value === password ||
                                        "Las contraseñas no coinciden",
                                })}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-600 text-sm">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="block mx-auto bg-blue-secondary w-[70%] text-white hover:bg-gray-800 py-2 px-4 rounded-md"
                        >
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
