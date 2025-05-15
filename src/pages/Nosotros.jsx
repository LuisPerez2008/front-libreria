export const Nosotros = () => {
    return (
        <div className="nosotros-container md:max-w-[70%] mx-auto">
            <div className="banner">
                <div className="banner-text">
                    <h1>Bienvenido a Libroespacio </h1>
                    <p>
                        Sumérgete en el maravilloso mundo de la lectura. Aquí
                        descubrirás historias que inspiran, educan y acompañan
                        cada etapa de tu vida.
                    </p>
                    <button>CREA TU CUENTA AHORA</button>
                </div>
                <div className="banner-img">
                    <img
                        src="https://imagenes.elpais.com/resizer/v2/T6PFTMFY4ND6BEN6GL5DYLCDK4.jpg?auth=85ccf90dd979b10ee593f660c6d5ac61548f2e76bd7c87dc2442b9d86ae79804&width=1960&height=1470&smart=true"
                        alt="Lectura"
                    />
                </div>
            </div>
            <section className="historia">
                <h2>NUESTRA HISTORIA</h2>
                <p>
                    Libroespacio nació con el sueño de acercar la lectura a más
                    personas, rompiendo las barreras físicas y haciendo que los
                    libros estén siempre al alcance de todos. Desde 2023, hemos
                    ido creciendo junto a una comunidad de lectores que
                    comparten la misma pasión por aprender, imaginar y descubrir
                    nuevas historias. Hoy seguimos avanzando con la misma idea:
                    ser un lugar confiable donde siempre encuentres el libro
                    perfecto para ti.
                </p>
            </section>
            <section className="mision">
                <h2>MISIÓN</h2>
                <p>
                    Queremos que todos puedan acceder a buenos libros de manera
                    fácil y rápida. Nuestra misión es fomentar la pasión por la
                    lectura en cada rincón, haciendo que encontrar y disfrutar
                    de un libro sea algo sencillo y agradable para todos.
                </p>
            </section>
            <section className="vision">
                <h2>VISIÓN</h2>
                <p>
                    Buscamos ser la librería online más reconocida en América
                    Latina, acercando la cultura y el conocimiento a cada hogar.
                    Queremos que Libroespacio se convierta en el lugar donde las
                    personas siempre encuentren inspiración, aprendizaje y
                    momentos especiales a través de la lectura.
                </p>
            </section>
        </div>
    );
};
