import Head from 'next/head'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import {useState} from 'react'

const sampleProjects = [
  {
    id:1,
    title:'SinLearn - AI Educational Assistant',
    image:'/sample.svg',
    description:'AI platform for Sinhala handwritten text processing with OCR pipelines, embeddings, RAG retrieval, and semantic comparison. Features adaptive summaries, Q&A generation, and answer evaluation.',
    tech: ['Flutter', 'Firebase', 'Python', 'FastAPI', 'OCR', 'RAG'],
    link: null,
    status: 'Ongoing Research'
  },
  {
    id:2,
    title:'EV Charging Enterprise Application',
    image:'/sample.svg',
    description:'Multi-role EV charging system with booking workflows, station monitoring, and admin dashboards. Engineered REST APIs, authentication, and real-time operations for seamless management.',
    tech: ['React', '.NET', 'MongoDB', 'Java', 'SQLite'],
    link: 'https://github.com/Miyuri15/EV-Charging-System',
    status: 'Sep 2025'
  },
  {
    id:3,
    title:'FlavorFleet - Food Ordering',
    image:'/sample.svg',
    description:'Microservices-based ordering platform with separate services for users, restaurants, and delivery agents. Applied secure authentication, containerized services, and payment gateway integration.',
    tech: ['MERN', 'Microservices', 'Docker'],
    link: 'https://github.com/Miyuri15/FlavorFleet',
    status: 'April 2025'
  },
  {
    id:4,
    title:'FinTrack - Finance Tracker',
    image:'/sample.svg',
    description:'Budgeting and expense tracking web app with data visualization and secure CRUD operations. Developed unit and integration tests using Jest to ensure backend reliability.',
    tech: ['MERN', 'Jest'],
    link: 'https://github.com/Miyuri15/FinTrack',
    status: 'Feb 2025'
  },
  {
    id:5,
    title:'Peacemind - Therapy Booking',
    image:'/sample.svg',
    description:'Appointment and session management platform for therapists, patients, and admins. Created secure scheduling workflows and optimized session allocation logic.',
    tech: ['MERN', 'MongoDB'],
    link: 'https://github.com/Miyuri15/Peacemind',
    status: 'Sep 2024'
  }
]

export default function Home(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const r = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      if(!r.ok) throw new Error('Failed')
      setStatus('sent')
      setForm({name:'',email:'',message:''})
    }catch(err){
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

      <main className="container">
        <Header />

        <section className="hero">
          <div className="hero-left">
            <h1 style={{margin:0}} className="hero-title">Hi, I'm Miyuri Lokuhewage</h1>
            <p className="hero-subtitle" style={{marginTop:8}}>Full Stack Developer | Software Engineer</p>
            <p className="muted" style={{marginTop:12,fontSize:16,lineHeight:1.6}}>Crafting scalable web applications with modern technologies. Specialized in React, Next.js, Node.js, .NET, and AI-powered solutions.</p>

            <div style={{display:'flex',gap:12,marginTop:16,flexWrap:'wrap'}}>
              <a href="https://github.com/Miyuri15" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://linkedin.com/in/miyurilokuhewage" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="mailto:miyurilokuhewage15@gmail.com" className="social-link">Email</a>
            </div>

            <About />

            <h2 id="projects" style={{marginTop:18}}>Projects</h2>
            <div className="projects">
              {sampleProjects.map(p=> (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            <Experience />
              <Skills />
              <Certifications />

              <div style={{marginTop:18}}>
                <div className="card" id="contact">
                  <h3>Contact Me</h3>
                  <p className="muted" style={{marginTop:6}}>Send a message and I'll get back to you.</p>

                  <form onSubmit={submit} style={{marginTop:12}}>
                    <div className="form-row">
                      <input className="input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                      <input className="input" placeholder="Your email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                    </div>
                    <div style={{marginTop:12}}>
                      <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}></textarea>
                    </div>
                    <div style={{marginTop:12,display:'flex',gap:8,justifyContent:'flex-end'}}>
                      <button className="btn" type="submit">Send</button>
                    </div>
                    <div style={{marginTop:8}} className="muted">
                      {status === 'sending' && 'Sending...'}
                      {status === 'sent' && 'Message sent — thank you!'}
                      {status === 'error' && 'Failed to send. Check server logs.'}
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
