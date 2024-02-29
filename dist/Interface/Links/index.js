"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkIsDisplayedAndEnabled = exports.linkIsDisplayedAndVerifyHref = void 0;
const Element = require("../Element/index");
const linkIsDisplayedAndVerifyHref = async (selector, href, timeout) => {
    const element = await Element.getElement(selector);
    await Element.elementIsDisplayed(element, 'Link', timeout);
    await Element.elementContainsAttribute(element, 'Link', timeout, 'href');
    const elementHrefValue = await element.getAttribute('href');
    if (elementHrefValue.includes(href) === false)
        throw new Error('Href value of the link is not equal to the expected one.');
};
exports.linkIsDisplayedAndVerifyHref = linkIsDisplayedAndVerifyHref;
const linkIsDisplayedAndEnabled = async (selector, timeout) => {
    const element = await Element.getElement(selector);
    await Element.elementIsDisplayed(element, 'Link', timeout);
    await Element.elementIsEnabled(element, 'Link', timeout);
};
exports.linkIsDisplayedAndEnabled = linkIsDisplayedAndEnabled;
//# sourceMappingURL=index.js.map