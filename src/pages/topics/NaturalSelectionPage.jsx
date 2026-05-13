import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'
import InteractiveVisualization from '../../components/InteractiveVisualization'

function NaturalSelectionPage() {
  const essentialQuestions = [
    'What are the mechanisms by which natural selection changes allele frequencies?',
    'How does fitness relate to survival and reproduction?',
    'What is the difference between relative and absolute fitness?',
    'How do we measure selection coefficients?',
    'What happens to allele frequencies when selection pressures change?',
  ]

  const quizQuestions = [
    {
      question: 'In evolutionary biology, "fitness" primarily refers to:',
      options: [
        { text: 'Physical strength and muscle development', isCorrect: false },
        { text: 'An organism\'s ability to survive and reproduce in its environment', isCorrect: true },
        { text: 'How well an organism can compete for food', isCorrect: false },
        { text: 'The size and health of an organism', isCorrect: false },
      ],
      explanation:
        'Biological fitness is a technical term meaning reproductive success - how many viable offspring an organism produces relative to others in the population.',
    },
    {
      question:
        'A rainforest plant species produces seeds dispersed by birds. After habitat fragmentation, fewer birds visit the area. What is likely to happen over time?',
      options: [
        { text: 'Plant seeds will evolve to be more nutritious', isCorrect: false },
        { text: 'Plants producing seeds more attractive to birds will have higher reproductive success', isCorrect: true },
        { text: 'Birds will evolve to eat less nutritious seeds', isCorrect: false },
        { text: 'The plant will decide to change its seed production', isCorrect: false },
      ],
      explanation:
        'When seed dispersal depends on bird visits, plants producing seeds more attractive to birds will have increased fitness and pass more genes to the next generation.',
    },
    {
      question: 'What does a selection coefficient of 0.3 indicate?',
      options: [
        { text: 'The trait is beneficial 30% of the time', isCorrect: false },
        { text: 'Individuals with the trait have 30% lower fitness than the average', isCorrect: true },
        { text: 'The population will change 30% each generation', isCorrect: false },
        { text: 'This trait appears in 30% of the population', isCorrect: false },
      ],
      explanation:
        'A selection coefficient measures the relative reduction in fitness. A value of 0.3 means organisms with this trait produce only 70% as many offspring as the average.',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation:
        'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary textbook reference for natural selection, fitness, selection coefficients, and types of selection (Chapter 23).',
    },
    {
      title: 'Evolutionary Biology',
      author: 'Douglas Futuyma & Mark Kirkpatrick',
      year: '2017',
      fullCitation:
        'Futuyma, D. J., & Kirkpatrick, M. (2017). Evolution (4th ed.). Sinauer Associates.',
      notes: 'Comprehensive textbook covering mechanisms of natural selection.',
    },
    {
      title: 'The Price Equation and the Fundamental Theorem of Natural Selection',
      author: 'Steven A. Frank',
      year: '1997',
      fullCitation:
        'Frank, S. A. (1997). The Price equation, Fisher\'s fundamental theorem, kin selection, and causal analysis. Evolution, 51(6), 1712-1729.',
      notes: 'Mathematical framework for understanding selection.',
    },
    {
      title: 'Scarlet macaw in flight [Photograph]',
      author: 'A-Z Animals',
      year: 'n.d.',
      fullCitation:
        'A-Z Animals. (n.d.). Scarlet macaw in flight [Photograph]. A-Z Animals. https://a-z-animals.com/media/2021/12/Red-Animals-Scarlet-Macaw.jpg',
      url: 'https://a-z-animals.com/media/2021/12/Red-Animals-Scarlet-Macaw.jpg',
      notes: 'Image used to illustrate sexual selection and plumage displays.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Unit 7.2</div>
        <h1>Natural Selection: Mechanisms and Evidence</h1>
        <p>Exploring how natural selection changes populations at the genetic level.</p>
      </div>

      <div className="content-section">
        <h2>How Natural Selection Changes Populations</h2>
        <p>
          While we introduced natural selection in the previous section, this topic explores the detailed mechanisms by which it
          operates and changes the genetic composition of populations over time. Natural selection doesn't just occur - it changes allele
          (gene variant) frequencies in predictable ways.
        </p>
      </div>

      <div className="content-section">
        <h2>Key Concepts in Natural Selection</h2>

        <div className="subsection">
          <h3>Fitness</h3>
          <p>
            In evolutionary terms, fitness doesn't mean physical strength - it means reproductive success. An organism's fitness is
            measured by how many viable, fertile offspring it produces relative to other individuals in the population. An organism
            might be physically weak but have high fitness if it produces many offspring that survive to reproduce.
          </p>

          <p>
            <strong>Two types of fitness:</strong>
          </p>
          <ul>
            <li>
              <strong>Absolute Fitness:</strong> The actual number of offspring produced by an individual
            </li>
            <li>
              <strong>Relative Fitness:</strong> An individual's fitness compared to others in the population (expressed as a value from
              0 to 1)
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Selection Coefficient</h3>
          <p>
            The selection coefficient (s) quantifies how much natural selection acts against a particular trait. It ranges from 0 to 1,
            where:
          </p>
          <ul>
            <li>s = 0: The trait has no effect on fitness</li>
            <li>s = 1: The trait is lethal (reduces fitness to zero)</li>
            <li>s = 0.3: Individuals with the trait have 70% of the fitness of individuals without it</li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Directional Selection in Rainforests</h3>
          <p>
            Consider jaguar populations in rainforests. Jaguars that hunt more effectively have higher fitness. Natural selection acts
            to increase the frequency of alleles contributing to hunting ability (stronger jaws, better coordination, improved
            camouflage). Over generations, the average jaguar population becomes increasingly well-adapted to hunting.
          </p>
        </div>
      </div>

      <InteractiveVisualization
        title="Allele Frequency Changes Under Selection"
        description="Understand how selection coefficients affect evolution rates"
      >
        <div style={{ padding: '1rem', background: 'rgba(124, 179, 66, 0.05)', borderRadius: '8px' }}>
          <p>
            When a beneficial allele increases in frequency, the rate depends on the selection coefficient and starting frequency:
          </p>
          <ul>
            <li>
              <strong>Weak selection (s = 0.01):</strong> Changes occur slowly over many generations, but the allele eventually goes to
              fixation
            </li>
            <li>
              <strong>Strong selection (s = 0.5):</strong> Changes occur rapidly, fixation achieved in relatively few generations
            </li>
            <li>
              <strong>Rare alleles:</strong> Even beneficial alleles can be lost by chance if very rare (genetic drift effect)
            </li>
            <li>
              <strong>Common alleles:</strong> Strong selection can quickly fix beneficial alleles that are already common
            </li>
          </ul>
        </div>
      </InteractiveVisualization>

      <div className="content-section">
        <h2>Mechanisms of Natural Selection</h2>

        <div className="grid grid-2">
          <div className="section">
            <h3>Viability Selection</h3>
            <p>
              Some individuals die before reproductive age. Selection acts on traits affecting survival. In rainforests, plants with
              stronger root systems survive droughts better. These survivors reproduce more, passing survival-enhancing genes to
              offspring.
            </p>
            <figure style={{ marginTop: '1rem', background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
              <img
                  src ="data:image/jpeg;base64,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"
                  alt="Kin selection example"
                  style={{ width: '100%', borderRadius: 6, display: 'block' }}
                  loading="lazy"
              />
            </figure>
          </div>

          <div className="section">
            <h3>Fertility Selection</h3>
            <p>
              Some individuals survive but produce fewer offspring. Insects that mate more successfully or produce more eggs pass more
              genes to the next generation. Over time, alleles enhancing mating success become more frequent.
            </p>
            <figure style={{ marginTop: '1rem', background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
              <img
                  src = "data:image/jpeg;base64,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"
                  alt="Kin selection example"
                  style={{ width: '100%', borderRadius: 6, display: 'block' }}
                  loading="lazy"
              />
            </figure>
          </div>

          <div className="section">
            <h3>Sexual Selection</h3>
            <p>
              Traits that enhance mating success (even if they reduce survival) spread through populations. Rainforest birds with
              elaborate displays attract more mates. If display quality is heritable, these genes increase in frequency.
            </p>


            <figure style={{ marginTop: '1rem', background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
              <img
                  src = "https://a-z-animals.com/media/2021/12/Red-Animals-Scarlet-Macaw.jpg"
                  alt="Kin selection example"
                  style={{ width: '100%', borderRadius: 6, display: 'block' }}
                  loading="lazy"
              />
            </figure>

          </div>

          <div className="section">
            <h3>Kin Selection</h3>
            <p>
              Helping relatives reproduce can spread genes indirectly. In rainforest ant colonies, workers don't reproduce themselves but
              help the queen produce offspring. Worker alleles spread because they share genes with the queen.
            </p>
              <figure style={{ marginTop: '1rem', background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
              <img
                  src = "https://www.terro.com/media/wysiwyg/tr/cms/learning-center/ants/ter-insects-little-black-ant-article-3.jpg"
                alt="Kin selection example"
                style={{ width: '100%', borderRadius: 6, display: 'block' }}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Constraints on Natural Selection</h2>

        <p>
          Natural selection is powerful, but several factors limit how much it can change populations:
        </p>

        <ul>
          <li>
            <strong>Pleiotropy:</strong> Genes often affect multiple traits. A beneficial trait might be linked to a harmful one, slowing
            evolution.
          </li>
          <li>
            <strong>Genetic Architecture:</strong> Complex traits controlled by many genes evolve slowly compared to traits controlled by
            few genes.
          </li>
          <li>
            <strong>Developmental Constraints:</strong> Physical development limitations may prevent certain adaptations from evolving.
          </li>
          <li>
            <strong>Trade-offs:</strong> Improving one trait often reduces fitness in another. Fast growth might reduce competitive ability.
          </li>
          <li>
            <strong>Genetic Drift:</strong> In small populations, random changes can overpower selection.
          </li>
        </ul>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default NaturalSelectionPage
