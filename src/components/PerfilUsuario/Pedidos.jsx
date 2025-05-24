import { Link } from "react-router";
import { ListaProductos } from "../PerfilUsuario/ListaProductos";

function OrderStatusIcon({ status }) {
    switch (status) {
        case "completed":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 text-green-300"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                </svg>
            );
        case "processing":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 text-blue-300"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            );
        case "cancelled":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 text-red-300"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            );
        default:
            return null;
    }
}
function OrderStatusBadge({ status }) {
    switch (status) {
        case "completed":
            return (
                <span className="bg-green-300 px-2 py-[2.5px] text-center rounded-full">
                    Completado
                </span>
            );
        case "processing":
            return (
                <span className="bg-blue-300 px-2 py-[2.5px] rounded-full">
                    En proceso
                </span>
            );
        case "shipped":
            return (
                <span className="bg-purple-300 px-2 py-[2.5px] rounded-full">
                    Enviado
                </span>
            );
        case "cancelled":
            return (
                <span className="bg-red-300 px-2 py-[2.5px]  rounded-full">
                    Cancelado
                </span>
            );
        default:
            return null;
    }
}

export const Pedidos = ({
    userData,
    selectedOrder,
    showOrderDetails,
    backToOrderList,
}) => {
    console.log("userData", userData);

    return (
        <div className="bg-primary rounded-lg shadow-lg shadow-blue-secondary/50 overflow-hidden">
            <div className="p-4 border-b bg-yellow-secondary">
                <h2 className="font-medium">
                    {selectedOrder
                        ? `Detalles del pedido #${selectedOrder.id}`
                        : "Mis pedidos"}
                </h2>
            </div>

            {!selectedOrder ? (
                <div className="p-4">
                    <div className="space-y-4">
                        {userData.orders.length === 0 ? (
                            <div className="text-center py-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-12 w-12 mx-auto text-gray-400 mb-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                    />
                                </svg>
                                <h3 className="text-lg font-medium mb-2">
                                    No tienes pedidos
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    Aún no has realizado ningún pedido
                                </p>
                                <button>
                                    <Link
                                        to="/categorias"
                                        className="bg-blue-secondary/90 hover:bg-blue-secondary/70 text-white py-2 px-4 rounded-md "
                                    >
                                        Ir a comprar
                                    </Link>
                                </button>
                            </div>
                        ) : (
                            userData.orders?.map((order) => (
                                <div
                                    key={order.id}
                                    className="border rounded-md overflow-hidden"
                                >
                                    <div className="p-4 bg-yellow-secondary/10 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">
                                                    Pedido #{order.id}
                                                </span>
                                                <OrderStatusBadge
                                                    status={order.status}
                                                />
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                Fecha:{" "}
                                                {new Date(
                                                    order.date
                                                ).toLocaleDateString("es-CL")}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 ">
                                            <button
                                                className="text-xs py-2 px-4 flex gap-2 border-1 rounded-md bg-white cursor-pointer hover:bg-gray-100"
                                                onClick={() =>
                                                    showOrderDetails(order)
                                                }
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
                                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                    />
                                                </svg>
                                                Ver detalles
                                            </button>
                                            {order.status === "completed" && (
                                                <button className="text-xs py-2 px-4 flex gap-2 border-1 rounded-md bg-white cursor-pointer hover:bg-gray-100">
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
                                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                                        />
                                                    </svg>
                                                    Factura
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-4 flex flex-col sm:flex-row gap-4">
                                        <div className="flex gap-2 flex-wrap">
                                            {order.items.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="w-12 h-16 bg-gray-100 rounded-md overflow-hidden"
                                                >
                                                    <img
                                                        src={
                                                            item.image ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={item.title}
                                                        width={48}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex-1 flex flex-col sm:flex-row justify-between sm:items-center">
                                            <div>
                                                <p className="text-sm">
                                                    {order.items.length}{" "}
                                                    {order.items.length === 1
                                                        ? "producto"
                                                        : "productos"}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {order.items
                                                        .map(
                                                            (item) => item.title
                                                        )
                                                        .join(", ")}
                                                </p>
                                            </div>
                                            <div className="text-right mt-2 sm:mt-0">
                                                <p className="text-sm text-gray-500">
                                                    Total
                                                </p>
                                                <p className="font-bold">
                                                    $ {order.total}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ) : (
                <div className="p-4">
                    <button
                        className="mb-4 text-xs flex items-center justify-center cursor-pointer  py-2 px-2 rounded-md hover:bg-gray-100"
                        onClick={backToOrderList}
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
                        Volver a mis pedidos
                    </button>

                    <div className="flex items-center gap-2 mb-4">
                        <OrderStatusIcon status={selectedOrder.status} />
                        <span className="font-medium">
                            Estado:{" "}
                            <OrderStatusBadge status={selectedOrder.status} />
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-gray-100 rounded-md">
                            <h3 className="text-sm font-medium mb-2">
                                Información del pedido
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                        Número de pedido:
                                    </span>
                                    <span className="font-medium">
                                        {selectedOrder.id}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                        Fecha:
                                    </span>
                                    <span>
                                        {new Date(
                                            selectedOrder.date
                                        ).toLocaleDateString("es-CL")}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                        Total:
                                    </span>
                                    <span className="font-medium">
                                        $ {selectedOrder.total}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                        Método de pago:
                                    </span>
                                    <span>Tarjeta terminada en 4567</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-100 rounded-md">
                            <h3 className="text-sm font-medium mb-2">
                                Dirección de envío
                            </h3>
                            <div className="text-sm">
                                <p className="font-medium">
                                    {userData.name} {userData.lastName}
                                </p>
                                <p>
                                    {userData.addresses[0].street}{" "}
                                    {userData.addresses[0].number}
                                </p>
                                <p>
                                    {userData.addresses[0].city},{" "}
                                    {userData.addresses[0].state}{" "}
                                    {userData.addresses[0].zipCode}
                                </p>
                                <p>Chile</p>
                                <p className="mt-1">{userData.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium mb-3">Productos</h3>
                        <div className="border rounded-md overflow-hidden">
                            {selectedOrder.items.map((item, index) => (
                                <ListaProductos
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    selectedOrder={selectedOrder}
                                />
                            ))}
                        </div>

                        <div className="mt-4 p-4 bg-gray-100 rounded-md">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm">Subtotal:</span>
                                    <span>
                                        ${" "}
                                        {selectedOrder.total.toLocaleString(
                                            "es-CL"
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm">Envío:</span>
                                    <span>Gratis</span>
                                </div>
                                <div className="flex justify-between font-medium pt-2 border-t">
                                    <span>Total:</span>
                                    <span>
                                        ${" "}
                                        {selectedOrder.total.toLocaleString(
                                            "es-CL"
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <button className="flex items-center gap-2 px-2 py-1 border-1 rounded-md bg-white  hover:bg-gray-100 cursor-pointer">
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
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                Descargar factura
                            </button>

                            {selectedOrder.status === "processing" && (
                                <button className="text-red-600  border-red-300 hover:bg-red-100 hover:text-black border-2 cursor-pointer  px-2 py-1 rounded-md flex items-center gap-2">
                                    Cancelar pedido
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
