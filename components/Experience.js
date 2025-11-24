export default function Experience(){
  const items = [
    {
      role:'Junior Full Stack Developer',
      company:'Codezela Technologies (Pvt) Ltd',
      period:'May 2025 — Present',
      desc:'Built and maintained full stack applications using Next.js, Express.js, MongoDB, and .NET in Agile Scrum teams. Implemented REST APIs, enhanced backend logic, and created reusable UI components. Developed authentication with JWT and OAuth2, applying OWASP-aligned secure coding practices.'
    },
    {
      role:'Intern Full Stack Developer',
      company:'Codezela Technologies (Pvt) Ltd',
      period:'Sep 2024 — May 2025',
      desc:'Contributed to frontend and backend features using Next.js, Express.js, and Supabase. Designed RESTful endpoints, integrated databases, and optimized data handling. Customized WordPress sites and supported UI responsiveness fixes across devices.'
    }
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
