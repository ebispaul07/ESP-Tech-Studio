import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const personalProjects = [
  {
    id: 'login-page',
    title: 'Login Page',
    description: 'A secure user authentication system built with Java Swing and MySQL, featuring database-driven credential validation and session management.',
    tags: ['Java', 'MySQL', 'Swing'],
    emoji: '🔐',
    color: '#00F5FF',
    github: 'https://github.com/ebispaul07',
    demo: null,
  },
  {
    id: 'cloud-plus-plus',
    title: 'Cloud++',
    description: 'A multi-user cloud storage platform built in C++ using Socket Programming and Multithreading for secure file sharing and real-time synchronization.',
    tags: ['C++', 'Socket Programming', 'OOP'],
    emoji: '☁️',
    color: '#8B5CF6',
    github: 'https://github.com/ebispaul07',
    demo: null,
  },
  {
    id: 'gemini-clone',
    title: 'Gemini Clone',
    description: 'A professional AI conversational interface built with React and API integration to provide a seamless user interaction experience.',
    tags: ['React', 'API', 'Framer Motion'],
    emoji: '🤖',
    color: '#FF6B00',
    github: 'https://github.com/ebispaul07',
    demo: null,
  },
  {
    id: 'college-portfolio',
    title: 'College Portfolio',
    description: 'A comprehensive institutional website designed to showcase academic programs, facilities, and achievements using HTML and CSS.',
    tags: ['HTML', 'CSS', 'Responsive'],
    emoji: '🎓',
    color: '#10B981',
    github: 'https://github.com/ebispaul07',
    demo: null,
  },
  {
    id: 'save-mart',
    title: 'Save Mart Admin Dashboard',
    description: 'A modern UI/UX design for a store dashboard, providing deep insights into sales, inventory, and customer trends for efficient management.',
    tags: ['UI/UX', 'Figma', 'Dashboard'],
    emoji: '📊',
    color: '#EC4899',
    github: null,
    demo: 'https://www.figma.com/proto/I150V78veEH0qcxSkzdoZC/SaveMart?node-id=0-1',
    type: 'Figma'
  },
  {
    id: 'tsmc-admin',
    title: 'TSMC Admin Dashboard',
    description: 'Designed a functional admin dashboard for tracking orders, monitoring inventory alerts, and visualizing business trends via Figma.',
    tags: ['Figma', 'UI Design', 'Analytics'],
    emoji: '📈',
    color: '#F59E0B',
    github: null,
    demo: 'https://www.figma.com/proto/yg0bSgQ1lNycLt5aYmt90F/TSMC?node-id=0-1',
    type: 'Figma'
  },
]

const PersonalProjects = () => {
  return (
    <section id="personal-projects" className="section-padding relative overflow-hidden bg-primary">
      <div className="orb w-[400px] h-[400px] bg-electric-violet left-[-200px] top-1/2 -translate-y-1/2 opacity-10 animate-float" />
      
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
            Specialized Skills
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-space font-black text-5xl md:text-7xl text-white mb-6 uppercase tracking-tight"
          >
            Skills & <span className="gradient-text">Explorations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-outfit"
          >
            Pushing boundaries with technical experiments and high-fidelity UI/UX designs focused on modern web architectures.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass-card rounded-[2.5rem] p-8 md:p-10 flex flex-col border border-white/5 hover:border-accent/40 bg-card-bg/40 backdrop-blur-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[50px] -mr-16 -mt-16 transition-all duration-500 group-hover:bg-accent/10" />
              
              {/* Emoji Icon */}
              <div 
                style={{ background: `${project.color}15`, borderColor: `${project.color}30` }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl border shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500"
              >
                {project.emoji}
              </div>

              {/* Title */}
              <h3 className="font-space font-black text-white text-2xl mb-4 group-hover:text-accent-light transition-colors leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1 font-outfit">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-space font-extrabold tracking-widest text-white/30 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-white/70 hover:text-white text-[10px] font-space font-black tracking-widest uppercase px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    <FiGithub size={16} /> GitHub
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{ background: `${project.color}20`, borderColor: `${project.color}40`, color: project.color }}
                    className="flex items-center gap-2 text-[10px] font-space font-black tracking-widest uppercase px-5 py-3.5 rounded-xl border transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,173,181,0.2)]"
                  >
                    <FiExternalLink size={16} /> {project.type === 'Figma' ? 'Figma Link' : 'Website Link'}
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalProjects
