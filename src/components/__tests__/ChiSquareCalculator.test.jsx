import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChiSquareCalculator from '../ChiSquareCalculator'

describe('ChiSquareCalculator', () => {
  test('renders and computes chi-square for provided observed and expected', () => {
    render(<ChiSquareCalculator observed={[40,50,10]} expected={[42.25,45.5,12.25]} labels={["BB","Bb","bb"]} />)

    // Check totals and chi-square value matches approximate worked example
    expect(screen.getByText(/Total observed = 100/)).toBeInTheDocument()
    expect(screen.getByText(/Chi-square =/)).toBeInTheDocument()
    // the worked example produced approx 0.9779
    const chiText = screen.getByText(/Chi-square =/).textContent
    expect(chiText).toMatch(/0\.97|0\.98|0\.977/)
  })

  test('accepts user edits to observed counts and updates total', () => {
    render(<ChiSquareCalculator observed={[10,20,30]} expected={null} labels={["A","B","C"]} />)
    const inputs = screen.getAllByRole('spinbutton')
    expect(inputs.length).toBe(3)
    fireEvent.change(inputs[0], { target: { value: '15' } })
    expect(screen.getByText(/Total observed = 65/)).toBeInTheDocument()
  })
})

