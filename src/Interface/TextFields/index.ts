import {
  getElement,
  elementIsDisplayed,
  elementContainsAttribute,
  elementIsEnabled,
  elementHasAttributeWithValue,
} from '../Element/index'
import { getFunctionTimeout } from '../../Utils'

const defaultName = 'Text Field'
const defaultTimeout = 8000

const inputIsDisplayAndInsertText = async (selector: WebdriverIO.Element | string, text: string, timeout: number) => {
  const element = await getElement(selector)
  const timeoutValue = getFunctionTimeout(timeout) ?? defaultTimeout
  await elementIsDisplayed(element, defaultName, timeoutValue)
  const elementValue = await element.getValue()
  if (elementValue !== '') {
    for (let i = 0; i < elementValue.length; i += 1) {
      await browser.keys(['Backspace'])
    }
  }
  await browser.pause(750)

  await element.setValue(text)
}
const inputIsDisplayedAndRemoveText = async (selector: WebdriverIO.Element | string, timeout: number) => {
  const element = await getElement(selector)
  const timeoutValue = getFunctionTimeout(timeout) ?? defaultTimeout
  await elementIsDisplayed(element, defaultName, timeoutValue)
  const elementValue = await element.getValue()
  if (elementValue !== '') {
    for (let i = 0; i < elementValue.length; i += 1) {
      await browser.keys(['Backspace'])
    }
  }
}

export { inputIsDisplayAndInsertText, inputIsDisplayedAndRemoveText }
