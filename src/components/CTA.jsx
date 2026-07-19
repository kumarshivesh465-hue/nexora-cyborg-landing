import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-layer opacity-30" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Become <span className="text-neon-gradient">more than human.</span>
        </h2>
        <p className="text-soft-gray mt-6 max-w-xl mx-auto">
          Start with a full neural-motor scan. No commitment to proceed, no generic implant
          profile — just a clear read on what NEXORA can actually do for you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="btn-ripple inline-flex items-center justify-center gap-2 font-display font-semibold px-9 py-4 rounded-full bg-neon-blue text-bg-navy shadow-glow-blue hover:brightness-110 transition-all"
          >
            Upgrade Now <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
