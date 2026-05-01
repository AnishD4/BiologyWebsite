import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import HardyWeinbergCalculator from '../HardyWeinbergCalculator'

describe('HardyWeinbergCalculator', () => {
  test('renders allele slider and displays computed genotype frequencies', () => {
    render(<HardyWeinbergCalculator initialMode="allele" initialP={0.6} initialQ={0.4} />)
    expect(screen.getByText(/Hardy-Weinberg Calculator/)).toBeInTheDocument()
    expect(screen.getByText(/AA \(homozygous dominant\)/)).toBeInTheDocument()
    // p=0.6 -> p^2=0.36
    expect(screen.getByText('0.3600')).toBeInTheDocument()
  })

  test('compute from counts updates p and q', () => {
    render(<HardyWeinbergCalculator initialMode="genotype" initialCounts={{ AA: 40, Aa: 50, aa: 10 }} />)
    const computeBtn = screen.getByText(/Compute p & q from counts/)
    fireEvent.click(computeBtn)
    // p should be 0.65
    expect(screen.getByText(/p = 0.6500|p = 0.65/)).toBeInTheDocument()
  })
})

