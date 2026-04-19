import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SectionProps } from "../types/SectionProps";
import { categories, skillData } from '../data/skills';

export const Skills = ({ id }: SectionProps) => {
    const [activeTab, setActiveTab] = useState<string>('frontend');

    return (
        <section id={id} className="py-24 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <header className="mb-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-black flex items-center justify-center gap-4 text-white mb-6">
                        <span className="h-px bg-linear-to-r from-transparent to-pink-500/50 flex-1 hidden sm:block"></span>
                        <span className="text-pink-500 font-mono text-xl">02.</span>
                        Stack Tecnológico
                        <span className="h-px bg-linear-to-r from-pink-500/50 to-transparent flex-1 hidden sm:block"></span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
                        Mi caja de herramientas evoluciona constantemente para construir experiencias digitales de alto rendimiento.
                    </p>
                </header>

                {/* Categories Navigation - Refined */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-20 bg-white/5 p-2 rounded-4xl border border-white/5 w-fit mx-auto lg:mx-0">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-3 relative ${
                                activeTab === cat.id 
                                    ? 'text-white' 
                                    : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            <span className={activeTab === cat.id ? 'relative z-10' : ''}>{cat.icon}</span>
                            <span className={activeTab === cat.id ? 'relative z-10' : ''}>{cat.title}</span>
                            
                            {activeTab === cat.id && (
                                <motion.div 
                                    layoutId="activeCategory"
                                    className={`absolute inset-0 bg-linear-to-br ${cat.color} rounded-full shadow-lg shadow-pink-500/20`}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Skills Grid Visualization */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {skillData[activeTab].map((skill, idx) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:border-pink-500/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Active Glow Background */}
                                <div className="absolute top-0 left-0 w-24 h-24 bg-pink-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`size-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500 ${skill.color.split(' ')[0]}`}>
                                        {skill.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold text-lg leading-tight">{skill.name}</span>
                                        <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                            Especialidad
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};