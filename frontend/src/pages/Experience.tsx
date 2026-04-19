import { motion } from "framer-motion";
import { experienceData } from "../data/experience";
import type { SectionProps } from "../types/SectionProps";

export const Experience = ({ id }: SectionProps) => {
    return (
        <section id={id} className="py-20 md:py-32 relative overflow-hidden">
            {/* Aesthetic Background Halos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />

            {/* Section Header */}
            <header className="mb-16 md:mb-24 text-center px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center gap-3 mb-6"
                >
                    <span className="h-px w-8 bg-purple-500/50"></span>
                    <span className="text-purple-500 font-mono text-xs font-bold tracking-[0.3em] uppercase">03 • Trayectoria</span>
                    <span className="h-px w-8 bg-purple-500/50"></span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-black text-white tracking-tighter"
                >
                    Experiencia <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Profesional</span>
                </motion.h2>
            </header>

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col h-full"
                        >
                            <div className="group relative bg-slate-900/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-[3.5rem] hover:border-purple-500/30 transition-all duration-700 shadow-2xl h-full flex flex-col overflow-hidden">
                                {/* Glow Effect */}
                                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-linear-to-br ${item.color} opacity-5 blur-[100px] group-hover:opacity-15 transition-opacity duration-1000`} />

                                {/* Card Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                                    <div className="flex items-center gap-5">
                                        <div className={`p-4 rounded-3xl bg-linear-to-br ${item.color} text-white shadow-2xl shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-purple-400 transition-colors tracking-tight">
                                                {item.role}
                                            </h3>
                                            <p className="text-purple-400 font-bold text-base uppercase tracking-widest mt-1">
                                                {item.company}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-300 text-[10px] font-black uppercase tracking-widest whitespace-nowrap self-start sm:self-center">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                        </span>
                                        {item.period}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 font-medium opacity-90 border-l-2 border-purple-500/30 pl-6">
                                    {item.description}
                                </p>

                                {/* Highlights Grid */}
                                <div className="grid grid-cols-1 gap-4 mb-10 flex-1">
                                    {item.details.map((detail, dIdx) => (
                                        <div key={dIdx} className="group/detail flex items-center gap-5 p-5 md:p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500">
                                            <div className="text-purple-500 scale-110 group-hover/detail:rotate-12 transition-transform">
                                                {detail.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-black text-white uppercase tracking-tight mb-1">{detail.title}</h4>
                                                <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed">{detail.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Stack */}
                                <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                                    {item.technologies.map(tech => (
                                        <span key={tech} className="px-4 py-2 rounded-xl bg-slate-950 text-gray-500 text-[9px] font-black uppercase tracking-widest border border-white/5 hover:text-white transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {item.badge && (
                                    <div className="absolute top-10 right-10 hidden sm:block">
                                        <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-[10px] font-black uppercase tracking-widest text-white shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                                            {item.badge}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};