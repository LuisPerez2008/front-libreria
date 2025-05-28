import { useLocation } from "react-router";
import { useState } from "react";
import { DetalleLibroDatos } from "../components/DetalleLibroDatos";
import { DetalleLibroInfo } from "../components/DetalleLibroInfo";


export const DetalleLibro = () => {
    const location = useLocation();
    const libro = location.state?.libro;
    const [activo, setActivo] = useState("info");

    return (
        <div className="w-[90%]  lg:w-[70%] mx-auto mt-10">
            <DetalleLibroDatos libro={libro} />
            <DetalleLibroInfo setActivo={setActivo} activo={activo} libro={libro} />
        </div>
    );
};
