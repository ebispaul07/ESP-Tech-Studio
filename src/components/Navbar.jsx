import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#personal-projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-primary/90 backdrop-blur-xl border-b border-accent/10 shadow-lg shadow-black/20' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Geometric Monogram Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent via-accent-light to-electric-violet rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-accent/20" />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm rounded-xl border border-white/10" />
            <span className="relative z-10 text-lg font-black font-space text-accent drop-shadow-[0_0_10px_rgba(0,173,181,0.5)]">
              E
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-space font-bold text-white text-xl tracking-tight">
              ESP <span className="text-accent-light">Tech</span>
            </span>
            <span className="font-space font-medium text-[0.65rem] text-white/40 tracking-[0.2em] uppercase mt-0.5">
              Studio
            </span>
          </div>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="text-white/70 hover:text-accent text-sm font-medium transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-accent hover:bg-accent-light text-primary font-poppins font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile burger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/70 hover:text-accent transition-colors"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-accent/10"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-accent font-medium py-2 border-b border-white/5 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-accent text-primary font-poppins font-semibold text-sm px-5 py-3 rounded-xl text-center"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
