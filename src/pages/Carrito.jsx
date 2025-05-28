import { useContext, useState, useEffect } from "react";
import { Link } from "react-router";
import { CartContext } from "../contextos/CartContext";
import { useFetchData } from "../hooks/useFetchData";
import { API_BASE_URL } from "../config/baseURL";
import axios from "axios";

export const Carrito = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const usuarioJSON = localStorage.getItem("usuario");
    const usuario = usuarioJSON ? JSON.parse(usuarioJSON) : null;

    const { cartItems, quitarDeCart, vaciarCart, totalItems, setCartItems } =
        useContext(CartContext);

        console.log(cartItems)
    const { data: direcciones } = useFetchData(
        usuario ? `/direcciones/cliente/${usuario.id}` : null
    );

    const validarUsuario = () => {
        if (usuario) {
            openModal(true);
        }
        return false;
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const openModal = () => {
        setIsOpen(true);
    };

   const crearPedido = () => {
    const fecha = new Date().toISOString().split("T")[0];

    const pedidoData = {
        cliente: { id: usuario.id },
        direccion: { id: selectedId },
        estado: "Pendiente",
        precioFinal: total,
        fecha: fecha,
    };

    axios
        .post(API_BASE_URL + "/pedidos", pedidoData)
        .then((res) => {
            const pedidoCreado = res.data;
            console.log("Pedido creado:", pedidoCreado);

            // Ahora creamos los detalles
            const detallesPromises = cartItems.map((item) => {
                const detalleData = {
                    libro: { id: item.id },
                    pedido: { id: pedidoCreado.id },
                    cantidad: item.quantity,
                    precioTotal: item.precio * item.quantity,
                    estado: 1
                };

                return axios.post(API_BASE_URL + "/detalles", detalleData);
            });

            
            return Promise.all(detallesPromises);
        })
        .then((respuestasDetalles) => {
            console.log("Todos los detalles fueron creados:", respuestasDetalles);
            
        })
        .catch((err) => {
            console.error("Error en pedido o detalles:", err.response?.data || err.message);
        });

        vaciarCart();
        setIsOpen(false);
};

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.precio * item.quantity,
        0
    );

    const [envio, setEnvio] = useState(10);
    useEffect(() => {
        if (cartItems.length === 0 || subtotal > 190) {
            setEnvio(0);
        } else {
            setEnvio(10);
        }
    }, [subtotal, cartItems.length]);

    const total = subtotal + envio;

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Lista de productos */}
                    <div className="lg:col-span-2">
                        <div className="bg-primary rounded-lg shadow-sm overflow-hidden">
                            <div className="p-4 bg-blue-secondary text-white flex justify-between ">
                                <h1 className="text-xl font-bold mb-8">
                                    Mi Carrito ({totalItems} productos)
                                </h1>
                                <button
                                    onClick={vaciarCart}
                                    className="cursor-pointer hover:bg-yellow-secondary/30 h-6 px-2 transition-all "
                                >
                                    Vaciar Carrito
                                </button>
                            </div>

                            <div className="">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="p-4 flex flex-col sm:flex-row gap-4"
                                    >
                                        <div className="flex-shrink-0 w-24 h-36 bg-gray-100 rounded-md overflow-hidden">
                                            <img
                                                src={
                                                    item.img
                                                        ? `data:image/jpeg;base64,${item.img}`
                                                        : "/placeholder.jpg"
                                                }
                                                alt={item.title}
                                                width={100}
                                                height={150}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row justify-between">
                                                <div>
                                                    <h3 className="font-medium">
                                                        {item.titulo}
                                                    </h3>
                                                    {item.autor && (
                                                        <p className="text-sm text-gray-500">
                                                            Autor: {item.autor}
                                                        </p>
                                                    )}

                                                    <div className="mt-2 flex items-center">
                                                        <span className="font-bold text-lg">
                                                            S/.
                                                            {item.precio.toLocaleString()}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="mt-4 sm:mt-0 flex items-center">
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity -
                                                                    1
                                                            )
                                                        }
                                                        className="cursor-pointer"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1}
                                                            stroke="currentColor"
                                                            className="size-8"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <span className="mx-3 w-8 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity +
                                                                    1
                                                            )
                                                        }
                                                        className="cursor-pointer"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1}
                                                            stroke="currentColor"
                                                            className="size-8"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex justify-between items-center">
                                                <button
                                                    onClick={() =>
                                                        quitarDeCart(item.id)
                                                    }
                                                    className="text-red-600 text-sm flex items-center cursor-pointer"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="size-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                        />
                                                    </svg>
                                                    Eliminar
                                                </button>

                                                <div className="text-right">
                                                    <p className="text-sm text-gray-500">
                                                        Subtotal:
                                                    </p>
                                                    <p className="font-bold">
                                                        S/.{" "}
                                                        {(
                                                            item.precio *
                                                            item.quantity
                                                        ).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 bg-primary border-t-1 flex justify-between items-center">
                                <Link
                                    to="/categorias"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5 8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                    Seguir comprando
                                </Link>

                                <div className="text-right">
                                    <p className="text-sm text-gray-500">
                                        Subtotal ({totalItems} productos):
                                    </p>
                                    <p className="font-bold text-lg">
                                        S/. {subtotal.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resumen de compra */}
                    <div>
                        <div className="bg-primary rounded-lg shadow-sm overflow-hidden sticky top-4">
                            <div className="p-4 border-b bg-blue-secondary text-white">
                                <h2 className="font-medium">
                                    Resumen de compra
                                </h2>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal:</span>
                                    <span>S./ {subtotal.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Envío:</span>
                                    <span>
                                        {envio === 0
                                            ? "Gratis"
                                            : `S/. ${envio}`}
                                    </span>
                                </div>

                                <div className="pt-4 border-t">
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Total:</span>
                                        <span>S/. {total.toFixed(2)}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Impuestos incluidos
                                    </p>
                                </div>

                                <button
                                    onClick={validarUsuario}
                                    disabled={total === 0 || usuario === null}
                                    className="w-full py-6 mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:pointer-events-none disabled:opacity-50 bg-yellow-secondary cursor-pointer text-primary-foreground hover:bg-yellow-secondary/80 h-11 px-8"
                                >
                                    Proceder al pago
                                </button>
                                {usuario ? (
                                    ""
                                ) : (
                                    <span className="text-sm ml-6 text-red-400 ">
                                        Debes registrarte para poder pagar
                                    </span>
                                )}

                                <div className="mt-4 text-xs text-gray-500">
                                    <p className="flex items-center justify-center gap-2 mb-2">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 12L11 14L15 10"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Pago seguro garantizado
                                    </p>
                                    <p className="flex items-center justify-center gap-2">
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
                                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                            />
                                        </svg>
                                        Envío a todo el país
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {isOpen && (
                    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-slate-300/45 bg-opacity-50">
                        <div className="relative bg-primary rounded-lg shadow  w-full max-w-2xl p-4">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b p-4 ">
                                <h3 className="text-xl font-semibold text-gray-900 ">
                                    Elige direccion de envio
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex items-center justify-center "
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
                            <div className="p-4 grid grid-cols-2 gap-2 ">
                                {direcciones.map((direccion) => (
                                    <div
                                        key={direccion.id}
                                        onClick={() =>
                                            setSelectedId(direccion.id)
                                        }
                                        className={`cursor-pointer flex items-center p-4 rounded-md transition-colors
                        ${
                            selectedId === direccion.id
                                ? "bg-blue-200" // clase cuando está seleccionado
                                : "bg-yellow-secondary/30 hover:bg-yellow-secondary/50" // clase cuando no lo está
                        } // clase cuando no lo está`}
                                    >
                                        <div className="text-sm">
                                            <p className="font-bold">
                                                {" "}
                                                {direccion.tipo}
                                            </p>
                                            <p>
                                                {"numero: "}
                                                {direccion.numero}
                                            </p>
                                            <p>
                                                {direccion.ciudad},{" "}
                                                {direccion.calle}{" "}
                                            </p>
                                            <p>{direccion.codigo_postal}</p>
                                            <p>Peru</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-end p-4 border-t ">
                                <button
                                    onClick={crearPedido}
                                    className="text-white bg-blue-secondary/80 hover:bg-blue-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 cursor-pointer transition-colors duration-200 ease-in-out"
                                >
                                    Comprar
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-secondary cursor-pointer transition-colors duration-200 ease-in-out"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
