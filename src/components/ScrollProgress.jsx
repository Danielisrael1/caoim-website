import { useEffect, useRef } from 'react'

/**
 * Thin reading-progress bar pinned to the top of the viewport.
 * Width is driven straight from scroll position via rAF (no re-renders),
 * and it stays hidden for anyone who prefers reduced motion.
 */
export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      el.style.transform = `scaleX(${pct})`
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 motion-reduce:hidden"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-gold"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
