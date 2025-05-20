import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Contactanos from "./pages/Contactanos";
import { Inicio } from "./pages/Inicio";
import { Blog } from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router";
import { Nosotros } from "./pages/Nosotros";
import { Categorias } from "./pages/Categorias";
import { InicioSesion } from "./pages/InicioSesion";
import { Registro } from "./pages/Registro";
import { DetalleLibro } from "./pages/DetalleLibro";

function App() {
    return (
        <section className="bg-primary ">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contactanos" element={<Contactanos />} />
                    <Route path="/inicio-sesion" element={<InicioSesion/>} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/libro/:titulo-id" element={<DetalleLibro />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </section>
    );
}

export default App;
