import React from 'react'
import Layout from './Layout'

function Logbooks() {
  const imageSize = 140 // Change this value to resize all contributor images

  const teamMembers = [
    {
      name: 'Ashraf Abdelkhaleq',
      role: 'Team Lead & Developer',
      contribution:
        'Led the project structure, implemented core React components, and styled the interface using Tailwind CSS.',
      image: 'https://res.cloudinary.com/deroxbeov/image/upload/v1759708242/AA_dnctem.jpg'
    },
    {
      name: 'Mohammed 3bbas',
      role: 'Hardware & Extraction Specialist',
      contribution:
        'Handled component extraction from old devices and documented the reuse process for the prototype.',
      image: 'https://ui-avatars.com/api/?name=Mohammed+3bbas&background=0D8ABC&color=fff'
    },
    {
      name: 'Mohammed Khalil',
      role: 'Documentation & Testing',
      contribution:
        'Assembled the scientific instrument, performed trial tests, and recorded performance metrics.',
      image: 'https://res.cloudinary.com/deroxbeov/image/upload/v1759708242/MK_ozg6hc.jpg'
    },
    {
      name: 'Anas Ahmed',
      role: 'Prototype Engineer',
      contribution:
        'Managed logbooks, created diagrams, and conducted calibration and accuracy testing.',
      image: 'https://res.cloudinary.com/deroxbeov/image/upload/v1759708243/AS_rgziuv.jpg'
    }
  ]

  return (
    <Layout>
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Project Logbooks + Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-left flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                style={{ width: imageSize, height: imageSize }}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{member.name}</h3>
              <p className="text-sm text-black font-medium mb-2 text-center">{member.role}</p>
              <p className="text-gray-700 text-center">{member.contribution}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Logbooks