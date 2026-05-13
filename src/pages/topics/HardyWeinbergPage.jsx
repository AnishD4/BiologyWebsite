import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'
import HardyWeinbergCalculator from '../../components/HardyWeinbergCalculator'
import ChiSquareCalculator from '../../components/ChiSquareCalculator'
import ImageAttributions from '../../components/ImageAttributions'

function HardyWeinbergPage() {
  const essentialQuestions = [
    'What are the conditions under which allele and genotype frequencies will change in populations?',
    'What is Hardy-Weinberg equilibrium and when does it apply?',
    'What are the Hardy-Weinberg conditions?',
    'What is the Hardy-Weinberg equation and how do we use it?',
    'What are the implications on populations if Hardy-Weinberg conditions are not met?',
  ]

  const quizQuestions = [
    {
      question: 'The Hardy-Weinberg equation is p^2 + 2pq + q^2 = 1. What does each term represent?',
      options: [
        { text: 'p^2 is mutation rate, 2pq is selection, q^2 is drift', isCorrect: false },
        { text: 'p^2 is homozygous dominant, 2pq is heterozygous, q^2 is homozygous recessive', isCorrect: true },
        { text: 'They represent the three evolutionary forces', isCorrect: false },
        { text: 'They represent allele frequencies over three generations', isCorrect: false },
      ],
      explanation:
        'Each term represents the frequency of a genotype: p^2 for AA, 2pq for Aa, and q^2 for aa, where p and q are allele frequencies.',
    },
    {
      question: 'A population meets all Hardy-Weinberg conditions. What will happen to allele frequencies?',
      options: [
        { text: 'They will gradually increase', isCorrect: false },
        { text: 'They will remain constant', isCorrect: true },
        { text: 'They will gradually decrease', isCorrect: false },
        { text: 'They will become random', isCorrect: false },
      ],
      explanation:
        'When Hardy-Weinberg conditions are met, allele frequencies remain constant because no evolutionary forces are acting on the population.',
    },
    {
      question: 'Which of the following violates Hardy-Weinberg conditions?',
      options: [
        { text: 'Natural selection favoring certain genotypes', isCorrect: true },
        { text: 'A population of 10,000 individuals', isCorrect: false },
        { text: 'Random mating in the population', isCorrect: false },
        { text: 'All alleles have equal fitness', isCorrect: false },
      ],
      explanation:
        'Natural selection is one of the main violations of Hardy-Weinberg conditions. When selection acts on genotypes, allele frequencies change.',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation: 'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary textbook reference for Hardy-Weinberg equilibrium, the five conditions, population genetics equations, and detecting evolution (Chapter 23).',
    },
    {
      title: 'The Hardy-Weinberg Equilibrium',
      author: 'Hardy, G. H.',
      year: '1908',
      fullCitation: 'Hardy, G. H. (1908). Mendelian proportions in a mixed population. Science, 28(706), 49-50.',
      notes: 'The original paper establishing the Hardy-Weinberg principle.',
      url: 'https://www.jstor.org/stable/1625727',
    },
    {
      title: 'Population Genetics: A Concise Guide',
      author: 'Gillespie, J. H.',
      year: '2004',
      fullCitation:
        'Gillespie, J. H. (2004). Population genetics: A concise guide (2nd ed.). Johns Hopkins University Press.',
      notes: 'Comprehensive guide to population genetics theory.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Unit 7.5</div>
        <h1>Hardy-Weinberg Equilibrium</h1>
        <p>Understanding genetic equilibrium and deviations from it in populations.</p>
      </div>

      <div className="content-section">
        <h2>What is Hardy-Weinberg Equilibrium?</h2>
        <p>
          The Hardy-Weinberg equilibrium is a mathematical model predicting that allele and genotype frequencies will remain constant in
          a population from generation to generation, provided certain conditions are met. This model serves as a null hypothesis - when
          populations deviate from Hardy-Weinberg predictions, we know evolutionary forces are acting.
        </p>

        <p>
          The Hardy-Weinberg equation is: <span className="highlight">p^2 + 2pq + q^2 = 1</span>
        </p>

        <p>
          Where p and q are allele frequencies and p + q = 1. The terms represent genotype frequencies in the population.
        </p>
      </div>

      <div className="content-section">
        <h2>The Five Hardy-Weinberg Conditions</h2>

        <p>For a population to remain in Hardy-Weinberg equilibrium, all five conditions must be met:</p>

        <div className="grid grid-2">
          <div className="section">
            <h3>1. No Mutations</h3>
            <p>
              No new alleles can arise through mutation. While mutations always occur at low rates, they can be ignored in populations
              without very strong selection against new alleles.
            </p>
          </div>

          <div className="section">
            <h3>2. Random Mating</h3>
            <p>
              All individuals must have an equal opportunity to mate. Non-random mating (assortative mating, inbreeding, outbreeding)
              violates this and changes genotype frequencies without changing allele frequencies.
            </p>
          </div>

          <div className="section">
            <h3>3. No Gene Flow</h3>
            <p>
              No migration or gene flow between populations. When individuals move between populations, they carry alleles with them,
              changing frequencies in both the source and recipient populations.
            </p>
          </div>

          <div className="section">
            <h3>4. Large Population Size</h3>
            <p>
              Population must be infinitely large (or at least very large). In small populations, genetic drift causes random changes in
              allele frequencies that violate equilibrium predictions.
            </p>
          </div>

          <div className="section">
            <h3>5. No Natural Selection</h3>
            <p>
              All genotypes must have equal fitness. When some genotypes have survival or reproductive advantages, allele frequencies
              change systematically - the primary driver of evolution.
            </p>
          </div>

          <div className="section">
            <h3>Why These Conditions Matter</h3>
            <p>
              None of these conditions are perfectly met in real populations. By understanding how populations deviate from
              Hardy-Weinberg predictions, we can identify which evolutionary forces are acting.
            </p>
          </div>
        </div>
      </div>

      <HardyWeinbergCalculator />

      <div className="content-section">
        <h2>Applying Hardy-Weinberg to Real Populations</h2>

        <div className="subsection">
          <h3>Rainforest Population Example</h3>
          <p>
            Consider a rainforest population of frogs with two alleles (B for blue, b for normal coloring) at frequencies p = 0.7 and q
            = 0.3. If the population meets Hardy-Weinberg conditions:
          </p>

          <ul>
            <li>Frequency of BB (blue): p^2 = 0.49 (49%)</li>
            <li>Frequency of Bb (blue): 2pq = 0.42 (42%)</li>
            <li>Frequency of bb (normal): q^2 = 0.09 (9%)</li>
          </ul>

          <p>
            These frequencies would remain the same generation after generation. However, if predators preferentially hunt blue frogs,
            natural selection would reduce the frequency of the B allele, violating Hardy-Weinberg predictions.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>When Hardy-Weinberg Predictions Fail: Detecting Evolution</h2>

        <p>
          When we observe genotype frequencies that deviate from Hardy-Weinberg predictions, we can infer which evolutionary forces are
          acting:
        </p>

        <table style={{ width: '100%', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Deviation Pattern</th>
              <th>Likely Cause</th>
              <th>Observable Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Excess homozygotes</strong></td>
              <td>Inbreeding or population subdivision</td>
              <td>Heterozygosity decreases</td>
            </tr>
            <tr>
              <td><strong>Excess heterozygotes</strong></td>
              <td>Heterozygote advantage or gene flow</td>
              <td>Heterozygosity increases</td>
            </tr>
            <tr>
              <td><strong>Allele frequency change</strong></td>
              <td>Natural selection or genetic drift</td>
              <td>p or q changes between generations</td>
            </tr>
            <tr>
              <td><strong>New alleles appear</strong></td>
              <td>Mutation or gene flow</td>
              <td>Novel allele enters population</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-section">
        <h2>Worked Example: From Genotype Counts to Hardy-Weinberg Test</h2>

        <div className="subsection">
          <h3>Observed Data</h3>
          <p>Suppose a sample of 100 frogs from a rainforest population produces these observed genotype counts for a locus with two alleles (B and b):</p>
          <ul>
            <li>BB (AA equivalent): 40 individuals</li>
            <li>Bb (Aa equivalent): 50 individuals</li>
            <li>bb (aa equivalent): 10 individuals</li>
            <li>Total N = 100</li>
          </ul>

          <h3>Step 1 - Compute allele frequencies from counts</h3>
          <p>
            p = frequency of B = (2*BB + Bb) / (2N) = (2*40 + 50) / 200 = (80 + 50) / 200 = 130/200 = 0.65
          </p>
          <p>
            q = 1 - p = 1 - 0.65 = 0.35
          </p>

          <h3>Step 2 - Compute expected genotype frequencies under H-W</h3>
          <p>Expected BB = p^2 = 0.65^2 = 0.4225 &rarr; expected count = 0.4225 * 100 = 42.25</p>
          <p>Expected Bb = 2pq = 2 * 0.65 * 0.35 = 0.455 &rarr; expected count = 45.5</p>
          <p>Expected bb = q^2 = 0.35^2 = 0.1225 &rarr; expected count = 12.25</p>

          <h3>Step 3 - Chi-square test for Hardy-Weinberg</h3>
          <p>Chi-square statistic: chi^2 = sum (observed - expected)^2 / expected</p>
          <p>chi^2 = (40 - 42.25)^2/42.25 + (50 - 45.5)^2/45.5 + (10 - 12.25)^2/12.25</p>
          <p>= (-2.25)^2/42.25 + (4.5)^2/45.5 + (-2.25)^2/12.25 = 5.0625/42.25 + 20.25/45.5 + 5.0625/12.25</p>
          <p>~ 0.1198 + 0.445 + 0.4131 = 0.9779 (chi^2 ~ 0.98)</p>

          <h3>Interactive: Chi-square test</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Use the calculator below to paste observed counts or accept the worked example. Set expected counts to the HW expected counts if you want an exact test.
          </p>

          <ChiSquareCalculator observed={[40,50,10]} expected={[42.25,45.5,12.25]} labels={["BB","Bb","bb"]} />

          <h3>Step 4 - Interpretation</h3>
          <p>
            Degrees of freedom for a single locus with two alleles is 1 (df = number of genotypes - number of alleles). For alpha = 0.05,
            the critical value is chi^2(1,0.05) = 3.841. Our calculated chi^2 ~ 0.98 &lt; 3.841, so we fail to reject the null hypothesis of
            Hardy-Weinberg equilibrium. In other words, the observed deviations from expected counts are not statistically significant at
            the 5% level.
          </p>

          <p>
            If chi^2 had exceeded 3.841, we would conclude the population is not in H-W equilibrium - indicating evolutionary forces (e.g.,
            selection, nonrandom mating, migration, drift, or mutation) are acting.
          </p>
        </div>
      </div>

      {/* New: Population genetics numeric examples */}
      <div className="content-section">
        <h2>Population genetics: short numeric examples</h2>

        <div className="grid grid-2">
          <div className="section">
            <h3>Genetic drift - small population sampling</h3>
            <p>Example: A small rainforest bird population (N = 20) initially has p = 0.5 (A allele).</p>
            <p>Generation 0: A count = 10/20 &rarr; p = 0.50</p>
            <p>Random sampling leads to Generation 1: A count = 12/20 &rarr; p = 0.60</p>
            <p>Generation 2: drift changed counts again to 9/20 &rarr; p = 0.45</p>
            <p>
              Interpretation: In small populations allele frequencies can jump around between generations due to sampling error (drift).
            </p>
          </div>

          <div className="section">
            <h3>Natural selection - selection coefficient</h3>
            <p>
              Example: Suppose allele A has a fitness advantage. Let wAA = 1, wAa = 1, waa = 1 - s with s = 0.1
              (selection against aa). Starting p = 0.7, q = 0.3, compute expected genotype frequencies and show selection changes.
            </p>
            <p>Before selection: p^2 = 0.49, 2pq = 0.42, q^2 = 0.09</p>
            <p>Relative fitness weighted mean w_bar = p^2(1) + 2pq(1) + q^2(0.9) = 0.49 + 0.42 + 0.081 = 0.991</p>
            <p>After selection (unnormalized):</p>
            <ul>
              <li>AA: 0.49 * 1 = 0.49</li>
              <li>Aa: 0.42 * 1 = 0.42</li>
              <li>aa: 0.09 * 0.9 = 0.081</li>
            </ul>
            <p>Divide by w_bar to normalize; new p' approximately 0.703 (small increase)</p>
            <p>Interpretation: Selection increases frequency of the advantageous allele slightly each generation; the rate depends on s.</p>
          </div>

          <div className="section">
            <h3>Migration (gene flow)</h3>
            <p>
              Example: Island population (N = 50) with <span>p<sub>island</sub> = 0.2</span>. Mainland source population has <span>p<sub>main</sub> = 0.8</span>.
              Ten migrants arrive and mix thoroughly. New frequency <span>p<sub>new</sub> = (1 - m) p<sub>island</sub> + m p<sub>main</sub></span>, where
              m = migrants / total after migration = 10/60 (~0.1667).
            </p>
            <p>{`p_new = (1 - 0.1667)*0.2 + 0.1667*0.8 ~ 0.1667 + 0.1333 = 0.30`}</p>
            <p>Interpretation: Gene flow moves allele frequencies toward the source population's values.</p>
          </div>

          <div className="section">
            <h3>Mutation</h3>
            <p>{`Example: A -> a mutation rate u = 1*10^-4 per generation. If p = 0.99 and q = 0.01 and back-mutation is negligible,`}</p>
            <p>{`the expected decrease in p per generation from mutation alone is Dp ~ -u * p ~ -0.000099 -> p' ~ 0.989901.`}</p>
            <p>Interpretation: Mutation produces small per-generation changes; over long time scales they create new variation.</p>
          </div>
        </div>
      </div>

      {/* New: Simple phylogeny exercise */}
      <div className="content-section">
        <h2>Phylogeny exercise (cladogram)</h2>
        <p>Interpret the cladogram below and answer the questions that follow.</p>

        <div style={{ marginTop: '0.75rem', background: '#0a1610', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          {/* Detailed realistic rainforest cladogram */}
          <svg id="cladogram-svg" width="100%" height="320" viewBox="0 0 650 320" role="img" aria-label="Rainforest species cladogram showing evolutionary traits">
            <rect width="100%" height="100%" fill="transparent" />
            <g stroke="var(--secondary-green)" strokeWidth="3" fill="none">
              {/* Root and main backbone */}
              <line x1="20" y1="96" x2="60" y2="96" />
              <line x1="60" y1="40" x2="60" y2="152" />
              <line x1="60" y1="40" x2="440" y2="40" />
              <line x1="60" y1="152" x2="160" y2="152" />
              <line x1="160" y1="100" x2="160" y2="205" />
              <line x1="160" y1="100" x2="440" y2="100" />
              <line x1="160" y1="205" x2="260" y2="205" />
              <line x1="260" y1="160" x2="260" y2="250" />
              <line x1="260" y1="160" x2="440" y2="160" />
              <line x1="260" y1="250" x2="360" y2="250" />
              <line x1="360" y1="220" x2="360" y2="280" />
              <line x1="360" y1="220" x2="440" y2="220" />
              <line x1="360" y1="280" x2="440" y2="280" />

              {/* Synapomorphy Ticks */}
              <line x1="110" y1="142" x2="110" y2="162" stroke="var(--accent-green)" strokeWidth="4" />
              <line x1="210" y1="195" x2="210" y2="215" stroke="var(--accent-green)" strokeWidth="4" />
              <line x1="310" y1="150" x2="310" y2="170" stroke="var(--accent-green)" strokeWidth="4" />
              <line x1="310" y1="240" x2="310" y2="260" stroke="var(--accent-green)" strokeWidth="4" />
              <line x1="400" y1="270" x2="400" y2="290" stroke="var(--accent-green)" strokeWidth="4" />
            </g>

            {/* Taxa Labels */}
            <g fill="var(--text-primary)" fontSize="14" fontWeight="bold">
              <text x="450" y="45">Arapaima (Fish)</text>
              <text x="450" y="105">Poison Dart Frog (Amphibian)</text>
              <text x="450" y="165">Jaguar (Mammal)</text>
              <text x="450" y="225">Green Iguana (Reptile)</text>
              <text x="450" y="285">Scarlet Macaw (Bird)</text>
            </g>

            {/* Derived Trait Labels */}
            <g fill="var(--text-secondary)" fontSize="12" fontStyle="italic">
              <text x="80" y="135">Four limbs</text>
              <text x="175" y="190">Amniotic egg</text>
              <text x="275" y="145">Hair &amp; milk</text>
              <text x="275" y="235">Diapsid skull</text>
              <text x="370" y="265">Feathers</text>
            </g>
          </svg>

          <div style={{ marginTop: '1rem' }}>
            <button
              className="btn btn-secondary"
              onClick={() => {
                const svg = document.getElementById('cladogram-svg')
                if (!svg) return
                const serializer = new XMLSerializer()
                const source = serializer.serializeToString(svg)
                const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = 'cladogram.svg'
                document.body.appendChild(a)
                a.click()
                a.remove()
                URL.revokeObjectURL(url)
              }}
              aria-label="Download cladogram SVG"
            >
              Download Cladogram (SVG)
            </button>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(30, 219, 158, 0.05)', borderRadius: '6px' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Analysis Questions:</h4>
            <ol style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Which pair of species shares the most recent common ancestor?</strong><br/> (Answer: The Green Iguana and Scarlet Macaw share the most recent node on the right).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Which species serves as the outgroup to the tetrapods?</strong><br/> (Answer: The Arapaima fish, as it splits off before the "Four limbs" trait evolves).</li>
              <li><strong>Which derived trait (synapomorphy) is shared by Jaguars, Iguanas, and Macaws, but not by the Poison Dart Frog?</strong><br/> (Answer: The amniotic egg).</li>
            </ol>
          </div>
        </div>
      </div>

      {/* New: Speciation and extinction case study with simple rates */}
      <div className="content-section">
        <h2>Speciation & Extinction - short case study</h2>
        <p>
          Scenario: An island lineage has a speciation rate (lambda) = 0.02 species per lineage per million years and an extinction rate (mu)
          = 0.01 per lineage per million years. Net diversification r = lambda - mu = 0.01.
        </p>

        <p>Starting with 1 species, the expected number after t = 1 million years under simple exponential growth is:</p>
        <p>N(t) = N0 * e^((lambda - mu) * t) = 1 * e^(0.01 * 1) = e^(0.01) = 1.01005 (approximately 1.01 species)</p>

        <p>
          Interpretation: With small positive net diversification, diversity increases slowly. If extinction rises (mu &gt; lambda) the lineage will
          decline. Rapid environmental change can increase mu and push lineages toward extinction.
        </p>
      </div>

      {/* New: Image attributions (APA) */}
      <div className="content-section">
        <h2>Image Attributions (APA)</h2>
        <ImageAttributions
          images={[
            {
              author: 'Rivera, J.',
              year: 'n.d.',
              title: 'Chiapas rainforest',
              site: 'Wikimedia Commons',
              sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg',
            },
            {
              author: 'Rainforest Alliance',
              year: 'n.d.',
              title: 'How forests fight climate change',
              site: 'Rainforest Alliance',
              sourceUrl: 'https://www.rainforest-alliance.org/insights/how-forests-fight-climate-change/',
            },
            {
              author: 'Mongabay',
              year: 'n.d.',
              title: 'Indonesia rainforest drone image',
              site: 'Mongabay',
              sourceUrl: 'https://mongabay-images.s3.amazonaws.com/1200/indonesia-kalbar/kalbar_drone_190493.jpg',
            },
            {
              author: 'Menesclou, R.',
              year: 'n.d.',
              title: 'Rainforest canopy',
              site: 'Conservation Magazine',
              sourceUrl: 'https://conservationmag.org/images/2020/06/22/raphael-menesclou-Rainforest_large.jpg',
            },
            {
              author: 'ActiveWild',
              year: 'n.d.',
              title: 'Rainforest animals montage',
              site: 'ActiveWild',
              sourceUrl: 'https://www.activewild.com/wp-content/uploads/2021/02/Rainforest-Animals.jpg',
            },
            {
              author: 'Earth.org',
              year: 'n.d.',
              title: 'Amazon rainforest endangered species',
              site: 'Earth.org',
              sourceUrl: 'https://earth.org/wp-content/uploads/2022/02/3.jpg',
            },
            {
              author: 'Stockcake',
              year: 'n.d.',
              title: 'Misty waterfall',
              site: 'Stockcake',
              sourceUrl: 'https://images.stockcake.com/public/7/9/8/798d4235-0517-4520-8dff-cca85ac9f168_large/misty-waterfall-view-stockcake.jpg',
            },
          ]}
        />
      </div>

      {/* Explicit Essential Questions mapping */}
      <div className="content-section">
        <h2>Essential Questions — concise answers mapped to rubric</h2>
        <ol>
          <li>
            <strong>What are the specific causes of natural selection?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Differential survival and reproduction due to heritable variation (predation, environment, mate choice).</p>
          </li>

          <li>
            <strong>How does natural selection affect populations?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>It changes allele frequencies by increasing fitter alleles' representation across generations.</p>
          </li>

          <li>
            <strong>Why are phenotypic variations important?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Variation is the raw material for selection - without it populations cannot adapt.</p>
          </li>

          <li>
            <strong>How can humans affect diversity?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Through artificial selection, habitat alteration, migration facilitation, and population management.</p>
          </li>

          <li>
            <strong>Connections between environment changes and evolution?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Changing environments alter selective pressures, driving adaptive responses or extinctions.</p>
          </li>

          <li>
            <strong>How can random events affect genetic makeup?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Bottlenecks and founder effects change allele frequencies unpredictably (genetic drift).</p>
          </li>

          <li>
            <strong>Random processes in evolution?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Genetic drift, mutation, and founder/bottleneck events - they create stochastic changes in allele frequencies.</p>
          </li>

          <li>
            <strong>How does genetic makeup change over time?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Through selection, drift, mutation, migration and non-random mating - modeled by changes in p and q.</p>
          </li>

          <li>
            <strong>Equations & conditions for change?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>p + q = 1 and p^2 + 2pq + q^2 = 1; deviations occur when H-W conditions fail (selection, drift, migration, mutation, non-random mating).</p>
          </li>

          <li>
            <strong>Implications if H-W not met?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Populations evolve - allele frequencies change; use chi-square tests to detect significance.</p>
          </li>

          <li>
            <strong>Evidence types for evolution?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Morphological, fossil/geological, biochemical (DNA/protein), and experimental data.</p>
          </li>

          <li>
            <strong>How morphological/biochemical/geological data support evolution?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>They show nested similarities, transitional forms, molecular homology and chronological patterns consistent with descent with modification.</p>
          </li>

          <li>
            <strong>Common ancestry molecular evidence?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Shared genetic code, conserved genes and molecular pathways across taxa point to common descent.</p>
          </li>

          <li>
            <strong>Evolution ongoing?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Yes - observed in microbes, lab selection, rapid environmental responses, and long-term tracking of wild populations.</p>
          </li>

          <li>
            <strong>Tools for evolutionary connections?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Cladograms, phylogenetic trees, sequence alignments, molecular clocks, dichotomous keys.</p>
          </li>

          <li>
            <strong>Conditions for new species to arise?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Reproductive isolation (pre- or post-zygotic), genetic divergence, and ecological opportunity/selection.</p>
          </li>

          <li>
            <strong>How ecological conditions affect speciation rate?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Isolation, niche availability and population size influence speciation; adaptive radiations often follow openings (e.g., after extinctions).</p>
          </li>

          <li>
            <strong>Extinction drivers?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Habitat loss, rapid environmental change, invasive species, small population size, and stochastic events.</p>
          </li>

          <li>
            <strong>Adaptive radiation from extinction?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Yes - mass extinctions open niches and can accelerate diversification in surviving lineages.</p>
          </li>

          <li>
            <strong>Does genetic diversity affect resilience?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>Higher genetic diversity generally increases a population's ability to withstand environmental change.</p>
          </li>

          <li>
            <strong>Origins of life models?</strong>
            <p style={{ color: 'var(--text-secondary)' }}>RNA world, metabolism-first, and hydrothermal vent hypotheses are examples; evidence is indirect and model-based.</p>
          </li>
        </ol>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default HardyWeinbergPage
