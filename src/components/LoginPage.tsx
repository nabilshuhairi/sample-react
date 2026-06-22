import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import Input from './Input'
import SocialButton from './SocialButton'
import PasswordStrength from './PasswordStrength'
import AnimatedShapes from './AnimatedShapes'
import Toast from './Toast'

/**
 * LoginPage component: split-screen SaaS-style login with glass card.
 */
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('info')

  const passwordRef = useRef<HTMLInputElement | null>(null)

  const evaluateStrength = (pwd: string) => {
    let score = 0
    if (pwd.length > 7) score++
    if (/[A-Z]/.test(pwd)) score++
    if (/[0-9]/.test(pwd)) score++
    if (/[^A-Za-z0-9]/.test(pwd)) score++
    return Math.min(score, 4)
  }

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setLoading(true)
    // Mock request
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    if (email.includes('@') && password.length > 5) {
      setToast('Signed in successfully')
      setToastType('success')
    } else {
      setToast('Invalid credentials')
      setToastType('error')
    }
    setTimeout(() => setToast(null), 2400)
  }

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-[#060617] via-purple-900 to-blue-900 text-gray-100 relative overflow-hidden">
      <AnimatedShapes />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left: branding / marketing */}
        <div className="lg:col-span-7 text-left">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-wide">YourCompany</span>
            </div>

            <h1 className="text-white text-5xl lg:text-6xl font-semibold leading-tight mb-4">Welcome Back</h1>
            <p className="text-gray-200/90 text-lg mb-8">Sign in to continue to your dashboard. Fast, simple, secure.</p>

            <div className="rounded-2xl p-6 bg-gradient-to-r from-white/3 to-white/2 border border-white/6 shadow-2xl">
              <p className="text-sm text-gray-200">New here? <a href="#" className="text-indigo-300 underline">Create an account</a></p>
            </div>
          </div>
        </div>

        {/* Right: login card */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <motion.form
            onSubmit={onSubmit}
            className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl"
            aria-labelledby="signin-heading"
            role="form"
          >
            <h2 id="signin-heading" className="text-2xl text-white font-semibold mb-1">Sign in to your account</h2>
            <p className="text-sm text-gray-300 mb-6">Enter your details below to continue</p>

            <div className="space-y-4">
              <Input id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-200">Password</label>
                  <button type="button" className="text-xs text-indigo-200 hover:underline" onClick={() => setShowPassword((s) => !s)} aria-pressed={showPassword} aria-label="Toggle password visibility">
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  id="password"
                  ref={passwordRef}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your secure password"
                  className="w-full rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow"
                  required
                />
                <PasswordStrength score={evaluateStrength(password)} />
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={remember} onChange={() => setRemember((r) => !r)} className="w-4 h-4 rounded-sm bg-white/6 focus:ring-2 focus:ring-indigo-400" aria-checked={remember} />
                  <span className="text-sm text-gray-200">Remember me</span>
                </label>

                <a href="#" className="text-sm text-indigo-200 hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className={`w-full rounded-xl py-3 text-sm font-semibold text-white shadow-md transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                  loading ? 'opacity-80 cursor-wait' : 'hover:scale-[1.01]'
                }`}
                style={{ background: 'linear-gradient(90deg,#7c3aed,#4338ca)' }}
                aria-busy={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>

              <div className="flex items-center gap-3">
                <div className="h-px bg-white/8 flex-1" />
                <div className="text-xs text-gray-300">or continue with</div>
                <div className="h-px bg-white/8 flex-1" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <SocialButton label="Google" icon={FaGoogle} onClick={() => { setToast('Google login not implemented'); setToastType('info'); setTimeout(() => setToast(null), 2000) }} />
                <SocialButton label="GitHub" icon={FaGithub} onClick={() => { setToast('GitHub login not implemented'); setToastType('info'); setTimeout(() => setToast(null), 2000) }} />
              </div>
            </div>

            <p className="text-center text-sm text-gray-300 mt-6">Don’t have an account? <a href="#" className="text-indigo-200 underline">Sign up</a></p>
          </motion.form>
        </div>
      </motion.div>

      {/* toast notification */}
      {toast && <Toast message={toast} type={toastType} />}
    </div>
  )
}

export default LoginPage
