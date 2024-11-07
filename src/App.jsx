import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <Navbar  />
      <main className='flex h-fit overflow-scroll '>
        <div >
        <Sidebar/>
        </div>
        <div className=' mt-[40px] ml-[220px]  w-[calc(100vw-200px)] h-[calc(100vh-50px-70px)]'>
            <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
