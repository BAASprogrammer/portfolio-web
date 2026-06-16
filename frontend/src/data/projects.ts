import type { ProjectData } from '../types/Project';
import GuitarStorePreview from "../assets/images/previews/guitar-store-1.png";
import PortfolioPreview from "../assets/images/previews/portafolio-web.png";
import AgendaAppPreview from "../assets/images/previews/agendaapp.png";
import MunicipalidadPreview from "../assets/images/previews/municipalidad-x.png";

export const projectsData: ProjectData[] = [
    {
        id: "agenda-app",
        title: "AgendaApp",
        description: "Citas Médicas",
        fullDescription: "Plataforma full-stack con roles de paciente y profesional, gestión de citas e historial clínico.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Postman", "Vercel", "Render"],
        image: AgendaAppPreview,
        demoUrl: "https://agenda-app-kappa.vercel.app/",
        codeUrl: "https://github.com/BAASprogrammer/agenda-app",
        color: "cyan",
        credentials: {
            label: "Cuentas de Acceso Demo",
            accounts: [
                { label: "Paciente", user: "demopaciente@agendaapp.cl", pass: "123456" },
                { label: "Profesional", user: "demoprofesional@agendaapp.cl", pass: "123456" }
            ]
        }
    },
    {
        id: "guitar-store",
        title: "Tienda de Guitarras Online",
        description: "E-commerce",
        fullDescription: "Aplicación frontend con catálogo dinámico, carrito de compras interactivo y modo oscuro persistente.",
        tags: ["React", "JavaScript", "Vercel"],
        image: GuitarStorePreview,
        demoUrl: "https://guitar-store-react-js.vercel.app/",
        codeUrl: "https://github.com/BAASprogrammer/guitarstore-react-js",
        color: "blue",
        warning: "⚠️ Integración de flujo de pago con Webpay (entorno de pruebas TBK)."
    },
    {
        id: "portfolio",
        title: "Portafolio Profesional",
        description: "Sitio web personal",
        fullDescription: "Desarrollado con React y TypeScript, enfocado en rendimiento y diseño premium.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: PortfolioPreview,
        codeUrl: "https://github.com/BAASprogrammer/Portfolio-Web",
        color: "purple"
    },
    {
        id: "municipalidad-x",
        title: "Municipalidad-X",
        description: "Portal de transparencia municipal",
        fullDescription: "Sitio web institucional y portal de transparencia con panel administrativo integrado. Gestión dinámica de noticias, servicios, departamentos, trámites y autoridades, con control de acceso mediante autenticación segura y protección de rutas.",
        tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Supabase", "Vercel", "Render"],
        image: MunicipalidadPreview,
        color: "green",
        demoUrl: "https://municipalidad-x.vercel.app/",
        codeUrl: "https://github.com/BAASprogrammer/municipalidad-x",
        warning: "⚠️ Proyecto en desarrollo - Monorepo con arquitectura escalable y validación de tablas integrada.",
        credentials: {
            label: "Cuenta de Acceso Admin",
            accounts: [
                { label: "Admin", user: "admin@gmail.cl", pass: "123456" }
            ]
        },
        adminPanelUrl: "https://municipalidad-x.vercel.app/admin"
    }
];
