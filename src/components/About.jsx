import { motion } from 'framer-motion'
import { Target, Eye, Brain, Zap } from 'lucide-react'

const PILLARS = [
  {
    icon: Target,
    title: 'Mission',
    text: 'Give people back function and range without asking them to become someone else.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'A world where the line between recovery and enhancement stops being a decision you have to make alone.',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    text: 'Every implant runs on an adaptive model that learns your signal patterns instead of forcing you to learn its defaults.',
  },
  {
    icon: Zap,
    title: 'Cybernetic Innovation',
    text: 'Modular hardware, open signal protocol — augments built years apart still talk to each other.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-display text-electric-purple">
            Who We Are
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-4">
            Built by engineers who treated the nervous system as the interface,
            <span className="text-neon-gradient"> not an obstacle to it.</span>
          </h2>
          <p className="text-soft-gray mt-5">
            NEXORA started as a prosthetics lab and became a full augmentation platform once
            it was clear the same signal architecture could restore, protect, and extend the
            body — with the same implant family.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card glow-border rounded-2xl p-6"
            >
              <p.icon className="w-7 h-7 text-neon-blue" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-lg mt-4">{p.title}</h3>
              <p className="text-soft-gray text-sm mt-2 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
