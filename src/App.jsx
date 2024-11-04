import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useNotes } from './context/Context'
function App() {
  

  return (
    <>
      <Navbar />
      <main className='flex h-[calc(100vh-50px-1rem)]'>
        <Sidebar />
        <div className='  w-[calc(100vw-200px)] h-[calc(100vh-50px-1rem)]'>
            <Outlet />
        </div>
      </main>
    </>
  )
}

export default App
