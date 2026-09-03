import { IconFacebook, IconInstagram, IconYouTube, IconTikTok } from './icons.jsx'

const ORDER = [
  ['facebook', 'Facebook', IconFacebook],
  ['instagram', 'Instagram', IconInstagram],
  ['youtube', 'YouTube', IconYouTube],
  ['tiktok', 'TikTok', IconTikTok],
]

export default function SocialLinks({
  social = {},
  className = '',
  iconClassName = 'h-5 w-5',
  linkClassName = 'border-white/25 hover:bg-white/10',
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {ORDER.filter(([key]) => social[key]).map(([key, label, Icon]) => (
        <a
          key={key}
          href={social[key]}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${linkClassName}`}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  )
}
