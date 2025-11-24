export default function ProjectCard({ project }) {
  return (
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
        marginBottom: '1.5rem',
        flex: 1
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

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          🚀 View Project →
        </a>
      )}
    </div>
  )
}