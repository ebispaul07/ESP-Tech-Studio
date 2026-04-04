import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiCheckCircle } from 'react-icons/fi'

const stats = [
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'Connected', color: '#0A66C2', href: 'https://www.linkedin.com/in/ebi-s-paul-220b1b2b8/' },
  { icon: <FiGithub size={18} />, label: 'GitHub', value: 'ebispaul07', color: '#fff', href: 'https://github.com/ebispaul07' },
  { icon: <FiCheckCircle size={18} />, label: 'Projects Done', value: '10+', color: '#00ADB5', href: null },
  { icon: <span className="text-base">⭐</span>, label: 'Client Satisfaction', value: '100%', color: '#F59E0B', href: null },
]

const CountUp = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const num = parseInt(end)
    const duration = 1500
    const step = num / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= num) { setCount(num); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 16)
    return () => clearInterval(timer)
  }, [started, end])

  return <span ref={ref}>{count}{suffix}</span>
}

const SocialProofBar = () => {
  return (
    <section id="social" className="relative z-10 -mt-1 bg-card-bg/50 backdrop-blur-xl border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {stat.href ? (
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <StatItem stat={stat} />
                </a>
              ) : (
                <div className="flex items-center gap-3">
                  <StatItem stat={stat} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const StatItem = ({ stat }) => (
  <>
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
      style={{ color: stat.color }}
      className="transition-all duration-300"
    >
      {stat.icon}
    </motion.div>
    <div>
      <p className="text-white/40 text-xs font-medium">{stat.label}</p>
      <p className="text-white font-poppins font-bold text-sm">{stat.value}</p>
    </div>
    <div className="hidden md:block w-px h-8 bg-white/10 ml-2" />
  </>
)

export default SocialProofBar
