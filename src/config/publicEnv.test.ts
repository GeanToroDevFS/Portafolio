import { describe, expect, it } from 'vitest'
import { readPublicUrl } from './publicEnv'

describe('readPublicUrl', () => {
  it('keeps absolute http and https urls', () => {
    expect(readPublicUrl('https://github.com/example')).toBe('https://github.com/example')
    expect(readPublicUrl('  http://localhost:5173/about  ')).toBe('http://localhost:5173/about')
  })

  it('rejects empty values, placeholders and other protocols', () => {
    expect(readPublicUrl('')).toBeUndefined()
    expect(readPublicUrl('   ')).toBeUndefined()
    expect(readPublicUrl('#')).toBeUndefined()
    expect(readPublicUrl('javascript:alert(1)')).toBeUndefined()
    expect(readPublicUrl('not a url')).toBeUndefined()
    expect(readPublicUrl('www.linkedin.com/in/example')).toBeUndefined()
    expect(readPublicUrl(undefined)).toBeUndefined()
  })
})
