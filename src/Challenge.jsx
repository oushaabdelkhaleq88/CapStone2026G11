import React from 'react'
import Layout from './Layout'

function Challenge() {
  return (
    <Layout>
      <section className="bg-white py-16 px-6 text-center max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-blue-700">
          Capstone Challenge 2025–2026
        </h1>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Grade 11 Semester 1</h2>
          <h3 className="text-xl font-semibold text-gray-700 mt-2">Challenge Title</h3>
          <p className="text-gray-700">Turning Electronic Waste into Scientific Opportunity</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Theme</h3>
          <p className="text-gray-700">Change, Equilibrium, and Cycles</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Egypt Grand Challenges</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-left max-w-3xl mx-auto">
            <li>Improve the scientific and technological environment for all.</li>
            <li>Address and reduce pollution fouling our air, water, and soil.</li>
            <li>Reduce and adapt to the effects of climate change.</li>
            <li>Recycle garbage and waste for economic and environmental purposes.</li>
          </ul>
          <p className="text-gray-700 mt-2 italic">Note: any other suitable grand challenges are permitted.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Capstone Big Idea</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Discarded electronic and electrical devices are among the most hazardous forms of waste on our planet.
            They contain complex components and materials that are extremely difficult to dispose of safely, and some
            can leak into soil or water, causing long-term pollution that threatens both human health and the environment.
            With humanity’s ever-growing dependence on modern devices, a serious challenge emerges: maintaining a balance
            between the constant demand for new technologies and the finite natural resources available on Earth—
            particularly rare elements that are heavily used in the production of these devices.
          </p>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
            This makes the concept of reuse and recycling an urgent necessity—not only from an environmental perspective,
            to protect our planet from pollution, but also from an economic standpoint, to conserve rare resources and reduce costs.
            Accordingly, this semester’s challenge will be to design a small, reliable scientific prototype that demonstrates
            the practical potential of reusing components extracted from old electronic devices to create a functional system
            that supports research and scientific applications.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Essential Question</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            How can old, used, or discarded electrical devices be effectively reused to improve the scientific and technological environment for all?
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Design Challenge</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Students will investigate fundamental scientific instruments essentially for Biology, Chemistry, Earth Science,
            Physics, or Fabrication laboratories. They will identify old, used, or discarded electrical devices from their environment,
            including printers, scanners, projectors, copiers, televisions, computer hardware, mobile phones, chargers, heaters,
            boilers, ovens, microwaves, mixers, and more. From these devices, they will extract required components such as
            electrical and/or electronic, mechanical, optical, and thermal parts, along with various materials like sensors, fans,
            wires, cables, covers, holders, screws, and others. These components will be utilized to assemble a prototype of a
            selected reliable scientific instrument within a specified volume. The students will perform trial tests, after which
            they will characterize the resulting prototype instrument. Finally, they will identify and apply specific applications
            for this prototype.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Design Requirements</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-left max-w-3xl mx-auto">
            <li>Build a single scientific prototype instrument used in at least one type of laboratory.</li>
            <li>If the instrument has one measurable function, present two lab applications; if multiple, present at least one.</li>
            <li>Thermal instruments must include an additional compatible function.</li>
            <li>Use multiple components from old devices; at least one must be electrical.</li>
            <li>Sensors must be calibrated and documented on evaluation day.</li>
            <li>Housing should be transparent and sourced or manufactured appropriately.</li>
            <li>Demonstrate voltage, max current, and operating power, plus other relevant specs.</li>
            <li>Present schematic and circuit diagrams.</li>
            <li>Show trial test results with graphical fitting and at least five readings.</li>
            <li>Provide a video of the full process: extraction, building, testing, and application.</li>
            <li>Include calculations for accuracy (≤ ±5%) and precision, with references.</li>
            <li>Prototype must be reliable, portable, and testable on exhibition day. Bring logbooks.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Constraints</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-left max-w-3xl mx-auto">
            <li>Only old, used, or discarded electrical devices may be used.</li>
            <li>Follow all safety rules, especially during extraction and testing.</li>
            <li>All work must be done in the school laboratory.</li>
            <li>Prototype must be portable and testable anytime; bring spare parts if needed.</li>
            <li>Lab equipment must remain in the lab; failure to comply affects grading.</li>
            <li>No radioactive or hazardous chemical materials allowed.</li>
            <li>Teams are responsible for all exhibition materials and setup.</li>
          </ol>
        </div>
      </section>
    </Layout>
  )
}

export default Challenge