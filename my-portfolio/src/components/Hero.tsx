import './Hero.css'
import heroPortrait from '../assets/hero.png'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />

      <p className="hero-status">
        <span className="hero-status-dot" aria-hidden="true" />
        Currently building as a Full-Stack Developer
      </p>

      <h1 className="hero-title">
        Hi, I&rsquo;m Ryan,
        <span className="hero-avatar">
          <img src={heroPortrait} alt="Portrait of Ryan Chen" />
        </span>{' '}
        a Full-Stack Developer
      </h1>

      <p className="hero-description">
        I build end-to-end products across web and mobile &mdash; from React and
        React Native front-ends to Node.js and Express.js back-ends. I recently
        started a summer co-op, where I ship production features across the stack.
      </p>

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
