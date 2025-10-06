import React from 'react'
import Layout from './Layout'

function App() {
  return (
    <>
      <style>
				{`
					@keyframes grayscaleSlide {
						0%   { background-position: 0% 50%; }
						100% { background-position: 200% 50%; }
					}

					.animate-grayscale-slide {
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
						animation: grayscaleSlide 2s linear infinite;
					}
				`}
      </style>

      <Layout>
        {/* Hero Section */}
        <section className="text-white py-20 px-6 text-center animate-grayscale-slide">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to 11C - 23213 Capstone Team
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Empowering innovation through technology, creativity, and real-world challenges.
          </p>
          <a
            href="/Challenge"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Explore Challenges
          </a>
        </section>

        {/* Intro Section */}
        <section className="bg-white py-16 px-6 text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Is This Project About?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            This capstone project explores real-world challenges through innovative web development.
            Built with React and Tailwind CSS, it showcases problem-solving, creativity, and technical skill.
            Dive into the journey of building, testing, and refining a digital solution that matters.
          </p>
        </section>

        {/* Team Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Team 11C - 23213 Cap Team
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A passionate group of innovators dedicated to solving real-world challenges through technology and creativity.
          </p>
        </section>
      </Layout>
    </>
  )
}

export default App