"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonIsDisplayedAndNotClickable = exports.buttonIsDisplayedAndClickable = void 0;
const index_1 = require("../Element/index");
const utils_1 = require("../../utils");
const defaultName = 'Button';
const defaultTimeout = 8000;
const buttonIsDisplayedAndClickable = async (selector, timeout) => {
    const element = await (0, index_1.getElement)(selector);
    const timeoutValue = (0, utils_1.getFunctionTimeout)(timeout) ?? defaultTimeout;
    await (0, index_1.elementIsDisplayed)(element, defaultName, timeoutValue);
    await element.waitForClickable({
        timeout: timeoutValue,
        timeoutMsg: `${defaultName} is not clickable, but it should be.`,
    });
};
exports.buttonIsDisplayedAndClickable = buttonIsDisplayedAndClickable;
const buttonIsDisplayedAndNotClickable = async (selector, timeout) => {
    const element = await (0, index_1.getElement)(selector);
    const timeoutValue = (0, utils_1.getFunctionTimeout)(timeout) ?? defaultTimeout;
    await (0, index_1.elementIsDisplayed)(element, defaultName, timeoutValue);
    await element.waitForClickable({
        timeout: timeoutValue,
        timeoutMsg: `${defaultName} is clickable, but it should not be.`,
        reverse: true,
    });
};
exports.buttonIsDisplayedAndNotClickable = buttonIsDisplayedAndNotClickable;
//# sourceMappingURL=index.js.map