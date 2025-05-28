import { Link } from "react-router";
import { ListaProductos } from "../PerfilUsuario/ListaProductos";
import { VerDetalle } from "./VerDetalle";
import { ListaPedidos } from "./ListaPedidos";

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
        case "Completado":
            return (
                <span className="bg-green-300 px-2 py-[2.5px] text-center rounded-full">
                    Completado
                </span>
            );
        case "Pendiente":
            return (
                <span className="bg-blue-300 px-2 py-[2.5px] rounded-full">
                    En proceso
                </span>
            );
        case "Enviado":
            return (
                <span className="bg-purple-300 px-2 py-[2.5px] rounded-full">
                    Enviado
                </span>
            );
        case "Canselado":
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
    usuario,
}) => {
    return (
        <div className="bg-primary rounded-lg shadow-lg shadow-blue-secondary/50 overflow-hidden">
            <div className="p-4 border-b bg-yellow-secondary">
                <h2 className="font-medium">
                    {selectedOrder
                        ? `Detalles del pedido #ORD-2025-${selectedOrder.id}`
                        : "Mis pedidos"}
                </h2>
            </div>

            {!selectedOrder ? (
                <div className="p-4">
                    <div className="space-y-4">
                        {usuario.pedidos.length === 0 ? (
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
                            usuario.pedidos?.map((order) => (
                                <ListaPedidos
                                    key={order.id}
                                    order={order}
                                    showOrderDetails={showOrderDetails}
                                    OrderStatusBadge={OrderStatusBadge}
                                />
                            ))
                        )}
                    </div>
                </div>
            ) : (
                <VerDetalle
                    selectedOrder={selectedOrder}
                    backToOrderList={backToOrderList}
                    OrderStatusBadge={OrderStatusBadge}
                    OrderStatusIcon={OrderStatusIcon}
                    usuario={usuario}
                />
            )}
        </div>
    );
};
