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
        <div className="topic-number">Standard 7.2</div>
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
          </div>

          <div className="section">
            <h3>Fertility Selection</h3>
            <p>
              Some individuals survive but produce fewer offspring. Insects that mate more successfully or produce more eggs pass more
              genes to the next generation. Over time, alleles enhancing mating success become more frequent.
            </p>
          </div>

          <div className="section">
            <h3>Sexual Selection</h3>
            <p>
              Traits that enhance mating success (even if they reduce survival) spread through populations. Rainforest birds with
              elaborate displays attract more mates. If display quality is heritable, these genes increase in frequency.
            </p>

            <figure style={{ marginTop: '1rem', background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
              <img
                src="https://a-z-animals.com/media/2021/12/Red-Animals-Scarlet-Macaw.jpg"
                alt="Scarlet macaw displaying bright plumage"
                style={{ width: '100%', borderRadius: 6, display: 'block' }}
                loading="lazy"
              />
              <figcaption style={{ marginTop: '0.5rem', color: '#bfffe6' }}>
                Scarlet macaw, bright plumage used in sexual displays. Source: A-Z Animals
                <div>
                  <a href="https://a-z-animals.com/animals/lists/common-animals-that-live-in-the-amazon-rainforest/" style={{ color: '#00b36b' }}>
                    https://a-z-animals.com/animals/lists/common-animals-that-live-in-the-amazon-rainforest/
                  </a>
                </div>
              </figcaption>
            </figure>

          </div>

          <div className="section">
            <h3>Kin Selection</h3>
            <p>
              Helping relatives reproduce can spread genes indirectly. In rainforest ant colonies, workers don't reproduce themselves but
              help the queen produce offspring. Worker alleles spread because they share genes with the queen.
            </p>
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
