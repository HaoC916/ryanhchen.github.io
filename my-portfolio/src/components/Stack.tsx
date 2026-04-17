import './Stack.css'
import type { ReactNode } from 'react'

import {
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiGooglecloud,
  SiGit,
  SiApachespark,
  SiMongodb,
  SiCplusplus,
} from 'react-icons/si'

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
  { name: 'React', icon: <SiReact />, tone: 'stack-pill-react' },
  { name: 'TypeScript', icon: <SiTypescript />, tone: 'stack-pill-ts' },
  { name: 'Node.js', icon: <SiNodedotjs />, tone: 'stack-pill-node' },
  { name: 'REST APIs', icon: <span className="stack-text-icon">API</span>, tone: 'stack-pill-api' },
  { name: 'Docker', icon: <SiDocker />, tone: 'stack-pill-docker' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, tone: 'stack-pill-postgres' },
  { name: 'MongoDB', icon: <SiMongodb />, tone: 'stack-pill-mongo' },
  { name: 'Spark', icon: <SiApachespark />, tone: 'stack-pill-spark' },
  { name: 'AWS', icon: <FaAws />, tone: 'stack-pill-aws' },
  { name: 'GCP', icon: <SiGooglecloud />, tone: 'stack-pill-gcp' },
  { name: 'Git/GitHub', icon: <SiGit />, tone: 'stack-pill-git' },
]

function Stack() {
  const loopItems = [...stackItems, ...stackItems]

  return (
    <section className="stack" id="stack">
      <div className="stack-header">
        <h2 className="stack-title">Technology Stack</h2>
      </div>

      <div className="stack-marquee">
        <div className="stack-track">
          {loopItems.map((item, index) => (
            <div className={`stack-pill ${item.tone}`} key={`${item.name}-${index}`}>
              <span className="stack-pill-icon">{item.icon}</span>
              <span className="stack-pill-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack