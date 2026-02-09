import type { SectionProps } from "../types/SectionProps"

export const Experience = ({id} : SectionProps) => {
    return (
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">02. </span> 
                Experiencia
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div className="space-y-8">
                <div className="text-center">
                    <p className='text-lg leading-relaxed max-w-3xl mx-auto'>
                        Desarrollo profesional en tecnologías web y bases de datos, con experiencia en proyectos académicos y personales.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Experiencia Laboral */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-400/50">
                        {/* Header de la experiencia */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                            <div className="mb-4 lg:mb-0 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                <h3 className="text-2xl font-bold text-purple-400 mb-2">Desarrollador Full Stack</h3>
                                <p className="text-base text-gray-300 font-medium">Desis Limitada</p>
                                <p className="text-sm text-gray-400">2021 - Presente</p>
                            </div>
                            <div className="flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                <span className="text-sm bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 w-fit">
                                    Full Stack Developer
                                </span>
                                <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full w-fit">
                                    3+ años de experiencia
                                </span>
                            </div>
                        </div>

                        {/* Contribuciones Clave */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 p-4 rounded-lg hover:border-purple-400/40 transition-colors hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <h4 className="text-lg font-semibold text-purple-300">Desarrollo Backend</h4>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Desarrollo aplicaciones robustas con <span className="text-purple-400 font-medium">PHP</span>,
                                    manejando bases de datos importantes en <span className="text-green-400 font-medium">PostgreSQL</span>
                                    y <span className="text-blue-400 font-medium">PL/pgSQL</span> para sistemas que necesitan alto rendimiento.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 p-4 rounded-lg hover:border-cyan-400/40 transition-colors hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    <h4 className="text-lg font-semibold text-cyan-300">Rendimiento y Optimización</h4>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Mejoro el rendimiento de consultas y estructuras de datos, logrando avances notables
                                    en velocidad y capacidad de crecimiento de las aplicaciones.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 p-4 rounded-lg hover:border-emerald-400/40 transition-colors hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <h4 className="text-lg font-semibold text-emerald-300">Liderazgo Técnico</h4>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Lideré equipos de desarrollo por 6 meses, coordinando proyectos desafiantes
                                    y ayudando al crecimiento profesional de mis compañeros.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 p-4 rounded-lg hover:border-blue-400/40 transition-colors hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <h4 className="text-lg font-semibold text-blue-300">Control de Calidad</h4>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Participo activamente en revisiones de código desde 2024, asegurando que se cumplan
                                    los estándares de calidad y promoviendo buenas prácticas en el equipo.
                                </p>
                            </div>

                        </div>

                        {/* Tecnologías utilizadas */}
                        <div className="border-t border-gray-700/50 pt-6">
                            <h4 className="text-lg font-semibold text-gray-200 mb-4">Stack Tecnológico</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="text-sm bg-yellow-500/20 text-yellow-300 px-3 py-2 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/30 transition-colors hover:-translate-y-1">
                                    JavaScript
                                </span>
                                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-2 rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-colors hover:-translate-y-1">
                                    PHP
                                </span>
                            <span className="text-sm bg-green-500/20 text-green-300 px-3 py-2 rounded-lg border border-green-500/30 hover:bg-green-500/30 transition-colors hover:-translate-y-1">
                                    PostgreSQL
                                </span>
                                <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors hover:-translate-y-1">
                                    PL/pgSQL
                                </span>
                                <span className="text-sm bg-orange-500/20 text-orange-300 px-3 py-2 rounded-lg border border-orange-500/30 hover:bg-orange-500/30 transition-colors hover:-translate-y-1">
                                    iReport
                                </span>
                                <span className="text-sm bg-gray-500/20 text-gray-300 px-3 py-2 rounded-lg border border-gray-500/30 hover:bg-gray-500/30 transition-colors hover:-translate-y-1">
                                    Liderazgo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}