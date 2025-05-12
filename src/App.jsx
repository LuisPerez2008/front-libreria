
import { Carrusel } from "./components/Carrusel";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Inicio } from "./pages/Inicio";




function App() {
    return (
        <section className="bg-primary ">
           <Header /> 
            <Carrusel />
            <Inicio />
           <Footer />
        </section>
    );
}

export default App;
