// pages/index.js

import Head from 'next/head'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import { useState } from 'react'
import emailjs from 'emailjs-com';

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
    tech: ['Flutter', 'Firebase', 'Python', 'FastAPI', 'OCR', 'RAG' ,'voice recognition'],
    link: null,
    status: 'Ongoing Research',
    categories: ['Web','Mobile', 'AI']
  },
  {
    id: 2,
    title: 'Multilingual Language Services Website',
    media: [
      { type: 'video', src: '/project-video/akuruSv.mp4' }
    ],
    description: 'Built a responsive multilingual services website using WordPress and Elementor, developed from scratch without pre-made themes. The site presents translation, scriptwriting, subtitling, and transcription services with a clean UI and mobile-friendly layout.',
    tech: ['Elementor', 'Dynamic Content'],
    link: '',
    status: 'Nov 2025',
    categories: ['Web', 'Wordpress']
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
    tech: ['React','Flutter', '.NET', 'MongoDB', 'Java', 'SQLite' ,'IIS'],
    link: 'https://github.com/Miyuri15/EV-Charging-System.git',
    status: 'Sep 2025',
    categories: ['Web', 'Mobile']
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
    status: 'April 2025',
    categories: ['Web']
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
    description: 'Job portal with role-based authentication, job listings, and application tracking. Developed RESTful APIs, secure login, and user dashboards for job seekers and employers.Admin dashboard for managing users and job postings.Recruiters can post jobs, review applications, and manage listings.',
    tech: ['NextJs', 'MongoDB', 'NodeJs', 'Role-based Auth'],
    link: 'https://github.com/Miyuri15/skillscareers.git',
    status: 'Dec 2024',
    categories: ['Web']
  },
  {
    id: 5,
    title: 'SGMS - Smart Garbage Management System',
    media: [
            { type: 'image', src: '/project-img/garbageapp-img/g1.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g2.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g3.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g4.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g5.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g6.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g7.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g8.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g9.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g10.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g11.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g12.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g13.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g14.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g15.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g16.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g17.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g18.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g19.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g20.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g21.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g22.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g23.jpeg' },
            { type: 'image', src: '/project-img/garbageapp-img/g24.jpeg' },
    ],
    description: 'Smart garbage management system with secured web platform for residents ,admins, waste collectors and waste station recorders. Implemented secure authentication, role-based access, and automated notifications for efficient waste management and monitoring.from request and shedule garbage pickups to track waste collection and monitor bin statuses with recycling.',
    tech: ['MERN', 'Jest' , 'OWASP','Selenium'],
    link: 'https://github.com/Miyuri15/Garbage_App_Secured.git',
    status: 'Oct 2024',
    categories: ['Web']
  }


]

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace these with your EmailJS values
      const SERVICE_ID = 'service_9wnt90z';
      const TEMPLATE_ID = 'template_42sbhtb';
      const USER_ID = 'CDgVG0n0vyl62lw_-';

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        USER_ID
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <>
      <Head>
        <title>Miyuri Lokuhewage — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Next.js, Flutter, Node.js, .NET, and AI-powered solutions. Building scalable web and mobile applications with modern technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Miyuri Lokuhewage</h1>
            <p className="hero-subtitle">Full Stack Developer | Software Engineer</p>
            <p className="hero-description">
              Crafting scalable web and mobile applications with modern technologies. Specialized in React, Next.js, Flutter, Node.js, .NET, and AI-powered solutions.
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