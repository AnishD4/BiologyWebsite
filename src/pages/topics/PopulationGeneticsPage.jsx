import React, { useState } from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function PopulationGeneticsPage() {
  const essentialQuestions = [
    'How does the genetic makeup of a population change over time?',
    'What factors cause allele frequencies to change?',
    'What is genetic drift and when is it significant?',
    'How do mutations contribute to genetic variation?',
    'What is gene flow and how does it affect populations?',
  ]

  const quizQuestions = [
    {
      question: 'What is an allele?',
      options: [
        { text: 'A complete set of genes in an organism', isCorrect: false },
        { text: 'A variant form of a gene at a specific location', isCorrect: true },
        { text: 'A chromosome containing multiple genes', isCorrect: false },
        { text: 'The physical appearance of an organism', isCorrect: false },
      ],
      explanation:
        'An allele is one version of a gene. For example, the gene for eye color might have alleles for brown eyes, blue eyes, etc.',
    },
    {
      question: 'In a small isolated rainforest population, allele frequencies change randomly without any selection pressure. What is this called?',
      options: [
        { text: 'Natural selection', isCorrect: false },
        { text: 'Genetic drift', isCorrect: true },
        { text: 'Gene flow', isCorrect: false },
        { text: 'Mutation', isCorrect: false },
      ],
      explanation:
        'Genetic drift is random change in allele frequencies, especially important in small populations where chance events can significantly affect gene frequencies.',
    },
    {
      question: 'Why is genetic drift stronger in small populations than large ones?',
      options: [
        { text: 'Small populations have more mutations', isCorrect: false },
        { text: 'Large populations dilute the effects of random sampling errors', isCorrect: true },
        { text: 'Natural selection only works in large populations', isCorrect: false },
        { text: 'Genetic drift does not depend on population size', isCorrect: false },
      ],
      explanation:
        'In large populations, random changes in allele frequencies affect a tiny proportion, so overall frequencies stay stable. In small populations, random events can dramatically change frequencies.',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation: 'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary textbook reference for population genetics, allele frequencies, genetic drift, gene flow, and mutation (Chapter 23).',
    },
    {
      title: 'Population Genetics',
      author: 'Hartl & Clark',
      year: '2007',
      fullCitation: 'Hartl, D. L., & Clark, A. G. (2007). Principles of population genetics (4th ed.). Sinauer Associates.',
      notes: 'Standard reference for population genetics theory.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Unit 7.4</div>
        <h1>Population Genetics</h1>
        <p>Understanding genetic variation and change in populations.</p>
      </div>

      <div className="content-section">
        <h2>What is Population Genetics?</h2>
        <p>
          Population genetics is the study of genetic variation within populations and how this variation changes over time. It combines
          genetics with evolutionary theory to explain how populations evolve at the molecular level.
        </p>

        <p>
          Key insight: Evolution occurs when allele frequencies (the relative abundance of different gene variants) change in a population.
          Population genetics explains what causes these changes.
        </p>
      </div>

      <div className="content-section">
        <h2>Key Concepts</h2>

        <div className="subsection">
          <h3>Alleles and Genotypes</h3>
          <p>
            Every gene exists in multiple forms called alleles. Individuals carry two copies of most genes (one from each parent). The combination of alleles an individual carries is its genotype, while the observable traits are its phenotype.
          </p>
        </div>

        <div className="subsection">
          <h3>Allele Frequencies</h3>
          <p>
            In a population, we can calculate the frequency (proportion) of each allele. If an allele is present in 30% of individuals, its frequency is 0.3. These frequencies can change over generations due to various evolutionary forces.
          </p>
        </div>

        <div className="subsection">
          <h3>The Four Forces of Evolution</h3>
          <p>
            Four mechanisms change allele frequencies in populations:
          </p>
          <ul>
            <li><strong>Natural Selection:</strong> Differential survival and reproduction based on traits</li>
            <li><strong>Genetic Drift:</strong> Random changes in allele frequencies, especially in small populations</li>
            <li><strong>Mutation:</strong> New alleles arise through DNA changes</li>
            <li><strong>Gene Flow:</strong> Alleles move between populations through migration</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Genetic Drift in Rainforests</h2>

        <p>
          In small, isolated rainforest populations, genetic drift can be a powerful evolutionary force. Consider a small population of
          poison dart frogs isolated on a rainforest island:
        </p>

        <ul>
          <li>
            <strong>Founder Effect:</strong> If a population is started by a few individuals, it may have different allele frequencies than
            the source population just by chance.
          </li>
          <li>
            <strong>Bottleneck Effect:</strong> If a population temporarily becomes very small (perhaps due to disease), random sampling of
            alleles can permanently change the population's genetic makeup.
          </li>
          <li>
            <strong>Neutral Drift:</strong> Alleles with no effect on fitness can randomly increase or decrease in frequency and may even
            disappear completely.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Gene Flow and Rainforest Populations</h2>

        <p>
          Gene flow (migration) can either homogenize populations or introduce new variation. In connected rainforest ecosystems, mobile
          species (birds, insects) can carry alleles between populations. When habitat is fragmented, gene flow reduces, potentially
          leading to divergence between isolated populations.
        </p>

        {/* Image: Genetic drift illustration */}
        <figure style={{ marginTop: '1.5rem', background: '#07110b', padding: '0.75rem', borderRadius: 8 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Genetic_drift_in_a_population_figure.png/800px-Genetic_drift_in_a_population_figure.png"
            alt="Diagram illustrating genetic drift in small vs large populations"
            style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '380px', objectFit: 'contain', background: '#0e1210' }}
            loading="lazy"
          />
          <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            Genetic drift causes random fluctuations in allele frequencies, especially in small populations. Source: Wikimedia Commons
            <div>
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Genetic_drift_in_a_population_figure.png/800px-Genetic_drift_in_a_population_figure.png" style={{ color: 'var(--secondary-green)' }}>
                https://commons.wikimedia.org/wiki/File:Genetic_drift_in_a_population_figure.png
              </a>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
              APA: Wikimedia Commons. (n.d.). Genetic drift in a population figure [Illustration]. Wikimedia Commons.
            </div>
          </figcaption>
        </figure>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default PopulationGeneticsPage

