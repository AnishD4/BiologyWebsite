import React from 'react'
import Quiz from '../../components/Quiz'
import EssentialQuestions from '../../components/EssentialQuestions'
import Citations from '../../components/Citations'

function CommonAncestryPage() {
  const essentialQuestions = [
    'In what ways is the evidence of common ancestry related to fundamental molecular and cellular domains?',
    'How are structural and functional mechanisms at the cellular and molecular level able to support the idea of common ancestry?',
    'What is the last universal common ancestor (LUCA)?',
    'How do we construct phylogenetic trees to show common descent?',
    'What evidence links all organisms to common ancestry?',
  ]

  const quizQuestions = [
    {
      question: 'What does "common ancestry" mean in evolutionary biology?',
      options: [
        { text: 'All species evolved at the same time', isCorrect: false },
        { text: 'All organisms share genetic and structural similarities from a common evolutionary origin', isCorrect: true },
        { text: 'Species are closely related if they look alike', isCorrect: false },
        { text: 'Evolution always results in similar species', isCorrect: false },
      ],
      explanation:
        'Common ancestry means all organisms descended from earlier organisms, with increasingly distant common ancestors the more distantly related species are. This is a central concept in Campbell Biology (Urry et al., 2020, Ch. 22).',
    },
    {
      question: 'Why do different organisms have similar cellular structures?',
      options: [
        { text: 'Cells must work the same in all organisms', isCorrect: false },
        { text: 'All organisms inherited basic cellular machinery from common ancestors', isCorrect: true },
        { text: 'Similar environments require similar cells', isCorrect: false },
        { text: 'Organisms converge to similar designs', isCorrect: false },
      ],
      explanation:
        'All cells use DNA, ribosomes, ATP, and similar metabolic pathways because all life descended from a common ancestor that possessed these features—not because they evolved independently.',
    },
    {
      question: 'Which of the following best supports common ancestry across all domains of life?',
      options: [
        { text: 'All organisms need water', isCorrect: false },
        { text: 'The universal genetic code uses the same DNA triplet codons in all organisms', isCorrect: true },
        { text: 'All organisms are made of cells', isCorrect: false },
        { text: 'All organisms live on Earth', isCorrect: false },
      ],
      explanation:
        'The near-universality of the genetic code—where the same codons specify the same amino acids in bacteria, archaea, and eukaryotes—is among the strongest molecular evidence for a single common ancestor (Campbell Biology, Ch. 26).',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation:
        'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary textbook reference for common ancestry, molecular homology, the three domains of life, and LUCA (Chapters 22, 25, 26).',
    },
    {
      title: 'Origins Reconsidered',
      author: 'Richard E. Leakey & Roger Lewin',
      year: '1992',
      fullCitation:
        'Leakey, R. E., & Lewin, R. (1992). Origins reconsidered: In search of what makes us human. Doubleday.',
      notes: 'Exploring evidence for human-primate common ancestry.',
    },
    {
      title: 'Tree of Life [Photograph]',
      author: 'Wikimedia Commons',
      year: 'n.d.',
      fullCitation:
        'Wikimedia Commons. (n.d.). Phylogenetic tree of life [Illustration]. Wikimedia Commons. https://upload.wikimedia.org/wikipedia/commons/7/70/Phylogenetic_tree.svg',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Phylogenetic_tree.svg',
      notes: 'Illustration of the phylogenetic tree of life showing three domains.',
    },
  ]

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Unit 7.7</div>
        <h1>Common Ancestry</h1>
        <p>Understanding the unity of life through shared evolutionary origin — Campbell Biology Ch. 22, 25, 26.</p>
      </div>

      <div className="content-section">
        <h2>The Concept of Common Ancestry</h2>
        <p>
          Common ancestry is the principle that all organisms on Earth descended from earlier organisms through repeated branching of
          lineages. According to Campbell Biology (Urry et al., 2020), life's history can be represented as a vast branching tree—the
          "tree of life"—where every branch point represents a common ancestor. The deepest common ancestor, called the <strong>Last
          Universal Common Ancestor (LUCA)</strong>, was the single-celled organism from which all extant life descended.
        </p>
      </div>

      <div className="content-section">
        <h2>Molecular and Cellular Evidence for Common Ancestry</h2>

        <div className="subsection">
          <h3>The Universal Genetic Code</h3>
          <p>
            All known organisms use the same DNA-based genetic code. The same triplet codons specify the same amino acids in bacteria,
            archaea, plants, fungi, and animals. This near-universality of the code is extremely unlikely to have evolved independently
            and provides powerful evidence that all life inherited the genetic code from a single common ancestor (Campbell Biology,
            Ch. 26).
          </p>
        </div>

        <div className="subsection">
          <h3>Shared Cellular Structures and Processes</h3>
          <p>
            According to Campbell Biology, all cells share fundamental features that point to common descent:
          </p>
          <ul>
            <li><strong>DNA</strong> as the hereditary material, encoding genes in all three domains of life</li>
            <li><strong>Ribosomes</strong> for protein synthesis—structurally conserved across Bacteria, Archaea, and Eukarya</li>
            <li><strong>Plasma membrane</strong> composed of a phospholipid bilayer surrounding every cell</li>
            <li><strong>ATP</strong> as the universal energy currency, used by all organisms for cellular work</li>
            <li><strong>Glycolysis</strong> and other basic metabolic pathways shared across virtually all living cells</li>
            <li><strong>Central Dogma</strong>: DNA → RNA → Protein information flow in all domains</li>
          </ul>
          <p>
            If life arose multiple times independently, we would expect much greater variation in these fundamental systems. The fact
            that all life shares these molecular and cellular mechanisms is best explained by inheritance from a common cellular ancestor.
          </p>
        </div>

        <div className="subsection">
          <h3>Homologous Genes and Proteins</h3>
          <p>
            Many genes are so conserved that scientists can identify <strong>homologous proteins</strong> across organisms as distantly
            related as bacteria and humans. For example, cytochrome c (a mitochondrial protein) is found in nearly all eukaryotes with
            sequences that are more similar between closely related species and more different between distantly related ones—exactly as
            predicted by common descent (Campbell Biology, Ch. 26). <strong>Hox genes</strong>, which control body plan development, are
            found in nearly all animals from fruit flies to humans, demonstrating deep homology at the molecular level.
          </p>
        </div>

        {/* Image: Tree of Life */}
        <figure style={{ marginTop: '1.5rem', background: '#07110b', padding: '0.75rem', borderRadius: 8 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Phylogenetic_Tree_of_Life.png"
            alt="Phylogenetic Tree of Life showing three domains: Bacteria, Archaea, and Eukarya"
            style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '420px', objectFit: 'contain', background: '#0e1210' }}
            loading="lazy"
          />
          <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            Phylogenetic Tree of Life showing three domains: Bacteria, Archaea, and Eukarya—all descended from LUCA.
            <div>
              <a href="https://upload.wikimedia.org/wikipedia/commons/1/19/Phylogenetic_Tree_of_Life.png" style={{ color: 'var(--secondary-green)' }}>
                https://upload.wikimedia.org/wikipedia/commons/1/19/Phylogenetic_Tree_of_Life.png
              </a>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
              APA: Wikimedia Commons. (n.d.). Phylogenetic Tree of Life [Illustration]. Wikimedia Commons.
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="content-section">
        <h2>Deep Evolutionary History</h2>

        <div className="subsection">
          <h3>The Last Universal Common Ancestor (LUCA)</h3>
          <p>
            LUCA is the most recent common ancestor of all life on Earth. Living approximately 3.5–3.8 billion years ago, LUCA was
            likely a single-celled organism with DNA-based genes, ribosomes, and basic metabolic machinery. All modern life—from
            rainforest jaguars to soil bacteria—descended from LUCA through branching lineages shaped by natural selection, genetic
            drift, and other evolutionary forces (Campbell Biology, Ch. 25).
          </p>
        </div>

        <div className="subsection">
          <h3>Three Domains of Life</h3>
          <p>
            Carl Woese's molecular phylogenetic analysis revolutionized our understanding of life's deepest relationships. All
            organisms fall into three domains:
          </p>
          <ul>
            <li>
              <strong>Bacteria:</strong> Single-celled prokaryotes without a nucleus; enormously diverse, including many rainforest
              soil bacteria essential for nutrient cycling
            </li>
            <li>
              <strong>Archaea:</strong> Single-celled prokaryotes genetically distinct from bacteria; many thrive in extreme
              environments, but they also live in normal habitats including tropical soils
            </li>
            <li>
              <strong>Eukarya:</strong> All organisms with nucleated cells, including protists, fungi, plants, and animals—every
              visible rainforest organism belongs to this domain
            </li>
          </ul>
          <p>
            All three domains descended from LUCA. Molecular comparisons (especially ribosomal RNA sequences) support this three-domain
            structure and show that Archaea and Eukarya share a more recent common ancestor with each other than either does with
            Bacteria (Campbell Biology, Ch. 26).
          </p>
        </div>

        <div className="subsection">
          <h3>Endosymbiotic Theory</h3>
          <p>
            Campbell Biology emphasizes the <strong>endosymbiotic theory</strong> as a key example of common ancestry at the cellular level.
            Mitochondria (in nearly all eukaryotes) and chloroplasts (in plants and algae) originated as free-living bacteria that were
            engulfed by ancestral eukaryotic cells. Evidence includes: their own circular DNA, double membranes, independent replication,
            and ribosome similarity to bacteria. This molecular evidence directly connects eukaryotic organelles to bacterial ancestors.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Common Ancestry in Rainforest Biodiversity</h2>

        <p>
          Tropical rainforest species represent millions of years of divergence from common ancestors. All rainforest mammals descended
          from early mammalian ancestors that radiated after the end-Cretaceous mass extinction (~66 mya). All rainforest birds evolved
          from theropod dinosaur ancestors. Even the astonishing diversity of rainforest insects traces back to ancient arthropod
          lineages. This deep common ancestry explains why we see fundamental similarities in body plans, developmental programs (Hox
          genes), and genetic sequences across all rainforest species despite their remarkable morphological and ecological diversity.
        </p>

        <figure style={{ marginTop: '1.5rem', background: '#07110b', padding: '0.75rem', borderRadius: 8 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Morpho_menelaus_huebneri_MHNT_Male.jpg/1280px-Morpho_menelaus_huebneri_MHNT_Male.jpg"
            alt="Blue Morpho butterfly from tropical rainforest"
            style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '350px', objectFit: 'cover' }}
            loading="lazy"
          />
          <figcaption style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            The Blue Morpho butterfly (<em>Morpho menelaus</em>)—a quintessential rainforest species whose iridescent wing scales
            evolved through natural selection. Source: Wikimedia Commons
            <div>
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Morpho_menelaus_huebneri_MHNT_Male.jpg/1280px-Morpho_menelaus_huebneri_MHNT_Male.jpg" style={{ color: 'var(--secondary-green)' }}>
                https://commons.wikimedia.org/wiki/File:Morpho_menelaus_huebneri_MHNT_Male.jpg
              </a>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
              APA: Wikimedia Commons. (n.d.). Morpho menelaus huebneri [Photograph]. Wikimedia Commons.
            </div>
          </figcaption>
        </figure>
      </div>

      {/* Essential Question: In-depth answer */}
      <div className="content-section">
        <h2>Essential Questions Answered</h2>

        <div className="subsection">
          <h3>How is evidence of common ancestry related to fundamental molecular and cellular domains?</h3>
          <p>
            The strongest evidence for common ancestry comes from molecular biology. All living organisms in all three domains (Bacteria,
            Archaea, Eukarya) share: (1) the same genetic code, (2) DNA as hereditary material, (3) ribosomes for translation,
            (4) ATP as energy currency, and (5) conserved metabolic pathways like glycolysis. These molecular universals are best
            explained by descent from a common ancestor that already possessed these features. Molecular phylogenies based on ribosomal
            RNA sequences independently confirm the same tree topology as morphological data, providing converging evidence for common
            descent (Campbell Biology, Ch. 26).
          </p>
        </div>

        <div className="subsection">
          <h3>How do structural and functional mechanisms at the cellular and molecular level support common ancestry?</h3>
          <p>
            Homologous genes such as <strong>Hox genes</strong> (controlling body segment identity in animals from insects to vertebrates),
            <strong> cytochrome c</strong> (present in all aerobic organisms), and <strong>histone proteins</strong> (organizing DNA in
            all eukaryotes) demonstrate that organisms share deeply conserved molecular mechanisms inherited from common ancestors. The
            endosymbiotic origin of mitochondria and chloroplasts provides structural evidence: these organelles retain their own DNA,
            replicate independently, and have bacterial-type ribosomes, linking eukaryotic cells directly to bacterial ancestors.
            Furthermore, the universality of the phospholipid bilayer membrane and the central dogma (DNA → RNA → Protein) across all
            life forms supports a single origin for cellular life.
          </p>
        </div>
      </div>

      <EssentialQuestions questions={essentialQuestions} />

      <Quiz questions={quizQuestions} />

      <Citations citations={citations} />
    </div>
  )
}

export default CommonAncestryPage
