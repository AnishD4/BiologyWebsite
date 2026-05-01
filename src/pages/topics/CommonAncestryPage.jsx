import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function CommonAncestryPage() {
  const essentialQuestions = [
    'What is common ancestry and how do we identify it?',
    'How do molecular and cellular mechanisms support common ancestry?',
    'What is the last universal common ancestor (LUCA)?',
    'How do we construct phylogenetic trees?',
    'What evidence links all organisms to common ancestry?',
  ]

  const quizQuestions = [
    {
      question: 'What does "common ancestry" mean in evolutionary biology?',
      options: [
        { text: 'All species evolved at the same time', isCorrect: false },
        { text: 'All organisms share genetic and structural similarities from a common evolutionary origin', isCorrect: true },
        { text: 'Species are closely related if they look alike', isCorrect: false },
        { text: 'Evolution always results in similar species', isCorrect: false },
      ],
      explanation:
        'Common ancestry means all organisms descended from earlier organisms, with increasingly distant common ancestors the more distantly related species are.',
    },
    {
      question: 'Why do different organisms have similar cellular structures?',
      options: [
        { text: 'Cells must work the same in all organisms', isCorrect: false },
        { text: 'All organisms inherited basic cellular machinery from common ancestors', isCorrect: true },
        { text: 'Similar environments require similar cells', isCorrect: false },
        { text: 'Organisms converge to similar designs', isCorrect: false },
      ],
      explanation:
        'All cells have mitochondria, ribosomes, and similar genetic machinery because all life descended from cells with these structures.',
    },
  ]

  const citations = [
    {
      title: 'Common Ancestry and Human Evolution',
      author: 'Richard E. Leakey & Roger Lewin',
      year: '1992',
      fullCitation:
        'Leakey, R. E., & Lewin, R. (1992). Origins reconsidered: In search of what makes us human. Doubleday.',
      notes: 'Exploring evidence for human-primate common ancestry.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Standard 7.7</div>
        <h1>Common Ancestry</h1>
        <p>Understanding the unity of life through shared evolutionary origin.</p>
      </div>

      <div className="content-section">
        <h2>The Concept of Common Ancestry</h2>
        <p>
          Common ancestry is the principle that all organisms on Earth descended from earlier organisms through repeated branching of
          lineages. The deepest common ancestor would be the very first living cell that gave rise to all other life. This principle
          unifies all of biology.
        </p>
      </div>

      <div className="content-section">
        <h2>Evidence for Common Ancestry</h2>

        <div className="subsection">
          <h3>The Universal Genetic Code</h3>
          <p>
            All organisms use the same DNA genetic code. The same triplet codons specify the same amino acids in bacteria, plants, animals,
            and fungi. This shared system is powerful evidence that all life inherited this code from a common ancestor.
          </p>
        </div>

        <div className="subsection">
          <h3>Cellular Similarities</h3>
          <p>
            All cells share fundamental features:
          </p>
          <ul>
            <li>DNA as hereditary material</li>
            <li>Ribosomes for protein synthesis</li>
            <li>Plasma membrane surrounding the cell</li>
            <li>ATP as energy currency</li>
            <li>Basic metabolic pathways</li>
          </ul>
          <p>
            These similarities indicate inheritance from common cellular ancestors. If life arose multiple times independently, we'd
            expect greater variation in these fundamental systems.
          </p>
        </div>

        <div className="subsection">
          <h3>Homologous Proteins</h3>
          <p>
            Many proteins are so similar across species that we can identify homologous proteins in organisms as distantly related as
            bacteria and humans. These similarities indicate descent from common ancestor proteins that have diverged over evolutionary
            time.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Deep Evolutionary History</h2>

        <div className="subsection">
          <h3>The Last Universal Common Ancestor (LUCA)</h3>
          <p>
            LUCA is the most recent common ancestor of all life on Earth. Living about 3.5 billion years ago, LUCA was likely a
            single-celled organism with DNA-based genes, ribosomes, and basic metabolic machinery. All modern life descended from LUCA
            through branching lineages and natural selection.
          </p>
        </div>

        <div className="subsection">
          <h3>Three Domains of Life</h3>
          <p>
            All organisms fall into three fundamental categories:
          </p>
          <ul>
            <li>
              <strong>Bacteria:</strong> Single-celled prokaryotes with no nucleus
            </li>
            <li>
              <strong>Archaea:</strong> Single-celled prokaryotes, distinct from bacteria
            </li>
            <li>
              <strong>Eukarya:</strong> All organisms with nucleated cells (protists, fungi, plants, animals)
            </li>
          </ul>
          <p>
            All three domains descended from LUCA. The domain structure reflects the deepest branches in the tree of life.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Common Ancestry in Rainforest Biodiversity</h2>

        <p>
          Rainforest species represent millions of years of evolution from common ancestors. All rainforest mammals descended from early
          mammalian ancestors. All rainforest birds evolved from dinosaurian ancestors. This deep common ancestry explains why we see
          fundamental similarities in body plans, developmental patterns, and genetic sequences across all rainforest species despite
          their remarkable diversity.
        </p>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default CommonAncestryPage

