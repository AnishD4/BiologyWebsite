import React from 'react'
import AdditionalResources from '../components/AdditionalResources'

function ResourcesPage() {
  const additionalResources = [
    {
      title: 'CrashCourse Biology: Natural Selection',
      url: 'https://www.youtube.com/watch?v=aTftyFboC_M',
      description: 'An engaging video overview of natural selection and evolutionary fitness.'
    },
    {
      title: 'Understanding Evolution (UC Berkeley)',
      url: 'https://evolution.berkeley.edu/',
      description: 'A comprehensive resource covering the mechanisms and evidence of evolution.'
    },
    {
      title: 'Rainforest Trust: Conservation and Biodiversity',
      url: 'https://www.rainforesttrust.org/',
      description: 'Learn about the crucial role rainforests play in global biodiversity and ongoing conservation efforts.'
    }
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Extras</div>
        <h1>Additional Resources</h1>
        <p>External links, videos, and materials to further your understanding of rainforest biology and evolution.</p>
      </div>
      
      <div className="content-section" style={{ minHeight: '50vh' }}>
        <p>These resources have been curated to expand on the topics covered in this AP Biology unit. They provide excellent visual explanations and deeper dives into the concepts.</p>
        <div style={{ marginTop: '-2rem' }}>
          <AdditionalResources resources={additionalResources} />
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage
