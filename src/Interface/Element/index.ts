import * as Validate from '../../Validate/index'

function getElementName(text: string) {
  if (Validate.objectIsString(text) === true && text !== '') {
    return text
  }
  return 'Element'
}

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
  const elementName = getElementName(name)
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
      timeout: timeout,
      timeoutMsg: `The quantity ${elementName} is not valid.`,
    }
  )
}
const elementIsDisplayed = async (selector: WebdriverIO.Element | string, name: string, timeout: number) => {
  const element = await getElement(selector)
  const elementName = getElementName(name)
  await element.waitForExist({ timeout: timeout, timeoutMsg: `${elementName} not found.` })
  await element.waitForDisplayed({ timeout: timeout, timeoutMsg: `${elementName} is not visible in the viewport.` })
}
/**
 * @example <input disabled>...</input>
 */
const elementIsEnabled = async (selector: WebdriverIO.Element | string, name: string, timeout: number) => {
  const element = await getElement(selector)
  const elementName = getElementName(name)
  await element.waitForExist({ timeout: timeout, timeoutMsg: `${elementName} not found.` })
  await element.waitForEnabled({
    timeout: timeout,
    timeoutMsg: `${elementName} is not enabled.`,
  })
}
/**
 * @example <input disabled>...</input>
 */
const elementIsNotEnabled = async (selector: WebdriverIO.Element | string, name: string, timeout: number) => {
  const element = await getElement(selector)
  const elementName = getElementName(name)
  await element.waitForExist({ timeout: timeout, timeoutMsg: `${elementName} not found.` })
  await element.waitForEnabled({
    timeout: timeout,
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
  const elementName = getElementName(name)
  await element.waitForExist({ timeout: timeout, timeoutMsg: `${elementName} not found.` })
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
  const elementName = getElementName(name)
  await elementContainsAttribute(element, elementName, timeout, attribute)
  const elementAttr = await element.getAttribute(attribute)
  if (elementAttr.includes(attributeValue) === false)
    throw new Error(`${elementName} contains the attribute ${attribute} with an invalid value.`)
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
}
