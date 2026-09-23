import ExperienceItem from '../shared/ExperienceItem'
import { professionalExperience } from '../../data/experience'

function ProfessionalExperience() {
  return (
    <section
      className="section experience-section"
      id="experience"
    >
      <div className="container">
        <header className="section-heading experience-heading">
          <p className="eyebrow">Professional Background</p>

          <h2>Professional Experience</h2>

          <p>
            Professional experience across DevOps support, software testing,
            SQL/database validation, defect management, and enterprise
            application quality. The responsibilities below reflect
            employer/client work; recent independent technical projects are
            presented separately in the Projects section.
          </p>
        </header>

        <div className="experience-context">
          <div>
            <span>Professional Employment</span>
            <strong>Documented employer/client work</strong>
          </div>

          <span
            className="experience-context-divider"
            aria-hidden="true"
          >
            ≠
          </span>

          <div>
            <span>Portfolio Projects</span>
            <strong>
              Recent independent hands-on implementation
            </strong>
          </div>
        </div>

        <div className="experience-timeline">
          {professionalExperience.map((experience) => (
            <ExperienceItem
              experience={experience}
              key={experience.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalExperience