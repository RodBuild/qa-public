"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputIsDisplayedAndRemoveText = exports.inputIsDisplayAndInsertText = void 0;
const index_1 = require("../Element/index");
const utils_1 = require("../../utils");
const defaultName = 'Text Field';
const defaultTimeout = 8000;
const inputIsDisplayAndInsertText = async (selector, text, timeout) => {
    const element = await (0, index_1.getElement)(selector);
    const timeoutValue = (0, utils_1.getFunctionTimeout)(timeout) ?? defaultTimeout;
    await (0, index_1.elementIsDisplayed)(element, defaultName, timeoutValue);
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
    const element = await (0, index_1.getElement)(selector);
    const timeoutValue = (0, utils_1.getFunctionTimeout)(timeout) ?? defaultTimeout;
    await (0, index_1.elementIsDisplayed)(element, defaultName, timeoutValue);
    const elementValue = await element.getValue();
    if (elementValue !== '') {
        for (let i = 0; i < elementValue.length; i += 1) {
            await browser.keys(['Backspace']);
        }
    }
};
exports.inputIsDisplayedAndRemoveText = inputIsDisplayedAndRemoveText;
//# sourceMappingURL=index.js.map