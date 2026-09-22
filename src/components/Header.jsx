import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
      const handleResize = () => {
      if (window.innerWidth > 600) {
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
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}media/logo/logo_D.png`}
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
            <li><Link to="/#upcoming-shows" onClick={() => setMenuOpen(false)}>Showtimes</Link></li>
            <li><Link to="/#contact" onClick={() => setMenuOpen(false)}>Book Us</Link></li>
            <li><NavLink 
                  to="/gallery"
                  className={({ isActive }) => isActive ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </NavLink>
            </li>
            <li><NavLink 
                  to="/posters"
                  className={({ isActive }) => isActive ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Gigs of yore
                </NavLink>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header