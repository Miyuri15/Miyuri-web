export default function ProjectCard({project}){
  return (
    <div className="card">
      <img src={project.image} alt={project.title} className="proj-img"/>
      <h3 style={{marginTop:12,marginBottom:6}}>{project.title}</h3>
      <p className="muted" style={{margin:0,fontSize:14}}>{project.description}</p>
    </div>
  )
}
