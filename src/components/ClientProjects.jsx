import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const clientProjects = [
  {
    id: 'ford-mustang-gt',
    title: 'Ford Mustang GT',
    category: '3D Automotive Experience',
    description: 'A high-performance digital showcase of the Ford Mustang GT, providing an immersive 3D experience with sculpted aerodynamics, track-ready agility, and a digital cockpit.',
    techStack: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    liveUrl: 'https://ford-mustang-gt.vercel.app/',
    color: '#F43F5E',
    gradient: 'from-rose-500/30 to-orange-500/10',
    emoji: '🏎️',
  },
  {
    id: 'shri-arya-bhavan',
    title: 'Shri Arya Bhavan',
    category: 'Restaurant Website',
    description: 'A premium authentic vegetarian restaurant website with an immersive menu showcase, vibrant live background effects, and live location integration.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://shri-arya-bhavan.vercel.app/',
    color: '#10B981',
    gradient: 'from-emerald-500/30 to-green-500/10',
    emoji: '🌿',
  },
  {
    id: 'amritha-hospital',
    title: 'Amritha Surabhi Hospital',
    category: 'Healthcare Website',
    description: 'A premium Ayurvedic & Siddha hospital website with appointment booking, doctor profiles, service pages, and Google Maps integration.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://amritha-surabhi-hospital.vercel.app/',
    color: '#00F5FF',
    gradient: 'from-accent/30 to-teal-500/10',
    emoji: '🏥',
  },
  {
    id: 'capital-mandi',
    title: 'Capital Mandi House',
    category: 'Restaurant Website',
    description: 'A vibrant multi-branch restaurant website with menu showcase, online ordering integration, branch locator, and food-themed animations.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://capital-mandi-house-restaurant.vercel.app/',
    color: '#FF6B00',
    gradient: 'from-vibrant-orange/30 to-yellow-500/10',
    emoji: '🍽️',
  },
  {
    id: 'zinai-crane',
    title: 'Zinai Crane Service',
    category: 'Business Website',
    description: 'A professional crane rental & logistics service website with service listings, fleet showcase, quote request system, and contact integration.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://zinai-crane-service.vercel.app/',
    color: '#8B5CF6',
    gradient: 'from-electric-violet/30 to-purple-500/10',
    emoji: '🏗️',
  },
]

const ClientProjects = () => {
  return (
    <section id="work" className="section-padding relative overflow-hidden bg-primary/30">
      <div className="orb w-[500px] h-[500px] bg-accent right-[-200px] top-20 opacity-10 animate-float" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-accent-light text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 font-space"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Portfolio Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-space font-black text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter"
          >
            Studio <span className="gradient-text">Showcase</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-outfit"
          >
            Our record of delivering high-performance, motion-rich digital products that drive results.
          </motion.p>
        </div>

        {/* Cards — Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientProjects.map((project, i) => (
            <motion.a
              key={project.id}
              id={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group glass-card rounded-[2.5rem] overflow-hidden cursor-pointer flex flex-col no-underline border border-white/5 hover:border-accent/40 bg-card-bg/40 backdrop-blur-3xl"
            >
              {/* Preview area */}
              <div className={`relative bg-gradient-to-br ${project.gradient} h-56 flex items-center justify-center overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-8xl group-hover:scale-110 transition-transform duration-700 relative z-10"
                >
                  {project.emoji}
                </motion.div>

                {/* Category pill */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl text-white/90 text-[10px] font-space font-extrabold px-4 py-2 rounded-full border border-white/10 tracking-[0.1em] uppercase">
                  {project.category}
                </div>

                {/* Live badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-space font-extrabold px-4 py-2 rounded-full uppercase">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                  Live
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-space font-black text-white text-2xl mb-3 group-hover:text-accent-light transition-colors leading-tight">{project.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1 font-outfit">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{ borderColor: `${project.color}30`, color: project.color, background: `${project.color}10` }}
                      className="text-[10px] font-space font-bold tracking-widest px-3 py-1.5 rounded-lg border uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA — visual button (still part of link) */}
                <div
                  style={{ background: project.color }}
                  className="inline-flex items-center justify-center gap-3 text-primary font-space font-black text-sm px-8 py-5 rounded-2xl transition-all duration-500 w-full group-hover:shadow-2xl group-hover:shadow-[currentColor]/40 group-hover:scale-[1.03] active:scale-95"
                >
                  <FiExternalLink size={18} />
                  Explore Project
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientProjects
