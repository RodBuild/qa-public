### WDIO QA PUBLIC

Enhance your WebDriverIO testing experience with this npm package. This comprehensive library provides a set of reusable functions and utilities to streamline your test automation workflows. Whether you're a seasoned automation engineer or just getting started, these tools are designed to simplify common tasks and boost the efficiency of your WebDriverIO scripts.

&nbsp; <!-- Empty Line -->

#### Key Features

1. **Reusable Functions:** Access a collection of pre-built functions for common WebDriverIO actions, from interacting with elements to handling browser windows.
2. **Enhanced Assertions:** Elevate your assertions with functions that evalute elements in different aspects, making it easier to validate complex scenarios.
3. **Adaptable Functions:** Easily configure the behavior of the function through the parameters, allowing you to tailor its functionality to specific requirements.

&nbsp; <!-- Empty Line -->

#### Installation

```bash
npm install @rodbuild/qa-public --save-dev
```

&nbsp; <!-- Empty Line -->

#### Getting Started

```javascript
import { Interface } from '@rodbuild/qa-public'

describe('Verify top section of the page', () => {
  it('should open the page', async () => {
    await Interface.browserOpenUrl('https://webdriver.io/', 5000, 'h1')
  })
  it('search bar should not be disabled', async () => {
    await Interface.buttonIsDisplayedAndClickable('button[class*="DocSearch"]', 5000)
  })
  it('should contain four nav links', async () => {
    await Interface.elementQuantityIsValid($$('div[class*="buttons"] a'), 'nav-links', 5000, 4)
  })
  it('should validate the first nav link', async () => {
    await Interface.linkIsDisplayedAndVerifyHref(await $('div[class*="buttons"] a'), 'gettingstarted', 5000)
  })
})
```

&nbsp; <!-- Empty Line -->

#### Definitions

Functions start with a name that relates to their funcionality

- <a>Link</a>
- <button>Button</button>
- <input type="text" placeholder="input text">
- <div>Elements is for any DOM HTML</div>
- **browser**, the window object in WDIO context
