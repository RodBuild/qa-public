import * as Validate from '../../Validate/index'

const inputIsDisplayAndInsertText = async (selector: WebdriverIO.Element | string, text: string, timeout: number) => {
  const element = await Validate.getElement(selector)
  element.waitForDisplayed({ timeout: timeout, timeoutMsg: 'Input field not found' })
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
  const element = await Validate.getElement(selector)
  element.waitForDisplayed({ timeout: timeout, timeoutMsg: 'Input field not found' })
  const elementValue = await element.getValue()
  if (elementValue !== '') {
    for (let i = 0; i < elementValue.length; i += 1) {
      await browser.keys(['Backspace'])
    }
  }
}

export { inputIsDisplayAndInsertText, inputIsDisplayedAndRemoveText }
