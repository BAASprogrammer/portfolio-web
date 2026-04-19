import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Sparkles, X, Mail, Phone, ArrowRight, FileText } from 'lucide-react';
import { personalPhrases } from '../data/personalIntro';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export const PersonalIntro = () => {
    const [showTooltip, setShowTooltip] = useState<boolean>(true);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const phraseInterval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % personalPhrases.length);
        }, 4000);
        return () => clearInterval(phraseInterval);
    }, []);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }

    const DownloadCV = () => {
        window.open('/CV-BARBARA-ARIAS.pdf', '_blank', 'noopener,noreferrer');
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='relative min-h-[90vh] lg:min-h-[80vh] flex flex-col justify-center py-10 sm:py-20 px-4 sm:px-8 overflow-hidden'
        >
            {/* Specialty Floating Hero Section (Desktop only) */}
            <div className='absolute top-0 right-10 z-0 hidden lg:block'>
                <div className='relative w-80 h-80 flex items-center justify-center rounded-full'>
                    {/* Glowing Backlight - Centered */}
                    <div className="absolute inset-4 bg-pink-500/10 blur-[80px] rounded-full animate-pulse" />

                    {/* Rotating Orbital Dots */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-none pointer-events-none will-change-transform bg-transparent"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full blur-[1px]"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]"></div>
                    </motion.div>

                    {/* Dynamic Specialty Badge */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className='relative z-20 w-64 rounded-4xl bg-transparent'
                            >
                                <div className='px-5 py-4 rounded-4xl bg-slate-900/60 backdrop-blur-3xl border border-white/10 shadow-3xl overflow-hidden group hover:border-pink-500/30 transition-colors duration-500'>
                                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-pink-500/5 blur-3xl rounded-full group-hover:bg-pink-500/10 transition-colors" />

                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="bg-linear-to-br from-pink-500 to-purple-600 p-2 rounded-xl shadow-lg ring-2 ring-pink-500/10 pointer-events-none">
                                            <Sparkles size={18} className="text-white" />
                                        </div>
                                        <div className="pointer-events-none">
                                            <p className="text-[9px] uppercase font-black tracking-[0.3em] text-pink-500 mb-1.5">Conocimientos en</p>
                                            <AnimatePresence mode="wait">
                                                <motion.p
                                                    key={currentPhraseIndex}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className='text-white font-black text-sm leading-tight'
                                                >
                                                    {personalPhrases[currentPhraseIndex]}
                                                </motion.p>
                                            </AnimatePresence>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
                                            className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors p-1"
                                        >
                                            <X size={12} />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 w-full opacity-30 pointer-events-none" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Introduction Text Header */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 max-w-4xl relative z-10 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                    <span className="hidden sm:block h-px w-8 bg-pink-500"></span>
                    <h5 className="text-pink-500 font-mono tracking-[0.3em] text-[10px] sm:text-sm uppercase font-black italic flex flex-wrap justify-center sm:justify-start">
                        {"Programar con pasión".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: i * 0.04,
                                    ease: "easeOut"
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h5>
                </div>

                <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none sm:leading-[0.9] text-white">
                    <span className="block">Bárbara</span>
                    <span className="block bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        Arias
                    </span>
                </h1>

                <h2 className="text-lg sm:text-3xl md:text-4xl text-gray-300/90 font-bold tracking-tight max-w-2xl px-2 sm:px-0">
                    Desarrolladora Frontend React <span className="inline text-white/20 px-2">|</span> <span>Full Stack</span>
                </h2>

                <p className='text-gray-400 text-base sm:text-xl leading-relaxed max-w-2xl font-medium px-4 sm:px-0'>
                    Especializada en crear interfaces modernas, accesibles y robustas con <span className="text-white">React/Next.js</span> y <span className="text-white">TypeScript</span>.
                </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
                variants={itemVariants}
                className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/5 backdrop-blur-md w-full sm:w-fit"
            >
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400">
                        <Phone size={14} className="text-pink-500" />
                        +56 951 351 815
                    </div>
                    <div className="hidden sm:block h-4 w-px bg-white/10"></div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400">
                        <Mail size={14} className="text-purple-500" />
                        bariassalvo@gmail.com
                    </div>
                </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
                <button
                    onClick={scrollToProjects}
                    className="group relative px-8 py-4 rounded-2xl bg-white text-slate-950 font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden shadow-lg"
                >
                    Explorar Proyectos
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={DownloadCV}
                    className="px-8 py-4 rounded-2xl bg-slate-900/50 text-white font-black text-sm uppercase tracking-widest border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-3 active:scale-95"
                >
                    <FileText size={18} className="text-pink-500" />
                    Descargar CV
                </button>
            </motion.div>

            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        </motion.div >
    )
}