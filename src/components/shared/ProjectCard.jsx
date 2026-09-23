function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`project-card ${featured ? 'project-card-featured' : ''}`}
    >
      <div className="project-card-top">
        <div>
          <p className="project-label">{project.label}</p>
          <p className="project-date">{project.date}</p>
        </div>

        <span className="project-number">
          {project.id === 'devops' ? '01' : '02'}
        </span>
      </div>

      <h3>{project.title}</h3>

      <p className="project-description">{project.description}</p>

      <div className="tech-tags" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <span className="tech-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      {project.highlights && (
        <div className="project-highlights">
          <p className="project-subheading">Key Evidence</p>

          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {project.metrics && (
  <>
    <div className="project-metrics">
      {project.metrics.map((metric) => (
        <div className="metric-card" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>

    {project.id === 'qa' && (
      <p className="metrics-note">
        Complete suite: 61 runtime assertions with documented known findings.
        Stable CI gate: 45/45 assertions passed.
      </p>
    )}
  </>
)}

      <div className="project-actions">
        <a
          className="button button-primary"
          href={project.caseStudyHref}
        >
          View Case Study
        </a>

        <a
          className="button button-secondary"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Repository
        </a>
      </div>
    </article>
  )
}

export default ProjectCard