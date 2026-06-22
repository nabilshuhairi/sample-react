import React, { InputHTMLAttributes, forwardRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  id: string
}

/**
 * Reusable accessible input component with label, hint, and show/hide support handled externally.
 */
const Input = forwardRef<HTMLInputElement, Props>(({ label, hint, className = '', ...props }, ref) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-200 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...props}
        className={`w-full rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow shadow-sm ${
          props.disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'
        }`}
      />
      {hint && <p className="mt-2 text-xs text-gray-300">{hint}</p>}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
