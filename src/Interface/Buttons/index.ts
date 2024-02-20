import * as Validate from '../../Validate/index'

const buttonIsDisplayedAndClickable = async (selector: WebdriverIO.Element | string, timeout: number) => {
  const element = await Validate.getElement(selector)
  await element.waitForDisplayed({ timeout: timeout, timeoutMsg: 'We timed out' })
  await element.waitForClickable({ timeout: timeout, timeoutMsg: 'We not clicky, but should be!' })
}
const buttonIsDisplayedAndNotClickable = async (selector: WebdriverIO.Element | string, timeout: number) => {
  const element = await Validate.getElement(selector)
  await element.waitForDisplayed({ timeout: timeout, timeoutMsg: 'We timed out' })
  await element.waitForClickable({ timeout: timeout, timeoutMsg: 'We are clicky, but should not!', reverse: true })
}

export { buttonIsDisplayedAndClickable, buttonIsDisplayedAndNotClickable }
