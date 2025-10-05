import React from 'react'
import Layout from './Layout'

function Logbooks() {
  const teamMembers = [
    {
      name: 'Ashraf Abdelkhaleq',
      role: 'Team Lead & Developer',
      contribution: 'Led the project structure, implemented core React components, and styled the interface using Tailwind CSS.'
    },
    {
      name: 'Mohammed 3bbas',
      role: 'Hardware & Extraction Specialist',
      contribution: 'Handled component extraction from old devices and documented the reuse process for the prototype.'
    },
    {
      name: 'Mohammed Khalil',
      role: 'Prototype Engineer',
      contribution: 'Assembled the scientific instrument, performed trial tests, and recorded performance metrics.'
    },
    {
      name: 'Anas Ahmed',
      role: 'Documentation & Testing',
      contribution: 'Managed logbooks, created diagrams, and conducted calibration and accuracy testing.'
    }
  ]

  return (
    <Layout>
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Project Logbooks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-700">{member.contribution}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Logbooks