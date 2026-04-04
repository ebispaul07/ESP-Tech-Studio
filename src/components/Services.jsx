import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiShoppingBag, FiLayout, FiTrendingUp, FiMonitor, FiSmartphone } from 'react-icons/fi'

const services = [
  {
    icon: <FiCode size={28} />,
    title: 'Custom Website Development',
    description: 'Blazing-fast, scalable websites built with React JS & Vite. Architected for performance, SEO, and maintainability from day one.',
    tags: ['React JS', 'Vite', 'TypeScript'],
    gradient: 'from-blue-500/20 to-accent/10',
    color: '#00ADB5',
  },
  {
    icon: <FiShoppingBag size={28} />,
    title: 'E-Commerce & Online Stores',
    description: 'Conversion-optimized online stores with seamless checkout flows, product management, and payment integrations.',
    tags: ['Shopify', 'WooCommerce', 'Stripe'],
    gradient: 'from-purple-500/20 to-pink-500/10',
    color: '#A855F7',
  },
  {
    icon: <FiLayout size={28} />,
    title: 'Portfolio & Landing Pages',
    description: 'Stunning single-page experiences that capture attention instantly and guide visitors toward your conversion goal.',
    tags: ['HTML/CSS', 'React', 'Animations'],
    gradient: 'from-orange-500/20 to-yellow-500/10',
    color: '#F59E0B',
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: 'Performance Optimization & SEO',
    description: 'Speed audits, Core Web Vitals optimization, and technical SEO to rank higher and load faster than your competitors.',
    tags: ['Lighthouse', 'SEO', 'Optimization'],
    gradient: 'from-green-500/20 to-emerald-500/10',
    color: '#10B981',
  },
  {
    icon: <FiMonitor size={28} />,
    title: 'UI/UX & Motion Design',
    description: 'Pixel-perfect interfaces with micro-interactions, smooth animations, and a design language that feels premium and intuitive.',
    tags: ['Framer Motion', 'GSAP', 'Figma'],
    gradient: 'from-pink-500/20 to-rose-500/10',
    color: '#EC4899',
  },
  {
    icon: <FiSmartphone size={28} />,
    title: 'Mobile-First Responsive Design',
    description: 'Every website I build is architected mobile-first — beautiful and functional on every screen size from 320px to 4K.',
    tags: ['Responsive', 'PWA', 'Touch-Ready'],
    gradient: 'from-cyan-500/20 to-sky-500/10',
    color: '#06B6D4',
  },
]

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group glass-card rounded-3xl p-8 cursor-default relative overflow-hidden"
  >
    {/* Gradient hover glow */}
    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

    {/* Border glow on hover */}
    <div
      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ boxShadow: `inset 0 0 0 1px ${service.color}30` }}
    />

    <div className="relative z-10">
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.3 }}
        style={{ color: service.color }}
        className="mb-6 p-4 rounded-2xl bg-white/5 inline-flex"
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <h3 className="font-poppins font-bold text-white text-xl mb-3 group-hover:text-white transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{ borderColor: `${service.color}40`, color: service.color, background: `${service.color}10` }}
            className="text-xs font-semibold px-3 py-1 rounded-full border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-accent right-[-100px] top-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            What I Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins font-black text-4xl md:text-5xl text-white mb-4"
          >
            Services Built to{' '}
            <span className="gradient-text">Scale & Convert</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            End-to-end web solutions, from pixel-perfect design to blazing-fast deployment.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
