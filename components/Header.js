import ThemeToggle from './ThemeToggle'

export default function Header(){
  return (
    <header className="header">
      <div className="brand">Miyuri L.</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
