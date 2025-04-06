import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop 