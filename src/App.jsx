import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Contactanos from "./pages/Contactanos";
import { Inicio } from "./pages/Inicio";
import { Blog } from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router";
import { Nosotros } from "./pages/Nosotros";
import { Categorias } from "./pages/Categorias";

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
                </Routes>
                <Footer />
            </BrowserRouter>
        </section>
    );
}

export default App;
