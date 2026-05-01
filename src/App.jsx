import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import IntroductionPage from './pages/topics/IntroductionPage'
import NaturalSelectionPage from './pages/topics/NaturalSelectionPage'
import ArtificialSelectionPage from './pages/topics/ArtificialSelectionPage'
import PopulationGeneticsPage from './pages/topics/PopulationGeneticsPage'
import HardyWeinbergPage from './pages/topics/HardyWeinbergPage'
import EvidenceOfEvolutionPage from './pages/topics/EvidenceOfEvolutionPage'
import CommonAncestryPage from './pages/topics/CommonAncestryPage'
import ContinuingEvolutionPage from './pages/topics/ContinuingEvolutionPage'
import PhylogenyPage from './pages/topics/PhylogenyPage'
import SpeciationPage from './pages/topics/SpeciationPage'
import ExtinctionPage from './pages/topics/ExtinctionPage'
import VariationsPage from './pages/topics/VariationsPage'
import OriginOfLifePage from './pages/topics/OriginOfLifePage'
import './styles/App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <Router>
      <div className="app-container">
        {/* Accessibility: skip link */}
        <a href="#main-content" className="skip-link">Skip to content</a>

        <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <div className="main-content">
          <Navigation isOpen={menuOpen} closeMenu={closeMenu} />
          <div id="main-content" className="content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/introduction" element={<IntroductionPage />} />
              <Route path="/natural-selection" element={<NaturalSelectionPage />} />
              <Route path="/artificial-selection" element={<ArtificialSelectionPage />} />
              <Route path="/population-genetics" element={<PopulationGeneticsPage />} />
              <Route path="/hardy-weinberg" element={<HardyWeinbergPage />} />
              <Route path="/evidence-evolution" element={<EvidenceOfEvolutionPage />} />
              <Route path="/common-ancestry" element={<CommonAncestryPage />} />
              <Route path="/continuing-evolution" element={<ContinuingEvolutionPage />} />
              <Route path="/phylogeny" element={<PhylogenyPage />} />
              <Route path="/speciation" element={<SpeciationPage />} />
              <Route path="/extinction" element={<ExtinctionPage />} />
              <Route path="/variations" element={<VariationsPage />} />
              <Route path="/origin-of-life" element={<OriginOfLifePage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
