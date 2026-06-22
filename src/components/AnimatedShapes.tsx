import React from 'react'
import { motion } from 'framer-motion'

/** Floating animated gradient blobs for polished background visuals. */
const AnimatedShapes: React.FC = () => {
  return (
    <>
      <motion.div
        aria-hidden
        initial={{ opacity: 0.3, scale: 0.9, x: -20 }}
        animate={{ x: 20, scale: 1.05 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        className="pointer-events-none absolute -left-20 -top-10 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 blur-3xl opacity-40 mix-blend-screen"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ x: -10, y: 8, scale: 1.02 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        className="pointer-events-none absolute right-4 bottom-24 w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 to-purple-400 blur-3xl opacity-30 mix-blend-screen"
      />
    </>
  )
}

export default AnimatedShapes
