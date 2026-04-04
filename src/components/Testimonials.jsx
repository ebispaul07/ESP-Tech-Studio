import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Dr. Anitha Suresh',
    role: 'Director, Amritha Surabhi Hospital',
    text: 'Ebi delivered a stunning hospital website that exceeded our expectations. The motion animations and mobile responsiveness are phenomenal. Patient inquiries increased significantly within the first month!',
    rating: 5,
    initials: 'AS',
    color: '#10B981',
  },
  {
    id: 2,
    name: 'Rahul Menon',
    role: 'Owner, Capital Mandi House',
    text: 'Our restaurant needed a modern online presence and Ebi delivered exactly that. The food menu section, ordering integration, and overall design are absolutely beautiful. Highly recommend!',
    rating: 5,
    initials: 'RM',
    color: '#F59E0B',
  },
  {
    id: 3,
    name: 'Priya Krishnan',
    role: 'Tech Startup Founder',
    text: 'ESP Tech Studio transformed our landing page into a high-converting sales machine. The React animations and overall UX feel like something from a top-tier Silicon Valley company.',
    rating: 5,
    initials: 'PK',
    color: '#A855F7',
  },
]

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-5">
    {Array.from({ length: count }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className="text-yellow-400 text-lg"
      >
        ★
      </motion.span>
    ))}
  </div>
)

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const go = (dir) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-card-bg/30">
      <div className="orb w-[400px] h-[400px] bg-accent right-[-100px] top-0" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
        >
          Testimonials
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-poppins font-black text-4xl md:text-5xl text-white mb-14"
        >
          What Clients{' '}
          <span className="gradient-text">Say About Us</span>
        </motion.h2>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 80 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass-card rounded-3xl p-10 md:p-14 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-8 left-10 text-accent/20 font-poppins text-9xl font-black leading-none select-none">"</div>

              <Stars count={t.rating} />

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 relative z-10 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  style={{ background: t.color }}
                  className="w-14 h-14 rounded-full flex items-center justify-center font-poppins font-black text-white text-lg"
                >
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="font-poppins font-bold text-white">{t.name}</p>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              id="testimonial-prev"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => go(-1)}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-accent transition-colors border border-white/10 hover:border-accent/40"
            >
              <FiChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-white/20'}`}
                />
              ))}
            </div>

            <motion.button
              id="testimonial-next"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => go(1)}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-accent transition-colors border border-white/10 hover:border-accent/40"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
