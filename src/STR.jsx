import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

function STR() {
  return (
    <Layout>
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-black mb-12">
          Semester Task Record
        </h1>

        <div className="space-y-6 max-w-4xl mx-auto text-left">
          <p className="text-lg text-gray-800 font-medium">
            Task 1 – Recycle garbage and waste for economy and environment – WHOLE TEAM –{' '}
            <Link to="/TASKS/TSK1TEAM" className="text-grey underline hover:text-blue-700">
              View Task
            </Link>{' '}
            – 2025-09-15
          </p>

          <p className="text-lg text-gray-800 font-medium">
            Task 1.1 – Address and reduce pollution fouling air, water, and soil. – Anas Ahmed –{' '}
            <Link to="/tasks/T2MABB" className="text-grey underline hover:text-blue-700">
              View Task
            </Link>{' '}
            – 2025-09-20
          </p>

          <p className="text-lg text-gray-800 font-medium">
            Task 1.2 – Reduce and adapt to the effects of climate change. – Mohammed 3bbas –{' '}
            <Link to="/tasks/T2MABB" className="text-grey underline hover:text-blue-700">
              View Task
            </Link>{' '}
            – 2025-09-20
          </p>

          <p className="text-lg text-gray-800 font-medium">
            Task 1.3 – Address and reduce pollution fouling air, water, and soil. – Ashraf Abdelkhaleq –{' '}
            <Link to="/tasks/T2MABB" className="text-grey underline hover:text-blue-700">
              View Task
            </Link>{' '}
            – 2025-09-20
          </p>

          <p className="text-lg text-gray-800 font-medium">
            Task 1.4 – Improve the scientific and technological environment for all.
 – Ashraf Abdelkhaleq –{' '}
            <Link to="/tasks/T2MABB" className="text-grey underline hover:text-blue-700">
              View Task
            </Link>{' '}
            – 2025-09-20
          </p>

          {/* Add more tasks here as needed */}
        </div>
      </section>
    </Layout>
  )
}

export default STR