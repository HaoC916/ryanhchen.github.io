import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#top">
          Ryan Chen
        </a>

        <nav className="navbar-links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/HaoC916"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar