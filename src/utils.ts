import { objectIsNumber, objectIsString } from './Validate'

export const getFunctionElementName = (text: string) => {
  if (objectIsString(text) === true && text !== '') return text
  return undefined
}
export const getFunctionTimeout = (timeout: number) => {
  if (objectIsNumber(timeout) === true && timeout > 100) return timeout
  return undefined
}
