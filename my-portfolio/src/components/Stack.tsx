import './Stack.css'
import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

import {
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiPostgresql,
  SiGooglecloud,
  SiGit,
  SiApachespark,
  SiMongodb,
  SiCplusplus,
} from 'react-icons/si'

import { TbBrandReactNative } from 'react-icons/tb'

import {
  FaJava,
  FaAws,
  FaLeaf,
} from 'react-icons/fa'

type StackItem = {
  name: string
  icon: ReactNode
  tone: string
}

const stackItems: StackItem[] = [
  { name: 'Java', icon: <FaJava />, tone: 'stack-pill-java' },
  { name: 'Spring Boot', icon: <FaLeaf />, tone: 'stack-pill-spring' },
  { name: 'Python', icon: <SiPython />, tone: 'stack-pill-python' },
  { name: 'C/C++', icon: <SiCplusplus />, tone: 'stack-pill-cpp' },
  { name: 'TypeScript', icon: <SiTypescript />, tone: 'stack-pill-ts' },
  { name: 'React', icon: <SiReact />, tone: 'stack-pill-react' },
  { name: 'React Native', icon: <TbBrandReactNative />, tone: 'stack-pill-rn' },
  { name: 'Node.js', icon: <SiNodedotjs />, tone: 'stack-pill-node' },
  { name: 'Express.js', icon: <SiExpress />, tone: 'stack-pill-express' },
  { name: 'REST APIs', icon: <span className="stack-text-icon">API</span>, tone: 'stack-pill-api' },
  { name: 'Docker', icon: <SiDocker />, tone: 'stack-pill-docker' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, tone: 'stack-pill-postgres' },
  { name: 'MongoDB', icon: <SiMongodb />, tone: 'stack-pill-mongo' },
  { name: 'Spark', icon: <SiApachespark />, tone: 'stack-pill-spark' },
  { name: 'AWS', icon: <FaAws />, tone: 'stack-pill-aws' },
  { name: 'GCP', icon: <SiGooglecloud />, tone: 'stack-pill-gcp' },
  { name: 'Git/GitHub', icon: <SiGit />, tone: 'stack-pill-git' },
]

function Row({ items }: { items: StackItem[] }) {
  const loop = [...items, ...items]
  return (
    <div className="stack-track">
      {loop.map((item, index) => (
        <div className={`stack-pill ${item.tone}`} key={`${item.name}-${index}`}>
          <span className="stack-pill-icon">{item.icon}</span>
          <span className="stack-pill-text">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

function Stack() {
  const tiltRef = useRef<HTMLDivElement>(null)

  // Tilt the marquee based on scroll velocity + direction, easing back to flat.
  useEffect(() => {
    const el = tiltRef.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let velocity = 0
    let lastY = window.scrollY
    let frame = 0
    let running = false

    const render = () => {
      velocity *= 0.9
      const rotate = Math.max(-3.5, Math.min(3.5, velocity * 0.22))
      const skew = Math.max(-9, Math.min(9, velocity * 0.55))
      el.style.transform = `rotate(${rotate}deg) skewX(${skew}deg)`

      if (Math.abs(velocity) > 0.05) {
        frame = requestAnimationFrame(render)
      } else {
        el.style.transform = 'rotate(0deg) skewX(0deg)'
        running = false
      }
    }

    const onScroll = () => {
      const y = window.scrollY
      velocity += y - lastY
      velocity = Math.max(-60, Math.min(60, velocity))
      lastY = y
      if (!running) {
        running = true
        frame = requestAnimationFrame(render)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="stack" id="stack">
      <div className="stack-header">
        <h2 className="stack-title">Tech Stack</h2>
      </div>

      <div className="stack-marquee">
        <div className="stack-tilt" ref={tiltRef}>
          <Row items={stackItems} />
        </div>
      </div>
    </section>
  )
}

export default Stack
