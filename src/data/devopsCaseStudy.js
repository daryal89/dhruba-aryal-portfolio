export const devopsCaseStudy = {
  label: 'Independent Portfolio Project',
  date: 'August 2026',

  title: 'Production CI/CD Deployment Portfolio',

  intro:
    'This project demonstrates a production-style software delivery workflow from source control through automated validation, container publishing, secure cloud authentication, deployment, post-deployment verification, rollback, recovery, and release management.',

  supporting:
  'The delivery workflow uses a containerized REST API application as the deployment target, with GitHub Actions for CI/CD, Docker for containerization, GitHub Container Registry for image storage, and Azure Container Apps for cloud deployment. The project emphasizes repeatable delivery, immutable build traceability, secure authentication, automated validation, and recovery from a controlled production failure.',

objective:
  'The objective was to build and document an end-to-end delivery workflow that goes beyond simply deploying an application. The project demonstrates how source changes move through pull-request validation, automated CI checks, container creation, secure cloud deployment, runtime verification, controlled rollback, remediation, and release management.',
  workflow: [
    'Developer Change',
    'Feature Branch',
    'Pull Request',
    'GitHub Actions CI',
    'Lint + API Tests + npm Audit',
    'Docker Build Validation',
    'Verified Container Image',
    'GitHub Container Registry',
    'Immutable Commit-SHA Tag',
    'GitHub-to-Azure OIDC',
    'Azure Container Apps',
    'Post-Deployment Smoke Tests',
    'Runtime / BUILD_ID Verification',
    'Release',
  ],

  sections: [
    {
      id: 'source-control',
      eyebrow: 'Change Management',
      title: 'Source Control & Pull Request Workflow',
      paragraphs: [
        'Development followed a Git and GitHub workflow using feature branches, pull requests, automated validation, and controlled merges.',
        'This created a documented path from source modification through validation and deployment while keeping changes traceable in version control.',
      ],
    },

    {
      id: 'continuous-integration',
      eyebrow: 'Quality Gate',
      title: 'Continuous Integration',
      paragraphs: [
        'GitHub Actions was used to automate validation before deployment. The CI workflow prevents an unvalidated source change from moving directly into the delivery process.',
      ],
      bullets: [
        'Blocking ESLint validation',
        'Automated API tests',
        'npm dependency audit',
        'Dockerfile validation',
        'Docker image build verification',
      ],
    },

    {
      id: 'containers',
      eyebrow: 'Artifact Management',
      title: 'Docker & GitHub Container Registry',
      paragraphs: [
        'The application was packaged as a Docker image and published to GitHub Container Registry.',
        'Verified builds used immutable commit-SHA image tags so a deployed container could be connected to the exact source revision that produced it.',
      ],
    },

    {
      id: 'oidc',
      eyebrow: 'Cloud Security',
      title: 'GitHub-to-Azure OIDC Authentication',
      paragraphs: [
        'Continuous deployment to Azure used federated OpenID Connect authentication between GitHub Actions and Microsoft Azure.',
        'This allowed the deployment workflow to authenticate without storing a long-lived Azure deployment credential in GitHub.',
      ],
    },

    {
      id: 'azure',
      eyebrow: 'Cloud Deployment',
      title: 'Azure Container Apps',
      paragraphs: [
        'Validated container images were deployed to Microsoft Azure Container Apps through the GitHub Actions delivery workflow.',
        'Deployment was not treated as complete simply because Azure accepted the image. Post-deployment checks verified that the expected application version was actually running.',
      ],
    },

    {
      id: 'traceability',
      eyebrow: 'Release Identity',
      title: 'Immutable Build & Runtime Traceability',
      paragraphs: [
        'The project connects Git source identity, immutable container image identity, and deployed runtime identity through commit-SHA image tags and BUILD_ID verification.',
        'This provides a verifiable path from a source revision to the running application version.',
      ],
      traceability: [
        'Git Commit',
        'SHA-Tagged Docker Image',
        'GHCR',
        'Azure Deployment',
        'Runtime BUILD_ID',
        'Verified Runtime Identity',
      ],
    },

    {
      id: 'smoke-testing',
      eyebrow: 'Post-Deployment Validation',
      title: 'Automated Smoke Testing',
      paragraphs: [
        'After deployment, automated smoke tests verified that the application was reachable and that the expected runtime configuration and build identity were present.',
        'The deployment therefore had to demonstrate runtime health after reaching the target environment rather than relying only on a successful deployment command.',
      ],
      bullets: [
        'Application availability',
        'Health endpoint validation',
        'Runtime environment verification',
        'BUILD_ID verification',
      ],
    },

    {
      id: 'controlled-failure',
      eyebrow: 'Failure Scenario',
      title: 'Controlled Production Failure',
      paragraphs: [
        'To test the recovery process rather than only the successful deployment path, a controlled application defect was introduced and allowed to move through the delivery workflow.',
        'The resulting production problem was detected through post-deployment smoke testing.',
      ],
    },

    {
      id: 'rollback',
      eyebrow: 'Recovery Control',
      title: 'Rollback to a Known-Good Image',
      paragraphs: [
        'After the unsuccessful deployment was detected, the application was rolled back to a previously verified immutable container image.',
        'Using identifiable immutable images allowed recovery to target a known-good artifact rather than rebuilding an uncertain version during the incident.',
      ],
    },

    {
      id: 'remediation',
      eyebrow: 'Source Correction',
      title: 'Remediation',
      paragraphs: [
        'After restoring the known-good version, the source defect was corrected through the normal GitHub development workflow and submitted through a pull request.',
        'The remediation followed the same controlled validation process used for other source changes.',
      ],
    },

    {
      id: 'recovery',
      eyebrow: 'Production Verification',
      title: 'Verified Recovery',
      paragraphs: [
        'The corrected version moved through validation and deployment again, followed by production verification to confirm full recovery.',
      ],
      recoveryFlow: [
        'Detect',
        'Rollback',
        'Remediate',
        'Redeploy',
        'Verify Recovery',
      ],
    },

    {
      id: 'release-management',
      eyebrow: 'Versioned Delivery',
      title: 'Release Management',
      paragraphs: [
        'The completed implementation was documented as a versioned v1.0.0 release with repository evidence covering delivery, deployment, testing, rollback, recovery, and supporting documentation.',
        'The release provides a stable technical reference point rather than relying only on the current state of the main branch.',
      ],
    },
  ],

  technologyStack: [
    ['Application', 'Containerized REST API deployment target'],
    ['Source Control', 'Git, GitHub, feature branches, pull requests'],
    ['CI/CD', 'GitHub Actions'],
    ['Containerization', 'Docker'],
    ['Container Registry', 'GitHub Container Registry (GHCR)'],
    ['Cloud', 'Microsoft Azure Container Apps'],
    ['Authentication', 'GitHub-to-Azure federated OIDC'],
    ['Traceability', 'Commit-SHA image tags + BUILD_ID'],
    ['Validation', 'CI checks, API tests, smoke tests'],
    ['Recovery', 'Immutable-image rollback + source remediation'],
    ['Release', 'Git tags/releases + v1.0.0'],
  ],

  outcomes: [
    'Built an end-to-end CI/CD workflow connecting source control, automated validation, container publishing, cloud deployment, and post-deployment verification.',
    'Implemented federated GitHub-to-Azure OIDC authentication without relying on a long-lived Azure deployment credential in GitHub.',
    'Established immutable image and runtime build traceability.',
    'Demonstrated failure detection, rollback, source remediation, redeployment, and verified recovery.',
    'Produced documented versioned release evidence suitable for technical review.',
  ],

  repository:
    'https://github.com/daryal89/devops-ci-cd-deployment-portfolio',
}