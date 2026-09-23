import { useEffect } from 'react'

function MobileNav({
  navigation,
  isOpen,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <>
      <button
        className="mobile-nav-backdrop"
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
      />

      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-heading">
          <span>Navigation</span>

          <button
            className="mobile-nav-close"
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <div className="mobile-nav-links">
          {navigation.map((item, index) => (
            <a
              href={item.href}
              key={item.href}
              onClick={onClose}
            >
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}

export default MobileNav