import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../config/baseURL";
import { useFetchData } from "../../hooks/useFetchData";

export const CrudLibro = () => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [libroEditar, setLibroEditar] = useState(null);
    const [fileName, setFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const { data: categorias } = useFetchData("/categorias");
    console.log(categorias);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const fetchLibros = async () => {
        setLoading(true);
        try {
            const res = await axios.get(API_BASE_URL + "/libros");
            setLibros(res.data);
            setError(null);
        } catch (err) {
            setError("Error al cargar libros");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLibros();
    }, []);

    const abrirModalNuevo = () => {
        reset({
            autor: "",
            estado: 1,
            precio: 0,
            sinopsis: "",
            stock: 0,
            titulo: "",
            id_categoria: "",
        });
        setLibroEditar(null);
        setFileName("");
        setSelectedFile(null);
        setModalOpen(true);
    };

    const abrirModalEditar = (libro) => {
        console.log(libro);
        reset({
            autor: libro.autor || "",
            estado: libro.estado || 1,
            precio: libro.precio || 0,
            sinopsis: libro.sinopsis || "",
            stock: libro.stock || 0,
            titulo: libro.titulo || "",
            id_categoria: libro.categoria.id || "",
        });
        setLibroEditar(libro);
        setFileName("");
        setSelectedFile(null);
        setModalOpen(true);
    };

    const cerrarModal = () => {
        setModalOpen(false);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setFileName(e.target.files[0]?.name || "");
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("autor", data.autor);
            formData.append("estado", data.estado);
            formData.append("precio", data.precio);
            formData.append("sinopsis", data.sinopsis);
            formData.append("stock", data.stock);
            formData.append("titulo", data.titulo);
            formData.append("idCategoria", data.id_categoria);

            if (selectedFile) {
                formData.append("img", selectedFile);
            } else {
                alert("Debes seleccionar un archivo");
                return;
            }

            let response;
            if (libroEditar && libroEditar.id) {
                // Editar libro existente
                response = await axios.put(
                    `${API_BASE_URL}/libros/${libroEditar.id}`, // Asegúrate de que este endpoint sea correcto
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
            } else {
                // Crear nuevo libro
                response = await axios.post(
                    API_BASE_URL + "/libros",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
            }

            fetchLibros(); // Recargar la lista de libros
            cerrarModal(); // Cerrar el modal
        } catch (error) {
            console.error("Error al guardar libro:", error);
            alert("Error al guardar libro");
        }
    };

    const eliminarLibro = async (id) => {
        if (!window.confirm("¿Estás seguro de eliminar este libro?")) return;
        try {
            await axios.delete(API_BASE_URL+"/libros/"+id);
            fetchLibros();
        } catch {
            setError("Error al eliminar libro");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 w-full ">
            <h2 className="text-2xl font-bold mb-4">CRUD de Libros</h2>
            <button
                onClick={abrirModalNuevo}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Nuevo Libro
            </button>

            {loading && <p>Cargando libros...</p>}
            {error && <p className="text-red-600">{error}</p>}

            <table className="min-w-full border border-gray-300 rounded">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">ID</th>
                        <th className="py-2 px-4 border-b text-left">Imagen</th>
                        <th className="py-2 px-4 border-b text-left">Título</th>
                        <th className="py-2 px-4 border-b text-left">Autor</th>
                        <th className="py-2 px-4 border-b text-left">
                            Categoria
                        </th>
                        <th className="py-2 px-4 border-b text-left">Stock</th>
                        <th className="py-2 px-4 border-b text-right">
                            Precio
                        </th>
                        <th className="py-2 px-4 border-b text-center">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro) => (
                        <tr key={libro.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">{libro.id}</td>
                            <td className="py-2 px-4 border-b">
                                <img
                                    src={
                                        libro.img
                                            ? `data:image/jpeg;base64,${libro.img}`
                                            : "/placeholder.jpg"
                                    }
                                    alt={libro.titulo}
                                    className=" object-cover w-10 h-15 "
                                />
                            </td>
                            <td className="py-2 px-4 border-b">
                                {libro.titulo}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {libro.autor}
                            </td>
                            <td className="py-2 px-4 border-b text-right">
                                {libro.categoria.nombre}
                            </td>
                            <td className={`py-2 px-4 border-b text-center `}>
                              <span className={`${libro.stock < 5 ? "bg-red-400" : "bg-green-300" } py-0.5 px-2 rounded-3xl `}>{libro.stock}</span>
                                
                            </td>
                            <td className="py-2 px-4 border-b text-right">
                                S/. {libro.precio.toFixed(2)}
                            </td>
                            <td className="py-2 px-4 border-b text-center space-x-2">
                                <button
                                    onClick={() => abrirModalEditar(libro)}
                                    className="text-yellow-600 hover:underline cursor-pointer"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminarLibro(libro.id)}
                                    className="text-red-600 hover:underline cursor-pointer"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                        <button
                            onClick={cerrarModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">
                            {libroEditar ? "Editar Libro" : "Nuevo Libro"}
                        </h2>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <div className="">
                                <label>
                                    Autor:
                                    <input
                                        type="text"
                                        {...register("autor", {
                                            required: "Autor es requerido",
                                        })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </label>
                                {errors.autor && (
                                    <p className="text-red-600">
                                        {errors.autor.message}
                                    </p>
                                )}
                            </div>

                            <div></div>

                            <div className="grid grid-cols-2 gap-4">
                                <label>
                                    Título:
                                    <input
                                        type="text"
                                        {...register("titulo", {
                                            required: "Título es requerido",
                                        })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </label>
                                {errors.titulo && (
                                    <p className="text-red-600">
                                        {errors.titulo.message}
                                    </p>
                                )}
                                <label>
                                    Categoría:
                                    <select
                                        {...register("id_categoria", {
                                            required: "Categoría es requerida",
                                            valueAsNumber: true,
                                        })}
                                        className="w-full border rounded px-3 py-2"
                                    >
                                        <option value="">
                                            Seleccione categoría
                                        </option>
                                        {categorias.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                                {errors.id_categoria && (
                                    <p className="text-red-600">
                                        {errors.id_categoria.message}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <label>
                                    Stock:
                                    <input
                                        type="number"
                                        {...register("stock", {
                                            required: "Stock es requerido",
                                            valueAsNumber: true,
                                        })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </label>
                                {errors.stock && (
                                    <p className="text-red-600">
                                        {errors.stock.message}
                                    </p>
                                )}
                                <label>
                                    Precio:
                                    <input
                                        type="number"
                                        step="0.01"
                                        {...register("precio", {
                                            required: "Precio es requerido",
                                            valueAsNumber: true,
                                        })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </label>
                                {errors.precio && (
                                    <p className="text-red-600">
                                        {errors.precio.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label>Sinopsis:</label>
                                <textarea
                                    {...register("sinopsis", {
                                        required: "Sinopsis es requerida",
                                    })}
                                    className="w-full border rounded px-3 py-2"
                                    rows={2}
                                />
                                {errors.sinopsis && (
                                    <p className="text-red-600">
                                        {errors.sinopsis.message}
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

                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded"
                            >
                                {libroEditar
                                    ? "Actualizar libro"
                                    : "Crear libro"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
