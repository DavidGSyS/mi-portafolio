import project1_img from './project_1.png'
import project2_img from './project_2.png'
import project3_img from './project_3.png'
import project4_img from './project_4.jpg'

const mywork_data = [
    {
        w_no: 1,
        w_name: "Client Manager",
        w_img: project1_img,
        w_link: "https://github.com/DavidGSyS/client-manager",
        w_desc: "Aplicación SaaS fullstack para gestión de clientes con dashboard interactivo, autenticación segura, API REST completa, dark/light mode y diseño responsive premium.",
        w_techs: ["Flask", "PostgreSQL", "SQLAlchemy", "JavaScript", "Chart.js"]
    },
    {
        w_no: 2,
        w_name: "Elite Cut Barbershop",
        w_img: project2_img,
        w_link: "https://github.com/DavidGSyS/elite-cut-barbershop",
        w_desc: "Landing page premium para barbería moderna con diseño elegante, animaciones suaves, galería interactiva, reservas por WhatsApp y responsive design completo.",
        w_techs: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        w_no: 3,
        w_name: "Basta Challenge",
        w_img: project3_img,
        w_link: "https://github.com/DavidGSyS/basta-challenge-android",
        w_desc: "Aplicación Android moderna inspirada en el clásico juego BASTA con retos dinámicos, temporizador visual, Material Design 3 y experiencia party-game optimizada.",
        w_techs: ["Kotlin", "Android Studio", "Material Design 3"]
    },
    {
        w_no: 4,
        w_name: "Pico y Placa Bot",
        w_img: project4_img,
        w_link: "https://github.com/DavidGSyS/pico-y-placa-bot",
        w_desc: "Bot automatizado de Telegram desarrollado en Python para consultar restricciones de Pico y Placa en Colombia, con gestión de usuarios, base de datos SQLite y arquitectura escalable.",
        w_techs: ["Python", "Telegram Bot API", "SQLite", "Automatización"]
    },
    {
        w_no: 5,
        w_name: "Sakura Nails",
        w_img: project5_img,
        w_link: "https://github.com/DavidGSyS/sakura-nails",
        w_desc: "Landing page moderna para salón de belleza con diseño elegante, galería interactiva, sistema de reservas y responsive design completo.",
        w_techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
]

export default mywork_data;
