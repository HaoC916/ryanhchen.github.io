import { useEffect, useState } from 'react'
import './Intro.css'

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
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const reduce = prefersReducedMotion()
    const hold = reduce ? 300 : 900
    const slide = reduce ? 0 : 900

    const leaveTimer = setTimeout(() => setLeaving(true), hold)
    const doneTimer = setTimeout(onDone, hold + slide + 50)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`intro${leaving ? ' intro-leaving' : ''}`}>
      <span className="intro-word">
        <span className="intro-dot" aria-hidden="true" />
        Hello
      </span>
    </div>
  )
}

export default Intro
