import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation({ isOpen, closeMenu }) {
  const topics = [
    { path: '/introduction', label: '7.1 - Introduction to Natural Selection', icon: '01' },
    { path: '/natural-selection', label: '7.2 - Natural Selection', icon: '02' },
    { path: '/artificial-selection', label: '7.3 - Artificial Selection', icon: '03' },
    { path: '/population-genetics', label: '7.4 - Population Genetics', icon: '04' },
    { path: '/hardy-weinberg', label: '7.5 - Hardy-Weinberg Equilibrium', icon: '05' },
    { path: '/evidence-evolution', label: '7.6 - Evidence of Evolution', icon: '06' },
    { path: '/common-ancestry', label: '7.7 - Common Ancestry', icon: '07' },
    { path: '/continuing-evolution', label: '7.8 - Continuing Evolution', icon: '08' },
    { path: '/phylogeny', label: '7.9 - Phylogeny', icon: '09' },
    { path: '/speciation', label: '7.10 - Speciation', icon: '10' },
    { path: '/extinction', label: '7.11 - Extinction', icon: '11' },
    { path: '/variations', label: '7.12 - Variations in Population', icon: '12' },
    { path: '/origin-of-life', label: '7.13 - Origin of Life on Earth', icon: '13' },
  ]

  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <div className="nav-header">
        <h3>Topics</h3>
      </div>
      <ul className="nav-list">
        <li className="nav-category">Foundation</li>
        {topics.slice(0, 5).map((topic) => (
          <li className="nav-item" key={topic.path}>
            <NavLink
              to={topic.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span>{topic.icon}</span> {topic.label}
            </NavLink>
          </li>
        ))}

        <li className="nav-category">Evolution Concepts</li>
        {topics.slice(5, 10).map((topic) => (
          <li className="nav-item" key={topic.path}>
            <NavLink
              to={topic.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span>{topic.icon}</span> {topic.label}
            </NavLink>
          </li>
        ))}

        <li className="nav-category">Advanced Topics</li>
        {topics.slice(10).map((topic) => (
          <li className="nav-item" key={topic.path}>
            <NavLink
              to={topic.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span>{topic.icon}</span> {topic.label}
            </NavLink>
          </li>
        ))}

        <li className="nav-category">Reference</li>
        <li className="nav-item">
          <NavLink
            to="/essential-questions"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>EQ</span> Essential Questions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resources"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>📚</span> Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
