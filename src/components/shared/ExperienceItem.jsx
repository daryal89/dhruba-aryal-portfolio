function ExperienceItem({ experience }) {
  return (
    <article className="experience-item">
      <div className="experience-timeline-marker">
        <span>{experience.number}</span>
      </div>

      <div className="experience-card">
        <header className="experience-header">
          <div>
            <p className="experience-employer">
              {experience.employer}
            </p>

            <h3>{experience.title}</h3>

            {experience.client && (
              <p className="experience-client">
                Client / Assignment: {experience.client}
              </p>
            )}
          </div>

          <div className="experience-meta">
            <span>{experience.dates}</span>
            <span>{experience.location}</span>
            <span>{experience.arrangement}</span>
          </div>
        </header>

        <p className="experience-summary">
          {experience.summary}
        </p>

        <div className="experience-details">
          <div>
            <p className="experience-subheading">
              Responsibilities
            </p>

            <ul className="experience-responsibilities">
              {experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="experience-subheading">
              Technologies & Practices
            </p>

            <div className="experience-tags">
              {experience.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ExperienceItem