export default function Experience(){
  const items = [
    {role:'Frontend Developer', company:'Acme Co', period:'2023 — Present', desc:'Built interactive UI components and performance optimizations.'},
    {role:'Web Developer', company:'Startup X', period:'2020 — 2023', desc:'Worked on full-stack features and integrations.'}
  ]
  return (
    <section id="experience" style={{marginTop:20}}>
      <h2>Experience</h2>
      <div style={{display:'grid',gap:12,marginTop:8}}>
        {items.map(i=> (
          <div key={i.role} className="card">
            <strong>{i.role} — <span className="muted">{i.company}</span></strong>
            <div className="muted" style={{fontSize:13}}>{i.period}</div>
            <p style={{marginTop:8}}>{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
