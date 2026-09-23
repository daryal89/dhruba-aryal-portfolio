import WorkflowDiagram from './WorkflowDiagram'

function CaseStudyBlock({ section }) {
  return (
    <article className="case-study-block" id={section.id}>
      <p className="case-study-eyebrow">{section.eyebrow}</p>

      <h3>{section.title}</h3>

      <div className="case-study-copy">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {section.bullets && (
        <ul className="case-study-list">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {section.traceability && (
        <div className="case-study-subflow">
          <p className="case-study-subflow-label">
            Source-to-Runtime Traceability
          </p>

          <WorkflowDiagram
            steps={section.traceability}
            ariaLabel="Source-to-runtime traceability workflow"
            compact
          />
        </div>
      )}

      {section.recoveryFlow && (
        <div className="case-study-subflow">
          <p className="case-study-subflow-label">
            Recovery Cycle
          </p>

          <WorkflowDiagram
            steps={section.recoveryFlow}
            ariaLabel="Deployment recovery workflow"
            compact
          />
        </div>
      )}
    </article>
  )
}

export default CaseStudyBlock