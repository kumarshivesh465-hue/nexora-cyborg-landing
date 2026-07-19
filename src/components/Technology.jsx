import { motion } from 'framer-motion'
import { BrainCircuit, Bot, Cpu, Network, Lock, Atom } from 'lucide-react'

const TECH = [
  { icon: BrainCircuit, title: 'Artificial Intelligence', text: 'Onboard models trained on aggregate motion data, personalized to each patient after activation.' },
  { icon: Network, title: 'Machine Learning', text: 'Gain and latency curves improve automatically as calibration sessions accumulate.' },
  { icon: Bot, title: 'Robotics', text: 'Prosthetic actuators tuned for torque response that matches your own limb, not a generic average.' },
  { icon: Cpu, title: 'Neural Networks', text: 'Signal classification happens on-chip, keeping raw nerve data off any external network.' },
  { icon: Lock, title: 'Cyber Security', text: 'Lattice-encrypted firmware, clinic-only patching, zero home-network attack surface.' },
  { icon: Atom, title: 'Quantum Computing', text: 'Used in the lab, not the implant — to simulate lattice bonding before a single unit is grown.' },
]

export default function Technology() {
  return (
    <section id="technology" className="relative py-28 px-6 bg-panel-navy/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-display text-electric-purple">
            Under The Plating
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-4">
            The stack that makes it feel like your own body.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="glow-border rounded-2xl p-7 bg-bg-navy/60"
            >
              <t.icon className="w-7 h-7 text-neon-green" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-lg mt-4">{t.title}</h3>
              <p className="text-soft-gray text-sm mt-2 leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
