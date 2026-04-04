import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const CTABanner = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden liquid-gradient">
      {/* Decorative floating orbs */}
      <div className="orb w-[400px] h-[400px] bg-electric-violet top-[-100px] left-[-100px] opacity-20 animate-float" />
      <div className="orb w-[500px] h-[500px] bg-neon-cyan bottom-[-200px] right-[-100px] opacity-20 animate-float-delayed" />
      
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,245,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,245,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Ready to Start?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-poppins font-black text-5xl md:text-7xl text-white leading-tight mb-6"
        >
          Let's Build Something{' '}
          <span className="gradient-text glow-text">That Converts</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-xl max-w-2xl mx-auto mb-12"
        >
          Your business deserves a website that impresses instantly and converts effortlessly. Let's make that happen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            id="cta-get-started"
            whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(0,173,181,0.6)' }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-poppins font-black text-lg px-10 py-5 rounded-2xl transition-all duration-300"
          >
            Get Started
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={20} />
          </motion.a>

          <motion.a
            href="tel:7598998831"
            id="cta-contact-me"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-accent/40 text-white font-poppins font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
          >
            📞 Call Now
          </motion.a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/10"
        >
          {['✅ Free Consultation', '⚡ 1-Week Delivery', '🔄 Unlimited Revisions', '🛡️ 1 Month Support'].map((item) => (
            <p key={item} className="text-white/50 text-sm font-medium">{item}</p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
