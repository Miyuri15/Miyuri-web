export default function Skills(){
  const skills = ['JavaScript','React','Next.js','Node.js','HTML','CSS','Design']
  return (
    <section id="skills" style={{marginTop:20}}>
      <h2>Skills</h2>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:8}}>
        {skills.map(s=> (
          <div key={s} className="card" style={{padding:'8px 12px',borderRadius:999,fontSize:14}}>{s}</div>
        ))}
      </div>
    </section>
  )
}
