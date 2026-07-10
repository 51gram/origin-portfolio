import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

function ProjectModal({ project, onClose }) {
  const backdropRef = useRef(null)
  const panelRef = useRef(null)
  const closingRef = useRef(false)

  useEffect(() => {
    gsap.set(backdropRef.current, { opacity: 0 })
    gsap.set(panelRef.current, { opacity: 0, y: 24, scale: 0.96 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.to(backdropRef.current, { opacity: 1, duration: 0.3 }).to(
      panelRef.current,
      { opacity: 1, y: 0, scale: 1, duration: 0.4 },
      '-=0.15',
    )

    function handleKeyDown(e) {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function handleClose() {
    if (closingRef.current) return
    closingRef.current = true

    const tl = gsap.timeline({
      defaults: { ease: 'power2.in' },
      onComplete: onClose,
    })
    tl.to(panelRef.current, { opacity: 0, y: 16, scale: 0.97, duration: 0.25 })
    tl.to(backdropRef.current, { opacity: 0, duration: 0.25 }, '<')
  }

  return (
    <div
      className="modal-backdrop"
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current) handleClose()
      }}
    >
      <div className="modal-panel" ref={panelRef} style={{ '--accent': project.accent }}>
        <button type="button" className="modal-close" onClick={handleClose} aria-label="閉じる">
          ×
        </button>
        <div className="modal-media" aria-hidden="true">
          <span>動画 / 画像プレースホルダー</span>
        </div>
        <p className="modal-category">
          {project.category} · {project.year}
        </p>
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-description">{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectModal
