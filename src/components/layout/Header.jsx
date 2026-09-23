import { useState } from 'react'
import MobileNav from './MobileNav'
import { siteConfig } from '../../data/siteConfig'

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  function closeMobileNav() {
    setIsMobileNavOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#home"
            aria-label="Dhruba Aryal home"
            onClick={closeMobileNav}
          >
            <span className="brand-mark">DA</span>

            <span className="brand-name">
              {siteConfig.name}
            </span>
          </a>

          <nav
            className="desktop-nav"
            aria-label="Primary navigation"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={
              isMobileNavOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMobileNavOpen((current) => !current)
            }
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileNav
        navigation={siteConfig.navigation}
        isOpen={isMobileNavOpen}
        onClose={closeMobileNav}
      />
    </>
  )
}

export default Header