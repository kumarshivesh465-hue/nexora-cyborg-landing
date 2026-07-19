import { motion } from 'framer-motion'

const PANELS = [
  {
    label: 'AI LAB // 04',
    caption: 'Lattice growth chamber, mid-cycle',
    accent: 'from-neon-blue/25 via-transparent to-transparent',
    pattern: 'circuit',
  },
  {
    label: 'ROBOTICS // 12',
    caption: 'Actuator calibration rig',
    accent: 'from-electric-purple/25 via-transparent to-transparent',
    pattern: 'grid',
  },
  {
    label: 'CITYSCAPE // 07',
    caption: 'Signal tower array, dusk',
    accent: 'from-neon-green/25 via-transparent to-transparent',
    pattern: 'skyline',
  },
  {
    label: 'CYBORG // 21',
    caption: 'Dermal plating, post-integration',
    accent: 'from-neon-blue/25 via-transparent to-transparent',
    pattern: 'nodes',
  },
]

function PanelArt({ pattern }) {
  if (pattern === 'circuit') {
    return (
      <svg viewBox="0 0 200 140" className="w-full h-full opacity-70" aria-hidden="true">
        <path d="M10 70 H70 V20 H140 V70 H190" fill="none" stroke="#00E5FF" strokeWidth="1.2" />
        <path d="M10 100 H50 V120 H160 V90 H190" fill="none" stroke="#8A2BE2" strokeWidth="1.2" />
        <circle cx="70" cy="20" r="3" fill="#00FFB3" />
        <circle cx="140" cy="70" r="3" fill="#00E5FF" />
        <circle cx="50" cy="120" r="3" fill="#8A2BE2" />
      </svg>
    )
  }
  if (pattern === 'grid') {
    return (
      <svg viewBox="0 0 200 140" className="w-full h-full opacity-60" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" x2="200" y1={i * 24} y2={i * 24} stroke="#8A2BE2" strokeWidth="0.6" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} y1="0" y2="140" x1={i * 24} x2={i * 24} stroke="#8A2BE2" strokeWidth="0.6" />
        ))}
        <circle cx="96" cy="72" r="18" fill="none" stroke="#00E5FF" strokeWidth="1.4" />
      </svg>
    )
  }
  if (pattern === 'skyline') {
    return (
      <svg viewBox="0 0 200 140" className="w-full h-full opacity-70" aria-hidden="true">
        {[18, 40, 62, 84, 106, 128, 150, 172].map((x, i) => (
          <rect
            key={x}
            x={x}
            y={140 - (30 + (i % 3) * 24)}
            width="14"
            height={30 + (i % 3) * 24}
            fill="none"
            stroke="#00FFB3"
            strokeWidth="1"
          />
        ))}
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full opacity-70" aria-hidden="true">
      <circle cx="60" cy="50" r="4" fill="#00E5FF" />
      <circle cx="140" cy="40" r="4" fill="#8A2BE2" />
      <circle cx="100" cy="100" r="4" fill="#00FFB3" />
      <circle cx="160" cy="110" r="4" fill="#00E5FF" />
      <path d="M60 50 L140 40 L100 100 L160 110 M100 100 L60 50" fill="none" stroke="#7A8BFF" strokeWidth="0.8" opacity="0.6" />
    </svg>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 px-6 bg-panel-navy/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-display text-neon-green">
            Field Archive
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-4">
            Labs, rigs, and the cities we're building for.
          </h2>
          <p className="text-soft-gray mt-4 text-sm">
            Rendered panels stand in for photography here — swap in real stills or footage
            when you have them; the frames and captions are already wired up.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PANELS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden glow-border bg-bg-navy"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-110">
                <PanelArt pattern={p.pattern} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-navy via-bg-navy/70 to-transparent">
                <p className="font-display text-xs tracking-[0.15em] text-neon-blue">{p.label}</p>
                <p className="text-xs text-soft-gray mt-1">{p.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
