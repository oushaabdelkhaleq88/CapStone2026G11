import React from 'react'

function Footer() {
  return (
    <>
      <style>
				{`
					@keyframes grayscaleSlide {
						0%   { background-position: 0% 50%; }
						100% { background-position: 200% 50%; }
					}

					.footer-grayscale {
						background: linear-gradient(90deg,
							#000000,
							#0a0a0a,
							#141414,
							#1e1e1e,
							#282828,
							#323232,
							#3c3c3c,
							#464646,
							#505050,
							#5a5a5a,
							#646464,
							#5a5a5a,
							#505050,
							#464646,
							#3c3c3c,
							#323232,
							#282828,
							#1e1e1e,
							#141414,
							#0a0a0a,
							#000000
						);
						background-size: 200% 100%;
						background-repeat: repeat;
						animation: grayscaleSlide 8s linear infinite;
					}
				`}
      </style>

      <footer className="footer-grayscale text-white py-6 px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Capstone Project by Team 23213, Developed By UJA. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/oushaabdelkhaleq88"
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
    </>
  )
}

export default Footer