import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SectionProps } from "../types/SectionProps";
import { aboutContent } from '../data/about';
import { FiTarget, FiZap, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const About = ({ id }: SectionProps) => {
    type Category = 'vision' | 'frontend' | 'backend';
    const [activeTab, setActiveTab] = useState<Category>('vision');

    const stats = [
        { label: 'Experiencia', value: '3+ Años', icon: <FiZap className="text-amber-400" /> },
        { label: 'Enfoque', value: 'Full Stack', icon: <FiTarget className="text-pink-400" /> },
    ];

    return (
        <section id={id} className="py-20 md:py-32 relative overflow-hidden">
            {/* Aesthetic Background - Soft Neon Halos */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-pink-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
                <header className="mb-12 md:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center gap-3 mb-6"
                    >
                        <span className="h-px w-8 bg-linear-to-r from-transparent to-pink-500/50"></span>
                        <span className="text-pink-500 font-mono text-xs md:text-sm font-bold tracking-[0.3em] uppercase">01 • Descubre mi perfil</span>
                        <span className="h-px w-8 bg-linear-to-l from-transparent to-pink-500/50"></span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto"
                    >
                        Ingeniera de <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Ejecución en Computación e Informática</span>
                    </motion.h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-stretch">
                    {/* Left Column: Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col h-full"
                    >
                        <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden flex-1 flex flex-col group hover:border-pink-500/20 transition-colors duration-500">
                            {/* Decorative Corner Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl -mr-16 -mt-16" />

                            <div className="relative z-10 flex-1 flex flex-col">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-pink-400 mb-8 self-start">
                                    Sobre mí
                                </span>

                                <p className="text-xl md:text-3xl font-black text-white leading-tight mb-8 text-center md:text-left tracking-tight">
                                    Desarrollo <span className="text-pink-500">soluciones integrales</span> donde la solidez técnica se une a la <span className="italic text-gray-400">excelencia visual</span>.
                                </p>

                                {/* Social Links / Quick Contact */}
                                <div className="flex gap-4 mb-12 justify-center md:justify-start">
                                    {[
                                        { icon: <FiGithub size={18} />, href: "#" },
                                        { icon: <FiLinkedin size={18} />, href: "#" },
                                        { icon: <FiMail size={18} />, href: "#" }
                                    ].map((social, i) => (
                                        <a key={i} href={social.href} className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-pink-500/20 hover:border-pink-500/30 transition-all">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 flex flex-col items-center md:items-start group/stat hover:bg-white/10 transition-colors">
                                            <div className="text-pink-500 mb-2 scale-125 md:scale-100 group-hover/stat:scale-110 transition-transform">{stat.icon}</div>
                                            <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">{stat.label}</div>
                                            <div className="text-base md:text-xl font-black text-white">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Knowledge Hub */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col h-full"
                    >
                        <div className="bg-slate-950/40 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[4rem] border border-white/5 p-2 mb-6 flex overflow-hidden">
                            {(['vision', 'frontend', 'backend'] as Category[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-4 px-2 md:px-8 rounded-[2rem] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-700 relative ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    <span className="relative z-10">{aboutContent[tab].title}</span>
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="hubTab"
                                            className={`absolute inset-0 bg-linear-to-br ${aboutContent[tab].color} rounded-[1.8rem] shadow-2xl shadow-pink-500/20`}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                                className="flex-1 bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden flex flex-col justify-center shadow-2xl"
                            >
                                {/* Subtle Quote Icon */}
                                <div className="absolute top-10 left-10 text-white/5 pointer-events-none">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V11C5.017 11.5523 4.56929 12 4.017 12H3.017V21H5.017Z" /></svg>
                                </div>

                                <p className="text-lg md:text-2xl leading-relaxed text-gray-200 font-medium italic relative z-10">
                                    "{aboutContent[activeTab].text}"
                                </p>

                                <div className="mt-12 flex items-center gap-4">
                                    <div className={`h-1 flex-1 bg-white/5 rounded-full relative overflow-hidden`}>
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "0%" }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className={`absolute inset-0 bg-linear-to-r ${aboutContent[activeTab].color}`}
                                        />
                                    </div>
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                        Foco: {aboutContent[activeTab].title}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};