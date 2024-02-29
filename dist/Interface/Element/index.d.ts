/**
 * Get a DOM element using the selector parameter
 * @param selector The target element
 * @example
 * const sectionTitle = await getElement('[data-testid="header-2-id"]')
 * const sectionSubTitle = await getElement($('[data-testid="subheader-2-id"]'))
 */
declare const getElement: (selector: string | WebdriverIO.Element | Promise<WebdriverIO.Element>) => Promise<WebdriverIO.Element>;
/**
 * Get a DOM elements using the selector parameter
 * @param selector The target element
 * @example
 * const resultsCards = await getElements('[data-testid="result-card"]')
 * const navigationCards = await getElements($$('[data-testid="nav-card"]'))
 */
declare const getElements: (selector: string | WebdriverIO.Element[] | Promise<WebdriverIO.Element[]>) => Promise<WebdriverIO.ElementArray>;
declare const elementQuantityIsValid: (selector: WebdriverIO.Element[] | string, name: string, timeout: number, quantity: number) => Promise<void>;
declare const elementIsDisplayed: (selector: WebdriverIO.Element | string, name: string, timeout: number) => Promise<void>;
/**
 * @example <input disabled>...</input>
 */
declare const elementIsEnabled: (selector: WebdriverIO.Element | string, name: string, timeout: number) => Promise<void>;
/**
 * @example <input disabled>...</input>
 */
declare const elementIsNotEnabled: (selector: WebdriverIO.Element | string, name: string, timeout: number) => Promise<void>;
declare const elementContainsAttribute: (selector: WebdriverIO.Element | string, name: string, timeout: number, attribute: string) => Promise<void>;
declare const elementHasAttributeWithValue: (selector: WebdriverIO.Element | string, name: string, timeout: number, attribute: string, attributeValue: string) => Promise<void>;
export { getElement, getElements, elementQuantityIsValid, elementIsDisplayed, elementIsEnabled, elementIsNotEnabled, elementContainsAttribute, elementHasAttributeWithValue, };
