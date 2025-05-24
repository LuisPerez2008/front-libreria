export const ListaProductos = ({item, index , selectedOrder}) => {
    return (
        <div
            className={`p-4 flex gap-4 ${
                index < selectedOrder.items.length - 1 ? "border-b " : ""
            }`}
        >
            <div className="w-16 h-20 bg-gray-100 rounded-md overflow-hidden">
                <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={64}
                    height={80}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row justify-between">
                <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-500">
                        Cantidad: {item.quantity}
                    </p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                    <p className="text-sm text-gray-500">Precio unitario</p>
                    <p className="font-medium">
                        $ {item.price.toLocaleString("es-CL")}
                    </p>
                </div>
            </div>
        </div>
    );
};
