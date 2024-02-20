/**
 * Get a DOM element using the selector parameter
 * @param selector The target element
 * @example
 * const sectionTitle = await getElement('[data-testid="header-2-id"]')
 * const sectionSubTitle = await getElement($('[data-testid="subheader-2-id"]'))
 */
const getElement = async (selector: string | WebdriverIO.Element | Promise<WebdriverIO.Element>) => {
  if (!selector) throw new Error('Function getElement() recieved an undefined value, verify your code.')
  let element = await $(await selector)
  return element
}
const objectIsArray = (object: any) => {
  if (Array.isArray(object) === true || Object.prototype.toString.call(object) === '[object Array]') {
    return true
  }
  return false
}
const objectIsString = (object: any) => {
  if (object instanceof String || typeof object === 'string') {
    return true
  }
  return false
}
const objectIsNumber = (object: any) => {
  if (Number.isFinite(object) === true || typeof object === 'number') {
    return true
  }
  return false
}

export { getElement, objectIsArray, objectIsString, objectIsNumber }
