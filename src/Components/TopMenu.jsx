import '../Style/App.css'
import '../Style/Font.css'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import logo from '../assets/Images/GrassGaLawnCare1.png'

function TopMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-lg transition-colors duration-300
     ${isActive ? 'text-green-700 font-semibold' : 'text-gray-700 hover:text-green-700'}`

  return (
    <>
      <header className="w-full bg-gray-50 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-19 py-3">
            {/* Logo */}
            <div className="flex items-end space-x-0">
              <a href="/">
                <img
                  src={logo}
                  alt="Ga Lawn Care"
                  className="h-14 w-auto"
                />
              </a>
              <a href="/" className="fontLora ml-1 text-2xl text-gray-600">GA LAWN CARE</a>
            </div>

            {/* Navegación grande */}
            <nav className="hidden md:flex space-x-6">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>

            {/* Botón hamburguesa */}
            <div className="md:hidden">
              <button
                className="text-gray-600 hover:text-black focus:outline-none"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay del menú móvil con blur */}
      <div className={`fixed inset-0 z-50 transition duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Fondo borroso tipo glassmorphism */}
        <div
          className={`absolute inset-0 backdrop-blur-sm bg-white/30 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar del menú */}
        <div className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-black">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col px-4">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </>
  )
}

export default TopMenu
