import React from 'react'
import Citations from '../components/Citations'

const answers = [
  {
    q: 'What are the specific causes of natural selection?',
    a: 'Variation, heritability, and differential reproductive success driven by environmental pressures (predation, competition, resources, sexual selection).',
  },
  {
    q: 'How does natural selection affect populations?',
    a: 'By changing allele frequencies over generations so traits that increase fitness become more common; can lead to adaptation and speciation given isolation.',
  },
  {
    q: 'Why are phenotypic variations important to populations?',
    a: 'They provide raw material for selection; without variation populations cannot adapt to changing environments.',
  },
  {
    q: 'How are humans able to affect diversity within populations?',
    a: 'Through habitat alteration, selective breeding, introduction/removal of species, pollution, and fragmentation—these change selection pressures and gene flow.',
  },
  {
    q: 'How are there connections between environmental change and evolutionary changes of populations?',
    a: 'Environmental shifts alter selective regimes (e.g., climate change favors different traits), driving allele frequency changes and potentially rapid evolution.',
  },
  {
    q: 'How can random events affect the genetic makeup of a population?',
    a: 'Genetic drift (random sampling), founder events, and population bottlenecks change allele frequencies irrespective of fitness, especially in small populations.',
  },
  {
    q: 'What are the random processes in evolution and their roles?',
    a: 'Genetic drift, mutation, and random gene flow events introduce or change allele frequencies; they act alongside selection and can oppose or reinforce adaptive change.',
  },
  {
    q: 'How does the genetic makeup of a population change over time?',
    a: 'Via mutation, selection, genetic drift, migration, and non-random mating; the net effect is a change in genotype and allele frequencies across generations.',
  },
  {
    q: 'When will allele/genotype frequencies change? (equation based)',
    a: 'Hardy–Weinberg equilibrium: p + q = 1 and p² + 2pq + q² = 1. Frequencies change if assumptions (no selection, infinite size, no migration, no mutation, random mating) are violated.',
  },
  {
    q: 'Implications if Hardy–Weinberg conditions are not met?',
    a: 'Presence of evolution: allele frequencies will change; selection, drift, migration, mutation or nonrandom mating will alter genotype proportions and can lead to adaptation or loss of diversity.',
  },
  {
    q: 'What types of data provide evidence for evolution?',
    a: 'Fossils, comparative morphology, molecular sequences, developmental homologies, biogeography, experimental/observational change (e.g., antibiotic resistance).',
  },
  {
    q: 'How do morphological, biochemical, geological data provide evidence?',
    a: 'Morphology shows homologies and transitional forms; biochemistry (DNA/protein similarity) reveals shared descent; geology (stratigraphy, radiometric dating) provides timing and context.',
  },
  {
    q: 'How is evidence of common ancestry related to molecular/cellular domains?',
    a: 'Shared molecular systems (genetic code, ribosomes, ATP, metabolic pathways) across Bacteria, Archaea, and Eukarya indicate descent from a LUCA.',
  },
  {
    q: 'How do cellular/molecular mechanisms support common ancestry?',
    a: 'Conserved genes/proteins (e.g., Hox, cytochrome c) and organelle origins (endosymbiosis) show historical continuity of cellular life.',
  },
  {
    q: 'How can we support that evolution is ongoing?',
    a: 'Observed rapid evolution: microbial resistance, documented selection in wild populations, experimental evolution studies, and genomic signatures of recent selection.',
  },
  {
    q: 'What evidence is used to infer evolutionary relationships?',
    a: 'Sequence alignments, shared derived characters, morphology, fossil positions, and congruence across independent datasets (molecules and morphology).',
  },
  {
    q: 'What tools are used for evolutionary connections?',
    a: 'Cladograms, phylogenetic trees (distance/maximum likelihood/ Bayesian), dichotomous keys, sequence alignment tools, and molecular clock analyses.',
  },
  {
    q: 'What conditions need to be met for new species to arise?',
    a: 'Reproductive isolation plus genetic divergence (via selection, drift, mutation) and often ecological or geographic separation (allopatry, sympatry, parapatry).',
  },
  {
    q: 'How does ecological context affect speciation rates?',
    a: 'Isolation, niche availability, population size, and rates of selection/mutation influence speciation: stable isolation and diverse niches speed it up.',
  },
  {
    q: 'What mechanisms drive speciation and how?',
    a: 'Allopatric separation, sexual selection, polyploidy (plants), ecological divergence, and hybridization change gene flow and create reproductive barriers.',
  },
  {
    q: 'What factors can lead to extinction?',
    a: 'Habitat loss, climate change, invasive species, disease, small population size, stochastic events, and human exploitation.',
  },
  {
    q: 'How do environmental changes promote or hinder extinction?',
    a: 'Rapid changes can outpace adaptation, promoting extinction; habitat connectivity, refugia, and conservation actions can reduce extinction risk.',
  },
  {
    q: 'How do speciation and extinction impact ecosystem diversity?',
    a: 'Speciation adds lineages and functional diversity; extinction removes them—together they shape richness and ecosystem resilience over time.',
  },
  {
    q: 'How does adaptive radiation stem from extinction events?',
    a: 'Extinctions open ecological vacancies; surviving lineages diversify rapidly to fill available niches (e.g., mammal radiation after dinosaur extinction).',
  },
  {
    q: 'Does genetic diversity impact resilience to environmental pressures?',
    a: 'Yes: higher genetic diversity increases adaptive potential and reduces inbreeding depression, improving resilience to change.',
  },
  {
    q: 'What are models supporting origins of life?',
    a: 'Abiogenesis models include the RNA world, metabolism-first hypotheses, hydrothermal vent scenarios, and protocell formation models supported by geochemical evidence.',
  },
]

function EssentialQuestionsPage() {
  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Essential Questions</div>
        <h1>Answers to Required Essential Questions</h1>
        <p>Concise, Campbell Biology–aligned answers. See citations at the end.</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        {answers.map((item, idx) => (
          <section key={idx} style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ marginBottom: '0.25rem' }}>{`${idx + 1}. ${item.q}`}</h3>
            <p style={{ margin: 0 }}>{item.a}</p>
          </section>
        ))}
      </div>

      <Citations
        citations={[
          {
            title: 'Campbell Biology (12th ed.)',
            author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
            year: '2020',
            fullCitation: 'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
            notes: 'Primary textbook reference for this course.'
          }
        ]}
      />
    </div>
  )
}

export default EssentialQuestionsPage
