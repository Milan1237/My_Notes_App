import React from 'react'
import logo from '../assets/navLogo/logo.png'
const Navbar = () => {
  return (
    <header>
        <nav className='flex h-fit w-full items-center gap-4 border-b-2 border-[#263350] pb-2'>
          <img src={logo}  className='h-[50px] object-cover ' alt="MyNotesApp Logo" />
          <h4 className=' text-2xl'>My Notes App</h4>
        </nav>
    </header>
  )
}

export default Navbar