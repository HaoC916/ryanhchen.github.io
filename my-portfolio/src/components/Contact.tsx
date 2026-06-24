import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <p className="contact-kicker">Get in touch</p>
        <h2 className="contact-title">Let’s connect.</h2>
        <p className="contact-description">
          I’m currently working as a full-stack developer and always happy to
          chat about web &amp; mobile projects, full-stack engineering, or just
          to connect.
        </p>

        <div className="contact-links">
          <a href="mailto:hca116@sfu.ca">hca116@sfu.ca</a>
          <a
            href="https://github.com/HaoC916"
            target="_blank"
            rel="noreferrer"
          >
            github.com/HaoC916
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact