import { siteConfig } from '../../data/siteConfig'

function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="container">
        <div className="resume-panel">
          <div>
            <p className="eyebrow">Resume</p>

            <h2>Professional Resume</h2>

            <p>
              Download the resume for a concise overview of
              professional experience, technical skills,
              education, and selected hands-on projects.
            </p>

            <p className="resume-note">
              The downloadable PDF will be added during final
              launch preparation so the website and resume remain
              aligned.
            </p>
          </div>

          <div className="resume-actions">
            <a
              className="button button-primary"
              href="/resume/Dhruba_Aryal_Resume.pdf"
              download
            >
              Download Resume
            </a>

            <a
              className="button button-secondary"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume