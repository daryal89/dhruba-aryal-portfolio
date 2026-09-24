import { useEffect, useRef } from 'react'

function MobileNav({
  navigation,
  isOpen,
  onClose,
}) {
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    // Remember which element had focus before the menu opened.
    previousFocusRef.current = document.activeElement

    // Move keyboard focus into the navigation drawer.
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Prevent the page behind the drawer from scrolling.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)

      // Restore the page's previous scroll behavior.
      document.body.style.overflow = previousOverflow

      // Return keyboard focus to the element that opened the menu.
      previousFocusRef.current?.focus()
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
            ref={closeButtonRef}
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
              <span aria-hidden="true">
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