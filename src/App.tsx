import './App.css'
import { Introduction } from './components/Introduction'
import { MainContent } from './components/MainContent'
import './index.css'

function App() {

  return (
    <div className='flex w-full h-full'>
      <aside className='w-1/3 md:w-1/2 lg:w-1/3'>
        <Introduction/>
      </aside>
      <main className='w-2/3 h-full md:w-1/2 lg:w-1/2'>
        <MainContent/>
      </main>
    </div>
  )
}

export default App
