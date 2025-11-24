import React, { useState } from 'react'

export default function About(){
  return (
    <section id="about" style={{marginTop:20}}>
      <div className="card">
        <h2>About Me</h2>
        <p className="muted">I’m a web developer focused on building accessible, performant interfaces. Replace this with your bio, background, and interests.</p>

        <div style={{display:'flex',gap:8,marginTop:12,flexWrap:'wrap'}}>
          <a href="/CV.pdf" download className="btn" style={{padding:'8px 10px', fontSize:14}}>Download CV</a>
          
        </div>
      </div>
    </section>
  )
}


