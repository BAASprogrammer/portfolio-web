import { useEffect, useRef, useState } from 'react';
import { useScroll } from '../context/ScrollContext';
import { SocialLinks } from './SocialLinks';

export const IntroductionMobile = () => {
  const {scrollTo} = useScroll();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => { 
        if(!openMenu) return;
        const handleClickOutside = (event: MouseEvent)  => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
                buttonMenuRef.current && !buttonMenuRef.current.contains(event.target as Node)
            ) {
                setOpenMenu(false);
            }
        };
            document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [openMenu])
    
    

  return (
    <div className="pl-8 pr-8 pt-4 w-full h-full text-default">
        <div ref={buttonMenuRef} className='border-2 border-amber-100 rounded-2xl p-2 cursor-pointer font-bold text-center mb-4 w-1/6 mr-2 absolute right-0 transition-all duration-300 hover:bg-fuchsia-900 hover:text-amber-50' onClick={() => setOpenMenu(prev => !prev)}>Menú</div>
        <div ref={menuRef} className={`${openMenu ? "block" : "hidden"} absolute right-0 mt-12 mr-2 w-1/2 border-2 border-amber-100 bg-black/90 rounded-2xl p-4`}>
          <div className="mt-4">
            <button onClick={() => scrollTo('about')} className="text-menu cursor-pointer"><span className="line-menu"></span><span className="menu-text"> Sobre mí</span></button>
            <button onClick={() => scrollTo('experience')} className="text-menu cursor-pointer"><span className="line-menu"></span><span className="menu-text"> Experiencia</span></button>
            <button onClick={() => scrollTo('projects')} className="text-menu cursor-pointer"><span className="line-menu"></span><span className="menu-text"> Proyectos</span></button>
            <button onClick={() => scrollTo('skills')} className="text-menu cursor-pointer"><span className="line-menu"></span><span className="menu-text"> Habilidades</span></button>
            <button onClick={() => scrollTo('contact')} className="text-menu cursor-pointer"><span className="line-menu"></span><span className="menu-text"> Contacto</span></button>
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>

    </div>
  );
};