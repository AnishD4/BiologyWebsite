import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  const features = [
    {
      icon: '-',
      title: 'Rainforest Context',
      description: 'All concepts are explored through the lens of rainforest ecosystems, the most biodiverse regions on Earth.',
    },
    {
      icon: '-',
      title: 'Interactive Learning',
      description: 'Engage with quizzes, visualizations, and calculators to deepen your understanding of evolution. ',
    },
    {
      icon: '-',
      title: 'Data & Evidence',
      description: 'Explore real data from phylogenetic studies, genetic analysis, and fossil records from rainforests.',
    },
    {
      icon: '-',
      title: 'Scientific Rigor',
      description: 'All content is grounded in peer-reviewed research and aligned with educational standards.',
    },
    {
      icon: '-',
      title: 'Complete Curriculum',
      description: 'Covers all 13 essential evolution topics (7.1-7.13) with 25+ fundamental questions.',
    },
    {
      icon: '-',
      title: 'Real-World Application',
      description: 'Understand how evolution shapes biodiversity and conservation strategies in tropical regions.',
    },
  ]

  const topics = [
    { number: '7.1', title: 'Introduction to Natural Selection', path: '/introduction', icon: '01' },
    { number: '7.2', title: 'Natural Selection', path: '/natural-selection', icon: '02' },
    { number: '7.3', title: 'Artificial Selection', path: '/artificial-selection', icon: '03' },
    { number: '7.4', title: 'Population Genetics', path: '/population-genetics', icon: '04' },
    { number: '7.5', title: 'Hardy-Weinberg Equilibrium', path: '/hardy-weinberg', icon: '05' },
    { number: '7.6', title: 'Evidence of Evolution', path: '/evidence-evolution', icon: '06' },
    { number: '7.7', title: 'Common Ancestry', path: '/common-ancestry', icon: '07' },
    { number: '7.8', title: 'Continuing Evolution', path: '/continuing-evolution', icon: '08' },
    { number: '7.9', title: 'Phylogeny', path: '/phylogeny', icon: '09' },
    { number: '7.10', title: 'Speciation', path: '/speciation', icon: '10' },
    { number: '7.11', title: 'Extinction', path: '/extinction', icon: '11' },
    { number: '7.12', title: 'Variations in Population', path: '/variations', icon: '12' },
    { number: '7.13', title: 'Origin of Life on Earth', path: '/origin-of-life', icon: '13' },
  ]

  return (
    <div className="container">
      <section className="hero">
        <h1>Evolution in the Rainforest</h1>
        <p>An Interactive Journey Through Evolution, Natural Selection, and Biodiversity</p>
        <div className="hero-buttons">
          <Link to="/introduction" className="btn btn-primary">
            Start Learning
          </Link>
          <button className="btn btn-outline" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Explore Topics
          </button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Welcome to Your Evolution Learning Hub</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          This comprehensive website combines cutting-edge educational design with rigorous scientific content to help you master
          the concepts of evolution. By exploring evolution through rainforest ecosystems, Earth's most biodiverse regions, you'll
          understand not just <em>what</em> evolution is, but <em>how</em> it shapes the natural world we observe today.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Whether you're a student studying for exams, an educator seeking classroom resources, or simply curious about the diversity
          of life on Earth, this interactive platform provides engaging content, visual explanations, and practical applications of
          evolutionary theory.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Why the Rainforest?</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Peak Biodiversity</h3>
            <p>
              Rainforests cover only 6% of Earth's land surface but contain over 50% of all species. This incredible concentration
              of biodiversity provides perfect case studies for understanding evolution in action.
            </p>
          </div>

          <div className="card">
            <h3>Living Laboratory</h3>
            <p>
              The rainforest is a dynamic ecosystem where evolution happens on observable timescales. Scientists can study natural
              selection, adaptation, and speciation processes in real-time.
            </p>
          </div>

          <div className="card">
            <h3>Rich Scientific Record</h3>
            <p>
              From phylogenetic studies of poison dart frogs to genetic analysis of jaguar populations, rainforest research provides
              compelling evidence for evolutionary theory.
            </p>
          </div>

          <div className="card">
            <h3>Conservation Importance</h3>
            <p>
              Understanding evolution in rainforests directly connects to conservation efforts and helps us protect endangered species
              and maintain genetic diversity for future generations.
            </p>
          </div>
        </div>

        {/* New: single illustrative rainforest image */}
        <figure style={{ marginTop: '1.5rem', background: 'transparent', padding: '0.5rem', borderRadius: 8 }}>
          <img
            src="https://www.activewild.com/wp-content/uploads/2021/02/Rainforest-Animals.jpg"
            alt="Multiple rainforest animals in habitat"
            style={{ width: '100%', borderRadius: 6, display: 'block' }}
            loading="lazy"
          />
          <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            A variety of rainforest animals in their natural habitat. Source: ActiveWild
            <div>
              <a href="https://www.activewild.com/rainforest-animals-list/" style={{ color: 'var(--secondary-green)' }}>
                https://www.activewild.com/rainforest-animals-list/
              </a>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
              APA: ActiveWild. (n.d.). Rainforest animals [Photograph]. ActiveWild. https://www.activewild.com/rainforest-animals-list/
            </div>
          </figcaption>
        </figure>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Key Features of This Course</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Learning Topics (Standards 7.1 - 7.13)</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
          Click on any topic to explore comprehensive coverage including interactive visualizations, essential questions, and
          practical applications.
        </p>

        <div className="grid grid-3">
          {topics.map((topic, index) => (
            <Link key={index} to={topic.path} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{topic.icon}</div>
                <h4>{topic.number}</h4>
                <h3>{topic.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>How to Use This Website</h2>
        <div className="grid grid-2">
          <div className="section">
            <h3>Reading & Learning</h3>
            <ol>
              <li>Read the comprehensive content for each topic</li>
              <li>Study real examples from rainforest ecosystems</li>
              <li>Examine visual diagrams and phylogenetic trees</li>
              <li>Review the essential questions for each section</li>
            </ol>
          </div>

          <div className="section">
            <h3>Interactive Engagement</h3>
            <ol>
              <li>Take quizzes to test your understanding</li>
              <li>Use the Hardy-Weinberg calculator to explore genetics</li>
              <li>Interact with visualizations and data</li>
              <li>Track your progress through each topic</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(124, 179, 66, 0.1) 100%)' }}>
        <h2>What You'll Learn</h2>
        <ul>
          <li><strong>Natural Selection:</strong> How environmental pressures shape populations over time</li>
          <li><strong>Genetic Diversity:</strong> The role of variation in population evolution and survival</li>
          <li><strong>Population Genetics:</strong> Mathematical models explaining allele frequency changes</li>
          <li><strong>Speciation:</strong> How new species arise through reproductive isolation</li>
          <li><strong>Phylogenetics:</strong> How to read evolutionary trees and understand relationships between organisms</li>
          <li><strong>Evidence of Evolution:</strong> Fossil records, DNA analysis, and structural similarities as proof of evolution</li>
          <li><strong>Extinction:</strong> How species are lost and the consequences for biodiversity</li>
          <li><strong>Origin of Life:</strong> Current scientific models for how life began on Earth</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', marginBottom: '3rem', padding: '2rem', background: 'var(--black)', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
        <h2>Ready to Begin Your Evolution Journey?</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Start with the introduction to natural selection or jump to any topic that interests you.
        </p>
        <Link to="/introduction" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          Start Exploring
        </Link>
      </section>
    </div>
  )
}

export default HomePage
