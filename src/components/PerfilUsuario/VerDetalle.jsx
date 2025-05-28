import { ListaProductos } from "./ListaProductos";


export const VerDetalle = ({ OrderStatusIcon, OrderStatusBadge, backToOrderList, selectedOrder, usuario}) => {

    return (
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
                <OrderStatusIcon status={selectedOrder.estado} />
                <span className="font-medium">
                    Estado: <OrderStatusBadge status={selectedOrder.estado} />
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
                                {"ORD-2025-"}{selectedOrder.id}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Fecha:</span>
                            <span>
                                {new Date(
                                    selectedOrder.fecha
                                ).toLocaleDateString("es-CL")}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Total:</span>
                            <span className="font-medium">
                                $ {selectedOrder.precioFinal}
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
                            {usuario.nombre} {usuario.apellido}
                        </p>
                        <p>
                            {selectedOrder.direccion.tipo}{" "}
                            {selectedOrder.direccion.numero}
                        </p>
                        <p>
                            {selectedOrder.direccion.ciudad},{" "}
                            {selectedOrder.direccion.calle}{" "}
                            {selectedOrder.direccion.codigo_postal}
                        </p>
                        <p>Peru</p>
                        <p className="mt-1">{usuario.numero}</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-3">Productos</h3>
                <div className="border rounded-md overflow-hidden">
                    {selectedOrder.detalles.map((item, index) => (
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
                                $ {selectedOrder.precioFinal}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm">Envío:</span>
                            <span>Gratis</span>
                        </div>
                        <div className="flex justify-between font-medium pt-2 border-t">
                            <span>Total:</span>
                            <span>
                                $ {selectedOrder.precioFinal}
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
    );
};
