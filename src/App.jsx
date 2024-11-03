import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Navbar />
      <main className='flex h-[calc(100vh-50px-1rem)]'>
        <Sidebar />
        <div className=' bg-white'>

        </div>
      </main>
    </>
  )
}

export default App
