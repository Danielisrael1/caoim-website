import { useState } from 'react'
import { IconPlay } from './icons.jsx'

/**
 * A "lite" YouTube embed: shows our own photo + play button (zero extra
 * network/JS cost) and only loads the real YouTube iframe once tapped.
 *
 * - If `videoId` is set, that specific video plays.
 * - Otherwise, if `channelId` is set, it plays the channel's uploads —
 *   i.e. always the latest sermon, with no code changes needed later.
 */
export default function YouTubeFacade({ videoId, channelId, poster, alt = '', className = '' }) {
  const [playing, setPlaying] = useState(false)

  const src = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
    : channelId
      ? `https://www.youtube-nocookie.com/embed/videoseries?list=${channelId.replace(/^UC/, 'UU')}&autoplay=1&rel=0`
      : null

  if (playing && src) {
    return (
      <div className={`aspect-[4/3] overflow-hidden bg-black ${className}`}>
        <iframe
          src={src}
          title={alt || 'YouTube video player'}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${alt || 'video'}`}
      className={`group relative block aspect-[4/3] w-full overflow-hidden ${className}`}
    >
      <img
        src={poster}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:scale-110">
          <IconPlay className="h-6 w-6" />
        </span>
      </span>
    </button>
  )
}
