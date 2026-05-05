import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function ArtificialSelectionPage() {
  const essentialQuestions = [
    'How are humans able to affect diversity within populations?',
    'What is the difference between natural and artificial selection?',
    'Can artificial selection be reversed?',
    'How does artificial selection relate to evolution?',
    'What are the ethical implications of artificial selection in agriculture?',
  ]

  const quizQuestions = [
    {
      question: 'Which of the following is an example of artificial selection?',
      options: [
        { text: 'Natural predators selecting faster prey animals', isCorrect: false },
        { text: 'Farmers selectively breeding crops for increased yield', isCorrect: true },
        { text: 'Environmental pollution selecting for toxin-resistant bacteria', isCorrect: false },
        { text: 'Climate change causing evolution of cold-resistant plants', isCorrect: false },
      ],
      explanation:
        'Artificial selection occurs when humans deliberately choose which organisms breed, intensifying desired traits much faster than natural selection.',
    },
    {
      question:
        'Modern dog breeds were created through artificial selection. What does this demonstrate about genetic variation?',
      options: [
        { text: 'Dogs are fundamentally different from wolves at the genetic level', isCorrect: false },
        { text: 'Significant phenotypic diversity can arise from relatively small genetic changes', isCorrect: true },
        { text: 'Artificial selection is more powerful than natural selection', isCorrect: false },
        { text: 'Dogs evolved separately from wolves', isCorrect: false },
      ],
      explanation:
        'All dog breeds descended from wolves in the last ~15,000 years. This demonstrates how selection acting on existing genetic variation can create dramatic phenotypic diversity.',
    },
    {
      question:
        'Why might artificial selection in agriculture lead to reduced genetic diversity in crop populations?',
      options: [
        { text: 'Farmers always cross-breed all individuals equally', isCorrect: false },
        { text: 'Farmers select for specific traits, eliminating other alleles and reducing overall genetic variation', isCorrect: true },
        { text: 'Artificial selection is random', isCorrect: false },
        { text: 'Crops cannot maintain genetic diversity under any circumstances', isCorrect: false },
      ],
      explanation:
        'By selecting only individuals with desired traits, farmers reduce the frequency of alleles not associated with those traits, potentially losing valuable genetic diversity.',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation: 'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary textbook reference for artificial selection, selective breeding, domestication, and its genetic consequences (Chapter 22).',
    },
    {
      title: 'Domestication and Artificial Selection',
      author: 'Wayne & Vilà',
      year: '2021',
      fullCitation: 'Wayne, R. K., & Vilà, C. (2021). Domestication: Recent developments in understanding animal artificial selection. Nature Reviews Genetics, 22(3), 172-188.',
      notes: 'Comprehensive review of artificial selection mechanisms and impacts.',
    },
    {
      title: 'Teosinte vs. modern corn [Photograph]',
      author: 'Wikimedia Commons / John Doebley',
      year: 'n.d.',
      fullCitation: 'Doebley, J. (n.d.). Teosinte and modern corn comparison [Photograph]. Wikimedia Commons. https://upload.wikimedia.org/wikipedia/commons/c/cb/Teosinte.png',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Teosinte.png',
      notes: 'Image showing the dramatic morphological difference between teosinte and domesticated maize, a classic example of artificial selection.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Unit 7.3</div>
        <h1>Artificial Selection</h1>
        <p>How humans direct evolution through selective breeding.</p>
      </div>

      <div className="content-section">
        <h2>What is Artificial Selection?</h2>
        <p>
          Artificial selection occurs when humans deliberately choose which individuals reproduce, selecting for desired traits and
          against undesired ones. This process can produce dramatic evolutionary changes in just a few generations - much faster than
          natural selection alone.
        </p>

        <p>
          Unlike natural selection, where environmental pressures determine which individuals reproduce, artificial selection is
          directed by human preferences. We breed plants for larger fruits, animals for increased milk production, and selectively
          eliminate traits we consider undesirable.
        </p>
      </div>

      <div className="content-section">
        <h2>Historical Examples: Agriculture</h2>

        <div className="subsection">
          <h3>Corn (Maize) Evolution</h3>
          <p>
            Modern corn bears little resemblance to its wild ancestor, teosinte. Over ~9,000 years of artificial selection by Mesoamerican farmers, corn was transformed from a small grain plant to the massive productive crop we see today. This is one of the most dramatic examples of artificial selection's power.
          </p>
          <ul>
            <li>Early selection favored larger cobs and more seeds per cob</li>
            <li>Farmers saved seeds from best plants each year</li>
            <li>Within centuries, corn was unrecognizable from teosinte</li>
            <li>Modern selective breeding continues this process</li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Rainforest Crop Domestication</h3>
          <p>
            Indigenous rainforest peoples domesticated cacao (chocolate), rubber, and numerous other plants through artificial selection. They selected for fruit quality, yield, and disease resistance - the same process modern agriculture uses.
          </p>
        </div>

        {/* Image: Teosinte vs Corn */}
        <figure style={{ marginTop: '1.5rem', background: '#07110b', padding: '0.75rem', borderRadius: 8 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Teosinte.png"
            alt="Comparison of teosinte (wild ancestor) and modern corn, showing dramatic effects of artificial selection"
            style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '380px', objectFit: 'contain', background: '#0e1210' }}
            loading="lazy"
          />
          <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            Teosinte (left) vs. modern corn (right)—one of the most dramatic examples of artificial selection. Source: Wikimedia Commons / John Doebley
            <div>
              <a href="https://upload.wikimedia.org/wikipedia/commons/c/cb/Teosinte.png" style={{ color: 'var(--secondary-green)' }}>
                https://upload.wikimedia.org/wikipedia/commons/c/cb/Teosinte.png
              </a>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
              APA: Doebley, J. (n.d.). Teosinte and modern corn comparison [Photograph]. Wikimedia Commons.
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="content-section">
        <h2>Artificial Selection vs. Natural Selection</h2>

        <table style={{ width: '100%', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Natural Selection</th>
              <th>Artificial Selection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Selecting Agent</strong></td>
              <td>Environment</td>
              <td>Humans</td>
            </tr>
            <tr>
              <td><strong>Selection Criteria</strong></td>
              <td>Survival & reproduction</td>
              <td>Human preferences</td>
            </tr>
            <tr>
              <td><strong>Speed</strong></td>
              <td>Slow (100s-1000s of years)</td>
              <td>Rapid (years to decades)</td>
            </tr>
            <tr>
              <td><strong>Trait Changes</strong></td>
              <td>Adaptive to environment</td>
              <td>May harm survival</td>
            </tr>
            <tr>
              <td><strong>Genetic Diversity</strong></td>
              <td>Often maintained</td>
              <td>Often reduced</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Modern Artificial Selection: Beyond Traditional Breeding</h2>

        <ul>
          <li>
            <strong>Genetic Engineering:</strong> Scientists insert specific genes into organisms, achieving in days what might take decades
            of traditional breeding.
          </li>
          <li>
            <strong>Marker-Assisted Selection:</strong> Using DNA markers to identify individuals carrying desirable genes, accelerating
            selective breeding.
          </li>
          <li>
            <strong>Genome Editing (CRISPR):</strong> Directly editing DNA sequences to introduce or remove specific traits.
          </li>
          <li>
            <strong>Genomic Selection:</strong> Using whole-genome data to predict which individuals will produce offspring with desired
            traits.
          </li>
        </ul>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default ArtificialSelectionPage
