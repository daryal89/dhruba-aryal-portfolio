import CaseStudyBlock from '../shared/CaseStudyBlock'
import WorkflowDiagram from '../shared/WorkflowDiagram'
import { devopsCaseStudy } from '../../data/devopsCaseStudy'

function DevOpsCaseStudy() {
  return (
    <section
      className="section case-study-section"
      id="devops-case-study"
    >
      <div className="container">
        <header className="case-study-header">
          <div className="case-study-header-meta">
            <span className="case-study-badge">
              {devopsCaseStudy.label}
            </span>

            <span>{devopsCaseStudy.date}</span>
          </div>

          <p className="eyebrow">
            Detailed Technical Case Study
          </p>

          <h2>{devopsCaseStudy.title}</h2>

          <p className="case-study-intro">
            {devopsCaseStudy.intro}
          </p>

          <p className="case-study-supporting">
            {devopsCaseStudy.supporting}
          </p>
        </header>

        <div className="case-study-objective">
          <div>
            <p className="case-study-eyebrow">
              Project Objective
            </p>

            <h3>
              From source change to verified production recovery
            </h3>
          </div>

          <p>{devopsCaseStudy.objective}</p>
        </div>

        <div className="case-study-workflow">
          <div className="case-study-section-heading">
            <p className="case-study-eyebrow">
              End-to-End Delivery
            </p>

            <h3>Delivery Workflow</h3>

            <p>
              The workflow connects development, automated
              validation, immutable artifacts, secure cloud
              authentication, deployment, runtime verification,
              and release management.
            </p>
          </div>

          <WorkflowDiagram
            steps={devopsCaseStudy.workflow}
            ariaLabel="Production CI/CD delivery workflow"
          />
        </div>

        <div className="case-study-grid">
          {devopsCaseStudy.sections.map((section) => (
            <CaseStudyBlock
              section={section}
              key={section.id}
            />
          ))}
        </div>

        <div className="case-study-stack">
          <div className="case-study-section-heading">
            <p className="case-study-eyebrow">
              Implementation
            </p>

            <h3>Technology Stack</h3>
          </div>

          <div className="stack-table-wrapper">
            <table className="stack-table">
              <tbody>
                {devopsCaseStudy.technologyStack.map(
                  ([area, technology]) => (
                    <tr key={area}>
                      <th scope="row">{area}</th>
                      <td>{technology}</td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="case-study-outcomes">
          <div className="case-study-section-heading">
            <p className="case-study-eyebrow">
              Evidence-Based Results
            </p>

            <h3>Key Outcomes</h3>
          </div>

          <div className="outcomes-grid">
            {devopsCaseStudy.outcomes.map(
              (outcome, index) => (
                <article
                  className="outcome-card"
                  key={outcome}
                >
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p>{outcome}</p>
                </article>
              ),
            )}
          </div>
        </div>

        <footer className="case-study-footer">
          <div>
            <p className="case-study-eyebrow">
              Explore the Implementation
            </p>

            <h3>
              Review the repository and technical evidence
            </h3>
          </div>

          <a
            className="button button-primary"
            href={devopsCaseStudy.repository}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Repository
          </a>
        </footer>
      </div>
    </section>
  )
}

export default DevOpsCaseStudy