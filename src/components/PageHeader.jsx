/**
 * Interior-page banner. Pass `image` for a photo banner with dark overlay,
 * otherwise it falls back to a solid brand-blue band.
 */
export default function PageHeader({ eyebrow, title, intro, image }) {
  return (
    <section className={`relative overflow-hidden text-white ${image ? 'bg-ink' : 'bg-brand'}`}>
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        </>
      )}
      <div className="container-page relative py-16 md:py-24">
        {eyebrow && <p className="eyebrow text-gold">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/85">{intro}</p>}
      </div>
    </section>
  )
}
