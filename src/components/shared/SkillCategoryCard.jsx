function SkillCategoryCard({ category, index }) {
  return (
    <article className="skill-category-card">
      <div className="skill-card-header">
        <span className="skill-card-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      </div>

      <div className="skill-groups">
        {category.groups.map((group) => (
          <div className="skill-group" key={group.label}>
            <div className="skill-group-heading">
              <span
                className={`skill-level-indicator skill-level-${group.level}`}
                aria-hidden="true"
              />

              <span>{group.label}</span>
            </div>

            <div
              className="skill-tags"
              aria-label={`${category.title}: ${group.label}`}
            >
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default SkillCategoryCard