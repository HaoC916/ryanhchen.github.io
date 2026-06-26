import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Hero from '../components/Hero'
import Stack from '../components/Stack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function Home() {
  // Skip the intro when we're returning from a project page (a one-shot flag
  // set by the detail page). A fresh load / refresh still plays it.
  const [introDone, setIntroDone] = useState(
    () => typeof window !== 'undefined' && !!sessionStorage.getItem('returnTo'),
  )

  // Lock scrolling while the intro overlay is on screen.
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [introDone])

  useEffect(() => {
    const returnTo = sessionStorage.getItem('returnTo')
    if (returnTo) {
      sessionStorage.removeItem('returnTo')
      requestAnimationFrame(() => {
        if (returnTo !== 'top') {
          const el = document.getElementById(returnTo)
          if (el) {
            el.scrollIntoView()
            return
          }
        }
        window.scrollTo(0, 0)
      })
      return
    }

    // Fresh visit: start at the top and let the intro play, with a safety net.
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setIntroDone(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Navbar />
      <main className={introDone ? 'is-ready' : ''}>
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Home
