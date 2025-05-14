export const CardLibro = ({libro}) => {
    return (
        <div className="space-y-2 rounded-lg h-full min-h-[350px] bg-primary">
            <img
                src={libro.imagen}
                alt={libro.titulo}
                className=" object-cover max-w-[80%] mx-auto "
            />
            <h2 className=" text-[0.9rem] min-h-[40px] max-h-[40px]  text-ellipsis overflow-hidden line-clamp-2 ">{libro.titulo}</h2>
            <p className="text-sm text-gray-600  min-h-[40px] max-h-[50px]  text-ellipsis overflow-hidden line-clamp-2"> Navarro Durán, Rosa y Rovira, Francesc asdasdaddddddddd</p>
            <p className="text-lg font-bold mt-2 text-blue-secondary ">S/.{libro.precio.toFixed(2)}</p>
        </div>
    );
};
