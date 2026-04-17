export default function FullScreenModal({ src, alt, onClose }) {
  if (!src) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        cursor: 'pointer',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '100%',
            maxHeight: '85vh',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
          }}
        />
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-40px',
            right: '0',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: '#000'
          }}
        >
          ✕
        </button>
        <p style={{
          color: 'white',
          marginTop: '1rem',
          fontSize: '0.9rem',
          textAlign: 'center'
        }}>
          Нажми чтобы закрыть или нажми ESC
        </p>
      </div>
    </div>
  )
}
