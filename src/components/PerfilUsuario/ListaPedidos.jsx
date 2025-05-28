export const ListaPedidos = ({ order, showOrderDetails, OrderStatusBadge }) => {
    return (
        <div key={order.id} className="border rounded-md overflow-hidden">
            <div className="p-4 bg-yellow-secondary/10 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium">
                            Pedido #ORD-2025-{order.id}
                        </span>
                        <OrderStatusBadge status={order.estado} />
                    </div>
                    <p className="text-sm text-gray-500">
                        Fecha: {order.fecha}
                    </p>
                </div>
                <div className="flex items-center gap-2 ">
                    <button
                        className="text-xs py-2 px-4 flex gap-2 border-1 rounded-md bg-white cursor-pointer hover:bg-gray-100"
                        onClick={() => showOrderDetails(order)}
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
                    {order.estado === "Completado" && (
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
                <div className="flex gap-2 flex-wrap max-w-[40%] ">
                    {order.detalles.map((item) => (
                        <div
                            key={item.id}
                            className="w-12 h-16 bg-gray-100 rounded-md overflow-hidden "
                        >
                            <img
                                src={
                                    item.libro?.img
                                        ? `data:image/jpeg;base64,${item.libro.img}`
                                        : "/placeholder.jpg"
                                }
                                alt={item.libro.titulo}
                                width={48}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex-1 flex flex-col sm:flex-row justify-between sm:items-center ">
                    <div>
                        <p className="text-sm">
                            {order.detalles?.length}{" "}
                            {order.detalles?.length === 1
                                ? "producto"
                                : "productos"}
                        </p>
                        <p className="text-xs text-gray-500">
                            {order.detalles
                                ?.map((item) => item.libro.titulo)
                                .join(", ")}
                        </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0 min-w-[70px] ">
                        <p className="text-sm text-gray-500">Total</p>
                        <p className="font-bold">$ {order.precioFinal}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
