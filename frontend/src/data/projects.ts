import GuitarStorePreview from "../assets/images/previews/guitar-store-1.png";
import PortfolioPreview from "../assets/images/previews/portafolio-web.png";
import AgendaAppPreview from "../assets/images/previews/agendaapp.png";

export interface ProjectData {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    demoUrl?: string;
    codeUrl?: string;
    color: string;
    warning?: string;
    credentials?: {
        label: string;
        accounts: { user: string; pass: string; label: string }[];
    };
}

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
        description: "E-commerce simulado",
        fullDescription: "Aplicación frontend con catálogo dinámico, carrito de compras interactivo y modo oscuro persistente.",
        tags: ["React", "JavaScript", "Vercel"],
        image: GuitarStorePreview,
        demoUrl: "https://guitar-store-react-js.vercel.app/",
        codeUrl: "https://github.com/BAASprogrammer/guitarstore-react-js",
        color: "blue",
        warning: "⚠️ Simulación educativa sin sistema de pagos."
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
    }
];
