import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 overflow-x-hidden overflow-y-auto">
      <Navbar />
      <main className="flex-grow mt-24">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout