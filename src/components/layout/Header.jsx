import { siteConfig } from '../../data/siteConfig'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Dhruba Aryal home">
          <span className="brand-mark">DA</span>
          <span className="brand-name">{siteConfig.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header