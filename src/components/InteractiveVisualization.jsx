import React from 'react'

function InteractiveVisualization({ children, title, description }) {
  return (
    <div className="interactive-box">
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

export default InteractiveVisualization

