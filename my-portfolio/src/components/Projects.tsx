import './Projects.css'
import Reveal from './Reveal'

type Experience = {
  role: string
  period: string
  summary: string
  impact: string
  tags: string[]
}

type Project = {
  title: string
  period: string
  summary: string
  impact: string
  tags: string[]
  codeUrl?: string
  demoUrl?: string
}

const experience: Experience[] = [
  {
    role: 'Full-Stack Developer',
    period: 'May 2026 - Present',
    summary:
      'Building and shipping production features across web and mobile as part of an engineering team.',
    impact:
      'Working end-to-end with React, React Native, Node.js, and Express.js on real user-facing products.',
    tags: ['React', 'React Native', 'Node.js', 'Express.js', 'PostgreSQL'],
  },
  {
    role: 'E-commerce Developer',
    period: 'May 2024 - May 2026',
    summary:
      'Built and maintained Shopify storefronts, customizing themes to improve the online shopping experience.',
    impact:
      'Developed custom Shopify Liquid sections and small Python scripts to automate product imports and order reports.',
    tags: ['HTML/CSS', 'JavaScript', 'Shopify Liquid', 'Python'],
  },
]

const projects: Project[] = [
  {
    title: 'Vancouver Land Value Prediction System',
    period: 'Jan 2026 - Apr 2026',
    summary:
      'A full-stack property valuation system for Vancouver land value prediction using public datasets and machine learning.',
    impact:
      'Built a React frontend and REST API workflow on top of 1.5M+ property records.',
    tags: ['React', 'Python', 'REST API', 'Machine Learning'],
  },
  {
    title: 'Cloud Deployment & Microservices Game Backend',
    period: 'Mar 2026 - Apr 2026',
    summary:
      'A distributed game backend deployed on Google Cloud with separated gameplay, telemetry, and control services.',
    impact:
      'Compared multi-VM and Kubernetes-based deployment while benchmarking sync vs async service coupling.',
    tags: ['GCP', 'Docker', 'FastAPI', 'PostgreSQL', 'Microservices'],
  },
  {
    title: 'Reddit Political Sentiment Analysis',
    period: 'Sep 2025 - Dec 2025',
    summary:
      'A large-scale political sentiment analysis pipeline built on Reddit data to study online sentiment during the 2025 Canada election.',
    impact:
      'Reduced 225GB+ raw Reddit data and 1B+ comments into a compact political text dataset using Python streaming, Zstandard, and Apache Spark, then analyzed sentiment trends against polling signals.',
    tags: ['Python', 'Apache Spark', 'ETL', 'VADER', 'Transformer'],
  },
  {
    title: 'Course Planner',
    period: 'Nov 2024 - Jan 2025',
    summary:
      'A backend system for student course offering analytics and planning.',
    impact:
      'Designed RESTful APIs and modular Java Spring Boot services for querying 10,000+ course records.',
    tags: ['Java', 'Spring Boot', 'RESTful API', 'MVC'],
  },
]

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="project-tags">
      {tags.map((tag) => (
        <span className="project-tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function Projects() {
  return (
    <section className="projects" id="projects">
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

      <div className="projects-group">
        <h3 className="group-title">
          <span className="group-title-dot" aria-hidden="true" />
          Projects
        </h3>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <p className="project-card-period">{project.period}</p>

                <div className="project-card-links">
                  {project.codeUrl && (
                    <a
                      className="project-link"
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      className="project-link"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>

              <h4 className="project-card-title">{project.title}</h4>
              <p className="project-card-summary">{project.summary}</p>
              <p className="project-card-impact">{project.impact}</p>

              <Tags tags={project.tags} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
