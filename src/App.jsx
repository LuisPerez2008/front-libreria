
import { Carrusel } from "./components/Carrusel";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";



function App() {
    return (
        <section className="bg-primary ">
           <Header /> 
            <Carrusel />
            <div className="flex justify-center items-center h-screen">

            </div>
           <Footer />
        </section>
    );
}

export default App;
