import React from 'react'

function HardyWeinbergCalculator({ initialMode = 'allele', initialP = 0.6, initialQ = 0.4, initialCounts = null }) {
  const [mode, setMode] = React.useState(initialMode) // 'allele' or 'genotype'

  // allele state (p and q always derived so they sum to 1)
  const [p, setP] = React.useState(() => {
    if (initialCounts) {
      const { AA = 0, Aa = 0, aa = 0 } = initialCounts
      const N = Number(AA) + Number(Aa) + Number(aa) || 1
      return ((2 * Number(AA) + Number(Aa)) / (2 * N))
    }
    return Number(initialP)
  })

  const [q, setQ] = React.useState(() => {
    if (initialCounts) {
      const { AA = 0, Aa = 0, aa = 0 } = initialCounts
      const N = Number(AA) + Number(Aa) + Number(aa) || 1
      const computedP = ((2 * Number(AA) + Number(Aa)) / (2 * N))
      return 1 - computedP
    }
    return Number(initialQ)
  })

  // genotype counts (only used in genotype mode)
  const [AA, setAA] = React.useState(initialCounts?.AA ?? 0)
  const [Aa, setAa] = React.useState(initialCounts?.Aa ?? 0)
  const [aa, setaa] = React.useState(initialCounts?.aa ?? 0)

  // derived values
  const p2 = p * p
  const q2 = q * q
  const twoqp = 2 * p * q

  const total = Number(AA) + Number(Aa) + Number(aa)

  // handlers for allele slider/input
  const handlePChange = (e) => {
    const newP = parseFloat(e.target.value)
    if (Number.isNaN(newP)) return
    const clamped = Math.max(0, Math.min(1, newP))
    setP(clamped)
    setQ(Number((1 - clamped).toFixed(6)))
  }

  // handlers for genotype counts
  const handleAAChange = (e) => setAA(Number(e.target.value))
  const handleAaChange = (e) => setAa(Number(e.target.value))
  const handleaaChange = (e) => setaa(Number(e.target.value))

  const computeFromCounts = () => {
    const N = Number(AA) + Number(Aa) + Number(aa)
    if (!N) return { p: 0, q: 0 }
    const pComputed = (2 * Number(AA) + Number(Aa)) / (2 * N)
    const qComputed = 1 - pComputed
    setP(Number(pComputed.toFixed(6)))
    setQ(Number(qComputed.toFixed(6)))
    return { p: pComputed, q: qComputed }
  }

  // validation text
  const isBalanced = Math.abs(p + q - 1) < 1e-6

  return (
    <div className="card" style={{ background: 'var(--surface-dark)', color: 'var(--text-primary)' }}>
      <h3 style={{ marginTop: 0 }}>Hardy-Weinberg Calculator</h3>

      <p style={{ color: 'var(--text-secondary)' }}>
        Toggle between entering allele frequencies (p) or raw genotype counts (AA, Aa, aa). The calculator will show genotype
        frequencies using p^2 + 2pq + q^2 = 1 and step-by-step how p and q were computed.
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button className={"btn " + (mode === 'allele' ? 'btn-primary' : 'btn-outline')} onClick={() => setMode('allele')}>
          Use allele frequencies
        </button>
        <button className={"btn " + (mode === 'genotype' ? 'btn-primary' : 'btn-outline')} onClick={() => setMode('genotype')}>
          Use genotype counts
        </button>
      </div>

      {mode === 'allele' && (
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            <strong>Frequency of allele A (p):</strong>
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={p}
            onChange={handlePChange}
            style={{ width: '100%' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
            <span>p = {p.toFixed(4)}</span>
            <span>q = {q.toFixed(4)}</span>
          </div>
        </div>
      )}

      {mode === 'genotype' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
            <label>
              <div style={{ fontWeight: 700 }}>AA (count)</div>
              <input type="number" min="0" value={AA} onChange={handleAAChange} style={{ width: '100%' }} />
            </label>
            <label>
              <div style={{ fontWeight: 700 }}>Aa (count)</div>
              <input type="number" min="0" value={Aa} onChange={handleAaChange} style={{ width: '100%' }} />
            </label>
            <label>
              <div style={{ fontWeight: 700 }}>aa (count)</div>
              <input type="number" min="0" value={aa} onChange={handleaaChange} style={{ width: '100%' }} />
            </label>
          </div>

          <div style={{ marginTop: '0.75rem' }}>
            <button className="btn btn-primary" onClick={computeFromCounts} style={{ marginRight: '0.5rem' }}>
              Compute p & q from counts
            </button>
            <span style={{ color: 'var(--text-secondary)' }}>Total individuals: {total}</span>
          </div>
        </div>
      )}

      <div style={{ marginTop: '1.25rem', padding: '1rem', borderRadius: 8, background: 'linear-gradient(135deg, var(--surface-2), var(--surface))', border: '1px solid var(--border-color)' }}>
        <h4 style={{ marginTop: 0 }}>Genotype frequencies (from current p & q)</h4>
        <table style={{ width: '100%', marginTop: '0.5rem' }}>
          <thead>
            <tr style={{ background: 'linear-gradient(90deg, var(--primary-green), var(--accent-green))', color: '#050807' }}>
              <th>Genotype</th>
              <th>Formula</th>
              <th>Value</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>AA (homozygous dominant)</strong></td>
              <td>p^2</td>
              <td>{p2.toFixed(4)}</td>
              <td>{(p2 * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td><strong>Aa (heterozygous)</strong></td>
              <td>2pq</td>
              <td>{twoqp.toFixed(4)}</td>
              <td>{(twoqp * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td><strong>aa (homozygous recessive)</strong></td>
              <td>q^2</td>
              <td>{q2.toFixed(4)}</td>
              <td>{(q2 * 100).toFixed(2)}%</td>
            </tr>
            <tr style={{ fontWeight: 700, background: 'rgba(30,219,158,0.04)' }}>
              <td colSpan="2">Total</td>
              <td>{(p2 + twoqp + q2).toFixed(4)}</td>
              <td>~100%</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '0.75rem' }}>
          {isBalanced ? (
            <div style={{ color: 'var(--secondary-green)', fontWeight: 700 }}>Population allele frequencies sum to 1.0 (p + q = { (p + q).toFixed(4) })</div>
          ) : (
            <div style={{ color: 'var(--accent-green)', fontWeight: 700 }}>Note: p + q = {(p + q).toFixed(4)} (adjust allele inputs or compute from counts)</div>
          )}
        </div>

        <div style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
          <h5 style={{ marginBottom: '0.25rem' }}>Computation steps</h5>
          <ol>
            <li>If using genotype counts, compute p = (2*AA + Aa) / (2N), where N = AA + Aa + aa.</li>
            <li>Compute q = 1 - p.</li>
            <li>Use p^2 to get homozygous dominant frequency, 2pq for heterozygotes, q^2 for homozygous recessive.</li>
            <li>Compare observed genotype counts to expected frequencies to detect evolutionary forces.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default HardyWeinbergCalculator
