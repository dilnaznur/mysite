import { useState, useEffect, useRef } from 'react'
import QuestionCard from '../components/QuestionCard'

export default function Level3({ next }) {
  const [step, setStep] = useState(0)
  const [escaped, setEscaped] = useState(false)
  const [btnStyle, setBtnStyle] = useState({ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' })
  const buttonRef = useRef(null)
  const gameContainerRef = useRef(null)

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setEscaped(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [step])

  const handleMouseMove = (e) => {
    if (!escaped && step === 0 && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const buttonCenterX = buttonRect.left + buttonRect.width / 2
      const buttonCenterY = buttonRect.top + buttonRect.height / 2

      const mouseX = e.clientX
      const mouseY = e.clientY

      const distance = Math.sqrt(
        Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
      )

      if (distance < 100) {
        const angle = Math.atan2(buttonCenterY - mouseY, buttonCenterX - mouseX)
        const newX = mouseX + Math.cos(angle) * 150
        const newY = mouseY + Math.sin(angle) * 150

        setBtnStyle({
          position: 'fixed',
          left: `${Math.max(20, Math.min(window.innerWidth - 100, newX))}px`,
          top: `${Math.max(20, Math.min(window.innerHeight - 60, newY))}px`,
          transition: 'all 0.05s'
        })
      }
    }
  }

  return (
    <div className="screen" onMouseMove={handleMouseMove} ref={gameContainerRef}>
      <div className="badge">Деңгей 3 😴 — Қазіргі уақыт</div>

      {step === 0 && (
        <div className="escape-button-game">
          <p className="escape-instruction">Гаухар, обед болды тұр!👇</p>
          <button
            ref={buttonRef}
            className="escape-button"
            style={btnStyle}
            onClick={() => setStep(1)}
            disabled={!escaped}
          >
                Қазііір 🌅
          </button>
        </div>
      )}

      {step === 1 && (
        <QuestionCard
          type="single"
          question="Гаухардың сүйікті қаласы қайсы?"
          options={['Қаскелен', 'Шәуілдір', 'Сексеуіл', 'Цюрих']}
          correct="Цюрих"
          onCorrect={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <QuestionCard
          type="single"
          question="Отбасындағы ең жақсы бала кім?"
          options={['Мөлдір', 'Моля', 'Макон']}
          correct={['Мөлдір', 'Моля', 'Макон']}
          onCorrect={next}
        />
      )}
    </div>
  )
}

