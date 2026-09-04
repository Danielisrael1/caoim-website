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
            className="absolute inset-0 h-full w-full origin-center animate-kenburns object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        </>
      )}
      <div className="container-page relative py-14 sm:py-16 md:py-24">
        {eyebrow && <p className="animate-fade-up eyebrow text-gold [animation-delay:80ms]">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl animate-fade-up text-3xl font-extrabold leading-[1.1] [animation-delay:180ms] sm:text-4xl md:text-5xl md:leading-[1.08]">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl animate-fade-up text-base text-white/85 [animation-delay:300ms] sm:mt-5 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
