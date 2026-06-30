import './ProjectDetail.css'
import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { getProject } from '../data/projects'
import Tags from '../components/Tags'

function goHome(section: 'top' | 'projects') {
  sessionStorage.setItem('returnTo', section)
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) {
      document.title = `${project.title} — Ryan Chen`
    }
    return () => {
      document.title = 'Hello — Ryan Chen'
    }
  }, [project])

  // Detail pages keep their original light design regardless of the site-wide
  // light/dark preference (which lives on the home page).
  useEffect(() => {
    document.documentElement.dataset.theme = 'light'
  }, [])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={`detail detail-tone-${project.tone}`}>
      <header className="detail-bar">
        <Link className="detail-brand" to="/" onClick={() => goHome('top')}>
          Ryan Chen
        </Link>
        <Link className="detail-back" to="/" onClick={() => goHome('projects')}>
          <FiArrowLeft />
          Back to projects
        </Link>
      </header>

      <main className="detail-main">
        <div className="detail-glow" aria-hidden="true" />

        <p className="detail-eyebrow">
          <span className={`project-cat project-cat-${project.tone}`}>
            {project.category}
          </span>
          <span className="detail-period">{project.period}</span>
        </p>

        <h1 className="detail-title title-shine">{project.title}</h1>
        <p className="detail-blurb">{project.blurb}</p>

        {(project.repoUrl || project.demoUrl) && (
          <div className="detail-actions">
            {project.repoUrl && (
              <a
                className="detail-btn detail-btn-primary"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
                View code
              </a>
            )}
            {project.demoUrl && (
              <a
                className="detail-btn detail-btn-secondary"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
                <FiArrowUpRight />
              </a>
            )}
          </div>
        )}

        <section className="detail-section">
          <h2 className="detail-h2">Overview</h2>
          {project.overview.map((paragraph) => (
            <p className="detail-p" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        <section className="detail-section">
          <h2 className="detail-h2">Highlights</h2>
          <ul className="detail-highlights">
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2 className="detail-h2">Tech stack</h2>
          <Tags tags={project.tags} />
        </section>

        <Link className="detail-back detail-back-foot" to="/" onClick={() => goHome('projects')}>
          <FiArrowLeft />
          Back to all projects
        </Link>
      </main>
    </div>
  )
}

export default ProjectDetail
