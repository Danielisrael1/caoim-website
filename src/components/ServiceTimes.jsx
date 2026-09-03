export default function ServiceTimes({ times = [], className = '', tone = 'light' }) {
  const border = tone === 'light' ? 'border-black/10' : 'border-white/20'
  const sub = tone === 'light' ? 'text-black/55' : 'text-white/60'

  return (
    <ul className={`border-y ${border} divide-y ${border} ${className}`}>
      {times.map((s, i) => (
        <li key={`${s.name}-${i}`} className="flex items-center justify-between gap-4 py-4">
          <div>
            <p className="font-semibold">{s.name}</p>
            <p className={`text-sm ${sub}`}>{s.note}</p>
          </div>
          <p className="shrink-0 text-right">
            <span className={`block text-xs font-semibold uppercase tracking-[0.15em] ${sub}`}>
              {s.day}
            </span>
            <span className="text-lg font-bold">{s.time}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}
