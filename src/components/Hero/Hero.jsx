import './Hero.css'
import profileImg from '../../assets/perfil.png'

const Hero = () => {
    return (
        <div id="home" className="hero">
            <div className="hero-profile-wrapper">
                <div className="hero-profile-ring">
                    <img src={profileImg} alt="David G." className="hero-profile-img" />
                </div>
                <div className="hero-status">
                    <span className="status-dot"></span>
                    Disponible para proyectos
                </div>
            </div>
            <h1>
                Soy <span>David Guzmán</span>,{' '}
                Desarrollador Junior Fullstack.
            </h1>
            <p>
                Construyo aplicaciones web modernas con Python/Flask y JavaScript,
                desarrollo apps Android nativas con Kotlin y creo landing pages premium.
                Especializado en soluciones fullstack escalables, APIs REST y diseño UI/UX de alto impacto.
            </p>
            <div className="hero-action">
                <button className="hero-connect" onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}>
                    <span className="anchor-link">Conectar conmigo</span>
                </button>
                <a href="/hoja-de-vida.pdf" download="Hoja de vida - David Guzmán.pdf" className="hero-resumen anchor-link">
                    Mi CV
                </a>
            </div>
        </div>
    )
}

export default Hero
