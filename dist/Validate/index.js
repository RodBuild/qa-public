"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIsNumber = exports.objectIsString = exports.objectIsArray = void 0;
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