import React, { useState } from 'react'
import Quiz from '../../components/Quiz'
import Citations from '../../components/Citations'

function EssentialQuestionsPage() {
  const [expandedQuestion, setExpandedQuestion] = useState(null)

  const essentialQuestions = [
    {
      question: 'What are the specific causes of natural selection?',
      answer:
        'Natural selection arises from variation in heritable traits, differential survival and reproduction under environmental pressures, and the principle of heredity. Proximate selective agents include predation, competition for resources, resource availability, pathogens, climate change, and sexual selection. For example, in a rainforest, predation pressure on insects with visible markings can select for camouflage alleles, while drought conditions select for drought-tolerant plant traits.',
    },
    {
      question: 'How does natural selection affect populations?',
      answer:
        'Natural selection changes allele frequencies by favoring alleles that increase reproductive success in the current environment. This produces adaptation to environmental conditions, alters the distribution of phenotypic traits, and can drive genetic divergence or speciation. As beneficial alleles increase in frequency and deleterious alleles decrease, the population becomes increasingly adapted to its environment.',
    },
    {
      question: 'Why are phenotypic variations important to populations?',
      answer:
        'Variation is the raw material for natural selection. Without phenotypic variation, populations cannot adapt to changing environments and are less able to persist under new selective pressures. Rainforest species with greater phenotypic diversity have a higher probability of possessing traits suited to novel environmental conditions, increasing population resilience.',
    },
    {
      question: 'How are humans able to affect diversity within populations?',
      answer:
        'Humans affect genetic diversity through habitat alteration and fragmentation, pollution, overharvesting, introduction of invasive species, artificial selection and breeding programs, translocations, and genetic engineering. These actions can reduce genetic variation (e.g., bottlenecks from overhunting), shift allele frequencies (e.g., pesticide resistance), or increase variation (e.g., crop diversification).',
    },
    {
      question: 'How are there connections between changes in the environment and evolutionary changes of populations?',
      answer:
        'Environmental change alters selective pressures, which shifts fitness landscapes and modifies allele frequencies. Example: antibiotic use in medical practice creates selection for antibiotic-resistant bacteria; drought selects for drought-tolerant plant alleles in rainforest understory. Genetically-based traits that improve fitness under new conditions increase in frequency, leading to evolutionary adaptation.',
    },
    {
      question: 'How can random events or occurrences affect the genetic makeup of a population?',
      answer:
        'Random genetic drift, bottlenecks, and founder effects change allele frequencies unpredictably and independently of fitness effects. A hurricane in the rainforest may kill a large fraction of a population at random, reducing genetic diversity; or a few individuals may colonize a new area by chance, carrying only a subset of alleles from the source population. These stochastic events can lead to allele fixation or loss.',
    },
    {
      question: 'What are the random processes in evolution that impact specific populations and what is their role?',
      answer:
        'Key random processes are mutation (creates new genetic variation from scratch), genetic drift (causes random changes in allele frequency especially in small populations), and stochastic gene flow (chance introduction or loss of alleles through migration). These processes generate and redistribute variation, and can drive population divergence independently of selection, especially in small isolated populations.',
    },
    {
      question: 'How does the genetic makeup of a population change over time?',
      answer:
        'Allele frequencies change through mutation (introducing new alleles), natural selection (changing frequencies based on fitness), genetic drift (random frequency shifts), and gene flow (migration between populations). Outcomes include shifts in genotype frequencies, fixation of beneficial alleles, loss of deleterious alleles, or maintenance of polymorphism when selection is balanced.',
    },
    {
      question: 'What are the conditions under which allele and genotype frequencies will change in populations (equation-based)?',
      answer: (
        <>
          <p>
            Under Hardy-Weinberg equilibrium, if <em>p</em> is the frequency of allele A and <em>q</em> is the frequency of allele a,
            then:
          </p>
          <div className="equation-box">
            <p>p + q = 1</p>
            <p>Genotype frequencies: p&sup2; + 2pq + q&sup2; = 1</p>
          </div>
          <p>
            Frequencies remain constant if: (1) no mutation, (2) random mating, (3) no selection, (4) no migration, and (5) large
            population size. <strong>If any assumption is violated, allele and genotype frequencies will change (evolution occurs).</strong>
          </p>
        </>
      ),
    },
    {
      question: 'What are the implications on populations if the Hardy-Weinberg conditions are not met?',
      answer:
        'If Hardy-Weinberg conditions are violated, allele and genotype frequencies will change (evolution occurs). Consequences include adaptation to new selective pressures, changes in heterozygosity (increased under migration, decreased under inbreeding), inbreeding depression from consanguineous mating, allele fixation or loss from drift, and altered average population fitness. The direction and magnitude of change depend on which conditions are violated.',
    },
    {
      question: 'What specific types of data provide evidence for evolution?',
      answer:
        'Evidence includes fossil records showing transitions between species, comparative anatomy revealing homologous structures, embryological similarities, molecular sequences (DNA and proteins) showing conservation and divergence, biogeographic patterns (species distribution), experimental and observational evolution in real time (e.g., antibiotic resistance), and vestigial traits no longer functional in modern organisms.',
    },
    {
      question: 'How do Morphological, biochemical, and geological changes and data provide evidence of organisms changing over time?',
      answer:
        'Fossil sequences and transitional forms documented by stratigraphy and radiometric dating show morphological change across geologic time. Homologous anatomical structures across different taxa indicate descent from common ancestors. Conserved biochemical sequences (e.g., cytochrome c, ribosomal RNA) and similar metabolic pathways across distantly related organisms support common ancestry and show gradual molecular evolution.',
    },
    {
      question: 'In what ways is the evidence of common ancestry related to fundamental molecular and cellular domains?',
      answer:
        'Universal features across life domains (Bacteria, Archaea, Eukarya) include the genetic code, ribosomes, conserved genes (rRNA, tRNA genes), and shared core metabolic pathways (glycolysis, citric acid cycle, electron transport chain). These conserved molecular features indicate descent of all life from a common ancestor and reveal constraints on molecular evolution imposed by cellular function.',
    },
    {
      question: 'How are structural and functional mechanisms at the cellular and molecular level able to support the idea of common ancestry?',
      answer:
        'Homologous proteins and genes with conserved amino acid sequences and functional motifs appear across taxa (e.g., hemoglobin, immunoglobulins). Shared developmental genes (Hox genes, Pax genes) regulate similar body plans in distant organisms. Similar regulatory elements and signaling cascades control development across kingdoms. These shared mechanisms indicate inheritance from common ancestors and the constraints of evolutionary modification on existing biochemical machinery.',
    },
    {
      question: 'How can we provide support for the fact that evolution is an ongoing process for all living organisms?',
      answer:
        'Contemporary examples include documented antibiotic and pesticide resistance in bacteria and insects, observed rapid adaptation in wild populations (e.g., beak size shifts in Darwin\'s finches during droughts), experimental evolution (the long-term Escherichia coli experiment showing continuous genetic change over 70,000 generations), and recorded speciation events in both laboratory and natural settings. These observations demonstrate that evolution is not confined to the fossil record.',
    },
    {
      question: 'What types of evidence can be used to interpret and infer an evolutionary relationship?',
      answer:
        'Evidence includes comparative DNA and protein sequences (molecular phylogenetics), morphological character matrices and anatomical similarities, fossil ages and transitional forms, developmental traits and embryological patterns, and geographic distributions (biogeography). These lines of evidence are combined using phylogenetic methods to reconstruct evolutionary trees.',
    },
    {
      question: 'What tools can be used in evolutionary connections (Cladograms, dichotomous keys, phylogenetic trees)?',
      answer:
        'Cladograms and phylogenetic trees (constructed using maximum likelihood, Bayesian inference, or parsimony methods) graphically represent evolutionary relationships and divergence times. Dichotomous keys use sequential branching decisions to identify organisms. Software packages (RAxML, BEAST, MrBayes) employ statistical methods to infer trees from molecular and morphological data, evaluating confidence in each node.',
    },
    {
      question: 'What conditions need to be met for new species to arise?',
      answer:
        'Reproductive isolation (prezygotic or postzygotic) must develop between diverging populations. Additionally, genetic divergence must accumulate via natural selection, genetic drift, mutation, or gene flow differences. Sufficient time is required for reproductive barriers and genetic incompatibilities to evolve. Geographic, ecological, behavioral, or genetic mechanisms can establish and maintain reproductive isolation.',
    },
    {
      question: 'What happens to the rate of speciation under specific ecological conditions?',
      answer:
        'Speciation rate increases when ecological opportunity is high (many empty niches), geographic isolation is strong, and ecological heterogeneity promotes sympatric divergence. Speciation rate decreases when gene flow is high, environments are homogeneous with few niches, or populations are small and isolated (drift dominates over adaptive divergence). Rainforest biodiversity stems partly from high speciation rates due to geographic fragmentation and niche availability.',
    },
    {
      question: 'What are the processes and mechanisms that drive speciation and how do they work?',
      answer:
        'Allopatric speciation: geographic isolation prevents gene flow, allowing populations to diverge through independent selection and drift. Sympatric speciation: reproductive isolation arises without geographic isolation through ecological divergence, polyploidy (plants), or sexual selection (e.g., cichlid fishes). Parapatric speciation: adjacent populations with environmental clines diverge despite gene flow. Chromosomal changes, sexual selection, and ecological specialization drive reproductive barriers.',
    },
    {
      question: 'What factors can lead to population extinction?',
      answer:
        'Causes include habitat loss and fragmentation, small population size leading to inbreeding depression, rapid environmental change exceeding adaptive capacity, introduced predators/competitors/pathogens, overharvesting/overexploitation, loss of keystone resources, and stochastic catastrophes. The rainforest faces extinction threats from deforestation, fragmenting populations below viable sizes.',
    },
    {
      question: 'How can extinction events be promoted or hindered by environmental changes?',
      answer:
        'Rapid, large-magnitude environmental change (e.g., sudden climate shift, habitat destruction) promotes extinction by overwhelming adaptive capacity. Gradual change can allow adaptation and avoids extinction. Habitat fragmentation and loss of refugia increase extinction risk; stable refuges with gene flow can hinder extinction. Environmental heterogeneity can reduce extinction risk by maintaining small populations.',
    },
    {
      question: 'How does speciation and extinction impact species diversity in an ecosystem?',
      answer:
        'Net biodiversity depends on the balance between speciation (origination of new lineages) and extinction (loss of lineages). When speciation exceeds extinction, diversity increases; when extinction dominates, diversity declines. Both processes shape community composition, ecosystem structure, and ecosystem services. Rainforests have high diversity because high speciation rates (due to fragmentation and ecological opportunity) have exceeded extinction rates.',
    },
    {
      question: 'How does adaptive radiation stem from extinction events?',
      answer:
        'Mass extinctions remove competing lineages and free ecological niches. Surviving lineages experience reduced competition and expand into newly available ecological space, driving rapid diversification and ecological specialization. This adaptive radiation generates the high phenotypic and ecological diversity observed in post-extinction faunas (e.g., mammals after K-Pg extinction, cichlids in new lakes).',
    },
    {
      question: 'Is genetic diversity for a species or population able to impact how they withstand pressures from the environment?',
      answer:
        'Yes. Higher genetic diversity increases adaptive potential and phenotypic flexibility, allowing populations to respond to novel environmental stressors. Low genetic diversity reduces evolutionary response capacity and raises extinction risk under environmental change. Populations with more allelic variation have higher probability of possessing alleles conferring resistance to new pathogens, climate stress, or other pressures.',
    },
    {
      question: 'What are the models and supports for the evidence of Origins of life on Earth?',
      answer:
        'Leading models include the RNA-world hypothesis (RNA as both catalyst and genetic material), metabolism-first scenarios (self-catalyzing chemical networks before replication), and hydrothermal vent hypothesis (chemical gradients driving early metabolism). Supporting evidence: abiotic synthesis experiments (Miller-Urey, Urey-Miller extensions) showing organic molecules form under prebiotic conditions; ancient isotopic records and geochemical evidence; laboratory protocell models showing self-assembly and replication-like dynamics; and conserved metabolic pathways suggesting ancient origins.',
    },
  ]

  const quizQuestions = [
    {
      question: 'Which of the following is a proximate cause of natural selection in rainforest insects?',
      options: [
        { text: 'The insect\'s need to survive', isCorrect: false },
        { text: 'Predation by birds selecting for cryptic coloration', isCorrect: true },
        { text: 'The insect\'s desire to evolve', isCorrect: false },
        { text: 'Random environmental fluctuations', isCorrect: false },
      ],
      explanation:
        'Predation is a selective agent that creates differential survival based on phenotype. Insects with better camouflage survive predation and reproduce more, increasing camouflage allele frequency.',
    },
    {
      question: 'In the Hardy-Weinberg equation p^2 + 2pq + q^2 = 1, what do the terms represent?',
      options: [
        { text: 'Population size at three time points', isCorrect: false },
        { text: 'Frequencies of homozygous dominant, heterozygous, and homozygous recessive genotypes', isCorrect: true },
        { text: 'Mutation rates for three different alleles', isCorrect: false },
        { text: 'Fitness values of three phenotypes', isCorrect: false },
      ],
      explanation:
        'In the Hardy-Weinberg equilibrium, p^2 is the frequency of homozygous dominant (AA), 2pq is heterozygous (Aa), and q^2 is homozygous recessive (aa). Together they sum to 1, representing all genotypes.',
    },
    {
      question: 'Which of the following would violate Hardy-Weinberg equilibrium and cause evolution?',
      options: [
        { text: 'Stable environmental conditions with large population size', isCorrect: false },
        { text: 'Random mating with no new mutations entering the population', isCorrect: false },
        { text: 'Selective mating based on phenotype combined with immigration introducing new alleles', isCorrect: true },
        { text: 'All organisms mating randomly across a panmictic population', isCorrect: false },
      ],
      explanation:
        'Selective (nonrandom) mating and gene flow (immigration) both violate Hardy-Weinberg assumptions, causing allele and genotype frequencies to change over time.',
    },
    {
      question: 'What does a homologous structure provide evidence for?',
      options: [
        { text: 'That two species are the same age', isCorrect: false },
        { text: 'That two species share a common ancestor', isCorrect: true },
        { text: 'That both species are adapted to the same environment', isCorrect: false },
        { text: 'That both species have the same number of genes', isCorrect: false },
      ],
      explanation:
        'Homologous structures (same underlying bone/anatomical plan in different organisms) indicate descent from a common ancestor that possessed the ancestral structure.',
    },
    {
      question: 'How does genetic drift differ from natural selection in changing allele frequencies?',
      options: [
        { text: 'Drift is directional; selection is random', isCorrect: false },
        { text: 'Drift is random change; selection is non-random change based on fitness', isCorrect: true },
        { text: 'Drift occurs only in large populations; selection in small ones', isCorrect: false },
        { text: 'Drift creates new alleles; selection does not', isCorrect: false },
      ],
      explanation:
        'Genetic drift is random, unpredictable change in allele frequency, especially strong in small populations. Natural selection is non-random: alleles that increase fitness increase in frequency.',
    },
    {
      question: 'Which type of speciation occurs without geographic isolation?',
      options: [
        { text: 'Allopatric speciation', isCorrect: false },
        { text: 'Sympatric speciation', isCorrect: true },
        { text: 'Peripatric speciation', isCorrect: false },
        { text: 'Artificial speciation', isCorrect: false },
      ],
      explanation:
        'Sympatric speciation is reproductive isolation arising within a geographic area without geographic barriers. Polyploidy in plants and ecological divergence in cichlid fishes are examples.',
    },
    {
      question: 'Adaptive radiation most commonly follows which type of event?',
      options: [
        { text: 'A decrease in rainfall', isCorrect: false },
        { text: 'The opening of a new ecological niche (e.g., after mass extinction)', isCorrect: true },
        { text: 'An increase in predator population size', isCorrect: false },
        { text: 'A decrease in genetic variation', isCorrect: false },
      ],
      explanation:
        'Adaptive radiation occurs when surviving lineages diversify rapidly into newly available ecological niches and ecological space freed by extinction or a new environment.',
    },
    {
      question: 'Which of the following provides the strongest molecular evidence for common ancestry of all life?',
      options: [
        { text: 'All organisms have eyes', isCorrect: false },
        { text: 'All organisms use the same genetic code and have ribosomes', isCorrect: true },
        { text: 'All organisms reproduce sexually', isCorrect: false },
        { text: 'All organisms live in water originally', isCorrect: false },
      ],
      explanation:
        'The universal genetic code and ribosomal similarities across all three domains of life indicate descent from a common ancestor billions of years ago.',
    },
  ]

  const citations = [
    {
      title: 'Campbell Biology (12th ed.)',
      author: 'Urry, Cain, Wasserman, Minorsky, & Reece',
      year: '2020',
      fullCitation:
        'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). Campbell Biology (12th ed.). Pearson.',
      notes: 'Primary comprehensive reference for all essential questions covering natural selection, population genetics, speciation, extinction, and evidence for evolution.',
    },
    {
      title: 'Evolutionary Biology',
      author: 'Douglas Futuyma & Mark Kirkpatrick',
      year: '2017',
      fullCitation: 'Futuyma, D. J., & Kirkpatrick, M. (2017). Evolution (4th ed.). Sinauer Associates.',
      notes: 'Detailed coverage of mechanisms of evolution, speciation, and population genetics.',
    },
    {
      title: 'The Price Equation and the Fundamental Theorem of Natural Selection',
      author: 'Steven A. Frank',
      year: '1997',
      fullCitation:
        'Frank, S. A. (1997). The Price equation, Fisher\'s fundamental theorem, kin selection, and causal analysis. Evolution, 51(6), 1712-1729.',
      notes: 'Mathematical framework for understanding selection and evolutionary change.',
    },
    {
      title: 'Long-Term Evolution Experiment with E. coli',
      author: 'Richard E. Lenski et al.',
      year: '1991-present',
      fullCitation:
        'Lenski, R. E., Rose, M. R., Simpson, S. C., & Tadler, S. C. (1991). Long-term experimental evolution in Escherichia coli. I. Adaptation and divergence during 2,000 generations. American Naturalist, 138(6), 1315-1341.',
      notes: 'Landmark experimental study demonstrating evolution in real time and genetic drift in laboratory populations.',
    },
    {
      title: 'Evidence for Evolution',
      author: 'Theodosius Dobzhansky',
      year: '1973',
      fullCitation:
        'Dobzhansky, T. (1973). Nothing in biology makes sense except in the light of evolution. American Biology Teacher, 35(3), 125-129.',
      notes: 'Foundational essay on integrating evolutionary evidence across disciplines.',
    },
  ]

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index)
  }

  return (
    <div className="container">
      <div className="topic-header">
        <div className="topic-number">Essential Questions</div>
        <h1>Comprehensive Essential Questions for Evolution and Population Genetics</h1>
        <p>
          Explore the 26 essential questions that guide understanding of natural selection, population genetics, speciation, extinction,
          and evidence for evolution. These questions align with the Campbell Biology curriculum and rainforest focus.
        </p>
      </div>

      <div className="content-section">
        <h2>Essential Questions with Answers</h2>
        <p className="intro-text">
          Click each question below to reveal the answer. These questions connect all major topics in evolutionary biology.
        </p>

        <div className="essential-questions-container">
          {essentialQuestions.map((item, index) => (
            <div key={index} className="question-item">
              <button
                className="question-button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={expandedQuestion === index}
              >
                <span className="question-number">Q{index + 1}.</span>
                <span className="question-text">{item.question}</span>
                <span className="toggle-icon">{expandedQuestion === index ? '−' : '+'}</span>
              </button>
              {expandedQuestion === index && (
                <div className="answer-content">
                  <div className="answer">
                    {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>Test Your Understanding</h2>
        <p>Answer these quiz questions to assess your mastery of the essential concepts.</p>
        <Quiz questions={quizQuestions} />
      </div>

      <div className="content-section">
        <h2>Progress Check</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '100%' }}></div>
        </div>
        <p className="progress-text">All 26 Essential Questions covered (100%)</p>
      </div>

      <Citations citations={citations} />
    </div>
  )
}

export default EssentialQuestionsPage

