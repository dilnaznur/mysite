import { useState, useRef } from 'react'

export default function MusicPlayer({ src, title }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'linear-gradient(135deg, var(--pink-strong), var(--pink-accent))',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '50px',
        fontWeight: 700,
        zIndex: 100,
        cursor: 'pointer',
        boxShadow: 'var(--shadow)',
        animation: 'pulse 3s ease infinite',
        transition: 'all 0.2s'
      }}
      onClick={togglePlay}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        style={{ display: 'none' }}
      >
        <source src={src} type="audio/mpeg" />
      </audio>
      <div style={{ fontSize: '1.2rem' }}>
        {isPlaying ? '⏸' : '▶'} {title}
      </div>
    </div>
  )
}
