export default function Experience() {
  const items = [
    {
      role: 'Software Engineer',
      company: 'Detz Global (Pvt) Ltd',
      period: 'August 2025 — Present',
      desc: 'Develop enterprise-level web, mobile, and desktop applications. \n Build web apps with React and mobile apps with Flutter.\n Manage data, backend services, and deployments using Firebase, IndexedDB, and VPS. \n Mentor interns and support project coordination and delivery.'
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'Codezela Technologies (Pvt) Ltd',
      period: 'May 2025 — Dec 2025',
      desc: 'Built and maintained full stack applications using Next.js, Express.js, MongoDB, and .NET in Agile Scrum teams. Implemented REST APIs, enhanced backend logic, and created reusable UI components. Developed authentication with JWT and OAuth2, applying OWASP-aligned secure coding practices.'
    },
    {
      role: 'Intern Full Stack Developer',
      company: 'Codezela Technologies (Pvt) Ltd',
      period: 'Sep 2024 — May 2025',
      desc: 'Contributed to frontend and backend features using Next.js, Express.js, and Supabase. Designed RESTful endpoints, integrated databases, and optimized data handling. Customized WordPress sites and supported UI responsiveness fixes across devices.'
    }
  ]
  
  return (
    <section id="experience" style={{ marginTop: '4rem' }}>
      <h2>Experience</h2>
      <div className="experience-timeline">
        {items.map((item, index) => (
          <div key={item.role} className="card experience-item">
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                {item.role}
              </h3>
              <div style={{ 
                color: 'var(--accent)', 
                fontWeight: '600', 
                fontSize: '1rem',
                marginBottom: '0.25rem'
              }}>
                {item.company}
              </div>
              <div className="muted" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                {item.period}
              </div>
            </div>
            <p style={{ 
              lineHeight: 1.7, 
              color: 'var(--muted)',
              fontSize: '0.95rem'
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}