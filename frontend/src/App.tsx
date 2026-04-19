import { Introduction } from './components/Introduction'
import { MainContent } from './components/MainContent'
import { AnimatedBackground } from './components/AnimatedBackground'
import { ScrollProvider, useScroll } from './context/ScrollContext'
import { LofiPlayer } from './components/LofiPlayer'

import { CustomCursor } from './components/CustomCursor'

function App() {

  return (
    <ScrollProvider>
      <CustomCursor />
      <AppContainer />
    </ScrollProvider>
  )
}


const AppContainer = () => {
  const { containerRef } = useScroll();
  return (
    <div className='min-h-screen bg-slate-900 relative'>
      <AnimatedBackground />
      <div className=' w-full h-screen overflow-y-auto relative z-10'
        ref={containerRef}> {/* reference to scrollable container */}
        <div className=' grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] grid-cols-1'>
          <Introduction />
          <MainContent />
        </div>
      </div>
      <LofiPlayer />
    </div>
  );
};

export default App
