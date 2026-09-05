import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
      const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])

  return (
    <header>
      <h1 className="header-logo">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/media/logo/det_logo.png"
            alt="The Detweilers"
          />
        </Link>
      </h1>
      <button className="menu-button" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li><a href="#upcoming-shows">Showtimes</a></li>
            <li><a href="#contact">Book Us</a></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header