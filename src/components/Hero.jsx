import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const WORDS = ['Convert', 'Impress', 'Grow', 'Inspire']

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayWord, setDisplayWord] = useState(WORDS[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(WORDS[0].length)

  useEffect(() => {
    const speed = isDeleting ? 60 : 100
    const timeout = setTimeout(() => {
      const currentWord = WORDS[wordIndex]
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayWord(currentWord.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (charIndex > 0) {
          setDisplayWord(currentWord.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setWordIndex((wordIndex + 1) % WORDS.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* Fallback Image (In case video doesn't load) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070")' }}
        />
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-coding-on-a-computer-1584/1080p.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/60 to-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80" />
        {/* Liquid Gradient Layer */}
        <div className="absolute inset-0 liquid-gradient opacity-30 mix-blend-overlay" />
      </div>

      {/* Floating orbs */}
      <div className="orb w-[500px] h-[500px] bg-accent top-[-100px] right-[-100px] animate-float opacity-20" />
      <div className="orb w-[300px] h-[300px] bg-electric-violet bottom-[-50px] left-[-50px] animate-float-delayed opacity-10" />

      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,173,181,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,173,181,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent-light text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8 font-space"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for Global Projects
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-space font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
        >
          We Build Websites<br />
          That{' '}
          <span className="gradient-text glow-text typewriter-cursor">
            {displayWord}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/50 text-base md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-outfit"
        >
          A professional web studio specializing in <span className="text-white font-bold">React JS, Vite</span>, and luxury UI design. 
          We deliver blazing‑fast, motion‑rich solutions that help businesses dominate their niche.
        </motion.p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <motion.a
            href="#contact"
            id="hero-primary-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,173,181,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-primary font-space font-bold text-base px-10 py-5 rounded-2xl transition-all duration-300"
          >
            Start a Project
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5 font-bold" />
          </motion.a>

          <motion.a
            href="#work"
            id="hero-secondary-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-accent/40 text-white font-space font-bold text-base px-10 py-5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
          >
            <FiPlay className="text-accent group-hover:scale-125 transition-transform" size={16} />
            View Showcase
          </motion.a>
        </div>

        {/* Scroll indicator — Fixed positioning for all screens */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.4, duration: 0.8 }}
           className="hidden lg:flex absolute bottom-8 left-12 flex-col items-center gap-4"
        >
          <p className="text-white/20 text-[10px] font-space font-bold tracking-[0.3em] uppercase rotate-90 mb-8 origin-left whitespace-nowrap">
            Explore Identity
          </p>
          <div className="w-px h-24 bg-gradient-to-b from-accent/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
