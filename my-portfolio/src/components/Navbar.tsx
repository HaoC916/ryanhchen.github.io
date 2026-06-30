import './Navbar.css'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('site-theme')
    if (stored === 'light' || stored === 'dark') return stored
  }
  return 'dark'
}

function Navbar() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const dark = theme === 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('site-theme', theme)
    } catch {
      // ignore storage failures
    }
  }, [theme])

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#top" aria-label="Ryan Chen — back to top">
          <span className="brand-word brand-word-name">Ryan Chen</span>
          <span className="brand-word brand-word-hi" aria-hidden="true">
            Hello!
          </span>
        </a>

        <nav className="navbar-links">
          <a href="#top">Home</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(dark ? 'light' : 'dark')}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
