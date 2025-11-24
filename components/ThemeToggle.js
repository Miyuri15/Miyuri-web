import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  // Initialize theme on client only to avoid hydration mismatch
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const initial = saved || 'dark'
    setTheme(initial)
    document.body.setAttribute('data-theme', initial)
    setMounted(true)
  }, [])

  // Persist changes after mounted
  useEffect(() => {
    if (!mounted) return
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  // Avoid rendering theme-dependent text on the server — render neutral label until mounted
  const label = mounted ? (theme === 'dark' ? '☀️ Light' : '🌙 Dark') : '🎨 Theme'

  return (
    <button 
      aria-label="Toggle theme" 
      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} 
      className="btn" 
      style={{ padding: '0.75rem 1rem', fontSize: '0.875rem' }}
    >
      {label}
    </button>
  )
}