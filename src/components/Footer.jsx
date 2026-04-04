import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiPhone, FiMail, FiMapPin, FiArrowUp } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#personal-projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-card-bg border-t border-white/5 overflow-hidden">
      {/* Background texture */}
      <div className="orb w-[400px] h-[400px] bg-accent left-1/2 -translate-x-1/2 top-0 opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center glow">
                <span className="text-base font-black font-poppins text-white">E</span>
              </div>
              <span className="font-poppins font-bold text-white text-xl">
                ESP <span className="text-accent">Tech</span> Studio
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              A modern web studio specializing in React JS, Vite, and premium motion-rich UI/UX design. We build websites that impress and convert.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/in/ebi-s-paul-220b1b2b8/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: '#4D9FFF' }}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/40 flex items-center justify-center text-white/50 hover:text-[#4D9FFF] transition-all duration-300"
              >
                <FiLinkedin size={18} />
              </motion.a>
              <motion.a
                href="https://github.com/ebispaul07"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
              >
                <FiGithub size={18} />
              </motion.a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-poppins font-bold text-white text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/40 hover:text-accent text-sm transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-poppins font-bold text-white text-sm uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:7598998831" className="flex items-center gap-3 text-white/40 hover:text-accent text-sm transition-colors duration-300 group">
                <FiPhone size={16} className="text-accent flex-shrink-0" />
                +91 75989 98831
              </a>
              <a href="mailto:ebispaul07@gmail.com" className="flex items-center gap-3 text-white/40 hover:text-accent text-sm transition-colors duration-300">
                <FiMail size={16} className="text-accent flex-shrink-0" />
                ebispaul07@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=Kollemcode,Kerala,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-accent text-sm transition-colors duration-300"
              >
                <FiMapPin size={16} className="text-accent flex-shrink-0" />
                Kollemcode, Kerala, India
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} <span className="text-accent font-semibold">ESP Tech Studio</span>. All rights reserved. Built with ❤️ by Ebi S Paul.
          </p>

          <motion.button
            id="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-accent/10 hover:bg-accent/20 border border-accent/30 flex items-center justify-center text-accent transition-all duration-300"
            title="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
