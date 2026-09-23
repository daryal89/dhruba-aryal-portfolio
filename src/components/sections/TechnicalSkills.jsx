import SkillCategoryCard from '../shared/SkillCategoryCard'
import { skillCategories } from '../../data/skills'

function TechnicalSkills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <header className="section-heading skills-heading">
          <p className="eyebrow">Technical Capability</p>

          <h2>Technical Skills</h2>

          <p>
            My technical background combines software delivery and software
            quality. Recent hands-on portfolio work focuses on CI/CD, Docker,
            Azure deployment, REST API automation, SQL/PostgreSQL validation,
            and GitHub Actions, while prior professional experience includes
            software testing, Linux/AWS support, database validation,
            troubleshooting, and technical documentation.
          </p>
        </header>

        <div
          className="skills-legend"
          aria-label="Skill experience level legend"
        >
          <div>
            <span
              className="skill-level-indicator skill-level-recent"
              aria-hidden="true"
            />
            <span>Recent Hands-On</span>
          </div>

          <div>
            <span
              className="skill-level-indicator skill-level-professional"
              aria-hidden="true"
            />
            <span>Professional Familiarity</span>
          </div>

          <div>
            <span
              className="skill-level-indicator skill-level-developing"
              aria-hidden="true"
            />
            <span>Developing</span>
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              category={category}
              index={index}
              key={category.id}
            />
          ))}
        </div>

        <aside className="skills-note">
          <p className="case-study-eyebrow">
            Evidence Over Ratings
          </p>

          <h3>Skills are presented by demonstrated context</h3>

          <p>
            This portfolio intentionally avoids percentage bars, star ratings,
            and unsupported proficiency scores. Recent project skills,
            professional familiarity, and developing skills are identified by
            the context in which they have been used.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default TechnicalSkills