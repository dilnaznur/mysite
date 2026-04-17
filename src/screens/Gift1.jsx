import { useState, useEffect } from 'react'
import PhotoCard from '../components/PhotoCard'
import FullScreenModal from '../components/FullScreenModal'

export default function Gift1({ next }) {
  const [animated, setAnimated] = useState(false)
  const [showPhotos, setShowPhotos] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState(null)

  useEffect(() => {
    setTimeout(() => setAnimated(true), 200)
    setTimeout(() => setShowPhotos(true), 1400)
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setFullScreenImage(null)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div className="screen">
      <div className="envelope">
        <div
          className={`envelope-flap ${animated ? 'open' : ''}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(135deg, var(--pink-strong), var(--pink-accent))',
            borderRadius: 'var(--radius) var(--radius) 0 0',
            transformOrigin: 'top'
          }}
        />
      </div>

      {showPhotos && (
        <>
          <div className="photo-row">
            <PhotoCard
              src="/images/letter_mom.jpeg"
              caption="Анамнан хат 💕"
              onClick={setFullScreenImage}
            />
            <PhotoCard
              src="/images/letter_dad.jpeg"
              caption="Әкемнен хат 😎"
              onClick={setFullScreenImage}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button className="btn-primary" onClick={next}>
              Жалғастыру →
            </button>
          </div>
        </>
      )}

      <FullScreenModal
        src={fullScreenImage}
        alt="Фото"
        onClose={() => setFullScreenImage(null)}
      />
    </div>
  )
}

