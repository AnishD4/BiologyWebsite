import React from 'react'

// Simple Chi-square calculator component
export default function ChiSquareCalculator({ observed = [10, 20, 30], expected = null, labels = [] }) {
  // observed: array of observed counts
  // expected: if null, assume expected proportions by Hardy-Weinberg from current p/q; but here we accept explicit expected counts
  const [obs, setObs] = React.useState(observed.map(v => Number(v)))
  const [exp, setExp] = React.useState(expected)

  const total = obs.reduce((a, b) => a + b, 0)

  const handleObsChange = (index, value) => {
    const copy = obs.slice()
    copy[index] = Number(value || 0)
    setObs(copy)
  }

  const computeExpected = () => {
    if (exp && exp.length === obs.length) return exp
    // default: equal expected counts
    const equal = obs.map(() => total / obs.length)
    setExp(equal)
    return equal
  }

  const expectedCounts = computeExpected()

  const chiSquare = expectedCounts.reduce((sum, e, i) => {
    const o = obs[i]
    if (e === 0) return sum
    return sum + Math.pow(o - e, 2) / e
  }, 0)

  const df = obs.length - 1

  // helper: simple p-value approximation for chi-square using incomplete gamma is heavy; we'll provide critical value lookup for common df at 0.05
  const criticalValues05 = {1:3.841,2:5.991,3:7.815,4:9.488,5:11.070,6:12.592,7:14.067,8:15.507,9:16.919,10:18.307}
  const critical = criticalValues05[df] ?? null
  const reject = critical ? chiSquare > critical : null

  return (
    <div className="card" style={{ background: 'var(--surface-dark)', color: 'var(--text-primary)' }}>
      <h3>Chi-square test (goodness of fit)</h3>
      <p style={{ color: 'var(--text-secondary)' }}>Enter observed counts for each category. If there are expected counts, paste a comma-separated list in the expected box; otherwise equal expectation is assumed.</p>
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        {obs.map((v, i) => (
          <label key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ minWidth: 80 }}>{labels[i] ?? `Category ${i+1}`}</span>
            <input type="number" min="0" value={v} onChange={(e) => handleObsChange(i, e.target.value)} style={{ flex: 1 }} />
            <span style={{ width: 120, textAlign: 'right' }}>Observed: {v}</span>
          </label>
        ))}

        <label>
          Expected counts (comma-separated, optional):
          <input
            type="text"
            placeholder={expectedCounts.join(', ')}
            onBlur={(e) => {
              const parts = e.target.value.split(',').map(s => Number(s.trim())).filter(n => !Number.isNaN(n))
              if (parts.length === obs.length) setExp(parts)
            }}
            style={{ width: '100%' }}
          />
        </label>

        <div style={{ marginTop: '0.5rem' }}>
          <div>Total observed = {total}</div>
          <div>Chi-square = {chiSquare.toFixed(4)}</div>
          <div>Degrees of freedom = {df}</div>
          {critical ? (
            <div>Critical value (alpha=0.05) = {critical} - {reject ? <span style={{ color: 'var(--accent-green)' }}>Reject null</span> : <span style={{ color: 'var(--text-secondary)' }}>Fail to reject</span>}</div>
          ) : (
            <div style={{ color: 'var(--text-secondary)' }}>Critical value lookup not available for df = {df}</div>
          )}
        </div>

        <details style={{ marginTop: '0.5rem' }}>
          <summary>Show calculation details</summary>
          <table style={{ width: '100%', marginTop: '0.5rem' }}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Observed (O)</th>
                <th>Expected (E)</th>
                <th>(O-E)^2 / E</th>
              </tr>
            </thead>
            <tbody>
              {obs.map((o, i) => {
                const e = expectedCounts[i]
                const term = e === 0 ? 0 : ((o - e) * (o - e)) / e
                return (
                  <tr key={i}>
                    <td>{labels[i] ?? `Cat ${i+1}`}</td>
                    <td>{o}</td>
                    <td>{e.toFixed ? e.toFixed(4) : e}</td>
                    <td>{term.toFixed(4)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </details>
      </div>
    </div>
  )
}
