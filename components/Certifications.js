export default function Certifications() {
  const certs = [
    'AWS Cloud Practitioner Essentials',
    'AI/ML Engineer – Stage 1 & 2 (SLIIT)',
    'Full Stack Development (DP Education)',
    'Diploma in IT (ESOFT)',
    'Information Systems & Business Process (Alison)'
  ]

  return (
    <section id="certifications" style={{ marginTop: '4rem' }}>
      <h2>🏆 Certifications</h2>
      <div className="certifications-grid">
        {certs.map((cert, index) => (
          <div key={cert} className="card cert-card">
            <div className="cert-icon">✓</div>
            <span style={{ fontSize: '0.95rem', fontWeight: '500', lineHeight: 1.5 }}>
              {cert}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}