import { useState } from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import { FiArrowRight, FiGithub } from 'react-icons/fi'

const MyWork = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % mywork_data.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + mywork_data.length) % mywork_data.length);
    };

    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>Mis últimos trabajos</h1>
            </div>
            <div className="mywork-container">
                <div className="mywork-content-wrapper">
                    <div className="project-description">
                        <div className="description-content" key={activeIndex}>
                            <h2>{mywork_data[activeIndex].w_name}</h2>
                            <p>{mywork_data[activeIndex].w_desc}</p>
                            <div className="project-techs">
                                {mywork_data[activeIndex].w_techs.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <a href={mywork_data[activeIndex].w_link} target="_blank" rel="noopener noreferrer" className="project-link">
                                Ver proyecto <FiArrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="mywork-cardswap-wrapper">
                        <div className="project-cards-container">
                            {mywork_data.map((project, index) => (
                                <div
                                    key={index}
                                    className={`project-card ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'prev' : ''} ${index > activeIndex ? 'next' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="project-card-content">
                                        <img src={project.w_img} alt={project.w_name} loading="lazy" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="card-nav-buttons">
                            <button className="card-nav-btn" onClick={prevProject} aria-label="Proyecto anterior">‹</button>
                            <div className="card-dots">
                                {mywork_data.map((_, i) => (
                                    <button key={i} className={`card-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)} aria-label={`Proyecto ${i + 1}`} />
                                ))}
                            </div>
                            <button className="card-nav-btn" onClick={nextProject} aria-label="Siguiente proyecto">›</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mywork-showmore">
                <a href="https://github.com/DavidGSyS" target="_blank" rel="noopener noreferrer" className="showmore-link">
                    <FiGithub size={22} />
                    <p>Ver todos en GitHub</p>
                    <FiArrowRight size={20} />
                </a>
            </div>
        </div>
    )
}

export default MyWork
