/**
 * Scrolling word strip — an homage to the reference site's "Welcome Home" band.
 * Renders the phrase list twice so the -50% keyframe loops seamlessly.
 */
export default function Marquee({
  items = ['Welcome home', 'Christ the Alpha & Omega', 'Maya · Uganda'],
  className = 'bg-brand text-white',
}) {
  const sequence = [...items, ...items, ...items, ...items]
  const row = [...sequence, ...sequence]

  return (
    <div className={`overflow-hidden py-4 ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee items-center">
        {row.map((text, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.25em]">
              {text}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
