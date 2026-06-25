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
  category: string
  tone: string
  blurb: string
  highlights: string[]
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
    tags: ['React', 'React Native', 'Node.js', 'Express.js', 'PostgreSQL'],
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

const projects: Project[] = [
  {
    title: 'Vancouver Land Value Prediction System',
    period: 'Jan 2026 – Apr 2026',
    category: 'Full-Stack · ML',
    tone: 'fullstack',
    blurb:
      'Punch in a Vancouver address and get back what the land underneath is likely worth — backed by real municipal data and a model that learned from it.',
    highlights: [
      'Cleaned and reshaped 1.5M+ property records into a training set the model could actually learn from.',
      'Wired the whole path together: a REST API serving predictions to a React UI where you explore estimates on a map.',
    ],
    tags: ['React', 'Python', 'REST API', 'Machine Learning'],
  },
  {
    title: 'Cloud Deployment & Microservices Game Backend',
    period: 'Mar 2026 – Apr 2026',
    category: 'Cloud & DevOps',
    tone: 'cloud',
    blurb:
      'A multiplayer game backend deliberately torn into separate services and deployed to Google Cloud, just to see how it holds up under pressure.',
    highlights: [
      'Split gameplay, telemetry, and control into independent services so each can scale — and fail — on its own.',
      'Benchmarked multi-VM against Kubernetes and sync against async coupling to find where the real bottlenecks lived.',
    ],
    tags: ['GCP', 'Docker', 'FastAPI', 'PostgreSQL', 'Microservices'],
  },
  {
    title: 'Reddit Political Sentiment Analysis',
    period: 'Sep 2025 – Dec 2025',
    category: 'Data Engineering',
    tone: 'data',
    blurb:
      'Took a firehose of Reddit comments and turned it into a read on how Canadians felt heading into the 2025 election.',
    highlights: [
      'Streamed and compressed 225GB+ of raw dumps (1B+ comments) down to a focused dataset with Python, Zstandard, and Spark.',
      'Scored sentiment with VADER and transformer models, then checked it against real polls to see how closely online mood tracked reality.',
    ],
    tags: ['Python', 'Apache Spark', 'ETL', 'VADER', 'Transformer'],
  },
  {
    title: 'Course Planner',
    period: 'Nov 2024 – Jan 2025',
    category: 'Backend',
    tone: 'backend',
    blurb:
      'A backend that makes a sprawling university course catalog searchable, so students can plan a semester without losing their minds.',
    highlights: [
      'Designed RESTful Spring Boot services that query 10,000+ course offerings without breaking a sweat.',
      'Kept it modular with a clean MVC split so new query features slot in without rewrites.',
    ],
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
            <Reveal key={project.title} delay={index * 80}>
              <article className={`project-card project-tone-${project.tone}`}>
                <span className="project-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="project-card-head">
                  <span className="project-period">{project.period}</span>
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

                <Tags tags={project.tags} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
