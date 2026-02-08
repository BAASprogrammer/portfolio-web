import { useScroll } from '../context/ScrollContext';
import { SocialLinks } from './SocialLinks';

export const IntroductionDesktop = () => {
  const {scrollTo, activeSection} = useScroll();
  const menuClass = (id : string) => 
    `text-menu cursor-pointer
    ${activeSection === id ? "active-section" : ""}`;

  return (
    <div className="pl-8 pr-8 pt-14 w-full h-full text-default bg-gradient-to-br from-gray-950/95 via-gray-900/90 to-pink-950/80">
        <div>
          <h1 className="text-3xl font-bold text-gradient-animate">Desarrolladora Full Stack</h1>
          <div className="mt-4">
            <p className="pb-4">Genero programas accesibles y responsive con React, TypeScript y Spring Boot.</p>
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
  );
};