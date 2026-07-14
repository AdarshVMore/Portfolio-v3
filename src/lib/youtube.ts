const YOUTUBE_ID_PATTERN = /[a-zA-Z0-9_-]{11}/

export function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.replace(/^www\./, '')

    if (host === 'youtu.be') {
      const id = parsed.pathname.slice(1).split('/')[0]
      return YOUTUBE_ID_PATTERN.test(id) ? id : null
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname === '/watch') {
        const id = parsed.searchParams.get('v')
        return id && YOUTUBE_ID_PATTERN.test(id) ? id : null
      }
      const embedMatch = parsed.pathname.match(/^\/embed\/([a-zA-Z0-9_-]{11})/)
      if (embedMatch) return embedMatch[1]
    }
  } catch {
    return null
  }

  return null
}

export function isYouTubeUrl(url: string): boolean {
  return getYouTubeId(url) !== null
}

export function getYouTubeThumbnail(
  videoId: string,
  quality: 'maxres' | 'hq' = 'maxres',
): string {
  const file = quality === 'maxres' ? 'maxresdefault.jpg' : 'hqdefault.jpg'
  return `https://img.youtube.com/vi/${videoId}/${file}`
}

export function getYouTubeEmbedUrl(videoId: string, autoplay = false): string {
  const params = autoplay ? '?autoplay=1' : ''
  return `https://www.youtube.com/embed/${videoId}${params}`
}
