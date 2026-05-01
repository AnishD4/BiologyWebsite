import React, { useState } from 'react'

function Quiz({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState({})

  const handleAnswerClick = (isCorrect, questionIndex) => {
    if (isCorrect && !selectedAnswers[questionIndex]) {
      setScore(score + 1)
    }
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: true,
    })
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
      if (onComplete) {
        onComplete(score)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswers({})
  }

  if (showScore) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="quiz-container">
        <h3>Quiz Complete!</h3>
        <div className="success">
          <h2>Your Score: {score}/{questions.length} ({percentage}%)</h2>
        </div>
        {percentage >= 80 && (
          <p style={{ color: '#2e7d32', fontSize: '1.1rem', marginTop: '1rem' }}>
            Excellent work! You have mastered this topic!
          </p>
        )}
        {percentage >= 60 && percentage < 80 && (
          <p style={{ color: '#f57f17', fontSize: '1.1rem', marginTop: '1rem' }}>
            Good job! Review the material to strengthen your understanding.
          </p>
        )}
        {percentage < 60 && (
          <p style={{ color: '#c62828', fontSize: '1.1rem', marginTop: '1rem' }}>
            Keep studying! Try the quiz again to improve your score.
          </p>
        )}
        <button className="btn btn-primary" onClick={handleRestart} style={{ marginTop: '1.5rem' }}>
          Retake Quiz
        </button>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progressPercent = Math.round(((currentQuestion + 1) / questions.length) * 100)

  return (
    <div className="quiz-container">
      <div style={{ marginBottom: '1rem', color: '#bfffe6', background: '#07110b', display: 'inline-block', padding: '6px 10px', borderRadius: '8px' }}>
        Question {currentQuestion + 1}/{questions.length}
      </div>

      <div className="quiz-question">
        <h4 style={{ color: '#bfffe6' }}>{question.question}</h4>

        <div className="quiz-options">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`quiz-option ${
                selectedAnswers[currentQuestion] ? (option.isCorrect ? 'correct' : 'incorrect') : ''
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                disabled={selectedAnswers[currentQuestion]}
                onChange={() => handleAnswerClick(option.isCorrect, currentQuestion)}
              />
              <span>{option.text}</span>
            </label>
          ))}
        </div>

        {selectedAnswers[currentQuestion] && (
          <div className={`quiz-feedback ${question.options.find(o => o.isCorrect) ? 'correct' : ''}`}>
            {question.explanation}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
        <button
          className="btn btn-outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!selectedAnswers[currentQuestion]}
        >
          Next
        </button>
      </div>

      <div style={{ marginTop: '1rem', textAlign: 'center', color: '#bfffe6' }}>
        Progress: {progressPercent}%
      </div>
    </div>
  )
}

export default Quiz
