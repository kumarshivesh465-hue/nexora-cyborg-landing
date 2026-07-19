import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Technology from './components/Technology'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative bg-bg-navy text-white min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Features />
        <Technology />
        <Stats />
        <Testimonials />
        <Gallery />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
