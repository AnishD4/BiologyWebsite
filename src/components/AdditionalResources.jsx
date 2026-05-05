import React from 'react'

function AdditionalResources({ resources }) {
  if (!resources || resources.length === 0) return null

  return (
    <div className="section" style={{ marginTop: '3rem', background: 'rgba(30, 219, 158, 0.05)', borderRadius: '8px', padding: '1.5rem', borderLeft: '4px solid var(--accent-green)' }}>
      <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        Additional Resources & Further Reading
      </h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        Explore these external resources to deepen your understanding of the concepts covered in this unit.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {resources.map((res, idx) => (
          <div key={idx} style={{ background: 'var(--surface)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
            <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-green)', fontWeight: 'bold', fontSize: '1.05rem', textDecoration: 'none' }}>
              {res.title} ↗
            </a>
            {res.description && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {res.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdditionalResources
