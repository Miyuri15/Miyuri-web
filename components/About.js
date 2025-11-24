import React from 'react'

export default function About() {
  return (
    <section id="about" style={{ marginTop: '4rem' }}>
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="card">
          <p className="muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Full Stack Developer with expertise in building scalable web applications using React, Next.js, Node.js, Express.js, .NET, and Flutter.
            Experienced in designing RESTful APIs, implementing secure authentication systems, and optimizing performance across full-stack applications.
            Strong foundation in OOP, DSA, SDLC, and Agile methodologies. Hands-on exposure to AI systems including OCR, embeddings, and RAG pipelines.
            Passionate about delivering robust, user-centric solutions from conception to deployment.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/Miyuri_Lokuhewage_CV.pdf" download className="btn">
              📄 Download CV
            </a>
          </div>
        </div>

        <div className="card video-card">
          <div>
            <video
              src="/miyu-animation.mp4"
              playsInline
              loop
              muted
              autoPlay
              preload="auto"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}