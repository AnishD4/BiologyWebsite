import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function ContinuingEvolutionPage() {
  const essentialQuestions = [
    'How can we provide support for the fact that evolution is ongoing?',
    'What evidence shows evolution is still occurring?',
    'How do current environmental changes drive evolution?',
    'What modern examples demonstrate evolution in action?',
    'How fast can evolution occur in modern populations?',
  ]

  const quizQuestions = [
    {
      question: 'Why do antibiotic-resistant bacteria provide evidence that evolution is ongoing?',
      options: [
        { text: 'Bacteria change their DNA intentionally to resist antibiotics', isCorrect: false },
        { text: 'Bacteria with resistance genes survive selection and increase in frequency within years', isCorrect: true },
        { text: 'Antibiotics cause all bacteria to evolve', isCorrect: false },
        { text: 'Resistance proves bacteria are not affected by natural selection', isCorrect: false },
      ],
      explanation:
        'Antibiotic resistance evolves rapidly because resistant bacteria survive and reproduce while non-resistant bacteria die—demonstrating natural selection in real-time.',
    },
    {
      question: 'How have Darwin\'s finches demonstrated ongoing evolution?',
      options: [
        { text: 'Their beaks evolved new structures', isCorrect: false },
        { text: 'Beak sizes measurably changed in response to environmental conditions over just decades', isCorrect: true },
        { text: 'They developed completely new species', isCorrect: false },
        { text: 'They stopped evolving after Darwin observed them', isCorrect: false },
      ],
      explanation:
        'Researchers measured finch beak changes over time, showing evolution happens fast enough to observe directly when conditions change.',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation: 'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary textbook reference for ongoing evolution, observable natural selection, and human-driven evolution (Chapters 22, 23).',
    },
    {
      title: 'The Beak of the Finch',
      author: 'Jonathan Weiner',
      year: '1994',
      fullCitation: 'Weiner, J. (1994). The beak of the finch: A story of evolution in our time. Knopf.',
      notes: "Accessible account of ongoing evolution in Darwin's finches.",
    },
    {
      title: 'MRSA bacteria [Photograph]',
      author: 'NIAID / NIH',
      year: 'n.d.',
      fullCitation: 'National Institute of Allergy and Infectious Diseases. (n.d.). MRSA bacteria [Electron micrograph]. Wikimedia Commons. https://upload.wikimedia.org/wikipedia/commons/d/d2/MRSA_SEM_9994_lores.jpg',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/MRSA_SEM_9994_lores.jpg',
      notes: 'Scanning electron micrograph of MRSA bacteria, demonstrating antibiotic resistance evolution.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Unit 7.8</div>
        <h1>Continuing Evolution</h1>
        <p>Evidence that evolution is an ongoing process affecting modern organisms.</p>
      </div>

      <div className="content-section">
        <h2>Evolution is Still Happening Today</h2>
        <p>
          A common misconception is that evolution occurred in the past but is no longer happening. In reality, evolution is an ongoing
          process. Whenever populations experience differential reproduction based on heritable traits, evolution occurs. Modern examples
          show this process clearly.
        </p>
      </div>

      <div className="content-section">
        <h2>Direct Observations of Evolution</h2>

        <div className="subsection">
          <h3>Antibiotic Resistance</h3>
          <p>
            Bacteria evolve antibiotic resistance within years of antibiotic introduction. In hospitals, resistant bacteria increase in
            frequency as non-resistant bacteria are killed, often resulting in treatment failures. This is evolution occurring on
            observable timescales due to intense selection pressure—a clear demonstration of natural selection in real-time
            (Campbell Biology, Ch. 23).
          </p>

          {/* Image: MRSA */}
          <figure style={{ marginTop: '1rem', background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d2/MRSA_SEM_9994_lores.jpg"
              alt="Scanning electron micrograph of MRSA (methicillin-resistant Staphylococcus aureus) bacteria"
              style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '300px', objectFit: 'cover' }}
              loading="lazy"
            />
            <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
              MRSA bacteria—an example of rapid antibiotic resistance evolution. Source: NIAID / NIH via Wikimedia Commons
              <div>
                <a href="https://upload.wikimedia.org/wikipedia/commons/d/d2/MRSA_SEM_9994_lores.jpg" style={{ color: 'var(--secondary-green)' }}>
                  https://commons.wikimedia.org/wiki/File:MRSA_SEM_9994_lores.jpg
                </a>
              </div>
              <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
                APA: NIAID. (n.d.). MRSA bacteria [Electron micrograph]. Wikimedia Commons.
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="subsection">
          <h3>Darwin's Finches (Ongoing Research)</h3>
          <p>
            Researchers have continuously monitored Galápagos finch populations since the 1970s. They've documented:
          </p>
          <ul>
            <li>Beak size changes in response to drought and flood conditions</li>
            <li>Rapid evolution of song patterns in introduced populations</li>
            <li>Speciation events occurring in real-time</li>
          </ul>
          <p>
            Evolution is occurring fast enough to measure directly within human lifespans.
          </p>
        </div>

        <div className="subsection">
          <h3>Rainforest Species Adaptation</h3>
          <p>
            Rainforest species are evolving in response to modern challenges:
          </p>
          <ul>
            <li>Poison dart frog populations show color pattern changes in response to predation pressure</li>
            <li>Rainforest jaguars show genetic adaptations to fragmented habitats</li>
            <li>Rainforest plants evolve increased antimicrobial compounds in response to fungal disease pressure</li>
            <li>Bird species shift altitudinal ranges and breeding times in response to climate change</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Evolution Under Climate Change</h2>

        <p>
          Climate change is creating intense selection pressures. Species evolving rapidly include:
        </p>

        <ul>
          <li>Insects shifting emergence times to match plant flowering</li>
          <li>Mammals evolving larger body sizes in cooler regions</li>
          <li>Plants evolving earlier flowering times</li>
          <li>Rainforest species adapting to altered precipitation patterns</li>
        </ul>

        <p>
          These changes are small but measurable, showing natural selection actively shaping modern populations.
        </p>
      </div>

      <div className="content-section">
        <h2>Why Continuing Evolution Matters</h2>

        <p>
          Understanding that evolution is ongoing helps us:
        </p>

        <ul>
          <li>Develop strategies to slow antibiotic resistance evolution</li>
          <li>Manage wildlife populations for conservation</li>
          <li>Predict how species will respond to climate change</li>
          <li>Appreciate the dynamic nature of ecosystems</li>
          <li>Recognize that humans also continue evolving</li>
        </ul>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default ContinuingEvolutionPage
