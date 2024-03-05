"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkIsDisplayedAndEnabled = exports.linkIsDisplayedAndVerifyHref = void 0;
const index_1 = require("../Element/index");
const utils_1 = require("../../utils");
const defaultName = 'Link';
const defaultTimeout = 8000;
const linkIsDisplayedAndVerifyHref = async (selector, href, timeout) => {
    const element = await (0, index_1.getElement)(selector);
    const timeoutValue = (0, utils_1.getFunctionTimeout)(timeout) ?? defaultTimeout;
    await (0, index_1.elementIsDisplayed)(element, defaultName, timeoutValue);
    await (0, index_1.elementContainsAttribute)(element, defaultName, timeoutValue, 'href');
    await (0, index_1.elementHasAttributeWithValue)(element, defaultName, timeoutValue, 'href', href);
};
exports.linkIsDisplayedAndVerifyHref = linkIsDisplayedAndVerifyHref;
const linkIsDisplayedAndEnabled = async (selector, timeout) => {
    const element = await (0, index_1.getElement)(selector);
    const timeoutValue = (0, utils_1.getFunctionTimeout)(timeout) ?? defaultTimeout;
    await (0, index_1.elementIsDisplayed)(element, defaultName, timeoutValue);
    await (0, index_1.elementIsEnabled)(element, defaultName, timeoutValue);
};
exports.linkIsDisplayedAndEnabled = linkIsDisplayedAndEnabled;
//# sourceMappingURL=index.js.map