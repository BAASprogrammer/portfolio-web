import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const SocialLinks = () => {
    const linkStyles = "group relative rounded-full bg-linear-to-br from-slate-800 to-slate-900 px-3 py-3 border border-white/10 text-gray-400 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-linear-to-br hover:from-pink-600 hover:to-purple-600 hover:border-pink-400 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]";

    return (
        <div className='flex gap-3 justify-center items-center mt-4'>
            <a className={linkStyles} href="https://github.com/BAASprogrammer" title='GitHub' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
            </a>
            <a className={linkStyles} href="https://linkedin.com/in/barbara-arias-salvo" title='LinkedIn' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
            <a className={linkStyles} href="mailto:bariassalvo@gmail.com" title='Email' target='_blank' rel='noopener noreferrer'>
                <FaEnvelope />
            </a>
        </div>
    );
}