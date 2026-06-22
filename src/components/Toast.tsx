import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  message?: string
  type?: 'success' | 'error' | 'info'
}

export const Toast: React.FC<Props> = ({ message, type = 'info' }) => {
  if (!message) return null
  const bg = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-indigo-500'
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        className={`fixed bottom-6 right-6 z-50 rounded-lg px-4 py-3 text-white ${bg} shadow-lg`}
        role="status"
        aria-live="polite"
      >
        {message}
      </motion.div>
    </AnimatePresence>
  )
}

export default Toast
