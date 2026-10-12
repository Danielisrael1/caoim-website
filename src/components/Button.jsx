import { Link } from 'react-router-dom'
import { IconArrowRight } from './icons.jsx'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold leading-none ' +
  'transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out ' +
  'hover:-translate-y-0.5 active:translate-y-0 active:duration-75 ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
  'motion-reduce:transform-none motion-reduce:transition-colors'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/25 focus-visible:ring-brand',
  gold: 'bg-gold text-ink hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/30 focus-visible:ring-gold',
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
