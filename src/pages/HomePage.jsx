import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AdditionalResources from '../components/AdditionalResources'

function HomePage() {
  const features = [
    {
      icon: '01',
      title: 'Rainforest Context',
      description: 'All concepts are explored through the lens of tropical rainforest ecosystems—the most biodiverse biome on Earth.',
    },
    {
      icon: '02',
      title: 'Interactive Learning',
      description: 'Engage with quizzes, Hardy-Weinberg and Chi-square calculators, and visual diagrams to deepen your understanding.',
    },
    {
      icon: '03',
      title: 'Data & Evidence',
      description: 'Explore real data from phylogenetic studies, genetic analyses, fossil records, and molecular biology research.',
    },
    {
      icon: '04',
      title: 'Campbell Biology Aligned',
      description: 'All content is grounded in Campbell Biology (12th ed.) and peer-reviewed research, aligned with AP Biology standards.',
    },
    {
      icon: '05',
      title: 'Complete Curriculum',
      description: 'Covers all 13 essential evolution topics (7.1–7.13) with 26+ essential questions answered in depth.',
    },
    {
      icon: '06',
      title: 'Real-World Application',
      description: 'Understand how evolution shapes biodiversity, conservation, and ecological dynamics in tropical regions.',
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
        <p>An Interactive Journey Through Evolution, Natural Selection, and Biodiversity — Aligned with Campbell Biology</p>
        <div className="hero-buttons">
          <Link to="/introduction" className="btn btn-primary">
            Start Learning
          </Link>
          <button className="btn btn-outline" onClick={() => document.getElementById('topics-section').scrollIntoView({ behavior: 'smooth' })}>
            Explore Topics
          </button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Welcome to Your Evolution Learning Hub</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          This comprehensive website explores the mechanisms of evolution through the lens of tropical rainforest ecosystems—Earth's
          most biodiverse biome. Drawing on content from <em>Campbell Biology</em> (Urry et al., 2020), this site connects key
          evolutionary concepts to specific real-world examples from rainforest populations, helping you understand not just <em>what</em> evolution
          is, but <em>how</em> it shapes the natural world we observe today.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Whether you are a student studying for AP Biology exams, an educator seeking classroom resources, or simply curious about the
          diversity of life on Earth, this interactive platform provides engaging content, visual explanations, quantitative tools, and
          practical applications of evolutionary theory.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Why the Tropical Rainforest?</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Peak Biodiversity</h3>
            <p>
              Tropical rainforests cover roughly 6% of Earth's land surface yet harbor more than 50% of all terrestrial species
              (Myers et al., 2000). This extraordinary concentration of biodiversity provides ideal case studies for understanding
              evolution in action—from natural selection to speciation and extinction.
            </p>
          </div>

          <div className="card">
            <h3>Living Laboratory</h3>
            <p>
              The rainforest is a dynamic ecosystem where evolution occurs on observable timescales. Researchers study natural
              selection, adaptation, genetic drift, and speciation processes in real-time among populations of poison dart frogs,
              tropical birds, orchids, and many other organisms.
            </p>
          </div>

          <div className="card">
            <h3>Rich Scientific Record</h3>
            <p>
              From phylogenetic studies of Neotropical poison dart frogs (<em>Dendrobatidae</em>) to population genetics of jaguars
              (<em>Panthera onca</em>), rainforest research provides compelling evidence for every facet of evolutionary theory
              covered in Campbell Biology.
            </p>
          </div>

          <div className="card">
            <h3>Conservation Importance</h3>
            <p>
              Understanding evolution in rainforests directly connects to conservation biology. Maintaining genetic diversity, preventing
              extinction, and preserving gene flow corridors are all evolutionary principles critical to protecting endangered species
              and sustaining ecosystems for future generations.
            </p>
          </div>
        </div>

        {/* Illustrative rainforest image */}
        <figure style={{ marginTop: '1.5rem', background: 'transparent', padding: '0.5rem', borderRadius: 8 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Daintree_Rainforest.jpg"
            alt="Dense tropical rainforest canopy in the Daintree, Australia"
            style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '400px', objectFit: 'cover' }}
            loading="lazy"
          />
          <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            Dense tropical rainforest canopy in the Daintree, Australia. Source: Wikimedia Commons
            <div>
              <a href="https://upload.wikimedia.org/wikipedia/commons/c/c0/Daintree_Rainforest.jpg" style={{ color: 'var(--secondary-green)' }}>
                https://upload.wikimedia.org/wikipedia/commons/c/c0/Daintree_Rainforest.jpg
              </a>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
              APA: Wikimedia Commons. (n.d.). Daintree Rainforest [Photograph]. Wikimedia Commons. https://upload.wikimedia.org/wikipedia/commons/c/c0/Daintree_Rainforest.jpg
            </div>
          </figcaption>
        </figure>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Key Features of This Site</h2>
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

      <section id="topics-section" style={{ marginBottom: '3rem' }}>
        <h2>Learning Topics (Units 7.1 – 7.13)</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Click on any topic to explore comprehensive content including interactive visualizations, essential questions with detailed
          answers, quizzes, and real-world rainforest examples.
        </p>

        <div className="grid grid-3">
          {topics.map((topic, index) => (
            <Link key={index} to={topic.path} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{topic.icon}</div>
                <h4 style={{ color: 'var(--secondary-green)' }}>{topic.number}</h4>
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
              <li>Read the comprehensive content for each topic, aligned with Campbell Biology</li>
              <li>Study real examples from tropical rainforest ecosystems</li>
              <li>Examine visual diagrams, cladograms, and phylogenetic trees</li>
              <li>Review the essential questions and detailed answers for each section</li>
            </ol>
          </div>

          <div className="section">
            <h3>Interactive Engagement</h3>
            <ol>
              <li>Take quizzes to test your understanding of each topic</li>
              <li>Use the Hardy-Weinberg calculator and Chi-square test tool</li>
              <li>Download and study cladogram diagrams</li>
              <li>Explore numeric population genetics examples</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(124, 179, 66, 0.1) 100%)' }}>
        <h2>What You Will Learn</h2>
        <ul>
          <li><strong>Natural Selection:</strong> How environmental pressures drive differential survival and reproduction, changing allele frequencies over generations (Campbell Biology Ch. 23)</li>
          <li><strong>Genetic Diversity:</strong> Why heritable variation is the raw material for evolution and essential for population resilience</li>
          <li><strong>Population Genetics:</strong> Mathematical models (Hardy-Weinberg, Chi-square) explaining when and how allele frequencies change</li>
          <li><strong>Speciation:</strong> How reproductive isolation and genetic divergence produce new species through allopatric, sympatric, and other modes</li>
          <li><strong>Phylogenetics:</strong> How to read and construct evolutionary trees, cladograms, and dichotomous keys to infer relationships</li>
          <li><strong>Evidence of Evolution:</strong> Fossil records, comparative anatomy, molecular homology, biogeography, and direct observation as converging lines of evidence</li>
          <li><strong>Extinction & Adaptive Radiation:</strong> How species are lost, mass extinction events, and how extinction opens niches for surviving lineages</li>
          <li><strong>Origin of Life:</strong> Scientific models for abiogenesis, the RNA World hypothesis, and early cellular evolution</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', marginBottom: '3rem', padding: '2rem', background: 'var(--surface)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' }}>
        <h2>Ready to Begin Your Evolution Journey?</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Start with the introduction to natural selection or jump to any topic that interests you.
        </p>
        <Link to="/introduction" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          Start Exploring →
        </Link>
      </section>

      {/* Primary Reference */}
      <section style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(30, 219, 158, 0.04)', borderRadius: '8px', borderLeft: '3px solid var(--accent-green)' }}>
        <h3>Primary Reference</h3>
        <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
          Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). <em>Campbell Biology</em> (12th ed.). Pearson.
        </p>
      </section>

      <AdditionalResources 
        resources={[
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
        ]} 
      />
    </div>
  )
}

export default HomePage
