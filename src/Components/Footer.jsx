import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 px-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Capstone Project by Ashraf. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="mailto:your.email@example.com"
          className="hover:underline"
        >
          Contact
        </a>
      </div>
    </footer>
  )
}

export default Footer