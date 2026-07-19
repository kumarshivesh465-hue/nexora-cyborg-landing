import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'technology', label: 'Technology' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'gallery', label: 'Gallery' },
]

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-neon-blue/10 pt-16 pb-8 px-6 bg-panel-navy/60">
      <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNav('hero')
            }}
            className="flex items-center gap-2 font-heading font-bold tracking-widest text-lg"
          >
            <Cpu className="w-5 h-5 text-neon-blue" aria-hidden="true" />
            <span className="text-neon-gradient">NEXORA</span>
          </a>
          <p className="text-soft-gray text-sm mt-4 max-w-xs">
            Neural-motor augmentation, built to sync with your body rather than replace it.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm text-white tracking-wide mb-4">Navigate</h3>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(n.id)
                  }}
                  className="text-soft-gray text-sm hover:text-neon-blue transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm text-white tracking-wide mb-4">Contact</h3>
          <a
            href="mailto:hello@nexora.example"
            className="flex items-center gap-2 text-soft-gray text-sm hover:text-neon-blue transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            hello@nexora.example
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm text-white tracking-wide mb-4">Follow</h3>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-soft-gray hover:text-neon-blue hover:border-neon-blue/40 hover:shadow-glow-blue transition-all"
              >
                <s.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-display text-xs text-soft-gray">
          © {new Date().getFullYear()} NEXORA. Fictional company — demo interface only.
        </p>
        <p className="font-display text-xs text-soft-gray">Built for the Cyborg Landing Page challenge.</p>
      </div>
    </footer>
  )
}
