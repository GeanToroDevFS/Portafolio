import { useState, useCallback } from 'react'
import type { FormData, FormErrors } from '@/types'

interface UseFormOptions {
  initialValues: FormData
  validate: (values: FormData) => FormErrors
}

interface UseFormReturn {
  values: FormData
  errors: FormErrors
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleBlur: () => void
  reset: () => void
  validateAll: () => boolean
  isValid: boolean
}

export const useForm = ({ initialValues, validate }: UseFormOptions): UseFormReturn => {
  const [values, setValues] = useState<FormData>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const field = name as keyof FormData
    setValues(prev => ({ ...prev, [field]: value }))

    if (touched[field]) {
      const validationErrors = validate({ ...values, [field]: value })
      setErrors(prev => ({ ...prev, [field]: validationErrors[field] }))
    }
  }, [touched, validate, values])

  const handleBlur = useCallback(() => {
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched(Object.keys(values).reduce<Record<string, boolean>>((acc, key) => ({ ...acc, [key]: true }), {}))
  }, [validate, values])

  const validateAll = useCallback(() => {
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched(Object.keys(values).reduce<Record<string, boolean>>((acc, key) => ({ ...acc, [key]: true }), {}))
    return Object.keys(validationErrors).length === 0
  }, [validate, values])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])

  const isValid = Object.keys(validate(values)).length === 0

  return { values, errors, handleChange, handleBlur, reset, validateAll, isValid }
}
