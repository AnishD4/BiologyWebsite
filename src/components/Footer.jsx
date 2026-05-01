import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About This Project</h4>
          <p>
            This interactive educational website explores evolution through the lens of rainforest ecosystems, connecting complex biological concepts to real-world examples from Earth's most biodiverse regions.
          </p>
        </div>

        <div className="footer-section">
          <h4>Learning Topics</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/introduction">Introduction to Natural Selection</a></li>
            <li><a href="/natural-selection">Natural Selection</a></li>
            <li><a href="/population-genetics">Population Genetics</a></li>
            <li><a href="/phylogeny">Phylogeny & Evolution</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <p>
            <strong>Key References:</strong><br/>
            • Darwin, C. (1859). On the Origin of Species<br/>
            • National Geographic: Rainforest Conservation<br/>
            • IUCN Red List Database
          </p>
        </div>

        <div className="footer-section">
          <h4>Educational Standards</h4>
          <p>
            This curriculum aligns with Next Generation Science Standards (NGSS) and addresses standards 7.1-7.13 covering evolution, natural selection, and biodiversity.
          </p>
        </div>
      </div>

      <div className="citations">
        <h4>Primary Citations</h4>
        <div className="citation-item">
          Darwin, C. (1859). On the origin of species by means of natural selection. John Murray.
        </div>
        <div className="citation-item">
          Myers, N. (1988). Threatened biotas: Hotspots in tropical forests. The Environmentalist, 8(3), 187-208.
        </div>
        <div className="citation-item">
          IUCN Red List. (2024). The IUCN Red List of Threatened Species. International Union for Conservation of Nature.
        </div>
        <div className="citation-item">
          National Geographic. (2024). Rainforest Ecosystems and Biodiversity. Retrieved from nationalgeographic.com
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Evolution in the Rainforest - Educational Website | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer

