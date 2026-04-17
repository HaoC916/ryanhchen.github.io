import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-badge">Open to summer co-op opportunities</div>

      <h1 className="hero-title">
        Building scalable backend systems.
      </h1>

      <p className="hero-description">
        Focused on cloud infrastructure, distributed systems, and data engineering.
      </p>

      <div className="hero-actions">
        <a className="hero-button hero-button-primary" href="#projects">
          View Projects
        </a>

        <a className="hero-button hero-button-secondary" href="#contact">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero