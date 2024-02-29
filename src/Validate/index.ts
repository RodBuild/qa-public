const objectIsArray = (object: any) => {
  if (Array.isArray(object) === true || Object.prototype.toString.call(object) === '[object Array]') {
    return true
  }
  return false
}
const objectIsString = (object: any) => {
  if (object instanceof String || typeof object === 'string') {
    return true
  }
  return false
}
const objectIsNumber = (object: any) => {
  if (Number.isFinite(object) === true || typeof object === 'number') {
    return true
  }
  return false
}

export { objectIsArray, objectIsString, objectIsNumber }
