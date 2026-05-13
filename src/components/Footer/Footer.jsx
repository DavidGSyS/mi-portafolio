import './Footer.css'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'
import { SiReact, SiPython, SiKotlin, SiFlask, SiJavascript, SiHtml5, SiCss, SiPostgresql, SiGit, SiAndroidstudio, SiVite } from 'react-icons/si'

const techLogos = [
    { Icon: SiPython, name: "Python" },
    { Icon: SiJavascript, name: "JavaScript" },
    { Icon: SiKotlin, name: "Kotlin" },
    { Icon: SiFlask, name: "Flask" },
    { Icon: SiReact, name: "React" },
    { Icon: SiHtml5, name: "HTML5" },
    { Icon: SiCss, name: "CSS3" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: SiGit, name: "Git" },
    { Icon: SiAndroidstudio, name: "Android" },
    { Icon: SiVite, name: "Vite" },
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-logo-section">
                    <h2 className="footer-tech-title">Tecnologías que domino</h2>
                    <div className="footer-logo-loop">
                        <div className="footer-logo-track">
                            {[...techLogos, ...techLogos].map((tech, i) => (
                                <div key={i} className="footer-logo-item">
                                    <tech.Icon className="footer-logo-icon" size={48} />
                                    <span className="footer-logo-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="footer-cta-section">
                        <a href="#contact" className="footer-cta-button" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <span>Trabajemos juntos</span>
                            <FiArrowRight className="footer-cta-arrow" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} David G. Todos los derechos reservados.</p>
                <div className="footer-bottom-right">
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        <FiMail size={18} style={{ marginRight: 6, verticalAlign: 'middle' }} />Contacto
                    </a>
                    <a href="https://github.com/DavidGSyS" target="_blank" rel="noopener noreferrer">
                        <FiGithub size={18} style={{ marginRight: 6, verticalAlign: 'middle' }} />GitHub
                    </a>
                    {/* TODO: Reemplazar con tu LinkedIn */}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin size={18} style={{ marginRight: 6, verticalAlign: 'middle' }} />LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
