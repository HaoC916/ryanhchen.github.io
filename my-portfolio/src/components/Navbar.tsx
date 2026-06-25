import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#top">
          Ryan Chen
        </a>

        <nav className="navbar-links">
          <a href="#stack">Stack</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
