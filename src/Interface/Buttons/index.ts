import { getElement, elementIsDisplayed } from '../Element/index'
import { getFunctionTimeout } from '../../utils'

const defaultName = 'Button'
const defaultTimeout = 8000

const buttonIsDisplayedAndClickable = async (selector: WebdriverIO.Element | string, timeout: number) => {
  const element = await getElement(selector)
  const timeoutValue = getFunctionTimeout(timeout) ?? defaultTimeout
  await elementIsDisplayed(element, defaultName, timeoutValue)
  await element.waitForClickable({
    timeout: timeoutValue,
    timeoutMsg: `${defaultName} is not clickable, but it should be.`,
  })
}
const buttonIsDisplayedAndNotClickable = async (selector: WebdriverIO.Element | string, timeout: number) => {
  const element = await getElement(selector)
  const timeoutValue = getFunctionTimeout(timeout) ?? defaultTimeout
  await elementIsDisplayed(element, defaultName, timeoutValue)
  await element.waitForClickable({
    timeout: timeoutValue,
    timeoutMsg: `${defaultName} is clickable, but it should not be.`,
    reverse: true,
  })
}

export { buttonIsDisplayedAndClickable, buttonIsDisplayedAndNotClickable }
