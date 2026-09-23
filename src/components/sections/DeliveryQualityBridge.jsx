function DeliveryQualityBridge() {
  return (
    <section className="bridge-section">
      <div className="container bridge-content">
        <p className="eyebrow">One Technical Perspective</p>

        <h2>Software Delivery + Software Quality</h2>

        <p>
          My technical background connects two sides of reliable software
          delivery: building repeatable CI/CD and deployment workflows, and
          validating application behavior, APIs, databases, and releases
          through structured testing and automated quality gates.
        </p>

        <div
          className="bridge-flow"
          aria-label="Software delivery and quality workflow"
        >
          <span>Build</span>
          <span aria-hidden="true">→</span>
          <span>Deploy</span>
          <span aria-hidden="true">→</span>
          <span>Validate</span>
          <span aria-hidden="true">→</span>
          <span>Recover</span>
        </div>
      </div>
    </section>
  )
}

export default DeliveryQualityBridge