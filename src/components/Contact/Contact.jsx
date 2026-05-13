import { useState } from 'react'
import './Contact.css'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
    const [result, setResult] = useState("");
    const [sending, setSending] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        setResult("Enviando...");

        const formData = new FormData(event.target);
        // TODO: Reemplazar con tu API key de Web3Forms
        formData.append("access_key", "TU_API_KEY_WEB3FORMS");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setResult("¡Mensaje enviado exitosamente! 🎉");
                event.target.reset();
            } else {
                setResult("Error al enviar. Inténtalo de nuevo.");
            }
        } catch (error) {
            setResult("Error de conexión. Inténtalo de nuevo.");
        }
        setSending(false);
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Contacto</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Hablemos</h1>
                    <p>
                        Actualmente estoy disponible para nuevos proyectos.
                        Siéntete libre de enviarme un mensaje con tu idea
                        y te responderé lo antes posible.
                    </p>
                    <div className="contact-details">
                        <a href="mailto:david-963369@hotmail.com" className="contact-detail">
                            <FiMail size={22} color="#22D3EE" />
                            {/* TODO: Reemplazar con tu email */}
                            <p>david-963369@hotmail.com</p>
                        </a>
                        <a href="tel:+573044155956" className="contact-detail">
                            <FiPhone size={22} color="#22D3EE" />
                            {/* TODO: Reemplazar con tu teléfono */}
                            <p>+573044155956</p>
                        </a>
                        <div className="contact-detail">
                            <FiMapPin size={22} color="#22D3EE" />
                            {/* TODO: Reemplazar con tu ubicación */}
                            <p>Colombia - Cartagena</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={onSubmit}>
                        <label>Tu nombre</label>
                        <input type="text" placeholder="Ingresa tu nombre" name="name" required />
                        <label>Tu email</label>
                        <input type="email" placeholder="Ingresa tu email" name="email" required />
                        <label>Tu mensaje</label>
                        <textarea name="message" rows="6" placeholder="Escribe tu mensaje" required></textarea>
                        <button type="submit" className="contact-submit" disabled={sending}>
                            {sending ? 'Enviando...' : 'Enviar mensaje'}
                        </button>
                    </form>
                    {result && <span className="contact-result">{result}</span>}
                </div>
            </div>
        </div>
    )
}

export default Contact
