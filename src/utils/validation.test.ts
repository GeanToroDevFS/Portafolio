import { describe, expect, it } from 'vitest'
import { validateContactForm } from './validation'

describe('validateContactForm', () => {
  it('requires name, email and message', () => {
    const errors = validateContactForm({ name: ' ', email: '', message: '' })
    expect(errors.name).toBeTruthy()
    expect(errors.email).toBeTruthy()
    expect(errors.message).toBeTruthy()
  })

  it('rejects an invalid email and a short message', () => {
    const errors = validateContactForm({
      name: 'Gean',
      email: 'correo-invalido',
      message: 'Hola',
    })
    expect(errors.email).toBe('Correo no válido')
    expect(errors.message).toBeTruthy()
  })

  it('accepts a complete message', () => {
    const errors = validateContactForm({
      name: 'Gean',
      email: 'gean@example.com',
      message: 'Quiero conversar sobre un proyecto.',
    })
    expect(errors).toEqual({})
  })
})
