import { EColors } from '../../enums'

export const getKeyFromEnum = (
  valueToGet: string,
  fromEnum: typeof EColors,
) => {
  try {
    const keyFromEnum = Object.entries(fromEnum)
      .filter(([, value]) => value === valueToGet)
      .map(([key]) => key)[0]

    return keyFromEnum
  } catch {
    console.error(`Your enum does not contain ${valueToGet}`)

    return null
  }
}

export const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.substring(1)

export const camelCaseToWords = (s: string) => {
  const result = s.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}
