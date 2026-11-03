/** Accepts absolute http(s) URLs from the public Vite env. */
export function readPublicUrl(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (!trimmed || trimmed === '#') return undefined

  try {
    const url = new URL(trimmed)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return undefined
    return url.toString()
  } catch {
    return undefined
  }
}

/** Real GitHub account for this portfolio. Overridden by VITE_GITHUB_URL when that variable is set. */
const GITHUB_PROFILE = 'https://github.com/GeanToroDevFS'

export const socialLinks = {
  github: readPublicUrl(import.meta.env.VITE_GITHUB_URL) ?? GITHUB_PROFILE,
  linkedin: readPublicUrl(import.meta.env.VITE_LINKEDIN_URL),
}
