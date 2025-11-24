import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  const [openIndex, setOpenIndex] = useState(null)

  const media = Array.isArray(project.media) ? project.media : project.media ? [project.media] : []

  useEffect(() => {
    function onKey(e) {
      if (openIndex === null) return
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowLeft') setOpenIndex(i => (i === null ? null : (i - 1 + media.length) % media.length))
      if (e.key === 'ArrowRight') setOpenIndex(i => (i === null ? null : (i + 1) % media.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, media.length])

  function openAt(i) {
    setOpenIndex(i)
  }

  function close() {
    setOpenIndex(null)
  }

  function prev() {
    setOpenIndex(i => (i === null ? null : (i - 1 + media.length) % media.length))
  }

  function next() {
    setOpenIndex(i => (i === null ? null : (i + 1) % media.length))
  }

  return (
    <>
      <div className="card project-card">
        <div className="project-header">
          <h3 style={{ marginTop: 0, marginBottom: 0, fontSize: '1.25rem', fontWeight: '700' }}>
            {project.title}
          </h3>
          {project.status && (
            <span className="project-status">{project.status}</span>
          )}
        </div>

        <p className="muted" style={{
          margin: 0,
          fontSize: '0.95rem',
          lineHeight: 1.6,
          marginBottom: '0.75rem'
        }}>
          {project.description}
        </p>

        {project.tech && (
          <div className="tech-badges">
            {project.tech.map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        )}

        {/* thumbnails */}
        {media.length > 0 && (
          <div className="thumbnails" style={{ marginTop: '0.75rem' }}>
            {media.slice(0, 3).map((m, i) => (
              <button key={i} className="thumbnail" onClick={() => openAt(i)} type="button">
                {m.type === 'image' ? (
                  <Image src={m.src} alt={`${project.title} ${i + 1}`} width={320} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
                ) : (
                  m.poster ? (
                    <Image src={m.poster} alt={`${project.title} poster ${i + 1}`} width={320} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.06)', borderRadius: 8 }}>
                      ▶
                    </div>
                  )
                )}
              </button>
            ))}

            {media.length > 3 && (
              <div className="thumbnail-more">+{media.length - 3}</div>
            )}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', alignItems: 'center' }}>
          {media.length > 0 && (
            <button className="btn" onClick={() => openAt(0)} type="button">
              ▶ Preview Gallery
            </button>
          )}

          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project →
            </a>
          )}
        </div>
      </div>

      {openIndex !== null && media[openIndex] && (
        <div className="media-modal" role="dialog" aria-modal="true" onClick={close}>
          <div className="media-modal-content" onClick={e => e.stopPropagation()}>
            <button className="media-modal-close" onClick={close} aria-label="Close preview">✕</button>
            <button className="media-prev" onClick={prev} aria-label="Previous">◀</button>
            <button className="media-next" onClick={next} aria-label="Next">▶</button>

            <div className="media-modal-body">
              {media[openIndex].type === 'video' ? (
                <video
                  src={media[openIndex].src}
                  controls
                  playsInline
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
              ) : (
                <Image src={media[openIndex].src} alt={project.title} width={1600} height={900} style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
              )}
            </div>
            {project.description && <p className="muted" style={{ marginTop: '0.75rem' }}>{project.description}</p>}
          </div>
        </div>
      )}
    </>
  )
}