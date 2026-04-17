import FlowerDecor from './FlowerDecor'

export default function PhotoCard({ src, caption, index = 0, onClick }) {
  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.nextElementSibling.style.display = 'flex'
  }

  return (
    <div
      className="photo-card"
      style={{ cursor: 'pointer' }}
      onClick={() => onClick && onClick(src)}
    >
      <img
        src={src}
        alt={caption}
        onError={handleImageError}
        style={{ cursor: 'pointer' }}
      />
      <div className="photo-fallback" style={{ display: 'none' }}>
        <FlowerDecor size={50} />
      </div>
      <p className="photo-caption">{caption}</p>
    </div>
  )
}

