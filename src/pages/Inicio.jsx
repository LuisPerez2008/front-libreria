

const libros = [
    {
        id: 1,
        titulo: "El Principito",
        descripcion:
            "Un clásico de la literatura que narra las aventuras de un pequeño príncipe.",
        precio: 15.99,
        imagen: "https://dcassetcdn.com/design_img/3891363/745365/25367600/nqc9cm972mxd0zv8ehg8mwkdb0_thumbnail.png",
    },
    {
        id: 2,
        titulo: "Cien Años de Soledad",
        descripcion:
            "La obra maestra de Gabriel García Márquez sobre la familia Buendía.",
        precio: 20.99,
        imagen: "https://dcassetcdn.com/design_img/3891363/58928/25357124/j1kvk5nzt1zhsw14jkm34b2pt2_thumbnail.png",
    },
    {
        id: 3,
        titulo: "1984",
        descripcion:
            "Una novela distópica de George Orwell que explora un futuro totalitario.",
        precio: 18.5,
        imagen: "https://dcassetcdn.com/design_img/1100794/499411/499411_5885818_1100794_thumbnail.jpg",
    },
    {
        id: 4,
        titulo: "Don Quijote de la Mancha",
        descripcion:
            "La historia de un caballero idealista y su fiel escudero.",
        precio: 25.0,
        imagen: "https://dcassetcdn.com/design_img/3891363/58928/25357124/j1kvk5nzt1zhsw14jkm34b2pt2_thumbnail.png",
    },
    {
        id: 5,
        titulo: "Orgullo y Prejuicio",
        descripcion:
            "Una novela romántica de Jane Austen sobre el amor y las diferencias sociales.",
        precio: 14.99,
        imagen: "https://dcassetcdn.com/design_img/1100794/499411/499411_5885818_1100794_thumbnail.jpg",
    },
    {
        id: 6,
        titulo: "Orgullo y Prejuicio",
        descripcion:
            "Una novela romántica de Jane Austen sobre el amor y las diferencias sociales.",
        precio: 14.99,
        imagen: "https://dcassetcdn.com/design_img/1100794/499411/499411_5885818_1100794_thumbnail.jpg",
    },
];

export const Inicio = () => {
    <section className="md:max-w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center mb-4">Libros Destacados</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {libros.map((libro) => (
                    <div
                        key={libro.id}
                        className="bg-white shadow-md rounded-lg p-4"
                    >
                        <img
                            src={libro.imagen}
                            alt={libro.titulo}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h2 className="text-xl font-semibold mt-2">
                            {libro.titulo}
                        </h2>
                        <p className="text-gray-600">{libro.descripcion}</p>
                        <p className="text-lg font-bold mt-2">
                            ${libro.precio.toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    </section>;
};
