import { useState } from 'react'
import QuestionCard from '../components/QuestionCard'

export default function Level1({ next }) {
  const [step, setStep] = useState(0)

  return (
    <div className="screen">
      <div className="badge">Деңгей 1 🧸 — Балалық шақ</div>

      {step === 0 && (
        <QuestionCard
          type="single"
          question="Гаухар балабақшаға барды ма?"
          options={['Иә', 'Жоқ']}
          correct="Жоқ"
          onCorrect={() => setStep(1)}
        />
      )}

      {step === 1 && (
        <QuestionCard
          type="single"
          question="Гаухардың сүйікті ойыншығы қайсы?"
          options={['Пупс с ванной', 'Барби қуыршақ', 'Микки маус']}
          correct="Пупс с ванной"
          onCorrect={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <QuestionCard
          type="text"
          question="Мөлдірге жасаған прическасы қандай болды?"
          correct="Челка"
          onCorrect={next}
        />
      )}
    </div>
  )
}
