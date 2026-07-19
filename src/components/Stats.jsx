import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 500, suffix: 'K+', label: 'Active Users' },
  { value: 98, suffix: '%', label: 'Signal Accuracy' },
  { value: 120, suffix: '', label: 'Countries' },
  { value: 15, suffix: '', label: 'AI Modules' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="font-heading font-black text-4xl sm:text-5xl text-neon-gradient">
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="text-soft-gray text-sm mt-2 tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
