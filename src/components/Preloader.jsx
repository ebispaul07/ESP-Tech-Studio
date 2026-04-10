import React from 'react'
import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-[9999]">
      {/* Animated logo mark */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center glow">
          <span className="text-3xl font-black font-poppins text-white">E</span>
        </div>
        {/* Spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-2 rounded-2xl border-2 border-transparent border-t-accent border-r-accent opacity-60"
        />
      </motion.div>

      {/* Studio name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center"
      >
        <p className="text-accent font-poppins font-semibold tracking-[0.3em] text-sm uppercase mb-2">
          ESP Tech Studio
        </p>
        <p className="text-white/40 text-xs tracking-widest">Welcomes you....</p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="mt-10 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
        />
      </motion.div>
    </div>
  )
}

export default Preloader
