import React from 'react'

interface Props {
  label: string
  // Use ElementType to avoid runtime issues with re-exports from react-icons
  icon: React.ElementType
  onClick?: () => void
}

/**
 * Reusable social button with icon and accessible label.
 */
const SocialButton: React.FC<Props> = ({ label, icon: Icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/6 px-4 py-2 text-sm text-gray-100 hover:scale-[1.01] transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label={label}
    >
      <Icon className="w-5 h-5" aria-hidden />
      <span className="font-medium">{label}</span>
    </button>
  )
}

export default SocialButton
