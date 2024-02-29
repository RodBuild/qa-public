"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementHasTextValue = exports.elementHasAttributeWithValue = exports.elementContainsAttribute = exports.elementIsNotEnabled = exports.elementIsEnabled = exports.elementIsDisplayed = exports.elementQuantityIsValid = exports.getElements = exports.getElement = void 0;
const Validate = require("../../Validate/index");
function getElementName(text) {
    if (Validate.objectIsString(text) === true && text !== '') {
        return text;
    }
    return 'Element';
}
/**
 * Get a DOM element using the selector parameter
 * @param selector The target element
 * @example
 * const sectionTitle = await getElement('[data-testid="header-2-id"]')
 * const sectionSubTitle = await getElement($('[data-testid="subheader-2-id"]'))
 */
const getElement = async (selector) => {
    if (!selector)
        throw new Error('Function getElement() recieved an undefined value, verify your code.');
    let element = await $(await selector);
    return element;
};
exports.getElement = getElement;
/**
 * Get a DOM elements using the selector parameter
 * @param selector The target element
 * @example
 * const resultsCards = await getElements('[data-testid="result-card"]')
 * const navigationCards = await getElements($$('[data-testid="nav-card"]'))
 */
const getElements = async (selector) => {
    if (!selector)
        throw new Error('Function getElements() recieved an undefined value, verify your code.');
    let elements = await $$(await selector);
    return elements;
};
exports.getElements = getElements;
const elementQuantityIsValid = async (selector, name, timeout, quantity) => {
    const elementName = getElementName(name);
    await browser.waitUntil(async () => {
        const elements = await getElements(selector);
        const elementsQuantity = elements.length;
        if (elementsQuantity === quantity) {
            return true;
        }
        return false;
    }, {
        timeout: timeout,
        timeoutMsg: `The quantity ${elementName} is not valid.`,
    });
};
exports.elementQuantityIsValid = elementQuantityIsValid;
const elementIsDisplayed = async (selector, name, timeout) => {
    const element = await getElement(selector);
    const elementName = getElementName(name);
    await element.waitForExist({ timeout: timeout, timeoutMsg: `${elementName} not found.` });
    await element.waitForDisplayed({ timeout: timeout, timeoutMsg: `${elementName} is not visible in the viewport.` });
};
exports.elementIsDisplayed = elementIsDisplayed;
/**
 * @example <input disabled>...</input>
 */
const elementIsEnabled = async (selector, name, timeout) => {
    const element = await getElement(selector);
    const elementName = getElementName(name);
    await element.waitForExist({ timeout: timeout, timeoutMsg: `${elementName} not found.` });
    await element.waitForEnabled({
        timeout: timeout,
        timeoutMsg: `${elementName} is not enabled.`,
    });
};
exports.elementIsEnabled = elementIsEnabled;
/**
 * @example <input disabled>...</input>
 */
const elementIsNotEnabled = async (selector, name, timeout) => {
    const element = await getElement(selector);
    const elementName = getElementName(name);
    await element.waitForExist({ timeout: timeout, timeoutMsg: `${elementName} not found.` });
    await element.waitForEnabled({
        timeout: timeout,
        timeoutMsg: `${elementName} is enabled.`,
        reverse: true,
    });
};
exports.elementIsNotEnabled = elementIsNotEnabled;
const elementContainsAttribute = async (selector, name, timeout, attribute) => {
    const element = await getElement(selector);
    const elementName = getElementName(name);
    await element.waitForExist({ timeout: timeout, timeoutMsg: `${elementName} not found.` });
    const elementAttr = await element.getAttribute(attribute);
    if (!elementAttr)
        throw new Error(`${elementName} does not contain the attribute ${attribute}.`);
};
exports.elementContainsAttribute = elementContainsAttribute;
const elementHasAttributeWithValue = async (selector, name, timeout, attribute, attributeValue) => {
    const element = await getElement(selector);
    const elementName = getElementName(name);
    await elementContainsAttribute(element, elementName, timeout, attribute);
    const elementAttr = await element.getAttribute(attribute);
    if (elementAttr.includes(attributeValue) === false)
        throw new Error(`${elementName} contains the attribute ${attribute} with an invalid value.`);
};
exports.elementHasAttributeWithValue = elementHasAttributeWithValue;
/**
 * @example <p>Text Value</p>
 */
const elementHasTextValue = async (selector, name, timeout, text) => {
    const element = await getElement(selector);
    const elementName = getElementName(name);
    await elementIsDisplayed(element, elementName, timeout);
    const elementTextValue = await element.getText();
    if (elementTextValue.includes(text) === false)
        throw new Error(`${elementName} does not contain the expected text value.`);
};
exports.elementHasTextValue = elementHasTextValue;
//# sourceMappingURL=index.js.map