export const ListaProductos = ({item, index , selectedOrder}) => {
    console.log(item)
    return (

       /*  <div
            className={`p-4 flex gap-4 ${
                index < selectedOrder.items.length - 1 ? "border-b " : ""
            }`}
        > */
        <div
            className={`p-4 flex gap-4 border-b-1 `}
        >
            <div className="w-16 h-20 bg-gray-100 rounded-md overflow-hidden">
                <img
                    src={item.libro.img ? `data:image/jpeg;base64,${item.libro.img}` : "/placeholder.jpg"}
                    alt={item.libro.titulo}
                    width={64}
                    height={80}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row justify-between">
                <div>
                    <h4 className="font-medium">{item.libro.titulo}</h4>
                    <p className="text-sm text-gray-500">
                        Cantidad: {item.cantidad}
                    </p>
                    <p className="text-sm text-gray-500">
                        Autor: {item.libro.autor}
                    </p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                    <p className="text-sm text-gray-500">Precio unitario</p>
                    <p className="font-medium">
                        $ {item.libro.precio}
                    </p>
                </div>
            </div>
        </div>
    );
};
