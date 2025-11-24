export default function Skills() {
  const skillCategories = [
    {
      title: '🎨 Frontend',
      skills: ['React', 'Next.js', 'Angular JS', 'Tailwind', 'HTML', 'CSS', 'TypeScript', 'JavaScript']
    },
    {
      title: '⚙️ Backend',
      skills: ['Node.js', 'Express.js', '.NET', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: '📱 Mobile',
      skills: ['Flutter', 'Java (Android)']
    },
    {
      title: '🗄️ Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'SQLite']
    },
    {
      title: '☁️ Cloud & DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Azure']
    },
    {
      title: '💻 Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'C++', 'Kotlin']
    },
    {
      title: '🔒 Testing & Security',
      skills: ['Jest', 'Selenium', 'JUnit', 'JWT', 'OAuth2', 'OWASP']
    }
  ]

  return (
    <section id="skills" style={{ marginTop: '4rem' }}>
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map(category => (
          <div key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map(skill => (
                <div key={skill} className="skill-tag">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}