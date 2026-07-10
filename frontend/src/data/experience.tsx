import type { ExperienceItem } from '../types/Experience';
import { Briefcase, GraduationCap, Users, Star, Cpu, Layout } from 'lucide-react';

export const experienceData: ExperienceItem[] = [
    {
        id: "desis",
        role: "Desarrolladora Full Stack",
        company: "Desis Limitada",
        period: "2021 - 2026",
        type: 'work',
        icon: <Briefcase size={22} />,
        color: "from-purple-500 to-indigo-500",
        description: "Liderazgo técnico y desarrollo integral de sistemas empresariales de alto impacto.",
        badge: "4 Años",
        details: [
            {
                title: "Backend & Performance",
                content: "Desarrollo de robustas aplicaciones con PHP y PostgreSQL, especializándome en la optimización de consultas SQL complejas y procedimientos almacenados para garantizar el alto rendimiento del sistema.",
                highlight: "Optimización Crítica",
                icon: <Cpu size={18} />,
                color: "purple"
            },
            {
                title: "Integración & Frontend",
                content: "Implementación estratégica de APIs REST para la intercomunicación de módulos y refinamiento de interfaces responsivas enfocadas en estándares técnicos y excelencia en UX/UI.",
                highlight: "APIs & Responsive",
                icon: <Layout size={18} />,
                color: "cyan"
            },
            {
                title: "Liderazgo & Requerimientos",
                content: "Dirigí al equipo de desarrollo durante 6 meses en la planificación de entregables y análisis de requerimientos críticos junto a equipos funcionales para asegurar soluciones alineadas al negocio.",
                highlight: "Gestión Técnica",
                icon: <Users size={18} />,
                color: "indigo"
            }
        ],
        technologies: ["JavaScript", "PHP", "PostgreSQL", "PL/pgSQL", "APIs REST", "Liderazgo", "Análisis de Requerimientos"]
    },
    {
        id: "ipg",
        role: "Docente Virtual",
        company: "IPG",
        period: "2021",
        type: 'education',
        icon: <GraduationCap size={22} />,
        color: "from-pink-500 to-rose-500",
        description: "Formación de nuevos talentos en competencias digitales y fundamentos de TI.",
        details: [
            {
                title: "Educación TI",
                content: "Impartí asignaturas de hardware, software y fundamentos de programación para carreras técnicas, fortaleciendo la base lógica y técnica de los estudiantes.",
                highlight: "Mentoría Digital",
                icon: <Star size={18} />,
                color: "pink"
            }
        ],
        technologies: ["Educación", "Hardware", "Software", "Competencias Digitales"]
    }
];
