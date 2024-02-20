"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIsNumber = exports.objectIsString = exports.objectIsArray = exports.getElement = void 0;
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
const objectIsArray = (object) => {
    if (Array.isArray(object) === true || Object.prototype.toString.call(object) === '[object Array]') {
        return true;
    }
    return false;
};
exports.objectIsArray = objectIsArray;
const objectIsString = (object) => {
    if (object instanceof String || typeof object === 'string') {
        return true;
    }
    return false;
};
exports.objectIsString = objectIsString;
const objectIsNumber = (object) => {
    if (Number.isFinite(object) === true || typeof object === 'number') {
        return true;
    }
    return false;
};
exports.objectIsNumber = objectIsNumber;
//# sourceMappingURL=index.js.map