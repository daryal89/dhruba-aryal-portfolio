export const qaCaseStudy = {
  label: 'Independent Portfolio Project',
  date: 'July–August 2026',

  title: 'API, Database & CI Test Automation Portfolio',

  intro:
    'This project demonstrates an end-to-end software quality workflow for a sample online booking system, combining requirements analysis, manual and REST API testing, SQL/database validation, defect reporting, automated execution, traceability, reporting, and continuous integration.',

  supporting:
    'The portfolio combines Postman API testing, Newman command-line automation, PostgreSQL validation, structured defect evidence, requirements traceability, and GitHub Actions CI. The project preserves known product findings while maintaining a separate stable smoke/regression quality gate for repeatable CI execution.',

  objective:
    'The objective was to build a complete QA workflow connecting requirements, documented test coverage, API execution, backend SQL validation, defect evidence, repeatable automation, CI quality gating, and reporting into one traceable testing process.',

  metrics: [
    {
      value: '35',
      label: 'Requirements Baseline',
    },
    {
      value: '25',
      label: 'Executed Test Cases',
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
      label: 'Confirmed API Defects',
    },
    {
      value: '19',
      label: 'SQL Queries',
    },
    {
      value: '13/13',
      label: 'DB Summary Checks',
    },
    {
      value: '45/45',
      label: 'CI Assertions Passed',
    },
  ],

  workflow: [
    'Requirements Baseline',
    'Test Planning',
    'Requirements Traceability Matrix',
    'Manual / API Test Cases',
    'Postman REST API Execution',
    'Expected vs Actual Validation',
    'Defect Identification',
    'SQL / PostgreSQL Validation',
    'Data Integrity & Constraint Checks',
    'Newman Automation',
    'GitHub Actions CI',
    'JSON / JUnit Reports',
    'Evidence & Release Documentation',
  ],

  fullSuite: {
    title: 'Complete Runtime Suite',
    description:
      'The complete Postman collection preserves both successful validations and documented known findings rather than removing failing assertions simply to create an artificially clean result.',
    facts: [
      '26 API requests',
      '61 runtime assertions',
      '51 assertions passed',
      '10 known assertion failures',
    ],
  },

  ciSuite: {
    title: 'Stable CI Quality Gate',
    description:
      'A separate stable smoke/regression collection contains tests appropriate for blocking CI execution while known product findings remain documented in the complete suite.',
    facts: [
      '19 smoke/regression requests',
      '45 assertions',
      '45/45 assertions passed',
      '0 CI failures',
    ],
  },

  sections: [
    {
      id: 'requirements-analysis',
      eyebrow: 'Coverage Foundation',
      title: 'Requirements Analysis & Coverage',
      paragraphs: [
        'The project began with a documented baseline of 35 requirements so testing could be connected to expected system behavior rather than executed as isolated checks.',
        'Requirements coverage was organized through a Requirements Traceability Matrix linking requirements with validation activity and supporting evidence.',
      ],
    },

    {
      id: 'test-planning',
      eyebrow: 'Test Strategy',
      title: 'Structured Test Planning',
      paragraphs: [
        'Testing was organized to cover both successful behavior and failure conditions across application, API, authentication, authorization, and database layers.',
      ],
      bullets: [
        'Functional testing',
        'Positive and negative testing',
        'Boundary testing',
        'Authentication testing',
        'Authorization testing',
        'Database validation',
        'Defect verification',
        'Regression coverage',
      ],
    },

    {
      id: 'test-cases',
      eyebrow: 'Documented Execution',
      title: '25 Executed Test Cases',
      paragraphs: [
        'The project includes 25 documented manual/API test cases covering expected application behavior and failure conditions.',
        'Execution records compare expected and actual results and preserve supporting evidence and defect linkage where applicable.',
      ],
    },

    {
      id: 'api-testing',
      eyebrow: 'REST Validation',
      title: 'REST API Testing with Postman',
      paragraphs: [
        'REST API validation was performed through a 26-request Postman collection containing 61 runtime assertions.',
        'The complete execution preserved known failures as documented product findings instead of removing those assertions simply to produce a fully passing result.',
      ],
      bullets: [
        '26 API requests',
        '61 runtime assertions',
        '51 assertions passed',
        '10 known assertion failures',
      ],
    },

    {
      id: 'defects',
      eyebrow: 'Finding Management',
      title: 'Defect Discovery & Documentation',
      paragraphs: [
        'Testing identified and documented 3 confirmed API defects.',
        'Findings were connected to reproducible behavior, expected-versus-actual results, and supporting technical evidence.',
      ],
    },

    {
      id: 'database-validation',
      eyebrow: 'Backend Verification',
      title: 'PostgreSQL Database Validation',
      paragraphs: [
        'Backend validation was performed directly against PostgreSQL to confirm whether application and API behavior was represented correctly in stored data.',
        'The project includes 19 SQL validation and analysis queries covering backend state and data-quality conditions.',
      ],
      bullets: [
        'Data integrity validation',
        'Join-based verification',
        'Null condition checks',
        'Duplicate checks',
        'Backend record verification',
        'Expected-versus-actual data comparison',
      ],
    },

    {
      id: 'database-summary',
      eyebrow: 'Repeatable Data Checks',
      title: 'Automated Database Summary Checks',
      paragraphs: [
        'The project includes 13 automated database-summary checks, with all 13 of 13 checks passing in the documented validation results.',
        'These checks add repeatable backend verification beyond individual exploratory SQL queries.',
      ],
    },

    {
      id: 'constraint-testing',
      eyebrow: 'Negative Database Testing',
      title: 'Constraint & Negative Testing',
      paragraphs: [
        'Six controlled database-constraint negative tests were executed to verify that invalid conditions were rejected as expected.',
        'All 6 of 6 documented constraint-negative tests passed.',
      ],
    },

    {
      id: 'newman',
      eyebrow: 'Command-Line Automation',
      title: 'Newman Test Automation',
      paragraphs: [
        'The Postman workflow was automated with Newman so API validation could run repeatably from the command line and inside CI rather than depending only on interactive Postman execution.',
        'This made the stable smoke/regression suite suitable for automated repository validation.',
      ],
    },

    {
      id: 'ci-quality-gate',
      eyebrow: 'Continuous Integration',
      title: 'GitHub Actions CI Quality Gate',
      paragraphs: [
        'The automated API workflow was integrated with GitHub Actions using a stable smoke/regression collection containing 19 requests and 45 assertions.',
        'The documented CI execution passed all 45 of 45 assertions with zero CI failures.',
      ],
    },

    {
      id: 'credential-handling',
      eyebrow: 'Security',
      title: 'CI Credential Handling',
      paragraphs: [
        'Repository-secret credential handling was used for automated test execution rather than embedding sensitive credentials directly in public project files.',
      ],
    },

    {
      id: 'reporting',
      eyebrow: 'Automation Evidence',
      title: 'JSON & JUnit Reporting',
      paragraphs: [
        'Automated executions generated JSON and JUnit reporting artifacts that provide machine-readable test evidence for review after CI execution.',
      ],
    },

    {
      id: 'traceability',
      eyebrow: 'Coverage Mapping',
      title: 'Requirements Traceability Matrix',
      paragraphs: [
        'A Requirements Traceability Matrix connects documented requirements with corresponding validation activity, outcomes, and evidence.',
        'This demonstrates not only whether individual tests passed or failed, but whether the documented requirement baseline was represented in the overall testing process.',
      ],
    },

    {
      id: 'public-evidence',
      eyebrow: 'Evidence Management',
      title: 'Public-Safe Technical Evidence',
      paragraphs: [
        'Execution results, defects, SQL validation, reports, and screenshots were organized for public technical review without exposing credentials or sensitive environment information.',
        'Known product findings remain separate from the passing CI quality gate so both defect evidence and stable automated validation are represented accurately.',
      ],
    },
  ],

  ciWorkflow: [
    'Repository Change',
    'GitHub Actions',
    'Newman CLI',
    '19-Request Smoke / Regression Suite',
    '45 Assertions',
    'Quality Gate Passed',
  ],

  technologyStack: [
    ['API', 'REST'],
    ['API Testing', 'Postman'],
    ['Automation', 'Newman'],
    ['Database', 'PostgreSQL'],
    ['Query Language', 'SQL'],
    ['CI', 'GitHub Actions'],
    ['Source Control', 'Git / GitHub'],
    ['Traceability', 'Requirements Traceability Matrix (RTM)'],
    ['Reporting', 'JSON / JUnit'],
    [
      'Test Design',
      'Functional, positive, negative, boundary, authentication, authorization',
    ],
    [
      'Database Validation',
      'Integrity, joins, null/duplicate checks, constraints',
    ],
  ],

  outcomes: [
    'Built an end-to-end QA workflow connecting requirements, test cases, API execution, database validation, defects, automation, CI, reporting, and traceability.',
    'Executed 25 documented test cases across a 26-request API collection containing 61 runtime assertions.',
    'Identified and documented 3 confirmed API defects while preserving known findings in the complete test suite.',
    'Performed 19 SQL validation queries, 13/13 database-summary checks, and 6/6 controlled constraint-negative tests.',
    'Created a stable GitHub Actions smoke/regression quality gate with 19 requests and 45/45 passing assertions.',
    'Generated JSON/JUnit reporting and requirements-traceability evidence suitable for technical review.',
  ],

  repository:
    'https://github.com/daryal89/api-database-testing-portfolio',
}