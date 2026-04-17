import { useState } from 'react'
import QuestionCard from '../components/QuestionCard'

export default function Level2({ next }) {
  const [step, setStep] = useState(0)

  return (
    <div className="screen">
      <div className="badge">Деңгей 2 🏫 — Мектеп жылдары</div>

      {step === 0 && (
        <QuestionCard
          type="multi"
          question="Гаухардың сүйікті пәндері қайсылар?"
          options={['Биология', 'Информатика', 'Дене шынықтыру']}
          correct={['Биология', 'Информатика', 'Дене шынықтыру']}
          onCorrect={() => setStep(1)}
        />
      )}

      {step === 1 && (
        <QuestionCard
          type="single"
          question="Гаухар жыламаған кез қашан?"
          options={[
            '«Жетім» фильмін көргенде',
            'Мама мен папа «ажырасамыз» дегенде',
            'Сабаққа кешіккенде'
          ]}
          correct="Сабаққа кешіккенде"
          onCorrect={next}
        />
      )}
    </div>
  )
}
