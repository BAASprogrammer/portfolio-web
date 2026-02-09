import { useEffect, useState } from 'react';
import { useScroll } from '../context/ScrollContext';
import { SocialLinks } from './SocialLinks';
import { FaBars } from 'react-icons/fa';

export const Introduction = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const {scrollTo, activeSection} = useScroll();
  const menuClass = (id : string) => 
    `text-menu cursor-pointer
    ${activeSection === id ? "active-section" : ""}`;

  useEffect(() => {
    if(isMenuOpen) setMenuOpen(false);
  }, [])

  console.log("valor de ismenuopen "+isMenuOpen);
  
  return (
    <div className="relative">
        <div className={isMenuOpen ? "menu-overlay fixed inset-0 bg-black opacity-70 z-5" : ""} onClick={() => setMenuOpen(false)}></div>
        <button className='md:hidden absolute top-4 right-12 z-10 p-2 rounded' onClick={() => setMenuOpen(!isMenuOpen)}><FaBars className='cursor-pointer' size={24}/></button>
        <aside className={`nav-menu-container md:block md:sticky top-0  md:h-screen bg-black md:bg-gradient-to-br from-gray-95/95 via-gray-900/90 to-pink-950/80  ${isMenuOpen ? " menu-opened absolute max-w-96 h-110 p-2 right-14 top-14 border rounded-2xl z-10 bg-black" 
          : " menu-closed hidden md:block"}`}>
          <div className="pl-4 pr-4 pt-6 h-full text-default lg:bg-gradient-to-br from-gray-950/95 via-gray-900/90 to-pink-950/80">
              <div className='pl-2 pr-2'>
                <h1 className="hidden md:block text-2xl lg:text-3xl font-bold text-gradient-animate">Desarrolladora Full Stack</h1>
                <div className='block md:hidden text-center font-semibold text-2xl text-gradient-animate'>Menu</div>
                <div className="mt-4">
                  <p className="pb-4 hidden md:block">Genero programas accesibles y responsive con React, TypeScript y Spring Boot.</p>
                  <button onClick={() => scrollTo('about')} className={menuClass("about")}><span className="line-menu"></span><span className="menu-text"> Sobre mí</span></button>
                  <button onClick={() => scrollTo('experience')} className={menuClass("experience")}><span className="line-menu"></span><span className="menu-text"> Experiencia</span></button>
                  <button onClick={() => scrollTo('projects')} className={menuClass("projects")}><span className="line-menu"></span><span className="menu-text"> Proyectos</span></button>
                  <button onClick={() => scrollTo('skills')} className={menuClass("skills")}><span className="line-menu"></span><span className="menu-text"> Habilidades</span></button>
                  <button onClick={() => scrollTo('contact')} className={menuClass("contact")}><span className="line-menu"></span><span className="menu-text"> Contacto</span></button>
                </div>
                <div>
                  <SocialLinks />
                </div>
              </div>
          </div>
        </aside>
    </div>

  );
};