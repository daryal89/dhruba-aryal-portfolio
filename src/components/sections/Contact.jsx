import { siteConfig } from '../../data/siteConfig'

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>

          <h2>Let&apos;s Connect</h2>

          <p>
            I&apos;m open to remote U.S. opportunities across
            QA automation, software testing, DevOps / cloud
            delivery, API and database validation, and related
            technical roles.
          </p>

          <p className="contact-location">
            {siteConfig.location}
          </p>
        </div>

        <div className="contact-links">
          <a
            className="contact-card"
            href={`mailto:${siteConfig.email}`}
          >
            <span>Email</span>
            <strong>{siteConfig.email}</strong>
          </a>

          <a
            className="contact-card"
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>linkedin.com/in/dhruba-aryal</strong>
          </a>

          <a
            className="contact-card"
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>github.com/daryal89</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact