import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />

      <h1 className="hero-title">
        <span className="hero-line title-shine">Hi, I am Ryan</span>
        <span className="hero-line title-shine">A Full-Stack Developer</span>
      </h1>

      <div className="hero-actions">
        <a className="hero-button hero-button-primary" href="#projects">
          View Projects
        </a>

        <a className="hero-button hero-button-secondary" href="#contact">
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Hero
