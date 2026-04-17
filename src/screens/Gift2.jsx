import { useState, useEffect } from 'react'
import PhotoCard from '../components/PhotoCard'
import FullScreenModal from '../components/FullScreenModal'
import MusicPlayer from '../components/MusicPlayer'

export default function Gift2({ next }) {
  const [fullScreenImage, setFullScreenImage] = useState(null)

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
      <h2>Фото естеліктер </h2>

      <div className="photo-grid">
        <PhotoCard src="/images/school1.jpeg" caption="Мектеп 1" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school2.jpeg" caption="Мектеп 2" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school3.jpeg" caption="Мектеп 3" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school4.jpeg" caption="Мектеп 4" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school5.jpeg" caption="Мектеп 5" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school6.jpg" caption="Мектеп 6" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school7.jpg" caption="Мектеп 7" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school8.jpg" caption="Мектеп 8" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school9.jpg" caption="Мектеп 9" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school10.jpg" caption="Мектеп 10" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school11.jpeg" caption="Мектеп 11" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school12.jpeg" caption="Мектеп 12" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school13.jpeg" caption="Мектеп 13" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school14.jpeg" caption="Мектеп 14" onClick={setFullScreenImage} />
        <PhotoCard src="/images/school15.jpeg" caption="Мектеп 15" onClick={setFullScreenImage} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn-primary" onClick={next}>
          Жалғастыру →
        </button>
      </div>

      <MusicPlayer src="/music/photograph.mp3" title="🎵 Photograph" />

      <FullScreenModal
        src={fullScreenImage}
        alt="Фото"
        onClose={() => setFullScreenImage(null)}
      />
    </div>
  )
}

