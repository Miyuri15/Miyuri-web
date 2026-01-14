export default function Experience() {
  const items = [
    {
      role: 'Software Engineer',
      company: 'Detz Global (Pvt) Ltd',
      period: 'August 2025 — Present',
      desc: 'Working as a full-stack software engineer contributing to both frontend and backend development using modern web and mobile technologies. Designed and implemented RESTful APIs, integrated databases, and optimized application performance to improve reliability and user experience. Collaborated with cross-functional teams to deliver features, refactor existing modules, and support deployments across different environments.'
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'Codezela Technologies (Pvt) Ltd',
      period: 'May 2025 — Dec 2025',
      desc: 'Developed foundational skills in full-stack development by working on academic and personal projects involving frontend frameworks, backend services, Wordpress and databases. Focused on writing maintainable code, implementing authentication flows, and understanding end-to-end application architecture. Built practical problem-solving skills and adapted quickly to new tools and technologies.'
    },
    {
      role: 'Intern Full Stack Developer',
      company: 'Codezela Technologies (Pvt) Ltd',
      period: 'Sep 2024 — May 2025',
      desc: 'Gained hands-on experience in building and improving web application features using NextJs and related technologies. Assisted in UI enhancements, backend route development, and bug fixing while following clean code and version control practices. Actively participated in team discussions, learning real-world development workflows and contributing to ongoing optimizations of the platform. Customized WordPress sites and supported UI responsiveness fixes across devices.'
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