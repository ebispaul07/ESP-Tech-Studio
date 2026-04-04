import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  FiPhone, FiMail, FiMapPin, FiSend,
  FiMessageCircle, FiLinkedin, FiGithub, FiCheckCircle
} from 'react-icons/fi'

const WHATSAPP_URL =
  'https://wa.me/917598998831?text=Hi%20Ebi!%20I%20found%20you%20via%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20project.'

/* ── Exact Google Maps coordinates from user-shared link ── */
const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.2!2d77.1174090!3d8.2914270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTcnMjkuMSJOIDc3wrAwNycwMi43IkU!5e0!3m2!1sen!2sin!4v1712230800000!5m2!1sen!2sin'

const contactInfo = [
  {
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: '+91 75989 98831',
    href: 'tel:7598998831',
    color: '#00ADB5',
  },
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'ebispaul07@gmail.com',
    href: 'mailto:ebispaul07@gmail.com',
    color: '#F59E0B',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Kollemcode, India',
    href: 'https://maps.google.com/?q=8.291427,77.117409',
    color: '#EC4899',
  },
]

const InputField = ({ label, id, error, children }) => (
  <div>
    <label htmlFor={id} className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">
      {label}
    </label>
    {children}
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
)

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-primary/20">
      <div className="orb w-[400px] h-[400px] bg-accent right-[-100px] top-0 opacity-10 animate-float" />
      <div className="orb w-[300px] h-[300px] bg-electric-violet left-[-100px] bottom-0 opacity-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-accent-light text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 font-space"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Let's Collaborate
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-space font-black text-4xl md:text-6xl text-white mb-6"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-base md:text-lg max-w-2xl mx-auto font-outfit"
          >
            Ready to scale your business with a world-class website? 
            Reach out today and let's discuss your next big project.
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ─── LEFT COLUMN ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            {/* Contact info cards */}
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-5 glass-card rounded-2xl p-5 group hover:border-accent/30 transition-all duration-300"
              >
                <div
                  style={{ color: item.color, background: `${item.color}15` }}
                  className="p-3 rounded-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white/30 text-[10px] font-space font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-space font-bold text-lg group-hover:text-accent transition-colors truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/40 text-green-400 font-space font-bold text-xs px-4 py-4 rounded-xl transition-all duration-300"
              >
                <FiMessageCircle size={18} /> WhatsApp
              </motion.a>
              <motion.a
                href="mailto:ebispaul07@gmail.com"
                id="contact-email"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-space font-bold text-xs px-4 py-4 rounded-xl transition-all duration-300"
              >
                <FiMail size={18} /> Email Me
              </motion.a>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://www.linkedin.com/in/ebi-s-paul-220b1b2b8/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-2 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#4D9FFF] font-space font-bold text-xs px-4 py-3.5 rounded-xl transition-all duration-300"
              >
                <FiLinkedin size={18} /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/ebispaul07"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-space font-bold text-xs px-4 py-3.5 rounded-xl transition-all duration-300"
              >
                <FiGithub size={18} /> GitHub
              </motion.a>
            </div>

            {/* Google Map — exact coordinates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-3xl overflow-hidden border border-white/5 h-64 w-full shadow-2xl relative group"
            >
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              <iframe
                title="ESP Tech Studio — Kollemcode Location"
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.8)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN — Contact Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card-vibrant rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] -mr-16 -mt-16" />
            
            <h3 className="font-space font-extrabold text-white text-3xl mb-2">Send a Message</h3>
            <p className="text-white/30 text-sm mb-10 font-outfit">I usually reply within 24 hours.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <FiCheckCircle className="text-accent mb-4" size={56} />
                </motion.div>
                <h4 className="font-poppins font-bold text-white text-xl mb-2">Message Sent! 🎉</h4>
                <p className="text-white/50">Thanks for reaching out. I'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <InputField label="Name" id="contact-name" error={errors.name?.message}>
                    <input
                      id="contact-name"
                      {...register('name', { required: 'Name is required' })}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/60 text-white placeholder-white/20 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:bg-accent/5"
                    />
                  </InputField>
                  <InputField label="Email" id="contact-email-input" error={errors.email?.message}>
                    <input
                      id="contact-email-input"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                      })}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/60 text-white placeholder-white/20 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:bg-accent/5"
                    />
                  </InputField>
                </div>

                <InputField label="Subject" id="contact-subject" error={errors.subject?.message}>
                  <input
                    id="contact-subject"
                    {...register('subject', { required: 'Subject is required' })}
                    placeholder="I need a website for my business"
                    className="w-full bg-white/5 border border-white/10 focus:border-accent/60 text-white placeholder-white/20 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:bg-accent/5"
                  />
                </InputField>

                <InputField label="Message" id="contact-message" error={errors.message?.message}>
                  <textarea
                    id="contact-message"
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    placeholder="Tell me about your project, goals, and timeline..."
                    className="w-full bg-white/5 border border-white/10 focus:border-accent/60 text-white placeholder-white/20 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:bg-accent/5 resize-none"
                  />
                </InputField>

                <motion.button
                  id="contact-submit"
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,173,181,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary font-poppins font-bold text-base px-6 py-4 rounded-xl transition-all duration-300"
                >
                  <FiSend size={18} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
