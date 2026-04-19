import { FaCode, FaServer, FaTools, FaTerminal, FaLaptopCode, FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDatabase as FaDb } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiSpringboot, SiPostgresql, SiMysql, SiVercel, SiRender, SiSupabase, SiPostman, SiVite, SiEclipseide } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { SquareCode } from 'lucide-react'

export const categories = [
    { id: 'frontend', title: 'Frontend', icon: <FaCode />, color: 'from-blue-500 to-cyan-400' },
    { id: 'backend', title: 'Backend', icon: <FaServer />, color: 'from-purple-500 to-pink-500' },
    { id: 'databases', title: 'Bases de Datos', icon: <FaDb />, color: 'from-green-500 to-emerald-400' },
    { id: 'tools', title: 'Herramientas', icon: <FaTools />, color: 'from-orange-500 to-amber-400' },
    { id: 'editors', title: 'Editores', icon: <FaTerminal />, color: 'from-indigo-500 to-violet-400' },
    { id: 'others', title: 'Otros', icon: <FaLaptopCode />, color: 'from-gray-500 to-slate-400' }
];

export interface Skill {
    name: string;
    color: string;
    icon: React.ReactNode;
}

export const skillData: Record<string, Skill[]> = {
    frontend: [
        { name: 'React', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5', icon: <FaReact /> },
        { name: 'Next.js', color: 'text-white border-white/20 bg-white/5', icon: <SiNextdotjs /> },
        { name: 'TypeScript', color: 'text-blue-400 border-blue-500/20 bg-blue-500/5', icon: <SiTypescript /> },
        { name: 'JavaScript', color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5', icon: <SiJavascript /> },
        { name: 'HTML5', color: 'text-orange-500 border-orange-500/20 bg-orange-500/5', icon: <FaHtml5 /> },
        { name: 'CSS3', color: 'text-blue-500 border-blue-500/20 bg-blue-500/5', icon: <FaCss3Alt /> },
        { name: 'Tailwind CSS', color: 'text-sky-400 border-sky-500/20 bg-sky-500/5', icon: <SiTailwindcss /> }
    ],
    backend: [
        { name: 'Node.js', color: 'text-green-500 border-green-500/20 bg-green-500/5', icon: <FaNodeJs /> },
        { name: 'PHP', color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5', icon: <FaPhp /> },
        { name: 'Spring Boot', color: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5', icon: <SiSpringboot /> },
        { name: 'APIs REST', color: 'text-orange-400 border-orange-500/20 bg-orange-500/5', icon: <FaServer /> }
    ],
    databases: [
        { name: 'PostgreSQL', color: 'text-blue-300 border-blue-500/20 bg-blue-500/5', icon: <SiPostgresql /> },
        { name: 'MySQL', color: 'text-orange-300 border-orange-500/20 bg-orange-500/5', icon: <SiMysql /> }
    ],
    tools: [
        { name: 'Git', color: 'text-red-500 border-red-500/20 bg-red-500/5', icon: <FaGitAlt /> },
        { name: 'GitHub', color: 'text-white border-white/20 bg-white/5', icon: <FaGithub /> },
        { name: 'Vercel', color: 'text-white border-white/20 bg-white/5', icon: <SiVercel /> },
        { name: 'Render', color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5', icon: <SiRender /> },
        { name: 'Supabase', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5', icon: <SiSupabase /> },
        { name: 'Postman', color: 'text-orange-500 border-orange-500/20 bg-orange-500/5', icon: <SiPostman /> },
        { name: 'Vite', color: 'text-purple-400 border-purple-500/20 bg-purple-500/5', icon: <SiVite /> }
    ],
    editors: [
        { name: 'VS Code', color: 'text-blue-500 border-blue-500/20 bg-blue-500/5', icon: <VscVscode /> },
        { name: 'Cursor', color: 'text-teal-400 border-teal-500/20 bg-teal-500/5', icon: <FaTerminal /> },
        { name: 'Antigravity', color: 'text-pink-500 border-pink-500/20 bg-pink-500/5', icon: <SquareCode className="animate-pulse" /> },
        { name: 'Eclipse', color: 'text-indigo-500 border-indigo-500/20 bg-indigo-500/5', icon: <SiEclipseide /> }
    ],
    others: [
        { name: 'Diseño responsive', color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5', icon: <FaLaptopCode /> },
        { name: 'Accesibilidad', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5', icon: <FaCode /> }
    ]
};
