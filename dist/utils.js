"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionTimeout = exports.getFunctionElementName = void 0;
const Validate_1 = require("./Validate");
const getFunctionElementName = (text) => {
    if ((0, Validate_1.objectIsString)(text) === true && text !== '')
        return text;
    return undefined;
};
exports.getFunctionElementName = getFunctionElementName;
const getFunctionTimeout = (timeout) => {
    if ((0, Validate_1.objectIsNumber)(timeout) === true && timeout > 100)
        return timeout;
    return undefined;
};
exports.getFunctionTimeout = getFunctionTimeout;
//# sourceMappingURL=utils.js.map