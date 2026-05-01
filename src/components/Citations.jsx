import React, { useState } from 'react'

function Citations({ citations }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  if (!citations || citations.length === 0) {
    return null
  }

  return (
    <div className="section" style={{ marginTop: '3rem', background: 'transparent', borderLeft: '3px solid var(--accent-green)' }}>
      <h3 style={{ color: 'var(--text-primary)' }}>References & Citations</h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
        All citations are formatted in APA style. Click on any citation to expand details.
      </p>

      <div style={{ marginTop: '1.5rem' }}>
        {citations.map((citation, index) => (
          <div
            key={index}
            style={{
              marginBottom: '1rem',
              padding: '1rem',
              background: 'transparent',
              borderLeft: '4px solid var(--accent-green)',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: 'none',
              color: 'var(--black)',
            }}
            onClick={() => toggleExpand(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(index) }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: 'var(--accent-green)' }}>
                  {citation.title}
                </p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--black)' }}>
                  {citation.author && `${citation.author} • `}
                  {citation.year}
                </p>
              </div>
              <span style={{ fontSize: '1.2rem', color: 'var(--accent-green)' }}>
                {expandedIndex === index ? '-' : '+'}
              </span>
            </div>

            {expandedIndex === index && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <p style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'var(--black)' }}>
                  <strong>Full Citation (APA):</strong>
                </p>
                <p style={{ margin: '0.5rem 0', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--black)' }}>
                  {citation.fullCitation}
                </p>

                {citation.url && (
                  <p style={{ marginTop: '1rem' }}>
                    <strong style={{ color: 'var(--black)' }}>Source:</strong>{' '}
                    <a href={citation.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-green)' }}>
                      {citation.url}
                    </a>
                  </p>
                )}

                {citation.notes && (
                  <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--black)' }}>
                    <strong style={{ color: 'var(--black)' }}>Notes:</strong> {citation.notes}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Citations
