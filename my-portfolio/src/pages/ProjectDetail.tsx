import './ProjectDetail.css'
import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight, FiMoon, FiSun } from 'react-icons/fi'
import { getProject } from '../data/projects'
import Tags from '../components/Tags'
import { useSiteTheme } from '../hooks/useSiteTheme'

/* target is an element id on the home page ('top' means plain top). Back links
   pass the specific project card's id, so returning lands on the card you
   entered from rather than the top of the Projects section. */
function goHome(target: string) {
  sessionStorage.setItem('returnTo', target)
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const { dark, toggle } = useSiteTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) {
      document.title = `${project.title} — Ryan Chen`
    }
    return () => {
      document.title = 'Hello — Ryan Chen'
    }
  }, [project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={`detail detail-tone-${project.tone}`}>
      <header className="detail-bar">
        <Link className="detail-brand" to="/" onClick={() => goHome('top')}>
          Ryan Chen
        </Link>
        <div className="detail-bar-actions">
          <Link
            className="detail-back"
            to="/"
            onClick={() => goHome(`project-${project.slug}`)}
          >
            <FiArrowLeft />
            Back to projects
          </Link>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      <main className="detail-main">
        <div className="detail-glow" aria-hidden="true" />

        <p className="detail-eyebrow">
          <span className={`project-cat project-cat-${project.tone}`}>
            {project.category}
          </span>
        </p>

        <h1 className="detail-title title-shine">{project.title}</h1>
        <p className="detail-blurb">{project.blurb}</p>

        {project.demoUrl && (
          <div className="detail-actions">
            <a
              className="detail-btn detail-btn-primary"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
              <FiArrowUpRight />
            </a>
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

        <Link
          className="detail-back detail-back-foot"
          to="/"
          onClick={() => goHome(`project-${project.slug}`)}
        >
          <FiArrowLeft />
          Back to all projects
        </Link>
      </main>
    </div>
  )
}

export default ProjectDetail
