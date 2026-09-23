import { profileContent } from '../../data/profile'

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <p className="eyebrow">Professional Profile</p>

            <h2>{profileContent.about.title}</h2>

            <div className="about-copy">
              {profileContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="about-focus">
            <p className="case-study-eyebrow">
              Current Technical Focus
            </p>

            <h3>Where my experience connects</h3>

            <ul>
              {profileContent.about.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About