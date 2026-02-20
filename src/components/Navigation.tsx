import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import ArchiveSearch from './ArchiveSearch'

interface NavigationProps {
  scrollProgress?: number
}

const Navigation = ({ scrollProgress = 0 }: NavigationProps) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/work', label: 'DOCS', sublabel: 'WORK' },
    { path: '/about', label: 'USER', sublabel: 'ABOUT' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = () => {
    scrollToTop()
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const bgColor = `rgb(${Math.round(scrollProgress * 255)}, ${Math.round(scrollProgress * 255)}, ${Math.round(scrollProgress * 255)})`
  const textColor = `rgb(${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)}, ${Math.round(255 - scrollProgress * 255)})`
  const borderColor = scrollProgress > 0.5 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 border-b navigation-solid-black transition-colors duration-300"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        ['--nav-search-icon-color' as string]: textColor
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={handleNavClick}>
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundColor: '#ffffff !important',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span 
                className="text-2xl font-bold font-sans" 
                style={{
                  color: '#000000 !important',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  zIndex: 10
                }}
              >
                M
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Navigation Items */}
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link key={item.label} to={item.path} onClick={handleNavClick}>
                  <motion.div
                    className={`flex items-center space-x-2 px-3 py-2 transition-all duration-300 ${
                      isActive 
                        ? 'border-b-2' 
                        : ''
                    }`}
                    style={{
                      color: textColor,
                      borderColor: isActive ? textColor : 'transparent'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-bold">{item.label}</span>
                    <span className="text-sm font-medium">{item.sublabel}</span>
                  </motion.div>
                </Link>
              )
            })}

            {/* CONTACT ME CTA Button */}
            <Link to="/contact" onClick={handleNavClick}>
              <motion.button
                className="px-6 py-2 text-sm rounded-lg transition-colors duration-300 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: '#9333ea !important',
                  color: '#ffffff !important',
                  border: 'none !important',
                  padding: '8px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  zIndex: 10
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT ME
              </motion.button>
            </Link>
            
            {/* Archive Scanner Search */}
            <ArchiveSearch scrollProgress={scrollProgress} />
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Archive Scanner Search - Always visible */}
            <ArchiveSearch scrollProgress={scrollProgress} />
            
            {/* Hamburger Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <motion.span
                className="block w-6 h-1"
                style={{
                  backgroundColor: textColor,
                  borderRadius: '2px',
                  display: 'block',
                  opacity: '1 !important',
                  visibility: 'visible !important'
                }}
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-1"
                style={{
                  backgroundColor: textColor,
                  borderRadius: '2px',
                  display: 'block',
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-1"
                style={{
                  backgroundColor: textColor,
                  borderRadius: '2px',
                  display: 'block',
                  opacity: '1 !important',
                  visibility: 'visible !important'
                }}
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-16 left-0 right-0 border-t transition-colors duration-300"
              style={{
                backgroundColor: bgColor,
                borderColor: borderColor
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {/* Navigation Items */}
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link key={item.label} to={item.path} onClick={handleNavClick}>
                      <motion.div
                        className={`flex items-center space-x-2 px-4 py-3 transition-all duration-300 ${
                          isActive 
                            ? 'border-b-2' 
                            : ''
                        }`}
                        style={{
                          color: textColor,
                          borderColor: isActive ? textColor : 'transparent'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-base font-bold">{item.label}</span>
                        <span className="text-base font-medium">{item.sublabel}</span>
                      </motion.div>
                    </Link>
                  )
                })}

                {/* CONTACT ME CTA Button */}
                <Link to="/contact" onClick={handleNavClick}>
                  <motion.button
                    className="w-full px-6 py-3 text-base rounded-lg transition-colors duration-300 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: '#9333ea !important',
                      color: '#ffffff !important',
                      border: 'none !important',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      zIndex: 10
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    CONTACT ME
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation 