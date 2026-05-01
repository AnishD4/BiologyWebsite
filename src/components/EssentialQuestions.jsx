import React from 'react'

function EssentialQuestions({ questions }) {
  return (
    <div className="essential-questions" style={{ marginTop: '2rem' }}>
      <h3>Essential Questions</h3>
      <p>
        These key questions help guide our understanding of this topic and connect to broader evolutionary concepts in rainforest ecosystems.
      </p>
      <ul className="question-list">
        {questions.map((question, index) => (
          <li key={index} className="question-item" style={{ color: 'var(--text-primary)' }}>
            {question}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EssentialQuestions
