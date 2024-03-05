"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementHasCSSWithValue = exports.elementHasTextValue = exports.elementHasAttributeWithValue = exports.elementContainsAttribute = exports.elementIsNotEnabled = exports.elementIsEnabled = exports.elementIsDisplayed = exports.elementIsExistingAndScrollIntoView = exports.elementQuantityIsValid = exports.getElements = exports.getElement = void 0;
const Utils = require("../../utils");
const Validate_1 = require("../../Validate");
const defaultName = 'Element';
const defaultTimeout = 8000;
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
    if ((0, Validate_1.objectIsString)(selector) == true) {
        let element = await $(await selector);
        return element;
    }
    //@ts-ignore
    return await selector;
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
    if ((0, Validate_1.objectIsString)(selector) == true) {
        //@ts-ignore
        let elements = await $$(selector);
        return elements;
    }
    //@ts-ignore
    return await selector;
};
exports.getElements = getElements;
const elementQuantityIsValid = async (selector, name, timeout, quantity) => {
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await browser.waitUntil(async () => {
        const elements = await getElements(selector);
        const elementsQuantity = elements.length;
        if (elementsQuantity === quantity) {
            return true;
        }
        return false;
    }, {
        timeout: timeoutValue,
        timeoutMsg: `The quantity ${elementName} is not valid.`,
    });
};
exports.elementQuantityIsValid = elementQuantityIsValid;
const elementIsExistingAndScrollIntoView = async (selector, name, timeout) => {
    const element = await getElement(selector);
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` });
    await element.scrollIntoView();
    await browser.pause(850);
};
exports.elementIsExistingAndScrollIntoView = elementIsExistingAndScrollIntoView;
const elementIsDisplayed = async (selector, name, timeout) => {
    const element = await getElement(selector);
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` });
    await element.waitForDisplayed({
        timeout: timeoutValue,
        timeoutMsg: `${elementName} is not visible in the viewport.`,
    });
};
exports.elementIsDisplayed = elementIsDisplayed;
/**
 * @example <input disabled>...</input>
 */
const elementIsEnabled = async (selector, name, timeout) => {
    const element = await getElement(selector);
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` });
    await element.waitForEnabled({
        timeout: timeoutValue,
        timeoutMsg: `${elementName} is not enabled.`,
    });
};
exports.elementIsEnabled = elementIsEnabled;
/**
 * @example <input disabled>...</input>
 */
const elementIsNotEnabled = async (selector, name, timeout) => {
    const element = await getElement(selector);
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` });
    await element.waitForEnabled({
        timeout: timeoutValue,
        timeoutMsg: `${elementName} is enabled.`,
        reverse: true,
    });
};
exports.elementIsNotEnabled = elementIsNotEnabled;
const elementContainsAttribute = async (selector, name, timeout, attribute) => {
    const element = await getElement(selector);
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` });
    const elementAttr = await element.getAttribute(attribute);
    if (!elementAttr)
        throw new Error(`${elementName} does not contain the attribute ${attribute}.`);
};
exports.elementContainsAttribute = elementContainsAttribute;
const elementHasAttributeWithValue = async (selector, name, timeout, attribute, attributeValue) => {
    const element = await getElement(selector);
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await elementContainsAttribute(element, elementName, timeoutValue, attribute);
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
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await elementIsDisplayed(element, elementName, timeoutValue);
    const elementTextValue = await element.getText();
    if (elementTextValue.includes(text) === false)
        throw new Error(`${elementName} does not contain the expected text value.`);
};
exports.elementHasTextValue = elementHasTextValue;
const elementGetCSS = async (selector, name, timeout) => {
    const array = [
        {
            name: '',
            value: '',
        },
    ];
    const element = await $(selector);
    const elementName = name;
    const timeoutValue = timeout;
    const css = await element.getAttribute('style');
    const parts = css.split(';');
    console.log(parts);
    return array;
};
const elementContainsCSS = async () => { };
/**
 * @example <div style=""> </div>
 */
const elementHasCSSWithValue = async (selector, name, timeout, css, cssValue) => {
    const element = await getElement(selector);
    const elementName = Utils.getFunctionElementName(name) ?? defaultName;
    const timeoutValue = Utils.getFunctionTimeout(timeout) ?? defaultTimeout;
    await element.waitForExist({ timeout: timeoutValue, timeoutMsg: `${elementName} not found.` });
    const cssAttribute = await element.getCSSProperty(css);
    if (cssAttribute?.value && cssAttribute?.value !== '') {
        if (cssAttribute.value.includes(cssValue) === false)
            throw new Error(`${elementName} contains the CSS attribute ${css} with an invalid value.`);
    }
    else {
        throw new Error(`${elementName} does not contain the CSS attribute of ${css}.`);
    }
};
exports.elementHasCSSWithValue = elementHasCSSWithValue;
//# sourceMappingURL=index.js.map