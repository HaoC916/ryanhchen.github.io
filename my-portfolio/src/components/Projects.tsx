import './Projects.css'

type Project = {
  title: string
  period: string
  summary: string
  impact: string
  tags: string[]
  codeUrl?: string
  demoUrl?: string
}

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
    tags: ['Python', 'Apache Spark', 'ETL', 'VADER', 'Transformer']
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

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
      </div>

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

            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-summary">{project.summary}</p>
            <p className="project-card-impact">{project.impact}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects