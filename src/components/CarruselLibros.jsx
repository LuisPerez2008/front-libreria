import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation } from "swiper/modules";
import { CardLibro } from "./CardLibro";

const libros = [
    {
        id: 1,
        titulo: "El Principito: Los mejores momentos del zorro con patas",
        autor: "Antoine de Saint-Exupéry",
        descripcion:
            "Una historia entrañable sobre la amistad y el valor de las cosas simples, protagonizada por un pequeño príncipe y su fiel zorro.",
        precio: 15.99,
        imagen: "https://dcassetcdn.com/design_img/3891363/745365/25367600/nqc9cm972mxd0zv8ehg8mwkdb0_thumbnail.png",
    },
    {
        id: 2,
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        descripcion:
            "La saga mágica y trágica de la familia Buendía en el mítico pueblo de Macondo, donde el tiempo y la realidad se entrelazan.",
        precio: 20.99,
        imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125027580_m5jqihtccdatavfk.jpg",
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        descripcion:
            "Un inquietante retrato de una sociedad vigilada y controlada, donde la libertad y la verdad están en constante peligro.",
        precio: 18.5,
        imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
    },
    {
        id: 4,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        descripcion:
            "Las aventuras de un caballero idealista y su escudero Sancho, en busca de justicia y fantasía en la España del Siglo de Oro.",
        precio: 25.0,
        imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9788408176312_lvm83fkcl2zr53he.jpg",
    },
    {
        id: 5,
        titulo: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        descripcion:
            "Una historia de amor y malentendidos en la Inglaterra rural, donde el orgullo y los prejuicios desafían a los sentimientos.",
        precio: 14.99,
        imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9788419680693_rpqrajhlhkjmitri.jpg",
    },
    {
        id: 6,
        titulo: "Crónica de una Muerte Anunciada",
        autor: "Gabriel García Márquez",
        descripcion:
            "Un relato fascinante sobre el destino y la fatalidad en un pequeño pueblo, donde todos conocen el crimen antes de que ocurra.",
        precio: 16.99,
        imagen: "https://dcassetcdn.com/design_img/1100794/499411/499411_5885818_1100794_thumbnail.jpg",
    },
    {
        id: 7,
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        descripcion:
            "Una novela revolucionaria que invita al lector a saltar entre capítulos y descubrir múltiples caminos en la vida de Horacio Oliveira.",
        precio: 19.99,
        imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9788414059296_tnib4msm7193mrgg.jpg",
    },
    {
        id: 8,
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        descripcion:
            "El viaje de un pequeño príncipe por distintos planetas, aprendiendo valiosas lecciones sobre la vida y el amor.",
        precio: 15.99,
        imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9788412862911_txzhz8mbdk8gaipu.jpg",
    },
    {
        id: 9,
        titulo: "La Sombra del Viento",
        autor: "Carlos Ruiz Zafón",
        descripcion:
            "Un joven descubre un libro maldito en la Barcelona de posguerra y se ve envuelto en un misterio literario apasionante.",
        precio: 21.99,
        imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9788483933657_sl37rq3zmhmyrfeq.jpg",
    },
    {
        id: 10,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        descripcion:
            "En un mundo donde los libros están prohibidos, un bombero descubre el poder de la lectura y la libertad de pensamiento.",
        precio: 18.5,
        imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9788419680648_iy148gjjnzbv4vri.jpg",
    },
];

export const CarruselLibros = () => {
    return (
        <div className=" max-w-[90%] md:max-w-[70%] mx-auto ">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#FFBE2D",
                    "--swiper-pagination-color": "#FFBE2D",
                }}
                loop={true}
                navigation={true}
                freeMode={false}
                loopAdditionalSlides={2}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[FreeMode, Navigation]}
                className="mySwiper2 "
            >
                {libros.map((libro) => (
                    <SwiperSlide
                        key={libro.id}
                        className="min-w-[120px]  max-w-[180px] min-h-[350px] max-h-[550px]"
                    >
                        <CardLibro libro={libro} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
