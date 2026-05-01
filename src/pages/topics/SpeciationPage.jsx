import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function SpeciationPage() {
  const essentialQuestions = [
    'What conditions need to be met for new species to arise?',
    'What happens to speciation rates under specific ecological conditions?',
    'What are the processes and mechanisms driving speciation?',
    'What is reproductive isolation?',
    'What are the different modes of speciation?',
  ]

  const quizQuestions = [
    {
      question: 'What is speciation?',
      options: [
        { text: 'The extinction of a species', isCorrect: false },
        { text: 'The process by which new species arise from existing species', isCorrect: true },
        { text: 'The adaptation of a species to its environment', isCorrect: false },
        { text: 'The geographic movement of populations', isCorrect: false },
      ],
      explanation:
        'Speciation is the evolutionary process producing new species. It requires reproductive isolation preventing interbreeding.',
    },
    {
      question: 'What is reproductive isolation?',
      options: [
        { text: 'When populations live in different locations', isCorrect: false },
        { text: 'The inability of populations to produce viable, fertile offspring together', isCorrect: true },
        { text: 'When organisms choose not to breed', isCorrect: false },
        { text: 'The separation of males and females', isCorrect: false },
      ],
      explanation:
        'Reproductive isolation is the key to speciation. It prevents gene flow between diverging populations, allowing them to evolve separately.',
    },
    {
      question: 'What is allopatric speciation?',
      options: [
        { text: 'Speciation through genetic mutation', isCorrect: false },
        { text: 'Speciation caused by geographic isolation of populations', isCorrect: true },
        { text: 'Speciation that occurs sympatrically', isCorrect: false },
        { text: 'Speciation caused by artificial selection', isCorrect: false },
      ],
      explanation:
        'Allopatric speciation occurs when geographic barriers prevent gene flow between populations, allowing them to diverge into separate species.',
    },
  ]

  const citations = [
    {
      title: 'Speciation and the Biospecies Concept',
      author: 'Ernst Mayr',
      year: '1942',
      fullCitation:
        'Mayr, E. (1942). Systematics and the origin of species from the viewpoint of a zoologist. Columbia University Press.',
      notes: 'Foundational work on speciation mechanisms.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Standard 7.10</div>
        <h1>Speciation</h1>
        <p>Understanding how new species arise through evolution.</p>
      </div>

      <div className="content-section">
        <h2>What is Speciation?</h2>
        <p>
          Speciation is the evolutionary process by which new species arise from existing species. A species is typically defined as a
          group of organisms capable of interbreeding and producing fertile offspring. When populations become reproductively isolated,
          they can diverge and eventually become separate species unable to interbreed.
        </p>
      </div>

      <div className="content-section">
        <h2>Requirements for Speciation</h2>

        <div className="grid grid-2">
          <div className="section">
            <h3>Reproductive Isolation</h3>
            <p>
              Populations must be prevented from interbreeding. This can occur through geographic isolation (physical barriers) or
              reproductive barriers (genetic incompatibility, behavioral differences, etc.).
            </p>
          </div>

          <div className="section">
            <h3>Genetic Divergence</h3>
            <p>
              Isolated populations accumulate genetic differences through natural selection, genetic drift, or mutation. These differences
              eventually make interbreeding impossible even if populations meet again.
            </p>
          </div>

          <div className="section">
            <h3>Time</h3>
            <p>
              Speciation requires time - usually thousands to millions of years. However, speciation can occur rapidly under intense selection
              pressures or in small, isolated populations where genetic drift is strong.
            </p>
          </div>

          <div className="section">
            <h3>Ecological Differentiation</h3>
            <p>
              Often, diverging populations adapt to different ecological niches, reducing competition and favoring continued divergence
              through natural selection.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Modes of Speciation</h2>

        <div className="subsection">
          <h3>Allopatric Speciation</h3>
          <p>
            Allopatric ("different homeland") speciation occurs when geographic barriers separate populations. Without gene flow, they
            accumulate differences and eventually become separate species. This is the most common speciation mode.
          </p>

          <p>
            <strong>Rainforest Example:</strong> When rainforests become fragmented by deforestation, populations of species like poison
            dart frogs become isolated on patches. Over time, isolated populations diverge due to local selection pressures and genetic
            drift. Eventually, they become reproductively isolated.
          </p>
        </div>

        <div className="subsection">
          <h3>Peripatric Speciation</h3>
          <p>
            A special case of allopatric speciation where a small population colonizes a new area. Rapid evolution due to genetic drift
            and founder effects can lead to quick speciation.
          </p>

          <p>
            <strong>Rainforest Example:</strong> Species colonizing remote islands or mountaintops within rainforests may speciate rapidly
            due to small population sizes and intense genetic drift.
          </p>
        </div>

        <div className="subsection">
          <h3>Parapatric Speciation</h3>
          <p>
            Speciation occurring with some gene flow but strong disruptive selection. Populations diverge while in contact because
            selection strongly favors different adaptations in different environments.
          </p>
        </div>

        <div className="subsection">
          <h3>Sympatric Speciation</h3>
          <p>
            Speciation occurring without geographic separation. This is controversial but probably occurs through mechanisms like polyploid
            speciation in plants or through ecological specialization leading to reproductive isolation.
          </p>

          <p>
            <strong>Rainforest Example:</strong> Cichlid fish in rainforest lakes may undergo sympatric speciation through specialization
            on different food sources and sexual selection.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Speciation in Rainforests</h2>

        <p>
          Rainforests are speciation hotspots. High diversity, geographic complexity, and climate stability have promoted rapid speciation
          over millions of years. Recent habitat fragmentation creates "instant allopatry," potentially driving rapid speciation in some
          groups while causing extinction in others.
        </p>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default SpeciationPage
