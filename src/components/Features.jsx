import { motion } from 'framer-motion'
import { Brain, Eye, Activity, ShieldCheck, Sparkles, CloudCog } from 'lucide-react'

const FEATURES = [
  {
    icon: Brain,
    title: 'Neural Processing',
    text: 'On-implant inference reads intent from raw signal in under 5ms, no round trip to the cloud.',
  },
  {
    icon: Eye,
    title: 'Augmented Vision',
    text: 'Retinal-cortex relay holding natural depth and color response across a 140° field.',
  },
  {
    icon: Activity,
    title: 'Bio-Sync Interface',
    text: 'Calibrates continuously against your own movement data instead of a shared default profile.',
  },
  {
    icon: ShieldCheck,
    title: 'Quantum Security',
    text: 'Signal traffic is lattice-encrypted at the source — your nerve data never leaves the implant unprotected.',
  },
  {
    icon: Sparkles,
    title: 'Adaptive Intelligence',
    text: 'The onboard model tunes gain and latency weekly as your usage patterns settle in.',
  },
  {
    icon: CloudCog,
    title: 'Cloud Consciousness',
    text: 'Optional cross-device memory sync, encrypted end-to-end, fully opt-in and revocable anytime.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-display text-neon-green">
            Capabilities
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-4">
            Six systems. One nervous system.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ rotate: -0.6, scale: 1.02 }}
              className="glass-card glow-border rounded-2xl p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-neon-blue" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-lg mt-5">{f.title}</h3>
              <p className="text-soft-gray text-sm mt-2 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
