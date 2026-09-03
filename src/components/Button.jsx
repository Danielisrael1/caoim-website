import { Link } from 'react-router-dom'
import { IconArrowRight } from './icons.jsx'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold leading-none transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand',
  gold: 'bg-gold text-ink hover:bg-gold-dark focus-visible:ring-gold',
  outlineLight:
    'border-2 border-white text-white hover:bg-white hover:text-ink focus-visible:ring-white',
  outlineDark:
    'border-2 border-ink/80 text-ink hover:bg-ink hover:text-white focus-visible:ring-ink',
}

export default function Button({
  to,
  href,
  as,
  external,
  variant = 'primary',
  arrow = false,
  className = '',
  children,
  ...props
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`
  const inner = (
    <>
      {children}
      {arrow && (
        <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  )

  if (href || external) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...props}
      >
        {inner}
      </a>
    )
  }
  if (to && as !== 'button') {
    return (
      <Link to={to} className={cls} {...props}>
        {inner}
      </Link>
    )
  }
  return (
    <button className={cls} {...props}>
      {inner}
    </button>
  )
}
