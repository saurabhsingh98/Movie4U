import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Movies4U</h3>
            <p className='text-gray-400'>Your ultimate destination for movies and entertainment.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a href="/" className='text-gray-400 hover:text-white transition'>Home</a></li>
              <li><a href="/movies" className='text-gray-400 hover:text-white transition'>Movies</a></li>
              <li><a href="/tv-shows" className='text-gray-400 hover:text-white transition'>TV Shows</a></li>
              <li><a href="/about" className='text-gray-400 hover:text-white transition'>About Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li><a href="/privacy" className='text-gray-400 hover:text-white transition'>Privacy Policy</a></li>
              <li><a href="/terms" className='text-gray-400 hover:text-white transition'>Terms of Service</a></li>
              <li><a href="/cookies" className='text-gray-400 hover:text-white transition'>Cookie Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-6'>
              <a href="#" className='text-gray-400 hover:text-white transition text-2xl' title="Facebook">📘</a>
              <a href="#" className='text-gray-400 hover:text-white transition text-2xl' title="Twitter">🐦</a>
              <a href="#" className='text-gray-400 hover:text-white transition text-2xl' title="Instagram">📸</a>
              <a href="#" className='text-gray-400 hover:text-white transition text-2xl' title="YouTube">🎥</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>&copy; {new Date().getFullYear()} Movies4U. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}