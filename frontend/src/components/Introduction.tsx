import { useEffect, useState } from 'react';
import { useScroll } from '../context/ScrollContext';
import { SocialLinks } from './SocialLinks';
import { FaBars, FaTimes, FaUser, FaBriefcase, FaCode, FaTerminal, FaEnvelope } from 'react-icons/fa';

export const Introduction = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const { scrollTo, activeSection } = useScroll();
  const menuClass = (id: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-bold group/item
    ${activeSection === id ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`;

  useEffect(() => {
    if (isMenuOpen) setMenuOpen(false);
  }, [])

  return (
    <div className="relative">
      {/* Mobile Overlay Background */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40 transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Hamburger/Close Button */}
      <button
        className='md:hidden fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-900/90 border border-white/10 text-white shadow-2xl backdrop-blur-xl active:scale-90 transition-all'
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu Side Panel / Content */}
      <aside className={`
          md:block md:sticky md:w-auto md:p-0 md:top-0 md:right-auto md:border-0 md:rounded-none md:h-screen md:bg-slate-950
          fixed top-0 right-0 h-full z-45 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${isMenuOpen ? "translate-x-0 w-[85%] max-w-[320px]" : "translate-x-full w-0"}
          bg-slate-950/98 backdrop-blur-3xl border-l border-white/5
          md:translate-x-0 md:static md:opacity-100
        `}>
        <div className="px-6 pt-24 pb-8 md:pt-14 md:h-full text-default flex flex-col h-full border-r border-white/5">
          {/* Status & Avatar Section */}
          <div className="mb-10 md:mb-12">
            <div className="flex items-center justify-between mb-8">
              <div className="relative size-12 rounded-4xl bg-linear-to-br from-pink-500 to-purple-600 p-px shadow-lg shadow-pink-500/20">
                <div className="w-full h-full rounded-4xl bg-slate-900 flex items-center justify-center font-black text-white text-lg">
                  BA
                </div>
              </div>
              {/* Status Indicator */}
              <div className="flex items-center gap-2 bg-slate-900/50 border border-green-500/20 px-3 py-1 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest text-green-400">Disponible</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-black tracking-tighter text-white">
                Bárbara Arias
              </h1>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="flex-1 space-y-1">
            {[
              { id: 'about', label: 'Sobre mí', icon: <FaUser className="opacity-70 group-hover/item:opacity-100" size={14} /> },
              { id: 'experience', label: 'Experiencia', icon: <FaBriefcase className="opacity-70 group-hover/item:opacity-100" size={14} /> },
              { id: 'projects', label: 'Proyectos', icon: <FaCode className="opacity-70 group-hover/item:opacity-100" size={14} /> },
              { id: 'skills', label: 'Habilidades', icon: <FaTerminal className="opacity-70 group-hover/item:opacity-100" size={14} /> },
              { id: 'contact', label: 'Contacto', icon: <FaEnvelope className="opacity-70 group-hover/item:opacity-100" size={14} /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
                className={`
                      ${menuClass(item.id)} 
                      text-sm uppercase tracking-widest relative overflow-hidden w-full cursor-pointer
                    `}
              >
                {item.icon}
                <span className="transition-transform duration-300 group-hover/item:translate-x-1">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-pink-500 rounded-r-full shadow-lg shadow-pink-500/50 animate-in fade-in slide-in-from-left-2 duration-500"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Connect Section */}
          <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
            <div className='text-center'>
              <p className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 mb-4 px-4">Social</p>
              <SocialLinks />
            </div>

            <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 transition-colors">
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                Ubicada en <span className="text-white">Chile</span>, trabajando para el mundo.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};