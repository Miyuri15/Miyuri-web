export default function Skills(){
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Angular JS', 'Tailwind', 'HTML', 'CSS', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', '.NET', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Mobile',
      skills: ['Flutter', 'Java (Android)']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'SQLite']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Azure']
    },
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'C++', 'Kotlin']
    },
    {
      title: 'Testing & Security',
      skills: ['Jest', 'Selenium', 'JUnit', 'JWT', 'OAuth2', 'OWASP']
    }
  ]

  return (
    <section id="skills" style={{marginTop:20}}>
      <h2>Skills & Technologies</h2>
      <div style={{display:'grid',gap:16,marginTop:12}}>
        {skillCategories.map(category=> (
          <div key={category.title}>
            <h3 style={{fontSize:16,marginBottom:8,color:'var(--accent)'}}>{category.title}</h3>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {category.skills.map(s=> (
                <div key={s} className="skill-tag">{s}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
