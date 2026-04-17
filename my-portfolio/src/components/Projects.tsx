import './Projects.css'

type Project = {
  title: string
  period: string
  description: string
  highlights: string[]
  tags: string[]
  codeUrl?: string
}

const projects: Project[] = [
  {
    title: 'Vancouver Land Value Prediction System',
    period: 'Jan 2026 – Apr 2026',
    description:
      'A full-stack property valuation system for Vancouver land value prediction using public datasets, feature engineering, and machine learning.',
    highlights: [
      'Built a REST API backend for inference and lookup workflows.',
      'Developed a React frontend with guided multi-step prediction and fuzzy address search.',
      'Worked with 1.5M+ property records and multiple public datasets.',
    ],
    tags: ['React', 'Python', 'REST API', 'Machine Learning'],
  },
  {
    title: 'Cloud Deployment & Microservices Game Backend',
    period: 'Mar 2026 – Apr 2026',
    description:
      'A distributed game backend deployed on Google Cloud with separated gameplay, telemetry, control, and monitoring services.',
    highlights: [
      'Used Nakama, PostgreSQL, FastAPI, and Docker in a microservices architecture.',
      'Compared multi-VM deployment with GKE-based Kubernetes deployment.',
      'Built Python benchmarking tools and measured sync vs async service coupling.',
    ],
    tags: ['GCP', 'Docker', 'FastAPI', 'PostgreSQL', 'Microservices'],
  },
  {
    title: 'Course Planner',
    period: 'Nov 2024 – Jan 2025',
    description:
      'A scalable backend for student course offering analytics and planning.',
    highlights: [
      'Engineered a Java Spring Boot backend exposing RESTful APIs.',
      'Parsed and aggregated 10,000+ SFU course offering records from CSV.',
      'Applied modular OOP design and MVC principles for maintainability.',
    ],
    tags: ['Java', 'Spring Boot', 'RESTful API', 'MVC'],
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <p className="projects-kicker">Selected Work</p>
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          These projects reflect my interests in backend development, cloud
          systems, and data-driven applications.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-period">{project.period}</p>
              </div>
            </div>

            <p className="project-card-description">{project.description}</p>

            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

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