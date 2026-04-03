import type { SectionProps } from "../types/SectionProps"
import GuitarStorePreview from "../assets/images/previews/guitar-store-1.png";
import PortfolioPreview from "../assets/images/previews/portafolio-web.png";
import AgendaAppPreview from "../assets/images/previews/agendaapp.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const Projects = ({ id }: SectionProps) => {
    return (
        <section id={id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-blue-500 font-bold">03. </span>
                Proyectos
                <span className="bg-linear-to-r from-blue-500/50 to-transparent h-px flex-1"></span>
            </h2>
            <div className="space-y-8">
                <div className="text-center">
                    <p className='text-lg leading-relaxed max-w-3xl mx-auto'>
                        Aplicaciones y soluciones desarrolladas para aprender, experimentar y resolver problemas reales.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                    {/* Guitar Store Project */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400/50 flex flex-col h-full">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">Tienda de Guitarras Online</h3>
                            <p className="text-gray-200 leading-relaxed mb-3 text-base">
                                <strong className="text-gray-100">E-commerce simulado</strong> - Aplicación frontend con catálogo dinámico, carrito de compras interactivo y modo oscuro persistente.
                            </p>
                            <div className="relative group/img mb-6">
                                {/* Browser Mockup Frame */}
                                <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover/img:scale-[1.02] group-hover/img:border-blue-500/50 group-hover/img:shadow-blue-500/20">
                                    <div className="bg-slate-800/80 px-4 py-2 border-b border-white/5 flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                        <div className="ml-4 h-3 w-40 bg-slate-700/50 rounded-full"></div>
                                    </div>
                                    <div className="relative aspect-video lg:aspect-16/10 overflow-hidden bg-slate-950/80 flex items-center justify-center group/img-inner">
                                        <img
                                            src={GuitarStorePreview}
                                            alt="Tienda de Guitarras"
                                            className="w-full h-full object-contain transition-all duration-700 group-hover/img:scale-[1.05] drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
                                        />
                                        {/* Overlay Glow */}
                                        <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-amber-400/80 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 mb-4">
                                ⚠️ Simulación educativa sin sistema de pagos.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4 text-sm">
                                <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">React</span>
                                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded border border-yellow-500/30">JavaScript</span>
                                <span className="bg-gray-500/20 text-gray-300 px-2 py-0.5 rounded border border-gray-500/30">Vercel</span>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <a href="https://guitar-store-react-js.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-animated bg-linear-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white border-2 border-blue-400/50 px-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg btn-glow-cyan text-sm transition-all hover:scale-105 active:scale-95">
                                    <FiExternalLink className="w-4 h-4 btn-icon-animate" /> Demo
                                </a>
                                <a href="https://github.com/BAASprogrammer/guitarstore-react-js" target="_blank" rel="noopener noreferrer" className="btn-animated bg-linear-to-r from-pink-700 to-purple-700 hover:from-pink-600 hover:to-purple-600 text-white border-2 border-pink-400/50 px-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg btn-glow-pink text-sm transition-all hover:scale-105 active:scale-95">
                                    <FiGithub className="w-4 h-4 btn-icon-rotate" /> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* AgendaApp Project */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400/50 flex flex-col h-full">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">AgendaApp</h3>
                            <p className="text-gray-200 leading-relaxed mb-3 text-base">
                                <strong className="text-gray-100">Citas Médicas</strong> - Plataforma full-stack con roles de paciente y profesional, gestión de citas e historial clínico.
                            </p>
                            <div className="relative group/img mb-6">
                                <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover/img:scale-[1.02] group-hover/img:border-blue-500/50 group-hover/img:shadow-blue-500/20">
                                    <div className="bg-slate-800/80 px-4 py-2 border-b border-white/5 flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                        <div className="ml-4 h-3 w-40 bg-slate-700/50 rounded-full"></div>
                                    </div>
                                    <div className="relative aspect-video lg:aspect-16/10 overflow-hidden bg-slate-950/80 flex items-center justify-center group/img-inner">
                                        <img
                                            src={AgendaAppPreview}
                                            alt="AgendaApp"
                                            className="w-full h-full object-contain transition-all duration-700 group-hover/img:scale-[1.05] drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 bg-linear-to-r from-green-500/20 to-green-700/20 border border-green-500/30 rounded-lg mb-4 text-green-300 text-sm">
                                <p>Demo 1: demopaciente@agendaapp.cl / 123456</p>
                                <p>Demo 2: demoprofesional@agendaapp.cl / 123456</p>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4 text-sm">
                                <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">Next.js</span>
                                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded border border-yellow-500/30">TypeScript</span>
                                <span className="bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded border border-pink-500/30">Tailwind</span>
                                <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded border border-green-500/30">Postman</span>
                                <span className="bg-gray-500/20 text-gray-300 px-2 py-0.5 rounded border border-gray-500/30">Vercel</span>
                                <span className="bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-500/30">Render</span>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <a href="https://agenda-app-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-animated bg-linear-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white border-2 border-blue-400/50 px-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg btn-glow-cyan text-sm transition-all hover:scale-105 active:scale-95">
                                    <FiExternalLink className="w-4 h-4 btn-icon-animate" /> Demo
                                </a>
                                <a href="https://github.com/BAASprogrammer/agenda-app" target="_blank" rel="noopener noreferrer" className="btn-animated bg-linear-to-r from-pink-700 to-purple-700 hover:from-pink-600 hover:to-purple-600 text-white border-2 border-pink-400/50 px-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg btn-glow-pink text-sm transition-all hover:scale-105 active:scale-95">
                                    <FiGithub className="w-4 h-4 btn-icon-rotate" /> Código
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Project */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-400/50 flex flex-col h-full xl:col-span-1">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-purple-400 mb-2">Portafolio Profesional</h3>
                            <p className="text-gray-200 leading-relaxed mb-3 text-base">
                                <strong className="text-gray-100">Sitio web personal</strong> desarrollado con React y TypeScript, enfocado en rendimiento y diseño premium.
                            </p>
                            <div className="relative group/img mb-6">
                                <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover/img:scale-[1.02] group-hover/img:border-purple-500/50 group-hover/img:shadow-purple-500/20">
                                    <div className="bg-slate-800/80 px-4 py-2 border-b border-white/5 flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                        <div className="ml-4 h-3 w-40 bg-slate-700/50 rounded-full"></div>
                                    </div>
                                    <div className="relative aspect-video lg:aspect-16/10 overflow-hidden bg-slate-950/80 flex items-center justify-center group/img-inner">
                                        <img
                                            src={PortfolioPreview}
                                            alt="Portafolio Profesional"
                                            className="w-full h-full object-contain transition-all duration-700 group-hover/img:scale-[1.05] drop-shadow-[0_20px_50px_rgba(168,85,247,0.3)]"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4 text-sm">
                                <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">React</span>
                                <span className="bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded border border-blue-600/30">TypeScript</span>
                                <span className="bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded border border-pink-500/30">Tailwind</span>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <a href="https://github.com/BAASprogrammer/Portfolio-Web" target="_blank" rel="noopener noreferrer" className="btn-animated bg-linear-to-r from-pink-700 to-purple-700 hover:from-pink-600 hover:to-purple-600 text-white border-2 border-pink-400/50 px-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg btn-glow-pink text-sm transition-all hover:scale-105 active:scale-95">
                                    <FiGithub className="w-4 h-4 btn-icon-rotate" /> Código
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}