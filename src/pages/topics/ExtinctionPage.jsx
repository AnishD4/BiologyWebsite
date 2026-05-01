import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function ExtinctionPage() {
  const essentialQuestions = [
    'What factors can lead to population extinction?',
    'How can extinction events be promoted or hindered by environmental changes?',
    'How do speciation and extinction impact species diversity in ecosystems?',
    'How does adaptive radiation stem from extinction events?',
    'What causes mass extinction events?',
  ]

  const quizQuestions = [
    {
      question: 'What is extinction?',
      options: [
        { text: 'The migration of species to new habitats', isCorrect: false },
        { text: 'The permanent disappearance of all individuals of a species', isCorrect: true },
        { text: 'The evolutionary loss of a specific trait', isCorrect: false },
        { text: 'The reduction of genetic diversity in a population', isCorrect: false },
      ],
      explanation:
        'Extinction occurs when the last individual of a species dies. Once a species is extinct, it can never be recovered.',
    },
    {
      question: 'What is a mass extinction event?',
      options: [
        { text: 'When one species becomes extinct', isCorrect: false },
        { text: 'A rapid, large-scale extinction affecting many species across multiple groups', isCorrect: true },
        { text: 'When all organisms in an ecosystem die', isCorrect: false },
        { text: 'Evolution happening very quickly', isCorrect: false },
      ],
      explanation:
        'Mass extinctions are geologically rapid events eliminating large proportions of species. Five major mass extinctions have shaped Earth\'s history.',
    },
    {
      question: 'How can extinction events lead to adaptive radiation?',
      options: [
        { text: 'By eliminating competitive species, leaving ecological space for survivors to diversify', isCorrect: true },
        { text: 'By directly creating new species through mutation', isCorrect: false },
        { text: 'By increasing mutation rates', isCorrect: false },
        { text: 'By promoting inbreeding in survivors', isCorrect: false },
      ],
      explanation:
        'When extinction removes dominant competitors, surviving species can rapidly diversify to fill vacant ecological niches - adaptive radiation.',
    },
  ]

  const citations = [
    {
      title: 'The Fifth Extinction',
      author: 'Richard Leakey & Roger Lewin',
      year: '1995',
      fullCitation:
        'Leakey, R. E., & Lewin, R. (1995). The sixth extinction: Patterns of life and the future of humankind. Doubleday.',
      notes: 'Discussion of extinction and current biodiversity crisis.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Standard 7.11</div>
        <h1>Extinction</h1>
        <p>Understanding species loss and its consequences for biodiversity.</p>
      </div>

      <div className="content-section">
        <h2>What is Extinction?</h2>
        <p>
          Extinction is the permanent disappearance of a species. When the last individual of a species dies without reproducing, that
          species is gone forever. Extinction is a natural part of evolution - 99.9% of all species that ever lived are now extinct. However,
          current extinction rates are abnormally high due to human activities.
        </p>
      </div>

      <div className="content-section">
        <h2>Causes of Extinction</h2>

        <div className="subsection">
          <h3>Natural Causes</h3>
          <ul>
            <li>
              <strong>Environmental Changes:</strong> Climate shifts, volcanic eruptions, asteroids can rapidly alter conditions, killing
              species unable to adapt
            </li>
            <li>
              <strong>Predation:</strong> New predators entering an ecosystem can cause prey extinctions
            </li>
            <li>
              <strong>Competition:</strong> New competitors can outcompete native species
            </li>
            <li>
              <strong>Genetic Drift:</strong> In small populations, genetic drift can randomly reduce fitness until populations collapse
            </li>
            <li>
              <strong>Disease:</strong> Epidemics can devastate populations, especially island species with no natural resistance
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Human-Caused (Anthropogenic) Extinction</h3>
          <ul>
            <li>
              <strong>Habitat Destruction:</strong> Rainforest deforestation has destroyed habitat for countless species
            </li>
            <li>
              <strong>Overhunting:</strong> Species hunted to extinction include passenger pigeons and Steller's sea cows
            </li>
            <li>
              <strong>Pollution:</strong> Chemical pollution can reduce reproduction or cause direct poisoning
            </li>
            <li>
              <strong>Invasive Species:</strong> Introduced species can outcompete or prey on native species
            </li>
            <li>
              <strong>Climate Change:</strong> Rapid climate shifts prevent species from adapting or migrating
            </li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>The Extinction Crisis</h2>

        <p>
          Current extinction rates are 1000-10,000 times higher than the background extinction rate estimated from the fossil record. We're
          currently in a human-caused mass extinction event (often called the "Sixth Extinction"). This is driven primarily by:
        </p>

        <ul>
          <li>Habitat destruction (especially rainforest loss)</li>
          <li>Climate change</li>
          <li>Pollution</li>
          <li>Invasive species</li>
          <li>Overharvesting</li>
        </ul>

        <p>
          <strong>Rainforest Impact:</strong> Rainforests cover 6% of Earth's land but contain over 50% of species. Deforestation of rainforests
          eliminates species before they're even discovered by science.
        </p>
      </div>

      <div className="content-section">
        <h2>Mass Extinction Events</h2>

        <p>
          Five major mass extinctions have occurred in Earth's history:
        </p>

        <table style={{ width: '100%', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Event</th>
              <th>Time</th>
              <th>Cause</th>
              <th>Species Lost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ordovician</td>
              <td>443 mya</td>
              <td>Glaciation</td>
              <td>~85%</td>
            </tr>
            <tr>
              <td>Late Devonian</td>
              <td>375 mya</td>
              <td>Unclear</td>
              <td>~75%</td>
            </tr>
            <tr>
              <td>Permian</td>
              <td>252 mya</td>
              <td>Volcanism, climate change</td>
              <td>~96%</td>
            </tr>
            <tr>
              <td>Triassic</td>
              <td>201 mya</td>
              <td>Volcanism</td>
              <td>~76%</td>
            </tr>
            <tr>
              <td>Cretaceous</td>
              <td>66 mya</td>
              <td>Asteroid impact</td>
              <td>~75% (incl. dinosaurs)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Extinction and Adaptive Radiation</h2>

        <p>
          Extinction creates evolutionary opportunities. When dominant competitors are eliminated, surviving species can rapidly diversify
          and radiate into available ecological niches. This pattern, called adaptive radiation, created the remarkable diversity we see
          today.
        </p>

        <p>
          <strong>Example:</strong> Dinosaur extinction 66 million years ago allowed mammals to diversify, eventually giving rise to all
          modern mammals including rainforest species.
        </p>
      </div>

      <div className="content-section">
        <h2>Conservation and Extinction Prevention</h2>

        <p>
          Key conservation strategies include:
        </p>

        <ul>
          <li>Habitat preservation and restoration</li>
          <li>Species protection laws and enforcement</li>
          <li>Captive breeding programs for critically endangered species</li>
          <li>Climate change mitigation</li>
          <li>Invasive species control</li>
          <li>International cooperation on conservation</li>
        </ul>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default ExtinctionPage
