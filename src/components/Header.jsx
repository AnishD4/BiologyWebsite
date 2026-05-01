import React from 'react'
import { Link } from 'react-router-dom'

function Header({ toggleMenu, menuOpen }) {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen ? 'true' : 'false'}
        >
          {/* Accessible, minimal hamburger icon (no emoji) */}
          <svg width="20" height="14" viewBox="0 0 24 14" aria-hidden="true" focusable="false">
            <rect y="1" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="6" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="header-title">
            <h1>Evolution in the Rainforest</h1>
            <div className="header-subtitle">An Interactive Journey Through Evolution</div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
