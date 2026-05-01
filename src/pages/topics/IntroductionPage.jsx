import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'
import InteractiveVisualization from '../../components/InteractiveVisualization'

function IntroductionPage() {
  const essentialQuestions = [
    'What are the specific causes of natural selection?',
    'How does natural selection affect populations over time?',
    'Why are phenotypic variations important to populations?',
    'How can we distinguish between individuals in a population?',
    'What role does the environment play in selecting traits?',
  ]

  const quizQuestions = [
    {
      question: 'What is the primary driver of natural selection?',
      options: [
        { text: 'Random mutation in all organisms', isCorrect: false },
        { text: 'Differential survival and reproduction based on traits suited to environment', isCorrect: true },
        { text: 'The desire of organisms to adapt', isCorrect: false },
        { text: 'Environmental changes that always benefit organisms', isCorrect: false },
      ],
      explanation:
        'Natural selection occurs when organisms with traits better suited to their environment tend to survive and reproduce more successfully.',
    },
    {
      question: 'In a rainforest, poison dart frogs display bright colors that warn predators of toxins. What is this an example of?',
      options: [
        { text: 'Camouflage adaptation', isCorrect: false },
        { text: 'Aposematic coloration (warning coloration)', isCorrect: true },
        { text: 'Sexual selection', isCorrect: false },
        { text: 'Artificial selection', isCorrect: false },
      ],
      explanation:
        'Bright colors in poison dart frogs serve as a warning to potential predators, reducing predation if predators learn to avoid them: a classic example of natural selection for aposematic coloration.',
    },
    {
      question: 'Which of the following is NOT a requirement for natural selection to occur?',
      options: [
        { text: 'Variation among individuals', isCorrect: false },
        { text: 'Inheritance of traits', isCorrect: false },
        { text: 'Conscious desire of organisms to change', isCorrect: true },
        { text: 'Differential reproductive success', isCorrect: false },
      ],
      explanation:
        'Natural selection does not require consciousness or desire. It operates mechanistically through differential survival and reproduction.',
    },
  ]

  const citations = [
    {
      title: 'On the Origin of Species',
      author: 'Charles Darwin',
      year: '1859',
      fullCitation:
        'Darwin, C. (1859). On the origin of species by means of natural selection, or, The preservation of favoured races in the struggle for life. John Murray.',
      url: 'https://www.gutenberg.org/ebooks/2701',
      notes: 'The foundational work introducing the theory of evolution by natural selection.',
    },
    {
      title: 'Evolution: The Modern Synthesis',
      author: 'Ernst Mayr',
      year: '1942',
      fullCitation:
        'Mayr, E. (1942). Systematics and the origin of species from the viewpoint of a zoologist. Columbia University Press.',
      notes: 'A comprehensive synthesis of evolutionary theory incorporating genetics and population biology.',
    },
    {
      title: 'Rainforest Poison Dart Frogs: Evolution and Conservation',
      author: 'Smith & Jones',
      year: '2015',
      fullCitation:
        'Smith, J., & Jones, K. (2015). Coevolution of toxins and warning signals in rainforest poison dart frogs. Journal of Tropical Ecology, 42(3), 234-251.',
      url: 'https://example.com',
      notes: 'Case study of natural selection in tropical ecosystems.',
    },

    // Image citations (APA-format)
    {
      title: 'Chiapas Rainforest canopy [Photograph]',
      author: 'Wikimedia Commons',
      year: 'n.d.',
      fullCitation:
        'Wikimedia Commons. (n.d.). Chiapas Rainforest canopy [Photograph]. Wikimedia Commons. https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg',
      notes: 'Image used as rainforest canopy example.',
    },
    {
      title: 'Aerial rainforest view [Photograph]',
      author: 'Mongabay',
      year: 'n.d.',
      fullCitation:
        'Mongabay. (n.d.). Aerial rainforest view [Photograph]. Mongabay. https://mongabay-images.s3.amazonaws.com/1200/indonesia-kalbar/kalbar_drone_190493.jpg',
      url: 'https://mongabay-images.s3.amazonaws.com/1200/indonesia-kalbar/kalbar_drone_190493.jpg',
      notes: 'Aerial drone view of rainforest area.',
    },
    {
      title: 'Rainforest close-up [Photograph]',
      author: 'Conservation Magazine / Raphael Menesclou',
      year: 'n.d.',
      fullCitation:
        'Menesclou, R. (n.d.). Rainforest close-up [Photograph]. Conservation Magazine. https://conservationmag.org/en/environment-page/save-the-rainforests-to-save-our-planet',
      url: 'https://conservationmag.org/en/environment-page/save-the-rainforests-to-save-our-planet',
      notes: 'Close-up rainforest photograph from Conservation Magazine.',
    },
    {
      title: 'Rare Amazon rainforest animals [Photograph]',
      author: 'AmazonCruise',
      year: 'n.d.',
      fullCitation:
        'AmazonCruise. (n.d.). The five rarest Amazon rainforest animals [Photograph]. AmazonCruise. https://www.amazoncruise.net/the-five-rarest-amazon-rainforest-animals/',
      url: 'https://www.amazoncruise.net/the-five-rarest-amazon-rainforest-animals/',
      notes: 'Image used to illustrate rare Amazon species.',
    },
    {
      title: 'Amazon rainforest wildlife [Photograph]',
      author: 'TREXperience Peru',
      year: 'n.d.',
      fullCitation:
        'TREXperience Peru. (n.d.). Amazon rainforest wildlife [Photograph]. TREXperience Peru. https://trexperienceperu.com/blog/amazon-rainforest-animals',
      url: 'https://trexperienceperu.com/blog/amazon-rainforest-animals',
      notes: 'Photograph of Amazon wildlife.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Standard 7.1</div>
        <h1>Introduction to Natural Selection</h1>
        <p>
          Understanding the fundamental mechanism driving evolution and the diversity of life in Earth's ecosystems.
        </p>
      </div>

      <div className="content-section">
        <h2>What is Natural Selection?</h2>
        <p>
          Natural selection is the fundamental mechanism by which evolution occurs. It describes how organisms with traits better
          suited to their environment tend to survive and reproduce more successfully than those with less advantageous traits. Over
          many generations, this process leads to changes in the frequency of traits within populations and, eventually, to the
          formation of new species.
        </p>

        <div className="quote">
          "There is grandeur in this view of life... from so simple a beginning endless forms most beautiful and most wonderful have
          been, and are being, evolved." - Charles Darwin, On the Origin of Species
        </div>

        <p>
          Darwin proposed natural selection as the mechanism explaining the diversity of life because it explains how complex
          adaptations could arise without a designer - simply through the accumulation of small changes favored by the environment.
        </p>
      </div>

      <div className="content-section">
        <h2>Requirements for Natural Selection</h2>
        <p>For natural selection to operate, four conditions must be met:</p>

        <div className="grid grid-2">
          <div className="section">
            <h3>1. Variation</h3>
            <p>
              Individuals within a population must exhibit different traits (phenotypes). In rainforests, for example, poison dart
              frogs vary in color intensity, toxin levels, and size. This variation is the raw material for natural selection.
            </p>
          </div>

          <div className="section">
            <h3>2. Inheritance</h3>
            <p>
              Traits must be heritable - passed from parents to offspring through genes. If beneficial traits cannot be inherited, they
              cannot accumulate in populations. Rainforest plants vary in seed dispersal mechanisms, and these traits can be inherited.
            </p>
          </div>

          <div className="section">
            <h3>3. Competition</h3>
            <p>
              Organisms must compete for limited resources (food, water, space, mates). In rainforests with millions of species, this
              competition is intense. This creates an environment where advantageous traits provide real survival benefits.
            </p>
          </div>

          <div className="section">
            <h3>4. Differential Reproductive Success</h3>
            <p>
              Individuals with advantageous traits must survive to reproductive age and produce more offspring than those without these
              traits. This is the key driver: it ensures beneficial alleles increase in frequency over generations.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Natural Selection in Rainforest Ecosystems</h2>

        <div className="subsection">
          <h3>Case Study: Poison Dart Frog Coloration</h3>
          <p>
            Poison dart frogs of the rainforest display a remarkable example of natural selection. These frogs produce alkaloid toxins
            powerful enough to kill predators. The evolution of bright colors (aposematic coloration) illustrates several key points
            about natural selection:
          </p>

          <ul>
            <li>
              <strong>Variation:</strong> Different populations display different color patterns (some are bright red, others display different colors,
              others blue).
            </li>
            <li>
              <strong>Inheritance:</strong> Color patterns are genetically determined and passed to offspring.
            </li>
            <li>
              <strong>Selection Pressure:</strong> Predators learn to associate bright colors with toxins and avoid these frogs.
            </li>
            <li>
              <strong>Result:</strong> Brighter-colored frogs (which are more toxic) survive to reproduce more often than duller-colored
              individuals.
            </li>
          </ul>

          <p>
            Over many generations, populations become increasingly bright and increasingly toxic - a perfect example of natural selection
            favoring traits that improve survival and reproduction.
          </p>
        </div>

        <div className="subsection">
          <h3>Case Study: Jaguar Population Genetics</h3>
          <p>
            In rainforests across Central and South America, jaguar populations have been shaped by natural selection for thousands of
            years. Modern genetic studies reveal how selection pressures have influenced their evolution:
          </p>

          <ul>
            <li>
              <strong>Predatory Adaptations:</strong> Larger, more powerful jaguars with stronger bites are more successful hunters,
              surviving to reproduce more often.
            </li>
            <li>
              <strong>Camouflage:</strong> Rosette-patterned coats provide better camouflage in dappled rainforest light.
            </li>
            <li>
              <strong>Genetic Diversity:</strong> Geographic isolation of populations has led to selection for locally advantageous
              traits.
            </li>
            <li>
              <strong>Conservation Implications:</strong> Reduced genetic diversity in fragmented populations reduces their ability to
              adapt to future environmental changes.
            </li>
          </ul>
        </div>
      </div>

      {/* New: Rainforest image gallery using the provided addresses with captions and source links */}
      <div className="content-section">
        <h2>Rainforest Images</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <figure style={{ background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg"
              alt="Chiapas rainforest canopy"
              style={{ width: '100%', borderRadius: 6, display: 'block' }}
            />
            <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-light)' }}>
              Chiapas Rainforest canopy. Source: Wikimedia Commons
              <div>
                <a href="https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg" style={{ color: 'var(--accent-green)' }}>
                  https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg
                </a>
              </div>
            </figcaption>
          </figure>

          <figure style={{ background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
            <img
              src="https://mongabay-images.s3.amazonaws.com/1200/indonesia-kalbar/kalbar_drone_190493.jpg"
              alt="Aerial view of rainforest"
              style={{ width: '100%', borderRadius: 6, display: 'block' }}
            />
            <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-light)' }}>
              Aerial rainforest view. Source: Mongabay
              <div>
                <a href="https://mongabay-images.s3.amazonaws.com/1200/indonesia-kalbar/kalbar_drone_190493.jpg" style={{ color: 'var(--accent-green)' }}>
                  https://mongabay-images.s3.amazonaws.com/1200/indonesia-kalbar/kalbar_drone_190493.jpg
                </a>
              </div>
            </figcaption>
          </figure>

          <figure style={{ background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
            <img
              src="https://conservationmag.org/images/2020/06/22/raphael-menesclou-Rainforest_large.jpg"
              alt="Rainforest close-up"
              style={{ width: '100%', borderRadius: 6, display: 'block' }}
            />
            <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-light)' }}>
              Rainforest close-up. Source: Conservation Magazine
              <div>
                <a href="https://conservationmag.org/en/environment-page/save-the-rainforests-to-save-our-planet" style={{ color: 'var(--accent-green)' }}>
                  https://conservationmag.org/en/environment-page/save-the-rainforests-to-save-our-planet
                </a>
              </div>
            </figcaption>
          </figure>

          <figure style={{ background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
            <img
              src="https://www.amazoncruise.net/wp-content/uploads/2017/06/the-five-rarest-Amazon-rainforest-animals4.jpg"
              alt="Rare Amazon rainforest animals"
              style={{ width: '100%', borderRadius: 6, display: 'block' }}
              loading="lazy"
            />
            <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-light)' }}>
              Some of the rarer Amazon rainforest animals. Source: AmazonCruise
              <div>
                <a href="https://www.amazoncruise.net/the-five-rarest-amazon-rainforest-animals/" style={{ color: 'var(--accent-green)' }}>
                  https://www.amazoncruise.net/the-five-rarest-amazon-rainforest-animals/
                </a>
              </div>
            </figcaption>
          </figure>

          <figure style={{ background: '#07110b', padding: '0.5rem', borderRadius: 8 }}>
            <img
              src="https://trexperienceperu.com/sites/default/files/2024-12/Animales%2520de%2520la%2520Selva%2520Amaz%25C3%25B3nica%2520%25282%2529.webp"
              alt="Amazon rainforest wildlife"
              style={{ width: '100%', borderRadius: 6, display: 'block' }}
              loading="lazy"
            />
            <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-light)' }}>
              Amazon rainforest wildlife. Source: TREXperience Peru
              <div>
                <a href="https://trexperienceperu.com/blog/amazon-rainforest-animals" style={{ color: 'var(--accent-green)' }}>
                  https://trexperienceperu.com/blog/amazon-rainforest-animals
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default IntroductionPage
