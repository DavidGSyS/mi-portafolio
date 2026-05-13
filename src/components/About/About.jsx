import { useEffect, useRef, useState } from 'react'
import './About.css'
import ProfileCard from './ProfileCard'

const skills = [
    { label: "Python / Flask", pct: 85 },
    { label: "JavaScript", pct: 80 },
    { label: "HTML / CSS", pct: 90 },
    { label: "Kotlin / Android", pct: 70 },
    { label: "SQL / PostgreSQL", pct: 75 },
    { label: "Git / GitHub", pct: 85 },
];

const About = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const handleContactClick = () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div id="about" className="about" ref={ref}>
            <div className="about-title">
                <h1>Sobre mí</h1>
            </div>

            <div className="about-sections">
                {/* LEFT — ProfileCard con tilt 3D */}
                <div className="about-left">
                    <ProfileCard
                        enableTilt={true}
                        showBehindGradient={true}
                        onContactClick={handleContactClick}
                    />
                </div>

                {/* RIGHT — bio + skills */}
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            Transformo ideas en experiencias digitales de alto impacto.
                            Desarrollo aplicaciones web fullstack, apps móviles Android
                            y landing pages premium que no solo funcionan, sino que impresionan.
                        </p>
                        <p>
                            Mi enfoque combina desarrollo backend robusto con interfaces modernas,
                            creando soluciones escalables que impulsan resultados reales.
                            Cada proyecto es una oportunidad para innovar y superar expectativas.
                        </p>
                    </div>
                    <div className="about-skills">
                        {skills.map((skill, i) => (
                            <div className="about-skill" key={i}>
                                <p>{skill.label}</p>
                                <div className="skill-bar">
                                    <div
                                        className="skill-fill"
                                        style={{ width: visible ? `${skill.pct}%` : '0%' }}
                                        data-filled={visible ? "true" : "false"}
                                    >
                                        <span className="skill-percent">{skill.pct}%</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-archivements">
                <div className="about-archivement">
                    <h1>1+</h1>
                    <p>AÑOS DE EXPERIENCIA</p>
                </div>
                <div className="about-archivement">
                    <h1>3+</h1>
                    <p>PROYECTOS COMPLETADOS</p>
                </div>
                <div className="about-archivement">
                    <h1>4+</h1>
                    <p>TECNOLOGÍAS DOMINADAS</p>
                </div>
            </div>
        </div>
    )
}

export default About
