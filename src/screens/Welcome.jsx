import FlowerDecor from '../components/FlowerDecor'

export default function Welcome({ next }) {
  const handleImageError = (e) => {
    const fallback = e.target.nextElementSibling
    e.target.style.display = 'none'
    fallback.style.display = 'flex'
  }

  return (
    <div className="screen">
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <FlowerDecor
          size={50}
          position={{
            position: 'absolute',
            top: '-20px',
            left: '20px',
            zIndex: 10
          }}
        />
        <FlowerDecor
          size={50}
          position={{
            position: 'absolute',
            bottom: '-20px',
            right: '20px',
            zIndex: 10
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem'
      }}>
        <img
          src="/images/photo.jpeg"
          alt="Gaukhar"
          style={{
            maxWidth: '280px',
            width: '100%',
            height: '280px',
            borderRadius: '50%',
            border: '4px solid var(--pink-accent)',
            boxShadow: '0 8px 32px rgba(232, 82, 122, 0.25)',
            objectFit: 'cover'
          }}
          onError={handleImageError}
        />
        <div
          style={{
            display: 'none',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            border: '4px solid var(--pink-accent)',
            background: 'linear-gradient(135deg, var(--pink-soft), var(--pink-mid))',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      </div>

      <h1>Гаухардың өмір симуляторы</h1>
      <p className="italic" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Сені қаншалықты жақсы білесің?
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn-primary" onClick={next}>
          Ойынды бастау 🌸
        </button>
      </div>
    </div>
  )
}
