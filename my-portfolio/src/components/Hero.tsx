import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-badge">Open to software opportunities</div>

      <h1 className="hero-title">
        Building backend systems
        <br />
        and practical software.
      </h1>

      <p className="hero-description">
        I am Ryan Chen, a computing science graduate student focused on backend
        development, cloud systems, and data-driven applications. I enjoy
        building software that is reliable, clear, and useful.
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