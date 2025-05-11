import { data } from "../assets/data";
import { useEffect, useRef, useState } from "react";

export const Carrusel = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === "prev") {
            setCurrentIndex((curr) => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? data.length - 1 : curr - 1;
            });
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if (isLastSlide) {
                setCurrentIndex(0); 
            } else {
                setCurrentIndex((curr) => curr + 1); 
            }
        }
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className=" w-full h-auto mx-auto ">
            <div className=" relative h-full">
                <div
                    className=" absolute top-1/2 left-8 transform -translate-y-1/2 text-white text-4xl font-bold z-10 cursor-pointer"
                    onClick={() => scrollToImage("prev")}
                >
                    &#10092;
                </div>
                <div
                    className=" absolute top-1/2 right-8 transform -translate-y-1/2 text-white text-4xl font-bold z-10 cursor-pointer"
                    onClick={() => scrollToImage("next")}
                >
                    &#10093;
                </div>
                <div className=" w-full h-full overflow-hidden">
                    <ul
                        ref={listRef}
                        className="list-none whitespace-nowrap  inline"
                    >
                        {data.map((item) => (
                            <li key={item.id} className="inline-block">
                                <img src={item.imgUrl} className="" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative flex justify-center -top-10 z-20">
                    {data.map((_, idx) => (
                        <div
                            key={idx}
                            className={` mx-1 cursor-pointer text-xs text-center ${
                                idx === currentIndex
                                    ? "bg-gray-300 w-[15px] h-[15px] rounded-full"
                                    : ""
                            }`}
                            onClick={() => goToSlide(idx)}
                        >
                            &#9865;
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
