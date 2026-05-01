# Evolution in the Rainforest 🌴

## A Comprehensive Interactive Educational Website

An interactive React-based educational website exploring evolution through the lens of rainforest ecosystems. This website covers 13 essential evolution topics (Standards 7.1-7.13), addresses 25+ fundamental questions, and provides engaging visualizations, quizzes, and comprehensive citations.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Topics Covered](#topics-covered)
4. [Installation & Setup](#installation--setup)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Technologies](#technologies)
8. [Content Highlights](#content-highlights)
9. [Interactive Components](#interactive-components)

## Project Overview

This website is designed for high school and undergraduate students studying evolution. By grounding all concepts in rainforest ecosystems—the most biodiverse regions on Earth—the material becomes more engaging, relevant, and memorable. The site emphasizes:

- **Scientific Rigor**: All content based on peer-reviewed research
- **Real-World Application**: Rainforest examples demonstrating evolution in action
- **Interactive Learning**: Quizzes, calculators, and visualizations
- **Comprehensive Coverage**: All 13 evolution standards with essential questions
- **Accessibility**: Clear explanations of complex concepts

## Features

### 🎓 Educational Features
- **13 Comprehensive Topic Pages**: Complete coverage of evolution standards 7.1-7.13
- **25+ Essential Questions**: Addresses all key learning objectives
- **Interactive Quizzes**: Self-scoring with immediate feedback
- **Visual Content**: Diagrams, examples, and case studies
- **APA Citations**: Properly formatted references for all sources

### 🎨 User Interface Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Intuitive Navigation**: Easy access to all topics via sidebar menu
- **Rainforest Theme**: Cohesive visual design reflecting biodiversity
- **Accessibility**: Clear typography, good contrast, readable font sizes
- **Progress Tracking**: Users can see quiz progress

### 🧪 Interactive Components
- **Hardy-Weinberg Calculator**: Explore genotype frequency calculations
- **Quiz System**: 3+ questions per topic with detailed feedback
- **Essential Questions Panel**: Key learning objectives highlighted
- **Citation Viewer**: Expandable citations in APA format
- **Visual Hierarchy**: Clear section organization

## Topics Covered

| # | Topic | Focus |
|---|-------|-------|
| 7.1 | Introduction to Natural Selection | Mechanisms and requirements for natural selection |
| 7.2 | Natural Selection | How populations change genetically |
| 7.3 | Artificial Selection | Human-directed evolution and selective breeding |
| 7.4 | Population Genetics | Genetic variation and change in populations |
| 7.5 | Hardy-Weinberg Equilibrium | Mathematical model with interactive calculator |
| 7.6 | Evidence of Evolution | Fossil, molecular, and anatomical evidence |
| 7.7 | Common Ancestry | Shared evolutionary origin of all life |
| 7.8 | Continuing Evolution | Modern examples of ongoing evolution |
| 7.9 | Phylogeny | Interpreting evolutionary trees |
| 7.10 | Speciation | How new species arise |
| 7.11 | Extinction | Species loss and mass extinctions |
| 7.12 | Variations in Population | Genetic diversity and its importance |
| 7.13 | Origin of Life | Models for how life began on Earth |

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone or navigate to the project directory**
```bash
cd C:\Users\1005598\WebstormProjects\BioWebsite
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
```

## Project Structure

```
BioWebsite/
├── public/
│   └── index.html                 # HTML template
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Top navigation bar
│   │   ├── Navigation.jsx         # Sidebar menu
│   │   ├── Footer.jsx             # Footer with citations
│   │   ├── Quiz.jsx               # Interactive quiz component
│   │   ├── EssentialQuestions.jsx # Question display component
│   │   ├── Citations.jsx          # Citation renderer
│   │   ├── InteractiveVisualization.jsx
│   │   ├── HardyWeinbergCalculator.jsx  # Interactive calculator
│   ├── pages/
│   │   ├── HomePage.jsx           # Landing page
│   │   └── topics/
│   │       ├── IntroductionPage.jsx
│   │       ├── NaturalSelectionPage.jsx
│   │       ├── ArtificialSelectionPage.jsx
│   │       ├── PopulationGeneticsPage.jsx
│   │       ├── HardyWeinbergPage.jsx
│   │       ├── EvidenceOfEvolutionPage.jsx
│   │       ├── CommonAncestryPage.jsx
│   │       ├── ContinuingEvolutionPage.jsx
│   │       ├── PhylogenyPage.jsx
│   │       ├── SpeciationPage.jsx
│   │       ├── ExtinctionPage.jsx
│   │       ├── VariationsPage.jsx
│   │       └── OriginOfLifePage.jsx
│   ├── styles/
│   │   ├── index.css              # Global styles
│   │   └── App.css                # App-specific styles
│   ├── App.jsx                    # Main app component with routing
│   └── main.jsx                   # Entry point
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies and scripts
└── index.html                     # Root HTML file
```

## Usage

### Navigating the Site

1. **Home Page**: Overview of features, topics, and how to use the site
2. **Topic Navigation**: Use the sidebar menu to jump to any topic (7.1-7.13)
3. **Learning Flow**: 
   - Read main content sections
   - Study case studies and examples
   - Review essential questions
   - Take the interactive quiz
   - Check citations for sources

### Using Interactive Features

**Hardy-Weinberg Calculator**:
- Adjust allele frequencies (p and q) using sliders
- View genotype frequencies automatically calculated
- Understand the relationship between allele and genotype frequencies

**Quiz System**:
- Multiple choice questions with immediate feedback
- Progress bar showing quiz completion
- Score calculation at the end
- Ability to retake quizzes

**Citations**:
- Click on citations to expand full details
- APA-formatted references
- Links to sources when available

## Technologies

### Frontend
- **React 18**: Component-based UI framework
- **React Router**: Client-side routing for navigation
- **Vite**: Fast development server and build tool
- **CSS3**: Responsive design with custom properties

### Development
- **JavaScript ES6+**: Modern JavaScript syntax
- **npm**: Package management

### Styling
- **Rainforest Theme**: Green color palette reflecting biodiversity
- **Responsive Design**: Mobile-first approach with breakpoints at 768px
- **Accessibility**: WCAG contrast standards, semantic HTML

## Content Highlights

### Rainforest Focus
Every topic is connected to rainforest ecosystems:
- Poison dart frogs and natural selection
- Jaguar populations and genetic diversity
- Rainforest speciation and adaptation
- Deforestation and extinction risks
- Indigenous domestication and artificial selection

### Scientific Approach
- **Evidence-Based**: All claims supported by citations
- **Multiple Perspectives**: Different hypotheses presented where relevant
- **Current Research**: References to recent studies
- **Real Data**: Uses actual genetic data and examples

### Educational Design
- **Scaffolded Learning**: Topics build on each other logically
- **Clear Explanations**: Complex concepts broken into digestible parts
- **Multiple Representations**: Text, visuals, and interactive elements
- **Active Learning**: Quizzes and calculators engage students

## Interactive Components

### 1. Navigation Menu
- Organized by topic sections (Foundation, Evolution Concepts, Advanced Topics)
- Easy switching between pages
- Emoji icons for quick visual reference

### 2. Quiz System
- 3-4 well-designed questions per topic
- Immediate feedback explaining correct answers
- Progress tracking through quiz
- Score calculation and retake option

### 3. Hardy-Weinberg Calculator
- Interactive sliders for allele frequencies
- Real-time calculation of genotype frequencies
- Visual display in table format
- Equilibrium checking

### 4. Essential Questions Panel
- Highlighted questions matching educational standards
- Focused learning objectives
- Integration with content

### 5. Citation System
- APA-formatted citations
- Expandable for full details
- Links to external sources
- Organized by topic

## Color Scheme

The site uses a rainforest-inspired color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | #2d5016 | Headers, main elements |
| Secondary Green | #4a7023 | Accents, buttons |
| Accent Green | #7cb342 | Highlights, interactive elements |
| Light Green | #c5e1a5 | Subtle backgrounds |
| Earth Brown | #5d4e37 | Secondary text |
| Leaf Green | #1b5e20 | Deep accents |
| Sky Blue | #01579b | Links |

## Getting Started for Students

1. **Visit the Home Page**: Get an overview of the course
2. **Read the Introduction**: Start with topic 7.1 to understand natural selection
3. **Follow the Path**: Work through topics in order (7.1-7.13)
4. **Use Quizzes**: Test your understanding with topic quizzes
5. **Explore Rainforest Examples**: See evolution in real rainforest species
6. **Check Citations**: Reference sources for further reading

## Getting Started for Educators

This site can be used as:

- **Supplementary Material**: Alongside textbook teaching
- **Self-Paced Learning**: Students explore independently
- **Flipped Classroom**: Students read content, class discusses
- **Assessment Tool**: Quiz system provides feedback
- **Research Starting Point**: Citations guide further exploration

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential additions to expand the platform:
- Animated simulations (genetic drift, natural selection)
- 3D phylogenetic tree viewer
- Interactive cladogram builder
- Video content from rainforest researchers
- User accounts for progress tracking
- Discussion forums for student collaboration
- Printable study guides
- Teacher dashboard for class management

## Credits & Licenses

### Primary Sources
- Darwin, C. (1859). On the Origin of Species
- Futuyma & Kirkpatrick (2017). Evolutionary Biology
- Contemporary evolutionary biology research

### Educational Standards
This course aligns with:
- Next Generation Science Standards (NGSS)
- Common Core Standards
- State Biology Standards (AP Biology, IB Biology)

## Support & Feedback

For questions, suggestions, or bug reports, please contact the development team or consult the educational institution managing this resource.

## License

This educational material is provided for classroom and personal learning use. See accompanying license file for detailed terms.

---

**Made with 🌿 for science education**

*Explore evolution. Understand biodiversity. Appreciate rainforests.*

