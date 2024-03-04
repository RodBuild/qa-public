const browserResizeWindow = async (
  view?: 'desktop' | 'tablet' | 'mobile',
  size?: { width?: number; height?: number }
) => {
  if (view) {
    if (view === 'desktop') await browser.setWindowSize(1500, 1200)
    if (view === 'tablet') await browser.setWindowSize(768, 900)
    if (view === 'mobile') await browser.setWindowSize(375, 667)
  } else {
    const width = size?.width ?? 500
    const height = size?.height ?? 500
    await browser.setWindowSize(width, height)
  }
}
const browserGetTitle = async () => {
  const text = await browser.getTitle()
  return text
}
const browserGetDescription = async () => {
  const text = (await $('meta[name="description"]')).getAttribute('content')
  return text
}
/**
 * @param element Element to find after page loads, defaults to h1
 * @example browserOpenUrl('gummybears.com', 10000, 'h1')
 */
const browserOpenUrl = async (url: string, timeout: number, element: string | undefined) => {
  await browser.url(url)
  const elementSelector = element ?? 'h1'
  if (element) {
    const mainElement = await $(elementSelector)
    await mainElement.waitForExist({
      timeout: timeout,
      timeoutMsg: `The requested page does not contain an element of ${elementSelector}`,
    })
  }
  await browser.pause(800)
}
const browserURLHasTextValue = async (text: string) => {
  await expect(browser).toHaveUrl(expect.stringContaining(text))
}

export { browserResizeWindow, browserGetTitle, browserGetDescription, browserOpenUrl, browserURLHasTextValue }
