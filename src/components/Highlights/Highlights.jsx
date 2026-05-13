import './Highlights.css'

const Highlights = () => {
    return (
        <div className="highlights">
            <div className="highlights-title">
                <h2>Lo que me diferencia</h2>
            </div>
            <div className="highlights-grid">
                <div className="highlight-card">
                    <h3 className="highlight-header">Desarrollo Fullstack</h3>
                    <p>
                        Desarrollo completo desde frontend hasta backend: HTML/CSS/JS,
                        Python/Flask, bases de datos PostgreSQL y arquitecturas escalables y seguras.
                    </p>
                    <ul>
                        <li>Python, Flask, SQLAlchemy</li>
                        <li>JavaScript, HTML5, CSS3</li>
                        <li>PostgreSQL, APIs REST</li>
                    </ul>
                </div>
                <div className="highlight-card">
                    <h3 className="highlight-header">Mobile Android</h3>
                    <p>
                        Apps Android nativas con Kotlin y Material Design 3.
                        Interfaces interactivas, rendimiento optimizado y experiencias de usuario premium.
                    </p>
                    <ul>
                        <li>Kotlin, Android Studio</li>
                        <li>Material Design 3</li>
                        <li>ConstraintLayout, ViewBinding</li>
                    </ul>
                </div>
                <div className="highlight-card">
                    <h3 className="highlight-header">Diseño Premium</h3>
                    <p>
                        Interfaces modernas con glassmorphism, micro-animaciones, dark mode
                        y responsive design que destacan en cualquier dispositivo.
                    </p>
                    <ul>
                        <li>UI/UX Moderno, Responsive</li>
                        <li>Animaciones CSS, Dark Mode</li>
                        <li>Glassmorphism, Gradientes</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Highlights
