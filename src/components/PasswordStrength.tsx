import React from 'react'

interface Props {
  score: number // 0..4
}

/**
 * Small visual password strength indicator.
 */
const PasswordStrength: React.FC<Props> = ({ score }) => {
  const colors = ['bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-green-600']
  return (
    <div className="w-full mt-2">
      <div className="flex gap-1 h-2">
        {colors.map((c, i) => (
          <div
            key={i}
            className={`flex-1 rounded-full transition-all ${i <= score ? c : 'bg-white/6'}`}
            style={{ boxShadow: i <= score ? '0 4px 14px rgba(0,0,0,0.12)' : undefined }}
          />
        ))}
      </div>
    </div>
  )
}

export default PasswordStrength
