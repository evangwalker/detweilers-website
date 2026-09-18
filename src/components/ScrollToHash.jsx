import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const scrollToElement = () => {
      const element = document.querySelector(hash)

      if (element) {
        element.scrollIntoView()
      }
    }

    requestAnimationFrame(scrollToElement)
  }, [pathname, hash])

  return null
}

export default ScrollToHash