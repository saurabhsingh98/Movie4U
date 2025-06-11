import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-6'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Main Info */}
          <div>
            <h3 className='text-xl font-bold mb-2'>Movies4U</h3>
            <p className='text-gray-400'>Your ultimate destination for movies and entertainment.</p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-1'>
            <h3 className='text-xl font-bold mb-2'>Quick Links</h3>
            <div className='flex gap-1'>
              <a href="/" className='text-gray-400 hover:text-white'>Home</a>
              <a href="/about" className='text-gray-400 hover:text-white'>About</a>
              <a href="/terms" className='text-gray-400 hover:text-white'>Terms</a>
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