function WorkCard({ project, layout, onOpen, cardRef }) {
  return (
    <button
      type="button"
      ref={cardRef}
      className="work-card"
      style={{
        '--accent': project.accent,
        '--top': layout.top,
        '--left': layout.left,
        '--w': layout.width,
        zIndex: layout.z,
      }}
      onClick={() => onOpen(project)}
    >
      <span className="work-card-thumb" aria-hidden="true" />
      <span className="work-card-caption">
        <span className="work-card-category">{project.category}</span>
        <span className="work-card-title">{project.title}</span>
      </span>
    </button>
  )
}

export default WorkCard
