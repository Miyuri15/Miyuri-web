import Head from 'next/head'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import { useState } from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'SinLearn - AI Educational Assistant',
    media: [
      // { type: 'video', src: '/projects/sinlearn-demo.mp4', poster: '/projects/sinlearn-poster.png' },
      // { type: 'image', src: '/project-img/sinlearn-img/s1.jpeg' },
      { type: 'image', src: '/project-img/sinlearn-img/s2.jpeg' },
      { type: 'image', src: '/project-img/sinlearn-img/s3.jpeg' },
      { type: 'image', src: '/project-img/sinlearn-img/s4.jpeg' },
      { type: 'image', src: '/project-img/sinlearn-img/s5.jpeg' },
      { type: 'image', src: '/project-img/sinlearn-img/s6.jpeg' },
      { type: 'image', src: '/project-img/sinlearn-img/s7.jpeg' },
      { type: 'image', src: '/project-img/sinlearn-img/s8.jpeg' },

    ],
    description: 'AI platform for Sinhala handwritten text processing with OCR pipelines, embeddings, RAG retrieval, and semantic comparison. Features adaptive summaries, Q&A generation, and answer evaluation.',
    tech: ['Flutter', 'Firebase', 'Python', 'FastAPI', 'OCR', 'RAG'],
    link: null,
    status: 'Ongoing Research'
  },
    {
    id: 2,
    title: 'AI Resume Builder',
    media: [
      { type: 'image', src: '/projects/peacemind-1.png' }
    ],
    description: 'AI-powered resume builder with customizable templates, real-time feedback, and job matching features.',
    tech: ['NextJs', 'Firebase', 'OpenAI'],
    link: 'https://github.com/Miyuri15/AI_Resume_Builder.git',
    status: 'Dec 2025'
  },
  {
    id: 3,
    title: 'EV Charging Enterprise Application',
    media: [
      { type: 'image', src: '/project-img/ev-img/ev1.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev2.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev3.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev4.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev5.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev6.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev7.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev8.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev9.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev10.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev11.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev12.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev13.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev14.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev15.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev16.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev17.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev18.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev19.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev20.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev21.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev22.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev23.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev24.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev25.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev26.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev27.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev28.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev29.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev30.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev31.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev32.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev33.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev34.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev35.jpeg' },
      { type: 'image', src: '/project-img/ev-img/ev36.jpeg' }
    ],
    description: 'Multi-role EV charging system with booking workflows, station monitoring, and admin dashboards. Engineered REST APIs, authentication, and real-time operations for seamless management.',
    tech: ['React', '.NET', 'MongoDB', 'Java', 'SQLite'],
    link: 'https://github.com/Miyuri15/EV-Charging-System',
    status: 'Sep 2025'
  },
  {
    id: 4,
    title: 'FlavorFleet - Food Ordering',
    media: [
      { type: 'image', src: '/project-img/flavourfleet-img/fl1.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl2.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl3.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl4.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl5.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl6.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl7.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl8.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl9.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl10.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl11.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl12.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl13.jpeg' },
      { type: 'image', src: '/project-img/flavourfleet-img/fl14.jpeg' },

    ],
    description: 'Microservices-based ordering platform with separate services for users, restaurants, and delivery agents. Applied secure authentication, containerized services, and payment gateway integration.',
    tech: ['MERN', 'Microservices', 'Docker'],
    link: 'https://github.com/Miyuri15/FlavorFleet',
    status: 'April 2025'
  },
  {
    id: 5,
    title: 'FinTrack - Finance Tracker',
    media: [
      { type: 'image', src: '/projects/fintrack-1.png' }
    ],
    description: 'Budgeting and expense tracking web app with data visualization and secure CRUD operations. Developed unit and integration tests using Jest to ensure backend reliability.',
    tech: ['MERN', 'Jest'],
    link: 'https://github.com/Miyuri15/FinTrack',
    status: 'Feb 2025'
  },
  {
    id: 6,
    title: 'Skills Careers - Job Portal',
    media: [
      { type: 'image', src: '/project-img/f1.jpeg' },
      { type: 'image', src: '/project-img/f2.jpeg' },
      { type: 'image', src: '/project-img/f3.jpeg' },
      { type: 'image', src: '/project-img/f4.jpeg' }
    ],
    description: 'Job portal with AI-driven resume analysis, job recommendations, and application tracking. Implemented RESTful APIs, JWT authentication, and dynamic front-end components for enhanced user experience.',
    tech: ['NextJs', 'MongoDB'],
    link: 'https://github.com/Miyuri15/skillscareers.git',
    status: 'Dec 2024'
  }

]

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const r = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(form) 
      })
      if (!r.ok) throw new Error('Failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Miyuri Lokuhewage — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Next.js, Node.js, .NET, and AI-powered solutions. Building scalable web applications with modern technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Miyuri Lokuhewage</h1>
            <p className="hero-subtitle">Full Stack Developer | Software Engineer</p>
            <p className="hero-description">
              Crafting scalable web applications with modern technologies. Specialized in React, Next.js, Node.js, .NET, and AI-powered solutions.
            </p>

            <div className="social-links">
              <a href="https://github.com/Miyuri15" target="_blank" rel="noopener noreferrer" className="social-link">
                🐙 GitHub
              </a>
              <a href="https://linkedin.com/in/miyurilokuhewage" target="_blank" rel="noopener noreferrer" className="social-link">
                💼 LinkedIn
              </a>
              <a href="mailto:miyurilokuhewage15@gmail.com" className="social-link">
                ✉️ Email
              </a>
            </div>
          </div>
        </section>

        <About />

        <section id="projects" style={{ marginTop: '4rem' }}>
          <h2>🚀 Featured Projects</h2>
          <div className="projects">
            {sampleProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <Experience />
        <Skills />
        <Certifications />

        <section id="contact" style={{ marginTop: '4rem' }}>
          <div className="card">
            <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>💬 Let's Connect</h2>
            <p className="muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>

            <form onSubmit={submit} className="contact-form">
              <div className="form-row">
                <input 
                  className="input" 
                  placeholder="Your name" 
                  value={form.name} 
                  onChange={e => setForm({ ...form, name: e.target.value })} 
                  required
                />
                <input 
                  className="input" 
                  type="email"
                  placeholder="Your email" 
                  value={form.email} 
                  onChange={e => setForm({ ...form, email: e.target.value })} 
                  required
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <textarea 
                  className="input"
                  placeholder="Tell me about your project..." 
                  value={form.message} 
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', alignItems: 'center' }}>
                {status === 'sending' && <span className="muted">Sending...</span>}
                {status === 'sent' && <span style={{ color: 'var(--accent)' }}>✅ Message sent — thank you!</span>}
                {status === 'error' && <span style={{ color: '#ef4444' }}>❌ Failed to send. Please try again.</span>}
                <button className="btn" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? '⏳ Sending...' : '🚀 Send Message'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}