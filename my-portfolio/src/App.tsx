import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [introDone, setIntroDone] = useState(false)

  // Lock scrolling while the intro overlay is on screen.
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [introDone])

  // Safety net: never leave the overlay stuck if a timer/transition is missed.
  useEffect(() => {
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
        <Footer />
      </main>
    </>
  )
}

export default App
