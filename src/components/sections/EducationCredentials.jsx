import { profileContent } from '../../data/profile'

function EducationCredentials() {
  return (
    <section
      className="section education-section"
      id="education"
    >
      <div className="container">
        <header className="section-heading education-heading">
          <p className="eyebrow">
            Education & Credentials
          </p>

          <h2>Engineering Foundation</h2>

          <p>
            Formal engineering education and professional
            credentialing complement my software testing,
            DevOps, cloud, and quality-engineering experience.
          </p>
        </header>

        <div className="credentials-grid">
          {profileContent.educationCredentials.map(
            (credential, index) => (
              <article
                className="credential-card"
                key={credential.title}
              >
                <div className="credential-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <p className="credential-type">
                  {credential.type}
                </p>

                <h3>{credential.title}</h3>

                <p className="credential-organization">
                  {credential.organization}
                </p>

                <p className="credential-detail">
                  {credential.detail}
                </p>

                <p className="credential-description">
                  {credential.description}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default EducationCredentials