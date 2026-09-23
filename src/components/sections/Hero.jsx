import { siteConfig } from '../../data/siteConfig'

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Technology & Engineering Professional</p>

          <h1>{siteConfig.name}</h1>

          <h2 className="hero-headline">{siteConfig.headline}</h2>

          <p className="hero-summary">{siteConfig.heroSummary}</p>

          <p className="hero-supporting">{siteConfig.heroSupporting}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>

            <a className="button button-secondary" href="#resume">
              Download Resume
            </a>
          </div>

          <div className="hero-links" aria-label="Professional links">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href={`mailto:${siteConfig.email}`}>
              Email
            </a>
          </div>

          <p className="hero-location">{siteConfig.location}</p>
        </div>

        <aside className="hero-panel" aria-label="Portfolio focus">
          <p className="panel-label">Portfolio Focus</p>

          <div className="focus-item">
            <span>01</span>
            <div>
              <strong>Software Delivery</strong>
              <p>
                CI/CD, containers, cloud deployment and release validation.
              </p>
            </div>
          </div>

          <div className="focus-item">
            <span>02</span>
            <div>
              <strong>Software Quality</strong>
              <p>
                API testing, SQL validation, automation and quality gates.
              </p>
            </div>
          </div>

          <div className="focus-item">
            <span>03</span>
            <div>
              <strong>Evidence-Based Work</strong>
              <p>
                Documented projects, reproducible workflows and technical
                evidence.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero