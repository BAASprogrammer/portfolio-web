import type { SectionProps } from "../../types/SectionProps"

export const Projects = ({id} : SectionProps) => {
    return (
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">03. </span>
                Proyectos
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div className="space-y-8">
                <div className="text-center">
                    <p className='text-lg leading-relaxed max-w-3xl mx-auto'>
                        Aplicaciones y soluciones desarrolladas para aprender, experimentar y resolver problemas reales.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400/50 max-w-2xl w-full">
                        {/* Imagen del proyecto */}

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">Tienda de Guitarras Online</h3>
                            <p className="text-gray-300 leading-relaxed mb-3">
                                <strong className="text-gray-200">Simulación de e-commerce</strong> - Proyecto frontend desarrollado con React JS.
                                Incluye catálogo de productos, carrito de compras funcional y navegación intuitiva.
                            </p>
                        <div className="mb-6">
                            <div className="relative w-full h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-16 h-16 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-blue-300 font-semibold mb-1">Tienda de Guitarras</h4>
                                        <p className="text-xs text-gray-400">Captura de pantalla próximamente</p>
                                        <p className="text-xs text-gray-500 mt-1">React + Tailwind CSS</p>
                                    </div>
                                </div>
                                {/* Overlay sutil */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                            <p className="text-sm text-amber-400/80 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-4">
                                ⚠️ <strong>Nota importante:</strong> Esta es una simulación educativa sin sistema de pagos real.
                                Solo permite explorar productos y agregar al carrito de compras.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">React</span>
                            <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">Tailwind CSS</span>
                            <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">JavaScript</span>
                            <span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded">Vercel</span>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium">
                                Ver Demo →
                            </a>
                            <a href="https://github.com/tu-usuario/tienda-guitarras-react" target="_blank" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm font-medium">
                                Código →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}