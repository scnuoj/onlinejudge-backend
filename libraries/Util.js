/**
 * 转为整数
 * 允许字符串转为整数
 * @param {*} value
 */
const int = function (value) {
  if (Number.isInteger(parseInt(value))) {
    return parseInt(value)
  } else {
    throw new TypeError('参数非法')
  }
}

/**
 * 转为正整数
 * 负数将返回0
 * @param {*} value
 */
const uint = function (value) {
  return Math.max(0, int(value))
}

module.exports = {
  int,
  uint
}
