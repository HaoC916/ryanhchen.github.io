import './Footer.css'
import { FiArrowUp } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name" aria-hidden="true">
        RYAN CHEN
      </div>

      <div className="footer-meta">
        <span className="footer-copy">
          © {new Date().getFullYear()} Ryan Chen · Built with React
        </span>

        <a className="footer-top" href="#top">
          Back to top
          <FiArrowUp />
        </a>
      </div>
    </footer>
  )
}

export default Footer
