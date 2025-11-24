import React from 'react'

export default function About(){
  return (
    <section id="about" style={{marginTop:20}}>
      <div className="about-grid">
        <div className="card">
          <h2>About Me</h2>
          <p className="muted">
            Full Stack Developer with expertise in building scalable web applications using React, Next.js, Node.js, Express.js, .NET, and Flutter.
            Experienced in designing RESTful APIs, implementing secure authentication systems, and optimizing performance across full-stack applications.
            Strong foundation in OOP, DSA, SDLC, and Agile methodologies. Hands-on exposure to AI systems including OCR, embeddings, and RAG pipelines.
            Passionate about delivering robust, user-centric solutions from conception to deployment.
          </p>

          <div style={{display:'flex',gap:8,marginTop:12,flexWrap:'wrap'}}>
            <a href="/Miyuri_Lokuhewage_CV.pdf" download className="btn" style={{padding:'8px 10px', fontSize:14}}>Download CV</a>
          </div>
        </div>

        <div className="card video-card">
          <h3 style={{marginTop:0}}>Animation</h3>
          <div style={{marginTop:10}}>
            <video
              src="/miyu-animation.mp4"
              controls
              playsInline
              loop
              muted
              autoPlay
              style={{width:'100%',height:'auto',borderRadius:12,display:'block'}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
