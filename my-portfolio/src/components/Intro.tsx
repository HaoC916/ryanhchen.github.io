import { useEffect, useState } from 'react'
import './Intro.css'

const greetings = ['Hello', '你好', 'Hola', 'Bonjour', '안녕하세요', 'Hello']

type IntroProps = {
  onDone: () => void
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function Intro({ onDone }: IntroProps) {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Reduced motion: skip the cycle, just hold briefly then reveal.
    if (prefersReducedMotion()) {
      const timer = setTimeout(onDone, 500)
      return () => clearTimeout(timer)
    }

    if (index < greetings.length - 1) {
      const timer = setTimeout(() => setIndex((i) => i + 1), 200)
      return () => clearTimeout(timer)
    }

    // Last greeting reached -> hold, then slide the panel up.
    const timer = setTimeout(() => setLeaving(true), 420)
    return () => clearTimeout(timer)
  }, [index, onDone])

  return (
    <div
      className={`intro${leaving ? ' intro-leaving' : ''}`}
      onTransitionEnd={(event) => {
        if (leaving && event.propertyName === 'transform') onDone()
      }}
    >
      <span className="intro-word" key={index}>
        <span className="intro-dot" aria-hidden="true" />
        {greetings[index]}
      </span>
    </div>
  )
}

export default Intro
