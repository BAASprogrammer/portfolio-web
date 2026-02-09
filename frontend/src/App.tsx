import { Introduction } from './components/Introduction'
import { MainContent } from './components/MainContent'
import { ScrollProvider, useScroll } from './context/ScrollContext'

function App() {
  
  return (
    <ScrollProvider>
      <AppContainer/>
    </ScrollProvider>
  )
}

const AppContainer = () => {
  const { containerRef } = useScroll();
  return (
      <div className='min-h-screen bg-slate-900'>
        <div className=' w-full min-h-screen h-screen lg:overflow-y-auto'
          ref={containerRef}> {/* reference to scrollable container */}
            <div className=' grid md:grid-cols-[30%_70%] sm:grid-cols-1'>
              <Introduction/>
              <MainContent/>
            </div>
        </div>
      </div>
  );
};

export default App
