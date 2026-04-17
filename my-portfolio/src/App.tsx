import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App