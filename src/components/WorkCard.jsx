function WorkCard({ project, onOpen }) {
  return (
    <button
      type="button"
      className="work-card"
      style={{ '--accent': project.accent }}
      onClick={() => onOpen(project)}
    >
      <span className="work-card-thumb" aria-hidden="true" />
      <span className="work-card-meta">
        <span className="work-card-category">{project.category}</span>
        <span className="work-card-title">{project.title}</span>
        <span className="work-card-year">{project.year}</span>
      </span>
    </button>
  )
}

export default WorkCard
