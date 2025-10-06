import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsDark(scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50
      backdrop-blur-md border shadow-xl rounded-2xl px-8 py-3 flex justify-between items-center
      w-[90%] max-w-8xl transition-colors duration-300
      ${isDark ? 'bg-black/30 border-white/10 text-white' : 'bg-white/30 border-black/10 text-black'}`}>
      
      <h1 className="text-lg font-bold drop-shadow">Capstone 2025</h1>
      
      <ul className="flex space-x-6 font-semibold drop-shadow">
        <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
        <li><Link to="/Challenge" className="hover:text-blue-600 transition-colors">Challenge</Link></li>
        <li><Link to="/Logbooks" className="hover:text-blue-600 transition-colors">Team Members</Link></li>
        <li><Link to="/Prototype" className="hover:text-blue-600 transition-colors">Prototype</Link></li>
        <li><Link to="/TestResults" className="hover:text-blue-600 transition-colors">Test Results</Link></li>
        <li><Link to="/STR" className="hover:text-blue-600 transition-colors">Task Records</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar