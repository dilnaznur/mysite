export default function ProgressDots({ current = 0 }) {
  return (
    <div className="progress-dots">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`dot ${index === current ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}
