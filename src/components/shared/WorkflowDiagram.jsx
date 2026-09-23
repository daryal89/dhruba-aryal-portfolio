function WorkflowDiagram({
  steps,
  ariaLabel,
  compact = false,
}) {
  return (
    <ol
      className={`workflow-diagram ${compact ? 'workflow-diagram-compact' : ''}`}
      aria-label={ariaLabel}
    >
      {steps.map((step, index) => (
        <li className="workflow-step" key={step}>
          <span className="workflow-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          <span className="workflow-label">{step}</span>

          {index < steps.length - 1 && (
            <span className="workflow-arrow" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}

export default WorkflowDiagram