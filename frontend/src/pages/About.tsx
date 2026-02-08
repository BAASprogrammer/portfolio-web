import type { SectionProps } from "../types/SectionProps"

export const About = ({id} : SectionProps) => {
    return(
        <section id = {id}>
            <h2 className="mt-10 mb-8 text-2xl font-semibold flex items-center gap-3">
                <span className="text-lg text-pink-500 font-bold">01. </span>
                Información sobre mí
                <span className="border-b border-gray-600 flex-1"></span>
            </h2>
            <div className="space-y-8">
                <div className="text-center">
                    <p className='whitespace-pre-wrap text-lg leading-relaxed max-w-3xl mx-auto'>
                    Ingeniera en Computación e Informática especializada en desarrollo web y gestión de bases de datos.
                    </p>
                </div>

                <div className='flex items-center mt-6 gap-8 flex-col lg:flex-row'>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl max-w-lg w-10/12 lg:w-full h-40 hover:shadow-2xl transition-all duration-300 hover:border-blue-400/50">
                        <div className="flex items-center justify-center mb-3">
                            <span className='text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300'>Frontend</span>
                        </div>
                        <p className="text-center text-gray-300 hover:text-white transition-colors duration-300">
                            HTML, CSS, JavaScript, TypeScript, React y Tailwind CSS
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl max-w-lg w-10/12  lg:w-full h-40 hover:shadow-2xl transition-all duration-300 hover:border-green-400/50">
                        <div className="flex items-center justify-center mb-3">
                            <span className='text-2xl font-bold text-green-400 hover:text-green-300 transition-colors duration-300'>Backend</span>
                        </div>
                        <p className="text-center text-gray-300 hover:text-white transition-colors duration-300">
                            PHP, PostgreSQL y nociones en Spring Boot
                        </p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-600 dark:text-gray-400 italic">
                    "Me enfoco en crear aplicaciones funcionales y bien diseñadas, aprender nuevas tecnologías y colaborar en equipos para entregar proyectos de calidad."
                    </p>
                </div>
            </div>
        </section>
    )
}