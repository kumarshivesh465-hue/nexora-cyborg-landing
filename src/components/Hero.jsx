import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const TYPED_PHRASES = [
  'Neural Processing',
  'Augmented Vision',
  'Bio-Sync Interface',
  'Quantum Security',
]

function TypedLine() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPED_PHRASES[phraseIndex]
    const speed = deleting ? 35 : 65

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1200)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setPhraseIndex((i) => (i + 1) % TYPED_PHRASES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIndex])

  return (
    <span className="text-neon-green font-display">
      {text}
      <span className="animate-pulse-slow">▍</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-layer opacity-40" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-display text-neon-blue border border-neon-blue/30 rounded-full px-4 py-2">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Cybernetic Systems, Online
          </span>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-6">
            The future isn't coming.
            <br />
            <span className="text-neon-gradient">It's already here.</span>
          </h1>

          <p className="mt-6 text-soft-gray text-lg max-w-md">
            NEXORA fuses neural interfaces with adaptive machine intelligence — built to
            sync with your body, not replace it. Live module: <TypedLine />
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#technology"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-ripple inline-flex items-center gap-2 font-display font-semibold px-7 py-3.5 rounded-full bg-neon-blue text-bg-navy shadow-glow-blue hover:brightness-110 transition-all"
            >
              Explore Technology <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-ripple inline-flex items-center gap-2 font-display font-semibold px-7 py-3.5 rounded-full border border-electric-purple text-white hover:shadow-glow-purple transition-all"
            >
              Join the Revolution
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-neon-blue/20 blur-3xl animate-pulse-slow" aria-hidden="true" />
          <svg
            viewBox="0 0 400 460"
            className="relative w-64 sm:w-80 lg:w-96 animate-float"
            role="img"
            aria-label="Stylized cyborg head profile with glowing circuit lines"
          >
            <defs>
              <linearGradient id="cyborgStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="55%" stopColor="#8A2BE2" />
                <stop offset="100%" stopColor="#00FFB3" />
              </linearGradient>
            </defs>
            <path
              d="M120 60 C 60 90, 40 170, 60 240 C 75 300, 60 340, 90 400 C 120 440, 200 450, 250 420 C 300 395, 300 340, 280 300 C 320 290, 340 250, 320 210 C 340 180, 330 130, 290 100 C 260 50, 170 30, 120 60 Z"
              fill="rgba(11,16,36,0.6)"
              stroke="url(#cyborgStroke)"
              strokeWidth="2"
            />
            <circle cx="185" cy="190" r="14" fill="none" stroke="#00E5FF" strokeWidth="2" />
            <circle cx="185" cy="190" r="4" fill="#00E5FF" />
            <path d="M199 190 L260 190 L260 150" stroke="#8A2BE2" strokeWidth="1.5" fill="none" />
            <path d="M199 195 L240 230 L280 230" stroke="#00FFB3" strokeWidth="1.5" fill="none" />
            <path d="M150 260 L150 320 L200 340" stroke="#00E5FF" strokeWidth="1.5" fill="none" />
            <circle cx="260" cy="150" r="3" fill="#8A2BE2" />
            <circle cx="280" cy="230" r="3" fill="#00FFB3" />
            <circle cx="200" cy="340" r="3" fill="#00E5FF" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
