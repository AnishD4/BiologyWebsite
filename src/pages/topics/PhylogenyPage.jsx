import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function PhylogenyPage() {
  const essentialQuestions = [
    'What is phylogeny and how do we study it?',
    'What tools can be used in evolutionary connections (cladograms, trees)?',
    'How do we interpret phylogenetic trees?',
    'What is cladistic analysis?',
    'How do molecular and morphological data inform phylogenies?',
  ]

  const quizQuestions = [
    {
      question: 'What does a phylogenetic tree represent?',
      options: [
        { text: 'A diagram of actual plant ancestry', isCorrect: false },
        { text: 'A diagram showing evolutionary relationships and common ancestors among species', isCorrect: true },
        { text: 'A classification of all organisms by size', isCorrect: false },
        { text: 'A timeline of extinctions', isCorrect: false },
      ],
      explanation:
        'Phylogenetic trees use branch points to represent common ancestors and show which species are more closely or distantly related.',
    },
    {
      question: 'In a phylogenetic tree, which species are most closely related?',
      options: [
        { text: 'The ones at the top of the tree', isCorrect: false },
        { text: 'The ones that share the most recent common ancestor', isCorrect: true },
        { text: 'The ones that look most similar', isCorrect: false },
        { text: 'The ones that are listed next to each other', isCorrect: false },
      ],
      explanation:
        'Species that share a more recent common ancestor (connected by shorter paths through the tree) are more closely related.',
    },
    {
      question: 'What is a synapomorphy?',
      options: [
        { text: 'A trait shared by all organisms', isCorrect: false },
        { text: 'A derived trait shared by a group of organisms, indicating common ancestry', isCorrect: true },
        { text: 'A trait that changes during an organism\'s lifetime', isCorrect: false },
        { text: 'A trait controlled by multiple genes', isCorrect: false },
      ],
      explanation:
        'Synapomorphies are shared derived traits indicating species inherited them from a common ancestor, placing them in the same evolutionary group.',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation: 'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary textbook reference for phylogeny, cladistics, synapomorphies, phylogenetic trees, and molecular phylogenetics (Chapter 26).',
    },
    {
      title: 'Molecular Evolutionary Genetics',
      author: 'Masatoshi Nei',
      year: '1987',
      fullCitation: 'Nei, M. (1987). Molecular evolutionary genetics. Columbia University Press.',
      notes: 'Classic reference on phylogenetic methods.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Unit 7.9</div>
        <h1>Phylogeny</h1>
        <p>Understanding evolutionary relationships and how to interpret them.</p>
      </div>

      <div className="content-section">
        <h2>What is Phylogeny?</h2>
        <p>
          Phylogeny is the evolutionary history and relationships among organisms. Phylogenetics is the science of reconstructing this
          evolutionary history. Phylogenetic trees (also called cladograms) are diagrams showing these evolutionary relationships.
        </p>
      </div>

      <div className="content-section">
        <h2>Reading Phylogenetic Trees</h2>

        <div className="subsection">
          <h3>Basic Tree Components</h3>
          <ul>
            <li>
              <strong>Branches:</strong> Represent lineages (evolutionary lines)
            </li>
            <li>
              <strong>Branch Points (Nodes):</strong> Represent common ancestors where lineages diverge
            </li>
            <li>
              <strong>Tips:</strong> Represent living or extinct species
            </li>
            <li>
              <strong>Root:</strong> The oldest common ancestor at the base of the tree
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Key Principle: Closer Connection = Closer Relationship</h3>
          <p>
            The most important principle in reading phylogenetic trees is that species connected through more recent common ancestors are
            more closely related. The physical position of species on the page (left vs. right) means nothing - only the branching pattern
            matters.
          </p>

          <p>
            For example, in a rainforest phylogeny, jaguars and ocelots (both felids) would be connected at a more recent branch point
            than jaguars and peccaries (different families). This indicates jaguars are more closely related to ocelots than to peccaries.
          </p>
        </div>

        <div className="subsection">
          <h3>Monophyletic Groups</h3>
          <p>
            A monophyletic group includes an ancestor and all its descendants. A good phylogenetic classification should recognize only
            monophyletic groups. For example, "birds" is monophyletic (includes the common ancestor of all birds and all descendants), but
            "reptiles" (as traditionally defined) is not monophyletic because it excludes birds, which descended from dinosaurian
            ancestors.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Building Phylogenetic Trees</h2>

        <div className="subsection">
          <h3>Data Sources</h3>
          <ul>
            <li>
              <strong>Morphological Data:</strong> Shared structural features indicate common ancestry
            </li>
            <li>
              <strong>Molecular Data:</strong> DNA/protein similarities reflect time since divergence from common ancestors
            </li>
            <li>
              <strong>Fossil Data:</strong> Provides absolute timing and extinct intermediate forms
            </li>
            <li>
              <strong>Behavioral Data:</strong> Animal behaviors sometimes reflect evolutionary relationships
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Cladistic Analysis</h3>
          <p>
            Cladistics (phylogenetic systematics) groups organisms based on shared derived characteristics (synapomorphies). The principle
            of parsimony suggests the tree requiring the fewest evolutionary changes is most likely correct.
          </p>

          <p>
            Example: If we observe that rainforest mammals have hair and milk production, while fish lack these features, we infer that
            the hair and milk production were derived traits arising in a common mammalian ancestor. This places all mammals in one
            monophyletic group.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Rainforest Phylogenies</h2>

        <p>
          Phylogenetic studies of rainforest species reveal complex evolutionary relationships shaped by millions of years of isolation,
          adaptation, and speciation. Recent molecular studies have revealed many surprising relationships that morphology alone couldn't
          show, leading to reorganization of rainforest species classifications.
        </p>

        {/* Image: Phylogenetic tree example */}
        <figure style={{ marginTop: '1.5rem', background: '#07110b', padding: '0.75rem', borderRadius: 8 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tree_of_life_SVG.svg/800px-Tree_of_life_SVG.svg.png"
            alt="Tree of life showing evolutionary relationships among major groups of organisms"
            style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '380px', objectFit: 'contain', background: '#0e1210' }}
            loading="lazy"
          />
          <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            Simplified tree of life showing evolutionary relationships among major groups. Source: Wikimedia Commons
            <div>
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tree_of_life_SVG.svg/800px-Tree_of_life_SVG.svg.png" style={{ color: 'var(--secondary-green)' }}>
                https://commons.wikimedia.org/wiki/File:Tree_of_life_SVG.svg
              </a>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
              APA: Wikimedia Commons. (n.d.). Tree of life SVG [Illustration]. Wikimedia Commons.
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

export default PhylogenyPage
