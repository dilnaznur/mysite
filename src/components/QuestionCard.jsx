import { useState, useRef } from 'react'

export default function QuestionCard({
  question,
  options,
  correct,
  onCorrect,
  type = 'single'
}) {
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState(
    type === 'multi' ? [] : ''
  )
  const cardRef = useRef(null)

  const handleSingleClick = (option) => {
    let isCorrect = false
    if (Array.isArray(correct)) {
      isCorrect = correct.includes(option)
    } else {
      isCorrect = option === correct
    }

    if (isCorrect) {
      onCorrect()
    } else {
      setError(true)
      cardRef.current?.classList.add('shake')
      setTimeout(() => {
        setError(false)
        cardRef.current?.classList.remove('shake')
      }, 1500)
    }
  }

  const handleCheckboxChange = (option) => {
    setSelected((prev) => {
      if (prev.includes(option)) {
        return prev.filter((o) => o !== option)
      } else {
        return [...prev, option]
      }
    })
  }

  const handleMultiValidate = () => {
    const correctArray = Array.isArray(correct) ? correct : [correct]
    const isCorrect =
      selected.length === correctArray.length &&
      selected.every((s) => correctArray.includes(s))

    if (isCorrect) {
      onCorrect()
    } else {
      setError(true)
      cardRef.current?.classList.add('shake')
      setTimeout(() => {
        setError(false)
        cardRef.current?.classList.remove('shake')
      }, 1500)
    }
  }

  const handleTextValidate = () => {
    const userInput = selected.trim().toLowerCase()
    const correctAnswer = correct.trim().toLowerCase()
    const isCorrect = userInput === correctAnswer

    if (isCorrect) {
      onCorrect()
    } else {
      setError(true)
      cardRef.current?.classList.add('shake')
      setTimeout(() => {
        setError(false)
        cardRef.current?.classList.remove('shake')
      }, 1500)
    }
  }

  return (
    <div className="question-card" ref={cardRef}>
      <h3 className="question-text">{question}</h3>

      {type === 'single' && (
        <div className="options-container">
          {options.map((option) => (
            <button
              key={option}
              className="option-button"
              onClick={() => handleSingleClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {type === 'multi' && (
        <>
          <div className="checkbox-container">
            {options.map((option) => (
              <div key={option} className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id={option}
                  checked={selected.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <button className="btn-primary" onClick={handleMultiValidate}>
            Растау ✓
          </button>
        </>
      )}

      {type === 'text' && (
        <>
          <input
            type="text"
            className="text-input"
            placeholder="Жауапты енгізіңіз..."
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleTextValidate()
              }
            }}
          />
          <button className="btn-primary" onClick={handleTextValidate}>
            Тексеру
          </button>
        </>
      )}

      {error && (
        <div className="error-message">Қайтадан көріңіз 🌸</div>
      )}
    </div>
  )
}
