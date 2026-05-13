import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function EvidenceOfEvolutionPage() {
  const essentialQuestions = [
    'What specific types of data provide evidence for evolution?',
    'How do morphological, biochemical, and geological changes provide evidence?',
    'What is the fossil record and what can it tell us?',
    'How does comparative anatomy support evolution?',
    'What does molecular evidence reveal about evolutionary relationships?',
    'How do we determine the age of fossils and rocks?',
  ]

  const quizQuestions = [
    {
      question: 'Which of the following is the best evidence that whales and land mammals share a common ancestor?',
      options: [
        { text: 'Whales and mammals both breathe air', isCorrect: false },
        { text: 'Whale skeletons contain homologous bones (arm, finger bones) similar to land mammals', isCorrect: true },
        { text: 'Whales and mammals both live in groups', isCorrect: false },
        { text: 'Fossil whales are found in ocean rocks', isCorrect: false },
      ],
      explanation:
        'Homologous structures - similar skeletal elements with similar arrangements - indicate common ancestry. Whale flippers contain the same bones as mammal arms.',
    },
    {
      question: 'What is vestigial evidence in evolution?',
      options: [
        { text: 'Leftover DNA that serves no purpose', isCorrect: false },
        { text: 'Structures that once served important functions but are now reduced or non-functional', isCorrect: true },
        { text: 'The oldest fossils found in rock layers', isCorrect: false },
        { text: 'Mutations that always harm organisms', isCorrect: false },
      ],
      explanation:
        'Vestigial structures like human appendix or coccyx (tail bone) are reduced remnants of structures that were important in ancestors but are now largely non-functional.',
    },
    {
      question: 'How do scientists use radioactive decay to date fossils?',
      options: [
        { text: 'By counting the number of cells in the fossil', isCorrect: false },
        { text: 'By measuring the ratio of parent to daughter isotopes', isCorrect: true },
        { text: 'By examining the color of the rocks around the fossil', isCorrect: false },
        { text: 'By calculating how deep the fossil is buried', isCorrect: false },
      ],
      explanation:
        'Radiometric dating measures radioactive isotope ratios. As radioactive atoms decay at known rates, the ratio indicates how long since the organism died.',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation:
        'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary textbook reference for evolutionary evidence, homologous structures, fossil record, and molecular evidence (Chapters 22, 25, 26).',
    },
    {
      title: 'The Evidence for Evolution',
      author: 'Allan Hallam',
      year: '1997',
      fullCitation:
        'Hallam, A. (1997). Paleontology and plate tectonics: The scope of paleoecology and paleogeography. In D. L. Dilcher & D. R. Covert (Eds.), Plant life and the changing environment. David Press.',
      notes: 'Comprehensive overview of paleontological evidence for evolution.',
    },
    {
      title: 'Molecular Evolution and Phylogenetics',
      author: 'Masatoshi Nei & Sudhir Kumar',
      year: '2000',
      fullCitation:
        'Nei, M., & Kumar, S. (2000). Molecular evolution and phylogenetics. Oxford University Press.',
      notes: 'Guide to molecular methods for studying evolutionary relationships.',
    },
    {
      title: 'Endangered rainforest species [Photograph]',
      author: 'Earth.org',
      year: 'n.d.',
      fullCitation:
        'Earth.org. (n.d.). Endangered rainforest species [Photograph]. Earth.org. https://earth.org/amazon-rainforest-endangered-species/',
      url: 'https://earth.org/amazon-rainforest-endangered-species/',
      notes: 'Image used to illustrate endangered rainforest species.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Unit 7.6</div>
        <h1>Evidence of Evolution</h1>
        <p>Multiple independent lines of evidence supporting evolutionary theory.</p>
      </div>

      <div className="content-section">
        <h2>Why Evidence for Evolution Matters</h2>
        <p>
          Evolution is supported by overwhelming evidence from multiple independent scientific disciplines. As described in Campbell Biology
          (Urry et al., 2020), when paleontology, comparative anatomy, molecular biology, biogeography, and geology all converge on the
          same conclusion, we have powerful scientific support for evolutionary theory.
        </p>
      </div>

      <div className="content-section">
        <h2>Fossil Evidence</h2>

        <div className="subsection">
          <h3>The Fossil Record</h3>
          <p>
            Fossils are preserved remains of extinct organisms. The fossil record shows:
          </p>

          <ul>
            <li>
              <strong>Progression:</strong> Simpler organisms appear in older rock layers; more complex organisms in younger layers
            </li>
            <li>
              <strong>Transitions:</strong> Fossils showing intermediate forms between major groups (e.g., Archaeopteryx showing bird-dinosaur
              transition)
            </li>
            <li>
              <strong>Radiometric Dating:</strong> Absolute ages confirming the progression visible in rock layers
            </li>
            <li>
              <strong>Biogeographic Patterns:</strong> Extinct organisms distributed where their descendants live today
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Transitional Fossils</h3>
          <p>
            Transitional fossils show characteristics of both ancestral and descendant groups, providing direct evidence of evolutionary
            transitions. Examples include:
          </p>
          <ul>
            <li><strong>Archaeopteryx:</strong> Dinosaur features (teeth, claws, long bony tail) + bird features (feathers, wishbone)</li>
            <li><strong>Tiktaalik:</strong> Fish features (fins, scales) + tetrapod features (limbs, neck)</li>
            <li><strong>Early Whale Fossils:</strong> Terrestrial mammal features + aquatic adaptations gradually appearing</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Comparative Anatomy</h2>

        <div className="subsection">
          <h3>Homologous Structures</h3>
          <p>
            Different species often have similar skeletal structures adapted for different functions. These homologous structures indicate
            descent from a common ancestor. For example, the bone structure of human arms, bat wings, and whale flippers are remarkably
            similar despite their different functions.
          </p>
        </div>

        <div className="subsection">
          <h3>Vestigial Structures</h3>
          <p>
            Many organisms possess structures that are non-functional or reduced, remnants of functional structures in ancestors:
          </p>

          <ul>
            <li><strong>Human appendix:</strong> Remnant of digestive organ used by herbivorous ancestors</li>
            <li><strong>Human coccyx:</strong> Fused tail bones from tail-bearing ancestors</li>
            <li><strong>Whale pelvic bones:</strong> Non-functional remnants of hind limbs from land-dwelling ancestors</li>
            <li><strong>Rainforest snakes:</strong> Tiny remnants of hip bones showing connection to limbed ancestors</li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Embryological Development</h3>
          <p>
            Embryos of different species show remarkable similarities during early development, suggesting shared ancestry. Vertebrate
            embryos all develop gill structures, even species like humans that never use gills. This indicates descent from aquatic
            ancestors.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Molecular Evidence</h2>

        <div className="subsection">
          <h3>DNA Similarity</h3>
          <p>
            Organisms with more recent common ancestors have more similar DNA sequences. Scientists can measure genetic similarity and
            construct evolutionary trees matching those based on fossil evidence:
          </p>

          <ul>
            <li>Humans and chimpanzees share ~98% of DNA</li>
            <li>Humans and mice share ~95% of DNA</li>
            <li>Humans and fruit flies share ~75% of DNA</li>
            <li>Humans and rainforest frogs share ~45% of DNA</li>
          </ul>
        </div>

        <div className="subsection">
          <h3>Molecular Clocks</h3>
          <p>
            DNA mutations accumulate at relatively constant rates. By comparing DNA differences between species and calibrating with
            fossil dates, scientists can estimate when species diverged from common ancestors, creating a "molecular clock."
          </p>
        </div>

        <div className="subsection">
          <h3>Universal Genetic Code</h3>
          <p>
            All life uses the same genetic code (same DNA triplets coding for same amino acids). This universal code is best explained by
            shared ancestry, all organisms inherited the same basic genetic system from the last common ancestor of all life.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Biogeographic Evidence</h2>

        <p>
          The geographic distribution of species provides strong evidence for evolution. Related species are often found in nearby regions,
          suggesting common ancestry. Island species often resemble mainland species more closely than they resemble species on other
          islands, indicating colonization and subsequent evolution.
        </p>

        <p>
          Rainforests are biogeographic hotspots with exceptional endemism (species found nowhere else). Species isolation in different
          rainforest regions has led to rapid diversification and evolution of distinctive species assemblages in each location.
        </p>
      </div>

      <div className="content-section">
        <h2>Direct Observation of Evolution</h2>

        <p>
          We've directly observed evolution occurring in real-time:
        </p>

        <ul>
          <li>
            <strong>Antibiotic Resistance:</strong> Bacteria rapidly evolve antibiotic resistance through natural selection
          </li>
          <li>
            <strong>Darwin's Finches:</strong> Beak sizes changed measurably over just a few years in response to environmental changes
          </li>
          <li>
            <strong>Peppered Moths:</strong> Coloration frequencies changed dramatically during industrial revolution
          </li>
          <li>
            <strong>Rainforest Species:</strong> We observe ongoing adaptation in response to deforestation and climate change
          </li>
        </ul>

        <figure style={{ marginTop: '1.5rem', background: '#07110b', padding: '0.75rem', borderRadius: 8 }}>
          <img
            src="https://earth.org/wp-content/uploads/2022/02/3.jpg"
            alt="Amazon rainforest endangered species showing morphological diversity"
            style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '350px', objectFit: 'cover' }}
            loading="lazy"
          />
          <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            Rainforest species showing remarkable morphological diversity—evidence of evolution and adaptation. Source: Earth.org
            <div>
              <a href="https://earth.org/amazon-rainforest-endangered-species/" style={{ color: '#00b36b' }}>
                https://earth.org/amazon-rainforest-endangered-species/
              </a>
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

export default EvidenceOfEvolutionPage
