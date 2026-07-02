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
      // Jump instantly (it's a "back to where I was" restore, not an anchor
      // glide). Compute the target from the offsetTop chain, not
      // scrollIntoView: the card is mid-Reveal (translateY(22px)) when we
      // arrive, and scrollIntoView aims at that transformed position —
      // landing the card ~22px too high, flush against the navbar.
      // offsetTop ignores transforms, so this lands on the settled layout.
      const jump = () => {
        if (returnTo !== 'top') {
          const el = document.getElementById(returnTo)
          if (el instanceof HTMLElement) {
            const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
            let y = 0
            let node: HTMLElement | null = el
            while (node) {
              y += node.offsetTop
              node = node.offsetParent instanceof HTMLElement ? node.offsetParent : null
            }
            window.scrollTo({ top: y - margin, behavior: 'instant' })
            return
          }
        }
        window.scrollTo(0, 0)
      }
      requestAnimationFrame(jump)
      // One-shot, deliberately not cleared: StrictMode's dev double-mount
      // would cancel it before it can run (the flag is already consumed, so
      // the remount can't reschedule it).
      setTimeout(jump, 250)
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
        <div className="home-hero">
          <Hero />
          <Stack />
        </div>
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Home
