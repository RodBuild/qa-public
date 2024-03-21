import * as Utils from '../../utils'
import { objectIsString } from '../../Validate'

const defaultName = 'Element'
const defaultTimeout = 8000

/**
 * Get a DOM element using the selector parameter
 * @param selector The target element
 * @example
 * const sectionTitle = await getElement('[data-testid="header-2-id"]')
 * const sectionSubTitle = await getElement($('[data-testid="subheader-2-id"]'))
 */
const getElement = async (
  selector: string | WebdriverIO.Element | Promise<WebdriverIO.Element>
): Promise<WebdriverIO.Element> => {
  if (!selector) throw new Error('Function getElement() recieved an undefined value, verify your code.')
  if (objectIsString(selector) == true) {
    let element = await $(await selector)
    return element
  }
  //@ts-ignore
  return await selector
}
/**
 * Get a DOM elements using the selector parameter
 * @param selector The target element
 * @example
 * const resultsCards = await getElements('[data-testid="result-card"]')
 * const navigationCards = await getElements($$('[data-testid="nav-card"]'))
 */
const getElements = async (
  selector: string | WebdriverIO.ElementArray | Promise<WebdriverIO.ElementArray>
): Promise<WebdriverIO.ElementArray> => {
  if (!selector) throw new Error('Function getElements() recieved an undefined value, verify your code.')
  if (objectIsString(selector) == true) {
    //@ts-ignore
    let elements = await $$(selector)
    return elements
  }
  //@ts-ignore
  return await selector
}
const elementQuantityIsValid = async (
  selector: string | WebdriverIO.ElementArray | Promise<WebdriverIO.ElementArray>,
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
      timeoutMsg: `The quantity of ${elementName} is not equal to ${quantity}.`,
    }
  )
}
const elementIsExistingAndScrollIntoView = async (
  selector: WebdriverIO.Element | string,
  name: string,
  timeout: number
) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` })
  await element.scrollIntoView()
  await browser.pause(850)
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
  await browser.waitUntil(
    async () => {
      const elementAttr = await element.getAttribute(attribute)
      if (elementAttr.includes(attributeValue) === true) return true
      return false
    },
    {
      timeout: timeoutValue,
      timeoutMsg: `${elementName} contains the attribute ${attribute} with an invalid value.`,
    }
  )
}
/**
 * @example <p>Text Value</p>
 */
const elementHasTextWithValue = async (
  selector: WebdriverIO.Element | string,
  name: string,
  timeout: number,
  text: string
) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` })
  await browser.waitUntil(
    async () => {
      const elementTextValue = await element.getText()
      if (elementTextValue.includes(text) === true) return true
      return false
    },
    {
      timeout: timeoutValue,
      timeoutMsg: `${elementName} does not contain the expected text value.`,
    }
  )
}
const elementGetCSS = async (selector: WebdriverIO.Element | string, name: string, timeout: number) => {
  const array = [
    {
      name: '',
      value: '',
    },
  ]
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` })
  const css = await element.getAttribute('style')
  const parts = css.split(';').filter((item) => {
    if (item !== '') {
      return item.trim()
    }
  })
  console.log(parts)

  return array
}
const elementContainsCSS = async () => {}
/**
 * @example <div style=""> </div>
 */
const elementHasCSSWithValue = async (
  selector: WebdriverIO.Element | string,
  name: string,
  timeout: number,
  css: string,
  cssValue: string
) => {
  const element = await getElement(selector)
  const elementName = Utils.getFunctionElementName(name) ?? defaultName
  const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout
  await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` })
  await browser.waitUntil(
    async () => {
      const cssAttribute = await element.getCSSProperty(css)
      if (cssAttribute.value.includes(cssValue) === true) return true
      return false
    },
    {
      timeout: timeoutValue,
      timeoutMsg: `${elementName} contains the CSS attribute ${css} with an invalid value.`,
    }
  )
  // if (cssAttribute?.value && cssAttribute?.value !== '') {
  //   if (cssAttribute.value.includes(cssValue) === false)
  //     throw new Error(`${elementName} contains the CSS attribute ${css} with an invalid value.`)
  // } else {
  //   throw new Error(`${elementName} does not contain the CSS attribute of ${css}.`)
  // }
}

export {
  getElement,
  getElements,
  elementQuantityIsValid,
  elementIsExistingAndScrollIntoView,
  elementIsDisplayed,
  elementIsEnabled,
  elementIsNotEnabled,
  elementContainsAttribute,
  elementHasAttributeWithValue,
  elementHasTextWithValue,
  elementGetCSS,
  elementContainsCSS,
  elementHasCSSWithValue,
}
