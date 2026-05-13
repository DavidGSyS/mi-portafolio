import { useRef, useState } from 'react'
import './ProfileCard.css'
import profileImg from '../../assets/perfil.png'

const ProfileCard = ({
    enableTilt = true,
    showBehindGradient = true,
    onContactClick,
}) => {
    const cardRef = useRef(null)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        if (!enableTilt || !cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20
        setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 })
        setIsHovered(false)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    return (
        <div
            className="profile-card-scene"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            {/* Gradient glow detrás de la card — visible en hover */}
            {showBehindGradient && (
                <div
                    className={`profile-card-behind${isHovered ? ' visible' : ''}`}
                    aria-hidden="true"
                />
            )}

            <div
                className="profile-card"
                ref={cardRef}
                style={{
                    transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: isHovered
                        ? 'transform 0.08s linear'
                        : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
            >
                {/* Grain texture overlay */}
                <div className="profile-card-grain" aria-hidden="true" />

                {/* Status badge */}
                <div className="profile-card-status">
                    <span className="status-dot" />
                    <span>Disponible para proyectos</span>
                </div>

                {/* Decorative code brackets */}
                <div className="profile-card-brackets" aria-hidden="true">
                    <span className="bracket bracket-tl">&lt;</span>
                    <span className="bracket bracket-tr">/&gt;</span>
                    <span className="bracket bracket-bl">&#123;</span>
                    <span className="bracket bracket-br">&#125;</span>
                </div>

                {/* Profile image — no background, image fills card */}
                <div className="profile-card-img-wrap">
                    <img
                        src={profileImg}
                        alt="David G."
                        className="profile-card-img"
                        draggable={false}
                    />
                </div>

                {/* Bottom info */}
                <div className="profile-card-info">
                    <div className="profile-card-name">David G.</div>
                    <div className="profile-card-role">Fullstack &amp; Mobile Dev</div>
                    {onContactClick && (
                        <button className="profile-card-btn" onClick={onContactClick}>
                            Contactar
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
