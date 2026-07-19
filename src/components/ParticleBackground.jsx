import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, particles, raf

    const COLORS = ['#00E5FF', '#8A2BE2', '#00FFB3']

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function init() {
      const count = Math.min(70, Math.floor((width * height) / 22000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      // pointer glow
      const grad = ctx.createRadialGradient(
        mouse.current.x, mouse.current.y, 0,
        mouse.current.x, mouse.current.y, 220
      )
      grad.addColorStop(0, 'rgba(0,229,255,0.08)')
      grad.addColorStop(1, 'rgba(0,229,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.7
        ctx.fill()
        ctx.globalAlpha = 1

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0,229,255,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(step)
    }

    function handleMove(e) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    resize()
    init()
    window.addEventListener('resize', () => {
      resize()
      init()
    })
    window.addEventListener('mousemove', handleMove)

    if (reduceMotion) {
      step()
      cancelAnimationFrame(raf)
    } else {
      step()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  )
}
