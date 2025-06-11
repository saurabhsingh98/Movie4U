import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
const Header = () => {
  return (
    <>
      <header className='bg-gray-800 text-white p-4'>
        <nav className='flex justify-between items-center'>
          <Link to="/" className='text-2xl font-bold'>Movies4u </Link>
          <Link to="/about" className='text-2xl font-bold'>About</Link>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default Header
