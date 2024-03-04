import * as Utils from '../../Utils'

const defaultName = 'Element'
const defaultTimeout = 8000

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
/**
 * Get a DOM elements using the selector parameter
 * @param selector The target element
 * @example
 * const resultsCards = await getElements('[data-testid="result-card"]')
 * const navigationCards = await getElements($$('[data-testid="nav-card"]'))
 */
const getElements = async (selector: string | WebdriverIO.Element[] | Promise<WebdriverIO.Element[]>) => {
  if (!selector) throw new Error('Function getElements() recieved an undefined value, verify your code.')
  let elements = await $$(await selector)
  return elements
}
const elementQuantityIsValid = async (
  selector: WebdriverIO.Element[] | string,
  name: string,
  timeout: number,
  quantity: number
) => {
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await browser.waitUntil(
    async () => {
      const elements = await getElements(selector)
      const elementsQuantity = elements.length
      if (elementsQuantity === quantity) {
        return true
      }
      return false
    },
    {
      timeout: timeoutValue,
      timeoutMsg: `The quantity ${elementName} is not valid.`,
    }
  )
}
const elementIsDisplayed = async (selector: WebdriverIO.Element | string, name: string, timeout: number) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` })
  await element.waitForDisplayed({
    timeout: timeoutValue,
    timeoutMsg: `${elementName} is not visible in the viewport.`,
  })
}
/**
 * @example <input disabled>...</input>
 */
const elementIsEnabled = async (selector: WebdriverIO.Element | string, name: string, timeout: number) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` })
  await element.waitForEnabled({
    timeout: timeoutValue,
    timeoutMsg: `${elementName} is not enabled.`,
  })
}
/**
 * @example <input disabled>...</input>
 */
const elementIsNotEnabled = async (selector: WebdriverIO.Element | string, name: string, timeout: number) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` })
  await element.waitForEnabled({
    timeout: timeoutValue,
    timeoutMsg: `${elementName} is enabled.`,
    reverse: true,
  })
}
const elementContainsAttribute = async (
  selector: WebdriverIO.Element | string,
  name: string,
  timeout: number,
  attribute: string
) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` })
  const elementAttr = await element.getAttribute(attribute)
  if (!elementAttr) throw new Error(`${elementName} does not contain the attribute ${attribute}.`)
}
const elementHasAttributeWithValue = async (
  selector: WebdriverIO.Element | string,
  name: string,
  timeout: number,
  attribute: string,
  attributeValue: string
) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await elementContainsAttribute(element, elementName, timeoutValue, attribute)
  const elementAttr = await element.getAttribute(attribute)
  if (elementAttr.includes(attributeValue) === false)
    throw new Error(`${elementName} contains the attribute ${attribute} with an invalid value.`)
}
/**
 * @example <p>Text Value</p>
 */
const elementHasTextValue = async (
  selector: WebdriverIO.Element | string,
  name: string,
  timeout: number,
  text: string
) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await elementIsDisplayed(element, elementName, timeoutValue)
  const elementTextValue = await element.getText()
  if (elementTextValue.includes(text) === false)
    throw new Error(`${elementName} does not contain the expected text value.`)
}

export {
  getElement,
  getElements,
  elementQuantityIsValid,
  elementIsDisplayed,
  elementIsEnabled,
  elementIsNotEnabled,
  elementContainsAttribute,
  elementHasAttributeWithValue,
  elementHasTextValue,
}
