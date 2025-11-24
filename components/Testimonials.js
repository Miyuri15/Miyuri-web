export default function Testimonials(){
  const items = [
    {name:'Client A', text:'Great work and communication.'},
    {name:'Manager B', text:'Delivered features on time and with quality.'}
  ]
  return (
    <section id="testimonials" style={{marginTop:20}}>
      <h2>Testimonials</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:8}}>
        {items.map(t=> (
          <div key={t.name} className="card">
            <p style={{margin:0}}>"{t.text}"</p>
            <div className="muted" style={{marginTop:8,fontSize:13}}>- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
