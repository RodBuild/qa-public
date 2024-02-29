"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputIsDisplayedAndRemoveText = exports.inputIsDisplayAndInsertText = void 0;
const Element = require("../Element/index");
const inputIsDisplayAndInsertText = async (selector, text, timeout) => {
    const element = await Element.getElement(selector);
    element.waitForDisplayed({ timeout: timeout, timeoutMsg: 'Input field not found' });
    const elementValue = await element.getValue();
    if (elementValue !== '') {
        for (let i = 0; i < elementValue.length; i += 1) {
            await browser.keys(['Backspace']);
        }
    }
    await browser.pause(750);
    await element.setValue(text);
};
exports.inputIsDisplayAndInsertText = inputIsDisplayAndInsertText;
const inputIsDisplayedAndRemoveText = async (selector, timeout) => {
    const element = await Element.getElement(selector);
    element.waitForDisplayed({ timeout: timeout, timeoutMsg: 'Input field not found' });
    const elementValue = await element.getValue();
    if (elementValue !== '') {
        for (let i = 0; i < elementValue.length; i += 1) {
            await browser.keys(['Backspace']);
        }
    }
};
exports.inputIsDisplayedAndRemoveText = inputIsDisplayedAndRemoveText;
//# sourceMappingURL=index.js.map