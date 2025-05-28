import Contactanos from "./pages/Contactanos";
import { Inicio } from "./pages/Inicio";
import { Blog } from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router";
import { Nosotros } from "./pages/Nosotros";
import { Categorias } from "./pages/Categorias";
import { InicioSesion } from "./pages/InicioSesion";
import { Registro } from "./pages/Registro";
import { DetalleLibro } from "./pages/DetalleLibro";
import { Carrito } from "./pages/Carrito";
import { PerfilUsuario } from "./pages/PerfilUsuario";
import { Layout } from "./layouts/Layout";
import { RegistroLibros } from "./pages/RegistroLibros";
import { CartProvider } from "./contextos/CartContext";
import { Inventario } from "./pages/adminPages/Inventario";
import { CrudLibro } from "./pages/adminPages/CrudLibro";

function App() {
    return (
        <section className="bg-primary ">
            <CartProvider >
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/inicio" element={<Inicio />} />
                        <Route path="/categorias" element={<Categorias />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contactanos" element={<Contactanos />} />
                        <Route path="/inicio-sesion" element={<InicioSesion />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/libro/:id" element={<DetalleLibro />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/perfil-usuario" element={<PerfilUsuario />}/>
                        <Route path="/registro-libro" element={<RegistroLibros/>}/>
                    </Route>
                    <Route path="/inicio-sesion2" element={<InicioSesion />} />
                    <Route path="/inventario" element={<CrudLibro />} />
                </Routes>
            </BrowserRouter>
            </CartProvider>
        </section>
    );
}

export default App;
