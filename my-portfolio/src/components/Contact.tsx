import './Contact.css'
import { useEffect, useState } from 'react'
import { FiMail, FiArrowUpRight, FiArrowUp, FiMapPin } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

function formatVancouverTime() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Vancouver',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())
}

function useLocalTime() {
  const [time, setTime] = useState(formatVancouverTime)
  useEffect(() => {
    const id = setInterval(() => setTime(formatVancouverTime()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function Contact() {
  const time = useLocalTime()

  return (
    <section className="contact" id="contact">
      <div className="contact-aurora" aria-hidden="true" />

      <div className="contact-inner">
        <p className="contact-kicker">Get in touch</p>
        <h2 className="contact-title">Let&rsquo;s connect.</h2>
        <p className="contact-description">
          I&rsquo;m currently working as a full-stack developer and always happy
          to chat about web &amp; mobile projects, full-stack engineering, or just
          to connect.
        </p>

        <div className="contact-grid">
          <a className="contact-card" href="mailto:hca116@sfu.ca">
            <span className="contact-card-icon">
              <FiMail />
            </span>
            <span className="contact-card-body">
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">hca116@sfu.ca</span>
            </span>
            <span className="contact-card-arrow">
              <FiArrowUpRight />
            </span>
          </a>

          <a
            className="contact-card"
            href="https://github.com/HaoC916"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card-icon">
              <FaGithub />
            </span>
            <span className="contact-card-body">
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">github.com/HaoC916</span>
            </span>
            <span className="contact-card-arrow">
              <FiArrowUpRight />
            </span>
          </a>

          <div className="contact-now">
            <span className="contact-now-status">
              <span className="contact-now-dot" aria-hidden="true" />
              Available for a chat
            </span>
            <span className="contact-now-time">{time}</span>
            <span className="contact-now-place">
              <FiMapPin />
              Vancouver, Canada
            </span>
          </div>
        </div>

        <footer className="contact-foot">
          <span className="contact-foot-copy">
            © {new Date().getFullYear()} Ryan Chen · Built with React
          </span>
          <a className="contact-foot-top" href="#top">
            Back to top
            <FiArrowUp />
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Contact
