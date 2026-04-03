import type { SectionProps } from "../types/SectionProps"

export const Skills = ({id} : SectionProps) => {
    return (
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-teal-500 font-bold">04. </span> 
                Habilidades
                <span className="bg-linear-to-r from-teal-500/50 to-transparent h-px flex-1"></span>
            </h2>
            <div className="space-y-8">
                <p className="text-gray-300 text-lg">
                    Tecnologías y herramientas que utilizo para desarrollar aplicaciones web modernas, mantenibles y escalables.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Frontend Skills */}
                    <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:border-blue-400/60 group">
                        <div className="mb-4">
                            <h3 className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-xl font-bold group-hover:from-blue-300 group-hover:to-cyan-300 transition-all">Frontend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'].map(skill => (
                                <span key={skill} className="bg-blue-500/10 text-blue-300 border border-blue-500/20 text-sm font-medium px-3 py-1.5 rounded-lg transition-all hover:bg-blue-500/20 hover:text-white">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-linear-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:border-purple-400/60 group">
                        <div className="mb-4">
                            <h3 className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-xl font-bold group-hover:from-purple-300 group-hover:to-pink-300 transition-all">Backend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Node.js', 'PHP', 'Spring Boot', 'APIs REST'].map(skill => (
                                <span key={skill} className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-sm font-medium px-3 py-1.5 rounded-lg transition-all hover:bg-purple-500/20 hover:text-white">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="bg-linear-to-br from-green-500/10 to-blue-500/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:border-green-400/60 group">
                        <div className="mb-4">
                            <h3 className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent text-xl font-bold group-hover:from-green-300 group-hover:to-blue-300 transition-all">Bases de datos</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['PostgreSQL (opt. consultas, PL/pgSQL)', 'MySQL'].map(skill => (
                                <span key={skill} className="bg-green-500/10 text-green-300 border border-green-500/20 text-sm font-medium px-3 py-1.5 rounded-lg transition-all hover:bg-green-500/20 hover:text-white">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Platforms */}
                    <div className="bg-linear-to-br from-orange-500/10 to-amber-500/5 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:border-orange-400/60 group">
                        <div className="mb-4">
                            <h3 className="bg-linear-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent text-xl font-bold group-hover:from-orange-300 group-hover:to-amber-300 transition-all">Herramientas</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Git', 'GitHub', 'Vercel', 'Render', 'Supabase', 'Postman', 'Vite'].map(skill => (
                                <span key={skill} className="bg-orange-500/10 text-orange-300 border border-orange-500/20 text-sm font-medium px-3 py-1.5 rounded-lg transition-all hover:bg-orange-500/20 hover:text-white">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Editors */}
                    <div className="bg-linear-to-br from-indigo-500/10 to-blue-500/5 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:border-indigo-400/60 group">
                        <div className="mb-4">
                            <h3 className="bg-linear-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent text-xl font-bold group-hover:from-indigo-300 group-hover:to-blue-300 transition-all">Editores</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['VS Code', 'Cursor', 'Antigravity', 'Eclipse'].map(skill => (
                                <span key={skill} className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-sm font-medium px-3 py-1.5 rounded-lg transition-all hover:bg-indigo-500/20 hover:text-white">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Others */}
                    <div className="bg-linear-to-br from-gray-500/10 to-teal-500/5 backdrop-blur-sm border border-gray-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 hover:border-gray-400/60 group">
                        <div className="mb-4">
                            <h3 className="bg-linear-to-r from-gray-400 to-teal-400 bg-clip-text text-transparent text-xl font-bold group-hover:from-gray-300 group-hover:to-teal-300 transition-all">Otros</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Diseño responsive', 'Accesibilidad web (ARIA)'].map(skill => (
                                <span key={skill} className="bg-gray-500/10 text-gray-300 border border-gray-500/20 text-sm font-medium px-3 py-1.5 rounded-lg transition-all hover:bg-gray-500/20 hover:text-white">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}