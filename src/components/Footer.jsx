import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About This Project</h4>
          <p>
            This interactive educational website explores evolution through the lens of tropical rainforest ecosystems, connecting complex biological concepts from Campbell Biology to real-world examples from Earth's most biodiverse biome.
          </p>
        </div>

        <div className="footer-section">
          <h4>Learning Topics</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/introduction">7.1 – Introduction to Natural Selection</Link></li>
            <li><Link to="/natural-selection">7.2 – Natural Selection</Link></li>
            <li><Link to="/artificial-selection">7.3 – Artificial Selection</Link></li>
            <li><Link to="/population-genetics">7.4 – Population Genetics</Link></li>
            <li><Link to="/hardy-weinberg">7.5 – Hardy-Weinberg Equilibrium</Link></li>
            <li><Link to="/evidence-evolution">7.6 – Evidence of Evolution</Link></li>
            <li><Link to="/common-ancestry">7.7 – Common Ancestry</Link></li>
            <li><Link to="/continuing-evolution">7.8 – Continuing Evolution</Link></li>
            <li><Link to="/phylogeny">7.9 – Phylogeny</Link></li>
            <li><Link to="/speciation">7.10 – Speciation</Link></li>
            <li><Link to="/extinction">7.11 – Extinction</Link></li>
            <li><Link to="/variations">7.12 – Variations in Population</Link></li>
            <li><Link to="/origin-of-life">7.13 – Origin of Life on Earth</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Primary References</h4>
          <p style={{ fontSize: '0.9rem' }}>
            Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Reece, J. B. (2020). <em>Campbell Biology</em> (12th ed.). Pearson.
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            Darwin, C. (1859). <em>On the Origin of Species</em>. John Murray.
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            Myers, N., Mittermeier, R. A., Mittermeier, C. G., da Fonseca, G. A. B., & Kent, J. (2000). Biodiversity hotspots for conservation priorities. <em>Nature</em>, 403, 853–858.
          </p>
        </div>

        <div className="footer-section">
          <h4>Educational Alignment</h4>
          <p>
            This curriculum is aligned with AP Biology standards and covers units 7.1–7.13 on evolution, natural selection, population genetics, and biodiversity. Content is drawn from Campbell Biology (12th ed.).
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Evolution in the Rainforest — Educational Biology Website | All content cited in APA format</p>
      </div>
    </footer>
  )
}

export default Footer
