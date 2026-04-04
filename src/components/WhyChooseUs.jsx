import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiLayers, FiSmartphone, FiHeart } from 'react-icons/fi'

const reasons = [
  {
    icon: <FiZap size={28} />,
    title: 'Modern React JS & Vite',
    description: 'Built with the latest tech stack. Vite\'s lightning-fast build system paired with React delivers sub-second load times and exceptional developer experience.',
    color: '#F59E0B',
    bg: 'from-yellow-500/20 to-orange-500/5',
  },
  {
    icon: <FiLayers size={28} />,
    title: 'Motion-Rich UI/UX',
    description: 'Every interaction is thoughtfully animated. From micro-interactions to full scroll-driven sequences — your website feels alive and premium.',
    color: '#A855F7',
    bg: 'from-purple-500/20 to-pink-500/5',
  },
  {
    icon: <FiSmartphone size={28} />,
    title: 'Mobile-First Design',
    description: 'Designed for the 60%+ of traffic that comes from mobile. Every layout, font size, and touch target is optimized for phones first.',
    color: '#00ADB5',
    bg: 'from-accent/20 to-cyan-500/5',
  },
  {
    icon: <FiHeart size={28} />,
    title: 'Personal & Fast Delivery',
    description: 'No agency middlemen. You work directly with me — fast communication, 1-week delivery on most projects, and revisions until you\'re thrilled.',
    color: '#EC4899',
    bg: 'from-pink-500/20 to-rose-500/5',
  },
]

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-card-bg/30">
      <div className="orb w-[400px] h-[400px] bg-accent left-[-100px] bottom-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Why ESP Tech Studio
            </div>
            <h2 className="font-poppins font-black text-4xl md:text-5xl text-white leading-tight mb-6">
              Why Businesses{' '}
              <span className="gradient-text">Choose Us</span>{' '}
              Over Others
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              We don't just build websites — we build assets that work for your business 24/7, converting visitors into customers.
            </p>

            {/* Big stat */}
            <div className="flex gap-12">
              {[
                { num: '10+', label: 'Projects Delivered' },
                { num: '100%', label: 'Client Satisfaction' },
                { num: '1wk', label: 'Avg. Delivery' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-poppins font-black text-3xl gradient-text">{stat.num}</p>
                  <p className="text-white/40 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="grid gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className={`glass-card rounded-2xl p-6 flex items-start gap-5 bg-gradient-to-br ${reason.bg} cursor-default group`}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: reason.color }}
                  className="mt-1 flex-shrink-0 p-3 rounded-xl bg-white/5"
                >
                  {reason.icon}
                </motion.div>
                <div>
                  <h3 className="font-poppins font-bold text-white text-lg mb-2">{reason.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
