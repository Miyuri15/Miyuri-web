import Head from 'next/head'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
// Testimonials removed per user request
import {useState} from 'react'

const sampleProjects = [
  { id:1, title:'Sample Project One', image:'/sample.svg', description:'A short description of project one. Replace this with your text.' },
  { id:2, title:'Sample Project Two', image:'/sample.svg', description:'A short description of project two. Replace this with your text.' },
  { id:3, title:'Sample Project Three', image:'/sample.svg', description:'A short description of project three. Replace this with your text.' }
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
        <title>Miyuri — Portfolio</title>
        <meta name="description" content="Personal portfolio" />
      </Head>

      <main className="container">
        <Header />

        <section className="hero">
          <div className="hero-left">
            <h1 style={{margin:0}}>Hi, I’m Miyuri — a Developer</h1>
            <p className="muted" style={{marginTop:8}}>I build delightful web experiences. Replace this text with your summary.</p>

            <About />

            <h2 id="projects" style={{marginTop:18}}>Projects</h2>
            <div className="projects">
              {sampleProjects.map(p=> (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            <Experience />
            <Skills />
          </div>

          <div className="hero-right">
            <div className="card" id="contact">
              <h3>Contact Me</h3>
              <p className="muted" style={{marginTop:6}}>Send a message and I’ll get back to you.</p>

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
        </section>

        <Footer />
      </main>
    </>
  )
}
