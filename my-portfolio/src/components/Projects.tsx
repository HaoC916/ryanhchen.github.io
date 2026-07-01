import './Projects.css'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'
import Tags from './Tags'
import { projects } from '../data/projects'

type Experience = {
  role: string
  period: string
  summary: string
  impact: string
  tags: string[]
}

const experience: Experience[] = [
  {
    role: 'Full-Stack Developer',
    period: 'May 2026 – Present',
    summary:
      'Shipping production features across web and mobile alongside the engineering team — the kind real users actually touch.',
    impact:
      'Working end to end: React and React Native on the front, Node.js and Express APIs on the back, PostgreSQL underneath.',
    tags: ['React Native', 'Node.js', 'Express.js', 'PostgreSQL'],
  },
  {
    role: 'E-commerce Developer',
    period: 'May 2024 – May 2026',
    summary:
      'Built and looked after Shopify storefronts, tuning themes until the shopping experience actually felt good to use.',
    impact:
      'Wrote custom Shopify Liquid sections and small Python scripts to automate product imports and order reports — less manual busywork for the team.',
    tags: ['HTML/CSS', 'JavaScript', 'Shopify Liquid', 'Python'],
  },
]

function Projects() {
  return (
    <section className="projects" id="work">
      <Reveal>
        <div className="projects-header">
          <h2 className="projects-title title-shine">Work &amp; Projects</h2>
        </div>
      </Reveal>

      <div className="projects-group">
        <h3 className="group-title">
          <span className="group-title-dot" aria-hidden="true" />
          Experience
        </h3>

        <ol className="timeline">
          {experience.map((exp) => (
            <li className="timeline-item" key={exp.role}>
              <p className="timeline-period">{exp.period}</p>
              <h4 className="timeline-role">{exp.role}</h4>
              <p className="timeline-summary">{exp.summary}</p>
              <p className="timeline-impact">{exp.impact}</p>
              <Tags tags={exp.tags} />
            </li>
          ))}
        </ol>
      </div>

      <div className="projects-group" id="projects">
        <h3 className="group-title">
          <span className="group-title-dot" aria-hidden="true" />
          Projects
        </h3>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <Link
                className={`project-card project-tone-${project.tone}`}
                to={`/projects/${project.slug}`}
                aria-label={`${project.title} — view details`}
              >
                <span className="project-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="project-card-head">
                  <span className={`project-cat project-cat-${project.tone}`}>
                    {project.category}
                  </span>
                </div>

                <h4 className="project-card-title">{project.title}</h4>
                <p className="project-card-blurb">{project.blurb}</p>

                <ul className="project-highlights">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-card-foot">
                  <Tags tags={project.tags} />
                  <span className="project-card-cta" aria-hidden="true">
                    View project
                    <FiArrowUpRight />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
