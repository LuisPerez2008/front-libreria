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
