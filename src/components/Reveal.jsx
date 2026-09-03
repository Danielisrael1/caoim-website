import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Fades + slides its children in when they scroll into view (once).
 * Honours prefers-reduced-motion. Falls back to visible if anything goes wrong,
 * so content can never get stuck hidden.
 *
 *   <Reveal>…</Reveal>
 *   <Reveal as="li" delay={80}>…</Reveal>
 *   <Reveal variant="zoom">…</Reveal>
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  variant = 'up',
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    // Already on screen (or above it) when mounted → reveal right away.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -48px 0px' },
    )
    io.observe(el)

    // Safety net: if the observer never fires for any reason, show after 4s.
    const fallback = setTimeout(() => setVisible(true), 4000)

    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  const base = variant === 'zoom' ? 'reveal-zoom' : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
