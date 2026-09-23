import { siteConfig } from '../../data/siteConfig'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>{siteConfig.name}</strong>

          <p>
            Software Delivery • Software Quality • Technical Evidence
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Back to Top</a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-copyright">
          © {currentYear} Dhruba Aryal
        </p>
      </div>
    </footer>
  )
}

export default Footer