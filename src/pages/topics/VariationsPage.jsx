import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function VariationsPage() {
  const essentialQuestions = [
    'What is genetic diversity and why is it important?',
    'Is genetic diversity able to impact how populations withstand environmental pressures?',
    'What causes genetic variation in populations?',
    'Why are some populations more genetically diverse than others?',
    'How does genetic diversity relate to conservation?',
  ]

  const quizQuestions = [
    {
      question: 'Why is genetic diversity important for population survival?',
      options: [
        { text: 'It allows organisms to grow bigger', isCorrect: false },
        { text: 'It increases the probability that some individuals will survive environmental changes', isCorrect: true },
        { text: 'It makes all organisms the same', isCorrect: false },
        { text: 'It prevents all mutations', isCorrect: false },
      ],
      explanation:
        'With genetic diversity, populations contain different variants. When conditions change, some variants may confer survival advantages.',
    },
    {
      question: 'What causes genetic variation?',
      options: [
        { text: 'Only mutation creates genetic variation', isCorrect: false },
        { text: 'Mutation, sexual reproduction, and gene flow all contribute to genetic variation', isCorrect: true },
        { text: 'Genetic variation only decreases over time', isCorrect: false },
        { text: 'Environmental changes cause genetic variation', isCorrect: false },
      ],
      explanation:
        'Multiple mechanisms generate variation: mutations create new alleles, sexual reproduction recombines alleles, gene flow introduces new alleles.',
    },
    {
      question: 'Why are small populations at greater risk from loss of genetic diversity?',
      options: [
        { text: 'Small populations mutate more frequently', isCorrect: false },
        { text: 'Genetic drift randomly eliminates alleles faster in small populations', isCorrect: true },
        { text: 'Small organisms have less genetic diversity', isCorrect: false },
        { text: 'Natural selection is stronger in small populations', isCorrect: false },
      ],
      explanation:
        'In small populations, random sampling means some alleles fail to be passed to the next generation just by chance, reducing diversity.',
    },
  ]

  const citations = [
    {
      title: 'Genetic Diversity and Conservation',
      author: 'Andrew Frankham',
      year: '2005',
      fullCitation:
        'Frankham, R. (2005). Genetics and extinction. Biological Conservation, 126(2), 131-140.',
      notes: 'Review of genetic diversity in conservation.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Standard 7.12</div>
        <h1>Variations in Population</h1>
        <p>Understanding genetic diversity and its importance for population survival.</p>
      </div>

      <div className="content-section">
        <h2>What is Genetic Variation?</h2>
        <p>
          Genetic variation refers to the diversity of alleles within a population. Populations with high genetic variation contain many
          different gene variants; populations with low genetic variation have few variants. Genetic variation is the raw material for
          evolution and is essential for population survival.
        </p>
      </div>

      <div className="content-section">
        <h2>Sources of Genetic Variation</h2>

        <div className="grid grid-2">
          <div className="section">
            <h3>Mutation</h3>
            <p>
              DNA copying errors create new alleles. While mutation rates are low, in large populations mutations constantly introduce new
              genetic variants, maintaining variation over time.
            </p>
          </div>

          <div className="section">
            <h3>Sexual Reproduction</h3>
            <p>
              Sexual reproduction recombines existing alleles into new combinations through meiosis and fertilization. This creates genetic
              diversity from generation to generation without new mutations.
            </p>
          </div>

          <div className="section">
            <h3>Gene Flow</h3>
            <p>
              Migration between populations can introduce new alleles, increasing genetic variation in recipient populations while reducing
              variation in source populations.
            </p>
          </div>

          <div className="section">
            <h3>Maintenance vs. Loss</h3>
            <p>
              Various evolutionary forces affect variation. Selection and genetic drift tend to reduce variation; mutation and gene flow
              increase it. The balance determines the overall level of variation.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Genetic Diversity and Fitness</h2>

        <p>
          Populations with high genetic diversity have greater evolutionary potential. When environmental conditions change, diverse
          populations are more likely to contain individuals with advantageous traits. This allows the population to adapt through natural
          selection.
        </p>

        <p>
          Conversely, populations with low genetic diversity (from bottlenecks or inbreeding) have reduced adaptability. Even if a
          population survives current conditions, low genetic diversity limits its ability to respond to future changes.
        </p>
      </div>

      <div className="content-section">
        <h2>Rainforest Population Genetics</h2>

        <div className="subsection">
          <h3>Habitat Fragmentation and Genetic Diversity</h3>
          <p>
            Rainforest deforestation fragments populations into isolated patches. Isolated populations:
          </p>

          <ul>
            <li>Experience reduced gene flow between patches</li>
            <li>Lose variation due to genetic drift in small populations</li>
            <li>May experience inbreeding depression (reduced fitness from mating between relatives)</li>
            <li>Have reduced ability to adapt to environmental changes</li>
          </ul>

          <p>
            Conservation biologists must maintain corridors between habitat patches to preserve gene flow and genetic diversity.
          </p>
        </div>

        <div className="subsection">
          <h3>Jaguar Genetic Diversity</h3>
          <p>
            Central American jaguar populations have been decimated by habitat loss. Genetic studies reveal extremely low genetic diversity
            in some populations. This raises concerns about their long-term survival because they have reduced capacity to adapt to future
            environmental changes.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Genetic Diversity and Conservation</h2>

        <p>
          Conservation geneticists use several strategies to maintain genetic diversity in endangered populations:
        </p>

        <ul>
          <li>
            <strong>Habitat Preservation:</strong> Protecting large, connected habitat patches maintains gene flow
          </li>
          <li>
            <strong>Assisted Migration:</strong> Moving individuals between populations can increase genetic diversity
          </li>
          <li>
            <strong>Captive Breeding:</strong> Carefully managed breeding programs maintain genetic diversity in captive populations
          </li>
          <li>
            <strong>Genetic Rescue:</strong> Introducing genetic diversity from closely related populations
          </li>
        </ul>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default VariationsPage

