import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'technology', label: 'Technology' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'gallery', label: 'Gallery' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(LINKS.map((l) => l.id))

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-navy/70 backdrop-blur-md border-b border-neon-blue/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
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

        <ul className="hidden md:flex items-center gap-8 font-display text-sm text-soft-gray">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.id)
                }}
                className={`transition-colors hover:text-neon-blue ${
                  activeId === link.id ? 'text-neon-blue' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          onClick={(e) => {
            e.preventDefault()
            handleNav('cta')
          }}
          className="hidden md:inline-block btn-ripple font-display text-sm px-5 py-2 rounded-full border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-bg-navy hover:shadow-glow-blue transition-all"
        >
          Upgrade Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-neon-blue/10 bg-bg-navy/95 px-6"
          >
            {LINKS.map((link) => (
              <li key={link.id} className="py-3 border-b border-white/5">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(link.id)
                  }}
                  className="font-display text-soft-gray hover:text-neon-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#cta"
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('cta')
                }}
                className="inline-block font-display text-sm px-5 py-2 rounded-full border border-neon-blue text-neon-blue"
              >
                Upgrade Now
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
