import { useEffect, useRef, useState } from 'react'
import Button from './Button.jsx'
import { IconPlay } from './icons.jsx'

export default function Hero({ site }) {
  const contentRef = useRef(null)

  // Gentle parallax: the hero content drifts up and fades as you scroll past it.
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false
    const update = () => {
      const y = window.scrollY
      const shift = Math.min(y * 0.18, 80)
      const opacity = Math.max(0, 1 - y / 520)
      el.style.transform = `translate3d(0, ${shift}px, 0)`
      el.style.opacity = String(opacity)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink text-white">
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75"
        aria-hidden="true"
      />

      <div ref={contentRef} className="container-page relative py-24 will-change-transform">
        <p className="animate-fade-up eyebrow text-gold [animation-delay:100ms]">
          Welcome to {site.shortName} · {site.campus}
        </p>
        <h1 className="mt-5 max-w-5xl animate-fade-up text-5xl font-extrabold leading-[1.02] [animation-delay:200ms] sm:text-7xl lg:text-8xl">
          {site.hero.headline}
        </h1>
        <p className="mt-7 max-w-2xl animate-fade-up text-xl text-white/85 [animation-delay:350ms] sm:text-2xl">
          {site.hero.subhead}
        </p>
        <p className="mt-3 animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-gold [animation-delay:450ms]">
          {site.taglineRef}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:550ms]">
          <Button to="/about" variant="gold">
            Plan a visit
          </Button>
          <Button href={site.youtube.channelUrl} external variant="outlineLight">
            <IconPlay className="h-4 w-4" />
            Watch online
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </span>
      </div>
    </section>
  )
}
