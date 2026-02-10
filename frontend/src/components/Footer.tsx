export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center space-y-4 pt-12 pb-6 border-t border-gray-700/50 mt-16">
      <div className="space-y-2">
        <p className="text-gray-300">
          <span className="text-pink-400 font-semibold">Bárbara Arias</span> • Desarrolladora Full Stack
        </p>
        <p className="text-gray-500 text-sm">
          Diseñado y construido con <span className="text-pink-500">❤</span> usando React, TypeScript, Tailwind CSS
        </p>
      </div>
      <div className="text-gray-600 text-xs space-y-1">
        <p>Desplegado en <span className="text-pink-400 font-medium">Vercel</span></p>
        <p>© {currentYear} Bárbara Arias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
  
}