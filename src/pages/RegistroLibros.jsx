import { useForm } from "react-hook-form";
import { useState } from "react";
import { API_BASE_URL } from "../config/baseURL";
import axios from "axios";

export const RegistroLibros = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [fileName, setFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = (data) => {
        const formData = new FormData();
        // Asegúrate de que el campo img sea un archivo
        formData.append("autor", data.autor);
        formData.append("estado", data.estado);
        formData.append("precio", data.precio);
        formData.append("sinopsis", data.sinopsis);
        formData.append("stock", data.stock);
        formData.append("titulo", data.titulo);
        formData.append("idCategoria", data.id_categoria); // Nota el nombre que espera el backend

        if (selectedFile) {
            formData.append("img", selectedFile);
        }
        axios
            .post(API_BASE_URL + "/libros", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log("Libro guardado:", response.data);
                // aquí puedes agregar toast o redirección
            })
            .catch((error) => {
                console.error("Error al subir libro:", error);
            });
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-lg mx-auto p-4"
        >
            <div>
                <label>Autor:</label>
                <input
                    type="text"
                    {...register("autor", { required: "Autor es requerido" })}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.autor && (
                    <p className="text-red-600">{errors.autor.message}</p>
                )}
            </div>

            <div>
                <label>Estado:</label>
                <input
                    type="number"
                    {...register("estado", {
                        required: "Estado es requerido",
                        valueAsNumber: true,
                    })}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.estado && (
                    <p className="text-red-600">{errors.estado.message}</p>
                )}
            </div>

            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    step="0.01"
                    {...register("precio", {
                        required: "Precio es requerido",
                        valueAsNumber: true,
                    })}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.precio && (
                    <p className="text-red-600">{errors.precio.message}</p>
                )}
            </div>

            <div>
                <label>Sinopsis:</label>
                <textarea
                    {...register("sinopsis", {
                        required: "Sinopsis es requerida",
                    })}
                    className="w-full border rounded px-3 py-2"
                    rows={4}
                />
                {errors.sinopsis && (
                    <p className="text-red-600">{errors.sinopsis.message}</p>
                )}
            </div>

            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    {...register("stock", {
                        required: "Stock es requerido",
                        valueAsNumber: true,
                    })}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.stock && (
                    <p className="text-red-600">{errors.stock.message}</p>
                )}
            </div>

            <div>
                <label>Título:</label>
                <input
                    type="text"
                    {...register("titulo", { required: "Título es requerido" })}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.titulo && (
                    <p className="text-red-600">{errors.titulo.message}</p>
                )}
            </div>

            <div>
                <label>Categoría (ID):</label>
                <input
                    type="number"
                    {...register("id_categoria", {
                        required: "Categoría es requerida",
                        valueAsNumber: true,
                    })}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.id_categoria && (
                    <p className="text-red-600">
                        {errors.id_categoria.message}
                    </p>
                )}
            </div>
            <div>
                <label className="block mb-2 font-semibold text-gray-700">
                    Imagen del libro:
                </label>

                <label
                    htmlFor="img"
                    className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Seleccionar imagen
                </label>

                <input
                    id="img"
                    type="file"
                    accept="image/*"
                    {...register("img")}
                    onChange={handleFileChange}
                    className="hidden"
                />

                {fileName && (
                    <p className="mt-2 text-sm text-gray-600">
                        Archivo seleccionado: {fileName}
                    </p>
                )}
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded">
                Subir libro
            </button>
        </form>
    );
};
