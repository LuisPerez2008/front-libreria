const Contactanos = () => {
    return (
        <div className="contacto-container">
            <div className="contacto-banner">
                <img src="https://www.shutterstock.com/image-illustration/contact-us-email-call-message-600nw-766338313.jpg" />
            </div>
            <div className="contacto-box">
                <h2>Contáctanos</h2>
                <p>
                    Aquí encontrarás nuestros datos de contacto para cualquier
                    consulta.
                </p>
                <p>📞 (01) 354-6976</p>
                <p>✉️ contacto@libroespacio.com</p>
                <p>Puedes ubicarnos en:📍 Av. Arequipa 1017, Lima</p>
                <div className="mapa">
                    <iframe
                        title="Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.3869653122593!2d-77.03672879479821!3d-12.0745991523831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f2812393b5%3A0xa8234144e8c80db0!2sAv.%20Arequipa%201017%2C%20Lima%2015046!5e0!3m2!1ses!2spe!4v1746893088274!5m2!1ses!2spe"
                        alt="Banner de contacto"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="formulario-box">
                <p>
                    Si tienes alguna consulta déjanos tu mensaje y en breve te
                    contestaremos.
                </p>
                <form>
                    <input
                        type="text"
                        placeholder="Nombre y apellidos"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        required
                    />
                    <input type="tel" placeholder="Teléfono" required />
                    <input type="text" placeholder="Asunto" required />
                    <textarea placeholder="Mensaje" required></textarea>
                    <label>
                        <input type="checkbox" required />
                        <span>
                            He leído y acepto la política de protección de datos
                            personales.
                        </span>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contactanos;
