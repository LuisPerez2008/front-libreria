import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "../contextos/CartContext";
import { useContext } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation } from "swiper/modules";
import { CardLibro } from "./CardLibro";


   

export const CarruselLibros = ({libros}) => {
    const {agregarAlCart, cartItems} = useContext(CartContext)
    console.log(cartItems)
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
                        <CardLibro libro={libro} agregarAlCart={agregarAlCart} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
