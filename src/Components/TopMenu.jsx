import '../Style/App.css'
import '../Style/Font.css'
import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../assets/Images/GrassGaLawnCare1.png'

function TopMenu(){
  const navLinkClass = ({ isActive }) =>
  `relative pb-1 transition-colors duration-300
   ${isActive ? 'text-green-700 font-semibold after:scale-x-100' : 'text-gray-600 hover:text-green-700 after:scale-x-0'}
   after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
   after:bottom-0 after:h-0.5 after:w-full after:bg-green-700 after:origin-center after:transition-transform after:duration-300`;

    return(
      <header className="w-full bg-gray-50 shadow-sm sticky top-0 z-50">
        <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-19">
            {/* Logo */}
            <div className="flex items-end space-x-0">
              <a href="/">
                <img
                  src={logo} // Asegúrate de que esta imagen exista en tu carpeta public
                  alt="Ga Lawn Care"
                  className="h-14 w-auto"
                />
              </a>
              <a href='/' className="fontLora ml-1 text-2xl text-gray-600">GA LAWN CARE</a>
            </div>
      
            {/* Navegación */}
            <nav className="hidden md:flex space-x-6">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>
      
            {/* Botón de acción / menú móvil */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-black focus:outline-none">
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
    )
}
export default TopMenu