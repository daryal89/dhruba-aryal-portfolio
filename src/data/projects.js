export const projects = [
  {
    id: 'devops',
    label: 'Independent Portfolio Project',
    date: 'August 2026',
    title: 'Production CI/CD Deployment Portfolio',

    description:
      'Production-style DevOps project demonstrating a complete software-delivery workflow from source control and automated validation through Docker image publishing, secure cloud authentication, Azure deployment, post-deployment smoke testing, rollback, recovery, and release management.',

    technologies: [
      'GitHub Actions',
      'Docker',
      'GHCR',
      'Azure Container Apps',
      'OIDC',
      'Git',
      'REST API',
      'Smoke Testing',
    ],

    highlights: [
      'Secure GitHub-to-Azure OIDC authentication',
      'Immutable commit-SHA container images',
      'Automated post-deployment validation',
      'Controlled rollback and recovery workflow',
    ],

    caseStudyHref: '#devops-case-study',

    repository:
      'https://github.com/daryal89/devops-ci-cd-deployment-portfolio',
  },

  {
    id: 'qa',
    label: 'Independent Portfolio Project',
    date: 'July–August 2026',
    title: 'API, Database & CI Test Automation Portfolio',

    description:
      'End-to-end software-quality portfolio covering requirements analysis, test planning, REST API testing, PostgreSQL validation, defect reporting, Postman/Newman automation, requirements traceability, reporting, and GitHub Actions CI.',

    technologies: [
      'Postman',
      'Newman',
      'REST API',
      'SQL',
      'PostgreSQL',
      'GitHub Actions',
      'RTM',
      'JSON / JUnit',
    ],

    metrics: [
      {
        value: '35',
        label: 'Requirements',
      },
      {
        value: '25',
        label: 'Test Cases',
      },
      {
        value: '26',
        label: 'API Requests',
      },
      {
        value: '61',
        label: 'Runtime Assertions',
      },
      {
        value: '3',
        label: 'API Defects',
      },
      {
        value: '45/45',
        label: 'CI Assertions',
      },
    ],

    caseStudyHref: '#qa-case-study',

    repository:
      'https://github.com/daryal89/api-database-testing-portfolio',
  },
]