import * as Element from '../Element/index'

const linkIsDisplayedAndVerifyHref = async (selector: WebdriverIO.Element | string, href: string, timeout: number) => {
  const element = await Element.getElement(selector)
  await Element.elementIsDisplayed(element, 'Link', timeout)
  await Element.elementContainsAttribute(element, 'Link', timeout, 'href')
  const elementHrefValue = await element.getAttribute('href')
  if (elementHrefValue.includes(href) === false)
    throw new Error('Href value of the link is not equal to the expected one.')
}
const linkIsDisplayedAndEnabled = async (selector: WebdriverIO.Element | string, timeout: number) => {
  const element = await Element.getElement(selector)
  await Element.elementIsDisplayed(element, 'Link', timeout)
  await Element.elementIsEnabled(element, 'Link', timeout)
}

export { linkIsDisplayedAndVerifyHref, linkIsDisplayedAndEnabled }
