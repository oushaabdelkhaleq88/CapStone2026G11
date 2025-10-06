import React from 'react'
import Layout from '../Layout'

function RecyclingChallenge() {
  const imageScale = {
    width: 300,
    height: 200
  }

  return (
    <Layout>
      <section className="bg-white py-16 px-6 max-w-5xl mx-auto space-y-16">

        {/* Title */}
        <h1 className="text-4xl font-bold text-black text-center">
          Recycle Garbage and Waste for Economic and Environmental Purposes
        </h1>

        {/* 1. Definition / Explanation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">1. Definition / Explanation</h2>
          <div className="space-y-4 text-gray-700 text-left">
            <p>
              Recycling is one of Egypt’s most important national grand challenges, as it aims to turn waste materials into valuable resources that benefit both the economy and the environment.
            </p>
            <p className="italic">
              “Recycling refers to the process of composting and regenerating materials for their original purpose or for other purposes.” — Journal of Innovation in Business and Economics (JIBE, 2020)
            </p>
            <p>
              Egypt produces around 26–30 million tons of solid waste annually, with only 20–25% currently recycled or treated properly. The rest ends up in landfills, open dumps, or burned in the streets, leading to serious environmental and health problems. This challenge is part of Egypt’s broader effort to promote sustainable development and improve waste management systems across all governorates.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/deroxbeov/image/upload/v1759709332/Screenshot_2025-10-06_030831_pnlrrf.png"
            alt="Definition"
            style={imageScale}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* 2. Negative Impacts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">2. Negative Impacts if No Solutions Are Found</h2>
          <div className="space-y-4 text-gray-700 text-left">
            <p className="italic">
              “Most of Egypt’s waste is disposed of in open dumps, leading to pollution of air, soil, and water.” — Scholarena, 2024
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Air pollution from burning waste will increase respiratory and heart diseases.</li>
              <li>Rivers and groundwater will suffer contamination, affecting agriculture and drinking water.</li>
              <li>Wasted recyclable materials, such as plastics and metals, will lead to billions in economic losses.</li>
              <li>Climate change will worsen due to methane (CH₄) emissions from open dumps.</li>
            </ul>
            <p>
              Egypt’s plastic waste is also a major concern. According to the Back to Blue Initiative (2023), “Egypt accounts for 43% of the plastic leaking into the Mediterranean Sea.”
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <img
              src="https://api-aps.aucegypt.edu//uploads/articlesImages/1661250873imagepollution%20comm.jpeg"
              alt="Air Pollution"
              style={imageScale}
              className="rounded-lg shadow-md"
            />
            <img
              src="https://www.egypttoday.com/siteimages/Larg/202409130252175217.jpg"
              alt="Water Pollution"
              style={imageScale}
              className="rounded-lg shadow-md"
            />
            <img
              src="https://video.cgtn.com/public/2018-04-19/video/05931313d85f4679b755892978f9c47f/05931313d85f4679b755892978f9c47f.jpg"
              alt="Soil Pollution"
              style={imageScale}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* 3. Relation to Other Challenges */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">3. Relation to Other Egypt Grand Challenges</h2>
          <div className="space-y-4 text-gray-700 text-left">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Clean Energy Challenge:</strong> Waste can be converted into bioenergy.</li>
              <li><strong>Water Management Challenge:</strong> Prevents dumping into the Nile.</li>
              <li><strong>Public Health Challenge:</strong> Reduces disease spread and respiratory issues.</li>
              <li><strong>Sustainable Cities Challenge:</strong> Leads to cleaner urban environments.</li>
              <li><strong>Economic Growth Challenge:</strong> Creates jobs and supports recycling industries.</li>
            </ul>
            <p>
              Improving recycling systems supports Egypt’s environmental, health, and economic goals simultaneously.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/deroxbeov/image/upload/v1759711181/_-_visual_selection_1_y8preu.png"
            alt="Related Challenges"
            style={{
                width: 900,
                height: 700
              }}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* 4. Statistics */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">4. Accurate Statistics and Figures</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-left">
            <li>28 recycling factories are currently operating, with plans to reach 56. (SIS, 2024)</li>
            <li>Egypt aims for a 60% recycling rate by 2027, up from 37% in 2024. (Egypt Today, 2024)</li>
            <li>Produces ~96,000 tons of municipal solid waste per day. (WtERT, 2024)</li>
            <li>Waste collection: 85% in cities, 35% in rural areas. (Waste Recycling MEA, 2024)</li>
            <li>Plastic recycling market: USD 380.25M in 2024 → USD 473.96M by 2030. (TechSci Research, 2024)</li>
            <li>Only 2% recycled, 8% composted, 88% landfilled/dumped. (AUC, 2024)</li>
          </ul>
          <img
            src="https://res.cloudinary.com/deroxbeov/image/upload/v1759711501/4._Accurate_Statistics_and_Figures_-_visual_selection_ld1ttc.png"
            alt="Statistics"
            style={{
                width: 900,
                height: 700
              }}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* References */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">🔗 References</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-1 text-left">
            <li><a href="https://www.egypttoday.com/Article/1/140752/Egypt-Targets-60-Waste-Recycling-Rate-by-2027" target="_blank" rel="noopener noreferrer">Egypt Today (2024)</a></li>
            <li><a href="https://www.wasterecyclingmea.com/top-stories/waste-management/an-overview-of-egypt-s-waste-management-landscape" target="_blank" rel="noopener noreferrer">Waste & Recycling MEA (2024)</a></li>
            <li><a href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/07/oecd-green-growth-policy-review-of-egypt-2024_fd5cddac/b9096cec-en.pdf" target="_blank" rel="noopener noreferrer">OECD Green Growth Policy Review (2024)</a></li>
            <li><a href="https://www.sis.gov.eg/Story/181918/Egypt-ranks-1st-regionally%2C-14th-globally-in-terms-of-recycling-rates-IDSC?lang=en-us" target="_blank" rel="noopener noreferrer">SIS – State Information Service (2024)</a></li>
            <li><a href="https://backtoblueinitiative.com/egypt-country-report/" target="_blank" rel="noopener noreferrer">Back to Blue Initiative (2023)</a></li>
            <li><a href="https://www.techsciresearch.com/report/egypt-plastic-recycling-market/15445.html" target="_blank" rel="noopener noreferrer">TechSci Research (2024)</a></li>
            <li><a href="https://fount.aucegypt.edu/cgi/viewcontent.cgi?article=3470&context=retro_etds" target="_blank" rel="noopener noreferrer">AUC Research (2024)</a></li>
          </ul>
        </div>

      </section>
    </Layout>
  )
}

export default RecyclingChallenge

