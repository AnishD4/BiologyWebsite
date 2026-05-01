import React from 'react'

// Renders APA-style image attributions. Accepts props.images: array of {author,title,year,sourceUrl,license}
export default function ImageAttributions({ images = [] }) {
  return (
    <div className="card" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
      <h3 style={{ color: 'var(--text-primary)' }}>Image Attributions (APA)</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {images.map((img, i) => {
          // Build a safer APA line if fullCitation is provided; otherwise format from fields
          const line = img.fullCitation || `${img.author || 'Unknown author'}. (${img.year || 'n.d.'}). ${img.title || 'Untitled image'} [Photograph]. ${img.site || ''}. ${img.sourceUrl || ''}`

          return (
            <li key={i} style={{ color: 'var(--black)', marginBottom: '0.6rem', fontSize: '0.95rem' }}>
              {line}
              {img.sourceUrl && (
                <div style={{ marginTop: '0.25rem' }}>
                  <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-green)' }}>
                    {img.sourceUrl}
                  </a>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
