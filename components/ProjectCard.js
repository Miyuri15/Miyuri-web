export default function ProjectCard({project}){
  return (
    <div className="card project-card">
      <div className="project-header">
        <h3 style={{marginTop:0,marginBottom:8}}>{project.title}</h3>
        {project.status && (
          <span className="project-status">{project.status}</span>
        )}
      </div>
      <p className="muted" style={{margin:0,fontSize:14,lineHeight:1.6,marginBottom:12}}>{project.description}</p>

      {project.tech && (
        <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:12}}>
          {project.tech.map(t=> (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      )}

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project →
        </a>
      )}
    </div>
  )
}
