import drownarrow from '../assets/images/down-arrow-icon6.png';
import pdfCV from '../assets/images/PDF-file.png';

export const PersonalIntro = () => {
    const scrollToProjects = () => {
        const section = document.getElementById('projects');
        section?.scrollIntoView({ behavior: 'smooth' });
    }
    
    const DownloadCV = () => {
        window.open('/CV-BARBARA-ARIAS.pdf', '_blank', 'noopener,noreferrer');
    }
      
    return (
        <div className='p-4'>
            <h5
                className="text-pink-500 font-bold mt-4 typing-animation text-sm sm:text-base drop-shadow-lg"
                style={{
                    ['--typing-ch' as any]: 18,
                    ['--typing-steps' as any]: 18,
                    ['--typing-duration' as any]: '2.6s',
                }}
            >
                Hola, mi nombre es
            </h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-6 text-gradient-animate hover:drop-shadow-lg transition-all duration-300">Bárbara Arias</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white py-6 font-semibold hover:text-blue-200 transition-colors duration-300">Genero programas para la web.</h2>
            <p className='mt-2 mb-4 text-gray-200 text-sm md:text-base leading-relaxed hover:text-white transition-colors duration-300'>
                Desarrollo aplicaciones web claras y mantenibles, con foco en una buena experiencia y código ordenado.
                Trabajo principalmente con <span className='text-orange-400 font-semibold hover:text-orange-300 transition-colors'>HTML</span>, <span className='text-blue-400 font-semibold hover:text-blue-300 transition-colors'>CSS</span>, <span className='text-yellow-300 font-semibold hover:text-yellow-200 transition-colors'>JavaScript</span>, <span className='text-indigo-400 font-semibold hover:text-indigo-300 transition-colors'>PHP</span> y <span className='text-blue-500 font-semibold hover:text-blue-400 transition-colors'>PostgreSQL</span>, y también me enfoco en proyectos que utilizan <span className='text-cyan-400 font-semibold hover:text-cyan-300 transition-colors'>React</span>, <span className='text-blue-600 font-semibold hover:text-blue-500 transition-colors'>TypeScript</span> y <span className='text-teal-400 font-semibold hover:text-teal-300 transition-colors'>Tailwind CSS</span>, con nociones en <span className='text-red-400 font-semibold hover:text-red-300 transition-colors'>Spring Boot</span>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-2.5">
                <button
                type='button'
                className="btn-animated bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white border-2 border-purple-400/50 px-6 py-2 rounded-lg font-medium cursor-pointer shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto btn-glow-purple" 
                onClick={scrollToProjects} title="Ver Proyectos">
                Ver proyectos
                <img className='size-5 btn-icon-rotate' src={drownarrow} alt="Ver Proyectos" />
                </button>
                <button type='button' className="btn-animated bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white border-2 border-fuchsia-400/50 px-6 py-2 rounded-lg font-medium cursor-pointer shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto btn-glow-fuchsia" title='Descargar CV' onClick={DownloadCV}>Descargar CV<img className='size-5 btn-icon-animate' src={pdfCV} alt="Descargar CV" /></button>
            </div>
        </div>
    )
}