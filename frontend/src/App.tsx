import { IntroductionDesktop } from './components/IntroductionDesktop'
import { IntroductionMobile } from './components/IntroductionMobile'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'
import { ScrollProvider, useScroll } from './context/ScrollContext'

function App() {
  
  return (
    <ScrollProvider>
      <div className='min-h-screen bg-slate-900'>
        {/* Layout mobile */}
        <div className='block lg:hidden'>
          <header className='w-full'>
            <IntroductionMobile/>
          </header>
          <main className='w-full'>
            <MainContent/>
          </main>
          <footer className='w-full h-16 flex items-center justify-center bg-gray-900 text-white'>
            <Footer/>
          </footer>
        </div>

        {/* Layout desktop */}
        <div className='hidden lg:flex w-full min-h-screen'>
          <aside className='fixed left-0 top-0 w-80 h-screen overflow-y-auto bg-slate-900'>
            <IntroductionDesktop/>
          </aside>
          <DesktopScrollableContainer>
            <MainContent/>
            <Footer/>
          </DesktopScrollableContainer>
        </div>
      </div>
    </ScrollProvider>
  )
}

const DesktopScrollableContainer = ({ children }: { children: React.ReactNode }) => {
  const { containerRef } = useScroll();
  return (
    <div
      className="ml-80 w-full h-screen overflow-y-auto"
      ref={containerRef} // referencia al contenedor scrollable
    >
      {children}
    </div>
  );
};

export default App
