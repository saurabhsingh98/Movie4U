import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-6'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center'>
          {/* Main Info */}
          <div>
            <h3 className='text-xl font-bold mb-2'>Movies4U</h3>
            <p className='text-gray-400'>Your ultimate destination for movies and entertainment.</p>
          </div>

          {/* Quick Links */}
          {/* move contents to end of div */}
          <div className='flex flex-col gap-2 justify-end items-end'>
            <h3 className='text-xl font-bold mb-0 text-center'>Quick Links</h3>
            <div className='flex gap-2 justify-center'>
              <Link to="/" className='text-gray-400 hover:text-white'>Home</Link>
              <Link to="/about" className='text-gray-400 hover:text-white'>About</Link>
              <Link to="/terms" className='text-gray-400 hover:text-white'>Terms</Link>
            </div>
          </div>
        </div>

        <div className='mt-6 pt-4 text-center text-gray-400 border-t border-gray-800'>
          <p>&copy; {new Date().getFullYear()} Movies4U. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}