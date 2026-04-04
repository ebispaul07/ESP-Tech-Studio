import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiCode, FiZap, FiHeart } from 'react-icons/fi'
import profileImg from '/profile.jpg'

const skills = ['React JS', 'Vite', 'Tailwind CSS', 'JavaScript', 'Java', 'MySQL', 'HTML/CSS', 'Framer Motion', 'UI/UX Design']

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background orb */}
      <div className="orb w-[500px] h-[500px] bg-accent left-[-200px] top-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Profile photo */}
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-2 border-accent/30 glow">
                <img
                  src={profileImg}
                  alt="Ebi S Paul — Founder, ESP Tech Studio"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
              >
                <FiCode className="text-accent" size={16} />
                <div>
                  <p className="text-white text-xs font-semibold">React JS</p>
                  <p className="text-white/40 text-[10px]">Expert</p>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
              >
                <FiZap className="text-yellow-400" size={16} />
                <div>
                  <p className="text-white text-xs font-semibold">10+ Projects</p>
                  <p className="text-white/40 text-[10px]">Delivered</p>
                </div>
              </motion.div>

              {/* Floating badge 3 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -translate-y-1/2 -right-16 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
              >
                <FiHeart className="text-pink-400" size={16} />
                <div>
                  <p className="text-white text-xs font-semibold">100%</p>
                  <p className="text-white/40 text-[10px]">Satisfaction</p>
                </div>
              </motion.div>

              {/* Decorative gradient below photo */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-accent/20 blur-2xl rounded-full" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              About Me
            </div>

            <h2 className="font-poppins font-black text-4xl md:text-5xl text-white leading-tight mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Ebi S Paul</span>
              <br />
              Founder &amp; Lead Dev
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-6">
              I'm the founder of <span className="text-accent font-semibold">ESP Tech Studio</span> — a modern web studio specializing in React JS, Vite, and premium design. I craft high‑performance websites that help businesses grow and convert effortlessly.
            </p>

            <p className="text-white/50 leading-relaxed mb-8">
              With a passion for clean code and pixel‑perfect design, I bring your vision to life with motion‑rich UI, blazing‑fast performance, and a personal touch that larger agencies simply can't offer.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08, borderColor: '#00ADB5' }}
                  className="tech-badge cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://www.linkedin.com/in/ebi-s-paul-220b1b2b8/"
                target="_blank"
                rel="noopener noreferrer"
                id="about-linkedin-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0858A8] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300"
              >
                <FiLinkedin size={18} /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/ebispaul07"
                target="_blank"
                rel="noopener noreferrer"
                id="about-github-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300"
              >
                <FiGithub size={18} /> GitHub
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300"
              >
                Let's Connect →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
