/**
 * 转为整数
 * @param {*} value
 */
const integer = function (value) {
  return Number.isInteger(parseInt(value)) ? parseInt(value) : 0
}

/**
 * 转为正整数, 负数将取绝对值
 * @param {*} value
 */
const positiveInteger = function (value) {
  return Math.max(0, integer(value))
}

module.exports = {
  integer,
  positiveInteger
}
