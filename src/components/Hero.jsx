import Button from './Button.jsx'
import { IconPlay } from './icons.jsx'

export default function Hero({ site }) {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-ink text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      {/* Darken for legible text, a touch heavier at the bottom. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70"
        aria-hidden="true"
      />

      <div className="container-page relative py-24">
        <p className="eyebrow text-gold">Welcome to {site.shortName} · {site.campus}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
          {site.hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">{site.hero.subhead}</p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Button to="/about" variant="gold">
            Plan a visit
          </Button>
          <Button href={site.youtube.channelUrl} external variant="outlineLight">
            <IconPlay className="h-4 w-4" />
            Watch online
          </Button>
        </div>
      </div>
    </section>
  )
}
