import ProjectCard from '../shared/ProjectCard'
import { projects } from '../../data/projects'

function FeaturedProjects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Recent Hands-On Work</p>

          <h2>Featured Projects</h2>

          <p>
            Recent hands-on projects demonstrating practical DevOps, CI/CD,
            software testing, API automation, database validation, and
            release-quality workflows. Each project includes documented
            implementation details, technical evidence, and reproducible
            artifacts.
          </p>
        </div>

        <div className="projects-grid">
          <ProjectCard project={projects[0]} featured />
          <ProjectCard project={projects[1]} />
        </div>

        <div className="project-context-note">
          <strong>Portfolio transparency:</strong>

          <p>
            These are independent hands-on portfolio projects and are presented
            separately from professional employer/client experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects