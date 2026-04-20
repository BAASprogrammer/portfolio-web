import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiInfo } from "react-icons/fi";
import type { SectionProps } from "../types/SectionProps";
import { projectsData } from "../data/projects";

export const Projects = ({ id }: SectionProps) => {
    return (
        <section id={id} className="relative py-20 lg:py-32">
            {/* Background glow for the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-16 md:mb-24 px-6 sm:px-0 text-center"
            >
                <div className="inline-flex items-center justify-center gap-3 mb-6">
                    <span className="h-px w-8 bg-pink-500/50"></span>
                    <span className="text-pink-500 font-mono text-sm font-bold tracking-[0.3em] uppercase">04 • Proyectos</span>
                    <span className="h-px w-8 bg-pink-500/50"></span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter sm:mb-8">
                    Proyectos <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Destacados</span>
                </h2>
                <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto text-balance font-medium">
                    Diseño y desarrollo soluciones digitales que transforman ideas en resultados.
                </p>
            </motion.div>

            <div className="flex flex-col gap-12 md:gap-20 relative max-w-7xl mx-auto px-6">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ zIndex: index + 1 }}
                    >
                        <div className="group relative bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] md:rounded-[4rem] shadow-2xl hover:border-pink-500/40 transition-colors duration-700">
                            <div className="flex flex-col lg:flex-row overflow-hidden rounded-[3rem] md:rounded-[4rem]">
                                {/* Info Side */}
                                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-between order-2 lg:order-1 relative z-10">
                                    <div className="min-w-0"> {/* Ensure container can compress */}
                                        <div className="flex items-center gap-3 mb-6">

                                            <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-[10px] font-black uppercase tracking-widest">
                                                Producción
                                            </span>
                                        </div>

                                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-pink-400 transition-colors tracking-tighter break-words">
                                            {project.title}
                                        </h3>
                                        <div className="mb-4 text-pink-500 font-black uppercase tracking-[0.2em] text-[10px] italic">
                                            {project.description}
                                        </div>

                                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-medium opacity-80 group-hover:opacity-100 transition-opacity max-w-xl">
                                            {project.fullDescription}
                                        </p>

                                        {project.warning && (
                                            <div className="mb-8 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 text-[11px] text-amber-500/70 leading-relaxed italic border-l-4">
                                                {project.warning}
                                            </div>
                                        )}

                                        {project.credentials && (
                                            <div className="mb-8 p-6 rounded-[2rem] bg-slate-950/50 border border-white/5 text-[11px] text-gray-400 shadow-inner group-hover:border-pink-500/20 transition-colors">
                                                <div className="flex items-center gap-2 mb-4 text-pink-400 font-black uppercase tracking-widest">
                                                    <FiInfo className="size-3" /> acceso demo
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {project.credentials.accounts.map((acc, idx) => (
                                                        <div key={idx} className="space-y-2 p-3 rounded-2xl bg-white/5 border border-white/5 overflow-hidden">
                                                            <div className="text-[9px] text-white/30 font-black uppercase tracking-widest">{acc.label}</div>
                                                            <div className="flex flex-col gap-1 min-w-0">
                                                                <div className="text-[10px] font-mono break-all sm:break-words">
                                                                    <span className="opacity-40 uppercase text-[8px] mr-1">U:</span> {acc.user}
                                                                </div>
                                                                <div className="text-[10px] font-mono">
                                                                    <span className="opacity-40 uppercase text-[8px] mr-1">P:</span> {acc.pass}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-[9px] font-black uppercase tracking-widest hover:text-white hover:border-pink-500/40 transition-all"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                                        {project.demoUrl && (
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-6 py-3.5 rounded-xl bg-white text-slate-950 font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all w-full sm:w-auto"
                                            >
                                                Visitar <FiExternalLink size={14} />
                                            </motion.a>
                                        )}
                                        {project.codeUrl && (
                                            <motion.a
                                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.codeUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-6 py-3.5 rounded-xl bg-white/5 text-white font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 border border-white/10 transition-all w-full sm:w-auto"
                                            >
                                                Código <FiGithub size={14} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Visual Side */}
                                <div className="flex-1 relative overflow-hidden order-1 lg:order-2 bg-slate-950/30 min-h-[250px] sm:min-h-[300px] lg:min-h-full">
                                    <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-purple-500/10 mix-blend-overlay" />

                                    <div className="relative h-full flex items-center justify-center p-6 md:p-12 lg:p-16 perspective-1000">
                                        {/* Browser Mockup */}
                                        <motion.div
                                            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                                            className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 transition-all duration-700"
                                        >
                                            <div className="bg-slate-800/80 backdrop-blur-md h-6 w-full px-3 flex items-center gap-1 border-b border-white/5">
                                                <div className="size-1.5 rounded-full bg-red-500/40" />
                                                <div className="size-1.5 rounded-full bg-yellow-500/40" />
                                                <div className="size-1.5 rounded-full bg-green-500/40" />
                                            </div>
                                            <div className="relative overflow-hidden aspect-video">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Decorative Blur */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/20 blur-[100px] rounded-full animate-pulse" />
                                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 blur-[100px] rounded-full delay-700 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};