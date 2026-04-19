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
        text: "Desarrollo lógica backend robusta con PHP e integración de bases de datos PostgreSQL. Tengo experiencia diseñando APIs REST, manejando autenticación y estructurando arquitecturas escalables que soporten el crecimiento de las aplicaciones."
    }
};
