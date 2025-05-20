import { CardLibro } from "./CardLibro";
const libros = [
    {
        id: 1,
        titulo: "El Principito los mejores momenotos del zorro con patas ",
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
    {
        id: 7,
        titulo: "Orgullo y Prejuicio",
        descripcion:
            "Una novela romántica de Jane Austen sobre el amor y las diferencias sociales.",
        precio: 14.99,
        imagen: "https://dcassetcdn.com/design_img/1100794/499411/499411_5885818_1100794_thumbnail.jpg",
    },
    {
        id: 8,
        titulo: "El Principito",
        descripcion:
            "Un clásico de la literatura que narra las aventuras de un pequeño príncipe.",
        precio: 15.99,
        imagen: "https://dcassetcdn.com/design_img/3891363/745365/25367600/nqc9cm972mxd0zv8ehg8mwkdb0_thumbnail.png",
    },
    {
        id: 9,
        titulo: "Cien Años de Soledad",
        descripcion:
            "La obra maestra de Gabriel García Márquez sobre la familia Buendía.",
        precio: 20.99,
        imagen: "https://dcassetcdn.com/design_img/3891363/58928/25357124/j1kvk5nzt1zhsw14jkm34b2pt2_thumbnail.png",
    },
    {
        id: 10,
        titulo: "1984",
        descripcion:
            "Una novela distópica de George Orwell que explora un futuro totalitario.",
        precio: 18.5,
        imagen: "https://dcassetcdn.com/design_img/1100794/499411/499411_5885818_1100794_thumbnail.jpg",
    },
];

export const Paginacion = () => {
    return (
        <>
            <div className=" w-full grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2">
                {libros.map((libro) => (
                    <CardLibro key={libro.id} libro={libro} />
                ))}
            </div>
        </>
    );
};
