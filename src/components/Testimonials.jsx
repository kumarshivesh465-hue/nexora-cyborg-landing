import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const REVIEWS = [
  {
    quote: 'The Neural-X upgrade changed the way I experience technology. Calibration took longer than I expected — and that turned out to be the right call.',
    who: 'Patient 0114 · Motor Cortex Link · Month 4',
  },
  {
    quote: 'The optic relay took a few days to stop feeling like a screen. Now it just feels like seeing again.',
    who: 'Patient 0203 · Augmented Vision · Month 6',
  },
  {
    quote: 'What surprised me was how much of the process was about my own nerve data, not a generic implant profile.',
    who: 'Patient 0087 · Bio-Sync Interface · Year 1',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-display text-neon-blue">
            Trial Notes
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-4">
            From patients in the ongoing NEXORA cohort.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.who}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border rounded-2xl p-7"
            >
              <Quote className="w-6 h-6 text-electric-purple" aria-hidden="true" />
              <blockquote className="text-sm leading-relaxed mt-4 text-white/90">
                {r.quote}
              </blockquote>
              <figcaption className="font-display text-xs text-soft-gray mt-5 tracking-wide">
                {r.who}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
