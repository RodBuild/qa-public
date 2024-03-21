import {
  getElement,
  elementIsDisplayed,
  elementContainsAttribute,
  elementIsEnabled,
  elementHasAttributeWithValue,
} from '../Element/index'
import { getFunctionTimeout } from '../../utils'

const defaultName = 'Link'
const defaultTimeout = 8000

const linkIsDisplayedAndVerifyHref = async (selector: WebdriverIO.Element | string, href: string, timeout: number) => {
  const element = await getElement(selector)
  const timeoutValue = getFunctionTimeout(timeout) ?? defaultTimeout
  await elementIsDisplayed(element, defaultName, timeoutValue)
  await elementContainsAttribute(element, defaultName, timeoutValue, 'href')
  await elementHasAttributeWithValue(element, defaultName, timeoutValue, 'href', href)
}
const linkIsDisplayedAndEnabled = async (selector: WebdriverIO.Element | string, timeout: number) => {
  const element = await getElement(selector)
  const timeoutValue = getFunctionTimeout(timeout) ?? defaultTimeout
  await elementIsDisplayed(element, defaultName, timeoutValue)
  await elementIsEnabled(element, defaultName, timeoutValue)
}

export { linkIsDisplayedAndVerifyHref, linkIsDisplayedAndEnabled }
