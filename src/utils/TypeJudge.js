const _toString = Object.prototype.toString
const hasOwnProperty = Object.prototype.hasOwnProperty
const TYPE_FN = {
  isUnde: v => {
    return v === undefined
  },
  isNull: v => {
    return v === null
  },
  isZer: v => {
    return v === 0
  },
  isTrue: v => {
    return v === true
  },
  isFalse: v => {
    return v === false
  },
  isArray: v => {
    return toRawType(v) === 'Array'
  },
  isFn: v => {
    return toRawType(v) === 'Function'
  },
  /**
   * Check whether an object has the property
   */
  hosOwn: (obj, key) => {
    return hasOwnProperty.call(obj, key)
  }
}

/**
 * @param {*} value
 */
function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Mount to Vue
 */
const TYPE_JUDGE = {}
TYPE_JUDGE.install = function (Vue) {
  Vue.prototype.$type = TYPE_FN
}
/**
 * export
 */
export default TYPE_JUDGE
