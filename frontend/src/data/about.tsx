import { FaCode, FaServer, FaLightbulb } from 'react-icons/fa'

export const aboutContent = {
    vision: {
        title: "Mi visión",
        icon: <FaLightbulb />,
        color: "from-amber-400 to-orange-500",
        text: "Me gusta crear productos digitales que sean claros, accesibles y fáciles de mantener en el tiempo. Disfruto combinar un frontend moderno con una base backend sólida para construir soluciones bien estructuradas. Me motiva seguir aprendiendo, mejorar constantemente mi código y aportar de forma colaborativa a los equipos en los que participo."
    },
    frontend: {
        title: "Frontend",
        icon: <FaCode />,
        color: "from-blue-400 to-cyan-500",
        text: "Creo interfaces modernas y responsivas con HTML, CSS, JavaScript, TypeScript, React/Next.js y Tailwind CSS. Me concentro en la experiencia de usuario, optimizando el rendimiento y asegurando que cada interacción se sienta fluida y profesional."
    },
    backend: {
        title: "Backend",
        icon: <FaServer />,
        color: "from-purple-400 to-pink-500",
        text: "Desarrollo lógica backend robusta con Node.js (Express), Java (Spring Boot), .NET y PHP, integrando bases de datos como PostgreSQL y SQL Server. Diseño APIs REST seguras, manejo autenticación (JWT, OAuth) y estructuro arquitecturas escalables y mantenibles. Trabajo también con Supabase y servicios gestionados para acelerar despliegues y facilitar el testing."
    }
};
