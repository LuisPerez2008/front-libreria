import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_BASE_URL } from "../config/baseURL";
import { use } from "react";

export const InicioSesion = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {

        console.log(data)
        axios
            .get(API_BASE_URL + "/clientes/login", {
                params: {
                    correo: data.email,
                    contra: data.password,
                },
            })
            .then((response) => {
                console.log("Respuesta del servidor:", response.data);
                localStorage.setItem("usuario", JSON.stringify(response.data));
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error al enviar los datos:", error);
            });
    };

    if (localStorage.getItem("usuario")) {
        navigate("/perfil-usuario");
    }

    return (
        <div className="flex flex-col items-center justify-center my-12 w-[90%] md:w-[85%] bg-primary lg:w-[70%] mx-auto">
            <div className="w-full max-w-md space-y-4">
                <div className="flex flex-col items-center  w-23 cursor-pointer   ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-12 stroke-blue-secondary cursor-pointer hover:fill-blue-secondary hover:stroke-yellow-secondary transition-all duration-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>

                    <p className="text-sm text-center text-gray-600">
                        Entrar como colaborador
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-medium">Iniciar Sesión</h1>
                    </div>

                    <form
                        className="space-y-4 w-full"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full px-4 py-2 border rounded-md"
                                {...register("email", {
                                    required: "El correo es obligatorio",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Correo inválido",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="w-full px-4 py-2 border rounded-md"
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 5,
                                        message: "Mínimo 5 caracteres",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <button className="block w-[70%] mx-auto bg-blue-secondary text-white hover:bg-blue-secondary/70 px-4 py-2 rounded-md cursor-pointer transition-all duration-300">
                            INICIAR SESIÓN
                        </button>
                    </form>

                    <div className="text-center text-sm">
                        <Link
                            to="/registro"
                            className="text-gray-600 hover:underline"
                        >
                            ¿No tienes cuenta? Regístrate
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
