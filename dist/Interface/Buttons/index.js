"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonIsDisplayedAndNotClickable = exports.buttonIsDisplayedAndClickable = void 0;
const Validate = require("../../Validate/index");
const buttonIsDisplayedAndClickable = async (selector, timeout) => {
    const element = await Validate.getElement(selector);
    await element.waitForDisplayed({ timeout: timeout, timeoutMsg: 'We timed out' });
    await element.waitForClickable({ timeout: timeout, timeoutMsg: 'We not clicky, but should be!' });
};
exports.buttonIsDisplayedAndClickable = buttonIsDisplayedAndClickable;
const buttonIsDisplayedAndNotClickable = async (selector, timeout) => {
    const element = await Validate.getElement(selector);
    await element.waitForDisplayed({ timeout: timeout, timeoutMsg: 'We timed out' });
    await element.waitForClickable({ timeout: timeout, timeoutMsg: 'We are clicky, but should not!', reverse: true });
};
exports.buttonIsDisplayedAndNotClickable = buttonIsDisplayedAndNotClickable;
//# sourceMappingURL=index.js.map