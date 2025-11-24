export default function Certifications(){
  const certs = [
    'AWS Cloud Practitioner Essentials',
    'AI/ML Engineer – Stage 1 & 2 (SLIIT)',
    'Full Stack Development (DP Education)',
    'Diploma in IT (ESOFT)',
    'Information Systems & Business Process (Alison)'
  ]

  return (
    <section id="certifications" style={{marginTop:20}}>
      <h2>Certifications</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:12,marginTop:12}}>
        {certs.map(cert=> (
          <div key={cert} className="card cert-card">
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <div className="cert-icon">✓</div>
              <span style={{fontSize:14}}>{cert}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
