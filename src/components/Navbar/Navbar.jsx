import { useState, useEffect, useCallback } from 'react'
import './Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [shrunk, setShrunk] = useState(false);

    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        setMenu(sectionId);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShrunk(window.scrollY > 60);

            const sections = ['home', 'about', 'services', 'work', 'contact'];
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200) {
                        setMenu(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <div className={`navbar-glass${shrunk ? ' shrunk' : ''}`}>
                <nav className={`navbar${shrunk ? ' shrunk' : ''}`} role="navigation" aria-label="Navegación principal">
                    <ul className="nav-menu">
                        <li>
                            <a href="#home" className="anchor-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                                aria-current={menu === 'home' ? 'page' : undefined}>
                                Inicio
                            </a>
                            {menu === "home" ? <div className="nav-active-underline"></div> : null}
                        </li>
                        <li>
                            <a href="#about" className="anchor-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                                aria-current={menu === 'about' ? 'page' : undefined}>
                                Sobre mí
                            </a>
                            {menu === "about" ? <div className="nav-active-underline"></div> : null}
                        </li>
                        <li>
                            <a href="#services" className="anchor-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                                aria-current={menu === 'services' ? 'page' : undefined}>
                                Servicios
                            </a>
                            {menu === "services" ? <div className="nav-active-underline"></div> : null}
                        </li>
                        <li>
                            <a href="#work" className="anchor-link" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}
                                aria-current={menu === 'work' ? 'page' : undefined}>
                                Portafolio
                            </a>
                            {menu === "work" ? <div className="nav-active-underline"></div> : null}
                        </li>
                        <li>
                            <a href="#contact" className="anchor-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                                aria-current={menu === 'contact' ? 'page' : undefined}>
                                Contacto
                            </a>
                            {menu === "contact" ? <div className="nav-active-underline"></div> : null}
                        </li>
                    </ul>
                    <button className="nav-connect" onClick={() => scrollToSection('contact')}>
                        <span className="anchor-link">Conectar</span>
                    </button>
                </nav>
            </div>

            <button className="nav-mob-open" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
                <FiMenu size={28} color="#fff" />
            </button>

            {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

            <ul className={`nav-menu nav-menu-mobile${menuOpen ? ' open' : ''}`}>
                <li>
                    <button className="nav-mob-close" onClick={closeMenu} aria-label="Cerrar menú">
                        <FiX size={28} color="#fff" />
                    </button>
                </li>
                {['home', 'about', 'services', 'work', 'contact'].map((section) => (
                    <li key={section}>
                        <a href={`#${section}`} className="anchor-link" onClick={(e) => { e.preventDefault(); scrollToSection(section); closeMenu(); }}
                            aria-current={menu === section ? 'page' : undefined}>
                            {section === 'home' ? 'Inicio' : section === 'about' ? 'Sobre mí' : section === 'services' ? 'Servicios' : section === 'work' ? 'Portafolio' : 'Contacto'}
                        </a>
                        {menu === section ? <div className="nav-active-underline"></div> : null}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Navbar
