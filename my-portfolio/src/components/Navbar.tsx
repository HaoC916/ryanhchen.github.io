import './Navbar.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('site-theme')
    if (stored === 'light' || stored === 'dark') return stored
  }
  return 'light'
}

function Navbar() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const dark = theme === 'dark'
  const [greeting, setGreeting] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Measure the navbar's real rendered height (it changes between the
  // single-row desktop layout and the stacked two-row mobile layout) so the
  // home first screen can size itself exactly, instead of guessing a fixed
  // px value that drifts a few pixels and lets the next section peek in.
  useLayoutEffect(() => {
    const el = navRef.current
    if (!el) return
    const setVar = () => {
      document.documentElement.style.setProperty('--nav-h', `${el.offsetHeight}px`)
    }
    setVar()
    const ro = new ResizeObserver(setVar)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('site-theme', theme)
    } catch {
      // ignore storage failures
    }
  }, [theme])

  // Cycle the brand between "Ryan Chen" and the greeting on its own, on both
  // desktop and mobile (hover still shows the greeting immediately too).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setGreeting((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar-inner">
        <a
          className={`navbar-brand${greeting ? ' is-greeting' : ''}`}
          href="#top"
          aria-label="Ryan Chen — back to top"
        >
          <span className="brand-word brand-word-name">Ryan Chen</span>
          <span className="brand-word brand-word-hi" aria-hidden="true">
            <span className="brand-hi-text">Hello! Nice to see you here</span>
            <span className="brand-hi-emoji">&nbsp;😊</span>
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
