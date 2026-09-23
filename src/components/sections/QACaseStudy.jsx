import CaseStudyBlock from '../shared/CaseStudyBlock'
import WorkflowDiagram from '../shared/WorkflowDiagram'
import { qaCaseStudy } from '../../data/qaCaseStudy'

function QACaseStudy() {
  return (
    <section
      className="section case-study-section qa-case-study-section"
      id="qa-case-study"
    >
      <div className="container">
        <header className="case-study-header">
          <div className="case-study-header-meta">
            <span className="case-study-badge">
              {qaCaseStudy.label}
            </span>

            <span>{qaCaseStudy.date}</span>
          </div>

          <p className="eyebrow">
            Detailed Technical Case Study
          </p>

          <h2>{qaCaseStudy.title}</h2>

          <p className="case-study-intro">
            {qaCaseStudy.intro}
          </p>

          <p className="case-study-supporting">
            {qaCaseStudy.supporting}
          </p>
        </header>

        <div className="qa-metrics-grid">
          {qaCaseStudy.metrics.map((metric) => (
            <article
              className="qa-metric-card"
              key={metric.label}
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>

        <div className="case-study-objective">
          <div>
            <p className="case-study-eyebrow">
              Project Objective
            </p>

            <h3>
              Trace quality from requirements through automated CI
            </h3>
          </div>

          <p>{qaCaseStudy.objective}</p>
        </div>

        <div className="case-study-workflow">
          <div className="case-study-section-heading">
            <p className="case-study-eyebrow">
              End-to-End QA Process
            </p>

            <h3>QA Workflow</h3>

            <p>
              The workflow connects requirements, test design,
              API execution, backend validation, defect evidence,
              automation, CI, reporting, and traceability.
            </p>
          </div>

          <WorkflowDiagram
            steps={qaCaseStudy.workflow}
            ariaLabel="End-to-end QA workflow"
          />
        </div>

        <div className="qa-suite-section">
          <div className="case-study-section-heading">
            <p className="case-study-eyebrow">
              Execution Context
            </p>

            <h3>Complete Testing vs Stable CI Gate</h3>

            <p>
              Known product findings are intentionally preserved
              in the complete test suite while a separate stable
              collection provides the blocking CI quality gate.
            </p>
          </div>

          <div className="qa-suite-comparison">
            <article className="qa-suite-card">
              <p className="qa-suite-label">
                Full Test Evidence
              </p>

              <h4>{qaCaseStudy.fullSuite.title}</h4>

              <p>{qaCaseStudy.fullSuite.description}</p>

              <ul>
                {qaCaseStudy.fullSuite.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>

            <article className="qa-suite-card qa-suite-card-ci">
              <p className="qa-suite-label">
                Blocking Automation
              </p>

              <h4>{qaCaseStudy.ciSuite.title}</h4>

              <p>{qaCaseStudy.ciSuite.description}</p>

              <ul>
                {qaCaseStudy.ciSuite.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="qa-distinction-callout">
            <strong>Known Product Finding</strong>
            <span aria-hidden="true">≠</span>
            <strong>Broken CI Pipeline</strong>
          </div>
        </div>

        <div className="case-study-grid">
          {qaCaseStudy.sections.map((section) => (
            <CaseStudyBlock
              section={section}
              key={section.id}
            />
          ))}
        </div>

        <div className="qa-ci-workflow">
          <div className="case-study-section-heading">
            <p className="case-study-eyebrow">
              Automated Quality Gate
            </p>

            <h3>CI Execution Flow</h3>

            <p>
              Newman executes the stable API collection inside
              GitHub Actions and blocks the workflow when the
              quality gate does not pass.
            </p>
          </div>

          <WorkflowDiagram
            steps={qaCaseStudy.ciWorkflow}
            ariaLabel="QA continuous integration quality gate"
            compact
          />
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
                {qaCaseStudy.technologyStack.map(
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
            {qaCaseStudy.outcomes.map(
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
              Explore the Testing Evidence
            </p>

            <h3>
              Review the repository, test artifacts, and documentation
            </h3>
          </div>

          <a
            className="button button-primary"
            href={qaCaseStudy.repository}
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

export default QACaseStudy