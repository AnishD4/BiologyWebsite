import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function OriginOfLifePage() {
  const essentialQuestions = [
    'What are the current scientific models for the origin of life?',
    'What were the conditions on early Earth?',
    'How could organic molecules have formed abiotically?',
    'What is the RNA World hypothesis?',
    'What evidence supports current models of life\'s origin?',
  ]

  const quizQuestions = [
    {
      question: 'What is abiogenesis?',
      options: [
        { text: 'The evolution of life after it originated', isCorrect: false },
        { text: 'The scientific study of how life originated from non-living matter', isCorrect: true },
        { text: 'The extinction of species', isCorrect: false },
        { text: 'The process of photosynthesis', isCorrect: false },
      ],
      explanation:
        'Abiogenesis is the hypothesis that life originated from non-living chemical processes on early Earth.',
    },
    {
      question: 'What is the RNA World hypothesis?',
      options: [
        { text: 'That RNA was the first genetic material and could also catalyze reactions', isCorrect: true },
        { text: 'That DNA was the first molecule on Earth', isCorrect: false },
        { text: 'That proteins preceded all genetic material', isCorrect: false },
        { text: 'That organisms in rainforests use RNA instead of DNA', isCorrect: false },
      ],
      explanation:
        'The RNA World hypothesis proposes RNA served both genetic and catalytic functions, predating DNA and proteins.',
    },
    {
      question: 'What was early Earth\'s atmosphere like?',
      options: [
        { text: 'Rich in oxygen like today', isCorrect: false },
        { text: 'Composed of nitrogen, carbon dioxide, water vapor, and other gases but little free oxygen', isCorrect: true },
        { text: 'Primarily hydrogen and helium', isCorrect: false },
        { text: 'We have no information about early atmosphere', isCorrect: false },
      ],
      explanation:
        'Early Earth\'s atmosphere lacked free oxygen but contained gases that could react to form organic molecules.',
    },
  ]

  const citations = [
    {
      title: 'The Origins of Life on Earth',
      author: 'Iris Fry',
      year: '2000',
      fullCitation:
        'Fry, I. (2000). The emergence of life on Earth: A historical and scientific overview. Rutgers University Press.',
      notes: 'Comprehensive overview of origin of life research.',
    },
    {
      title: 'The RNA World',
      author: 'Richard F. Gesteland & John F. Atkins (Editors)',
      year: '1999',
      fullCitation:
        'Gesteland, R. F., & Atkins, J. F. (Eds.). (1999). The RNA world (2nd ed.). Cold Spring Harbor Laboratory Press.',
      notes: 'Collection of papers on RNA World hypothesis.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Standard 7.13</div>
        <h1>Origin of Life on Earth</h1>
        <p>Scientific explanations for how life began on our planet.</p>
      </div>

      <div className="content-section">
        <h2>The Big Question: How Did Life Begin?</h2>
        <p>
          The origin of life is one of science's greatest mysteries. While evolution explains how life diversified after it began, the
          question of how life originated requires abiogenesis - the hypothesis that life emerged from non-living chemical processes on
          early Earth. Scientific models for abiogenesis draw on evidence from chemistry, geology, and molecular biology.
        </p>
      </div>

      <div className="content-section">
        <h2>Early Earth Conditions</h2>

        <p>
          Understanding life's origin requires knowing what early Earth was like (~3.8 billion years ago):
        </p>

        <div className="grid grid-2">
          <div className="section">
            <h3>Atmosphere</h3>
            <p>
              Early Earth lacked free oxygen. The atmosphere contained nitrogen, carbon dioxide, water vapor, methane, and ammonia - but not
              oxygen. This reducing atmosphere was crucial because it allowed organic molecules to form without being oxidized.
            </p>
          </div>

          <div className="section">
            <h3>Energy Sources</h3>
            <p>
              Early Earth had abundant energy from UV radiation (no ozone layer), lightning, geothermal heat, and radioactive decay.
              These energy sources could power chemical reactions creating organic molecules.
            </p>
          </div>

          <div className="section">
            <h3>Water</h3>
            <p>
              Early Earth had oceans and liquid water - essential for chemistry to occur. Water served as a solvent enabling chemical
              reactions and is central to all known life.
            </p>
          </div>

          <div className="section">
            <h3>Minerals</h3>
            <p>
              Rocks and minerals provided catalytic surfaces where chemical reactions could occur and persist. They also contained elements
              essential for life (phosphorus, iron, etc.).
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Formation of Organic Molecules</h2>

        <div className="subsection">
          <h3>The Miller-Urey Experiment (1952)</h3>
          <p>
            Scientists recreated conditions of early Earth in a lab, passing electrical discharge through gases and water. Within days,
            complex organic molecules formed, including amino acids (building blocks of proteins). This demonstrated that organic molecules
            could form from simple chemicals through chemical reactions - without life.
          </p>

          <p>
            Subsequent experiments showed numerous organic molecules can form under various early Earth conditions. Life's building blocks
            can arise through chemistry alone.
          </p>
        </div>

        <div className="subsection">
          <h3>Hydrothermal Vent Hypothesis</h3>
          <p>
            Deep-sea hydrothermal vents may have provided ideal conditions for life's origin. These vents provide:
          </p>

          <ul>
            <li>Energy (heat gradient)</li>
            <li>Chemical gradients (pH and mineral differences)</li>
            <li>Natural compartmentalization (porous rocky structures)</li>
            <li>Essential chemical elements</li>
          </ul>

          <p>
            Complex organic molecules have been detected near hydrothermal vents, supporting this hypothesis.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>The RNA World Hypothesis</h2>

        <p>
          The RNA World hypothesis proposes that early life relied on RNA (ribonucleic acid) as its primary genetic material and catalyst.
          This hypothesis addresses a "chicken-and-egg" problem: DNA needs proteins to replicate, and proteins need DNA to encode them.
          How did they both originate?
        </p>

        <p>
          <strong>Solution:</strong> RNA can perform both functions. RNA can:
        </p>

        <ul>
          <li>
            <strong>Store genetic information</strong> (like DNA)
          </li>
          <li>
            <strong>Catalyze reactions</strong> (like proteins) through ribozymes - enzymes made of RNA
          </li>
          <li>
            <strong>Self-replicate</strong> through base-pairing interactions
          </li>
        </ul>

        <p>
          In the RNA World, self-replicating RNA molecules competed for resources. Natural selection acted on RNA, favoring efficient
          replicators. Over time, more complex RNA systems evolved, eventually acquiring proteins and DNA as specialized molecules took
          over specific functions.
        </p>
      </div>

      <div className="content-section">
        <h2>From Chemistry to Biology: The First Cells</h2>

        <p>
          At some point, replicating molecules became enclosed in lipid membranes, creating primitive cells. These first cells:
        </p>

        <ul>
          <li>Had genetic material (RNA)</li>
          <li>Could metabolize (break down chemicals for energy)</li>
          <li>Could replicate</li>
          <li>Had boundaries (lipid membranes) separating them from the environment</li>
        </ul>

        <p>
          Once cells formed, natural selection could act, favoring efficient replicators and better metabolisms. Evolution had begun.
        </p>
      </div>

      <div className="content-section">
        <h2>Key Events in Early Life Evolution</h2>

        <div className="grid grid-2">
          <div className="section">
            <h3>~3.8 billion years ago</h3>
            <p>First evidence of life in the geological record (carbon isotope ratios)</p>
          </div>

          <div className="section">
            <h3>~3.5 billion years ago</h3>
            <p>Earliest fossils (stromatolites) potentially of cellular origin</p>
          </div>

          <div className="section">
            <h3>~2.7 billion years ago</h3>
            <p>Photosynthesis evolves; oxygen begins accumulating in atmosphere</p>
          </div>

          <div className="section">
            <h3>~2.0 billion years ago</h3>
            <p>Eukaryotic cells (with nuclei) evolve from prokaryotes</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Current Status and Remaining Questions</h2>

        <p>
          While we have plausible models for how life originated, significant questions remain:
        </p>

        <ul>
          <li>What was the exact sequence of chemical events?</li>
          <li>How did metabolism first arise?</li>
          <li>How did genetic code evolve?</li>
          <li>What environments were most conducive to life's origin?</li>
        </ul>

        <p>
          Scientists continue investigating these questions through experiments, geological studies, and computational modeling. The origin
          of life remains an active, fascinating area of research that brings together chemistry, biology, and geology.
        </p>
      </div>

      <div className="section" style={{ background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(124, 179, 66, 0.1) 100%)' }}>
        <h3>Life in Rainforests: A Product of Billions of Years of Evolution</h3>
        <p>
          The remarkable biodiversity we see in rainforests today - millions of species, complex adaptations, intricate ecological
          relationships - all evolved from those first simple self-replicating molecules that emerged billions of years ago. Understanding
          the origin of life provides context for appreciating the full scope of evolution and the precious uniqueness of our biosphere.
        </p>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default OriginOfLifePage
