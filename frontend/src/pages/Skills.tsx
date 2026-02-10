import type { SectionProps } from "../types/SectionProps"

export const Skills = ({id} : SectionProps) => {
    return (
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">04. </span> 
                Habilidades
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div>
                <p className="text-center text-gray-300 text-lg mb-8">
                    Tecnologías y herramientas con las que trabajo para crear aplicaciones modernas, escalables y de alta calidad.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Frontend Skills */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:border-blue-400/60 hover:-translate-y-2 group">
                        <div className="mb-6">
                            <h1 className="text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold group-hover:from-blue-300 group-hover:to-cyan-300 transition-all p-2">Frontend</h1>
                            <p className="p-2 text-center text-sm text-gray-300">Interfaces modernas y responsivas</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 hover:bg-orange-500/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">HTML</span>
                            <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">CSS</span>
                            <span className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 hover:bg-yellow-500/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">JavaScript</span>
                            <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">React</span>
                            <span className="bg-blue-600/20 text-blue-300 border border-blue-600/30 hover:bg-blue-600/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">TypeScript</span>
                            <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 hover:bg-teal-500/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">Tailwind</span>
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-2 group">
                        <div className="mb-6">
                            <h1 className="text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold group-hover:from-purple-300 group-hover:to-pink-300 transition-all p-2">Backend</h1>
                            <p className="p-2 text-center text-sm text-gray-300">Lógica robusta y bases de datos</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">PHP</span>
                            <span className="bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">Spring Boot</span>
                            <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">PostgreSQL</span>
                            <span className="bg-blue-600/20 text-blue-300 border border-blue-600/30 hover:bg-blue-600/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">MySQL</span>
                            <span className="bg-cyan-600/20 text-cyan-300 border border-cyan-600/30 hover:bg-cyan-600/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">PL/pgSQL</span>
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/5 backdrop-blur-sm border border-fuchsia-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all duration-300 hover:border-fuchsia-400/60 hover:-translate-y-2 group">
                        <div className="mb-6">
                            <h1 className="text-center bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold group-hover:from-fuchsia-300 group-hover:to-purple-300 transition-all p-2">Herramientas</h1>
                            <p className="p-2 text-center text-sm text-gray-300">Control de versiones y despliegue</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <span className="bg-orange-600/20 text-orange-300 border border-orange-600/30 hover:bg-orange-600/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">GIT</span>
                            <span className="bg-gray-600/20 text-gray-200 border border-gray-600/30 hover:bg-gray-600/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">GitHub</span>
                            <span className="bg-pink-600/20 text-pink-300 border border-pink-600/30 hover:bg-pink-600/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">Vercel</span>
                            <span className="bg-yellow-600/20 text-yellow-300 border border-yellow-600/30 hover:bg-yellow-600/30 text-xs md:text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110">VS Code</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}