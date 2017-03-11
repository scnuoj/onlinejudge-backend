const { SHA256 } = require('crypto-js')
const { ParamsError } = require('./Error')

/**
 * 转为整数
 * @param {*} value
 */
const _int = function (value) {
  if (Number.isInteger(+value)) {
    return +value
  } else {
    throw new ParamsError('参数非法')
  }
}

/**
 * 转为正整数
 * 负数将返回0
 * @param {*} value
 */
const _uint = function (value) {
  return Math.max(0, _int(value))
}

/**
 * 转为用户名
 * @param {*} value
 */
const _name = function (value) {
  if (__isEmpty(value)) {
    throw new ParamsError('用户名不能为空')
  } else if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
    throw new ParamsError('含有非法字符')
  } else if (value.toString().length < 2) {
    throw new ParamsError('用户名不能小于2位')
  } else if (value.toString().length > 10) {
    throw new ParamsError('用户名不能大于10位')
  }
  return value.toString()
}

/**
 * 转为密码
 * \w+{6, 18}
 * @param {*} value
 */
const _password = function (value) {
  if (__isEmpty(value)) {
    throw new ParamsError('密码不能为空')
  } else if (!/^\w+$/.test(value)) {
    throw new ParamsError('含有非法字符')
  } else if (value.toString().length < 6) {
    throw new ParamsError('密码不能小于6位')
  } else if (value.toString().length > 18) {
    throw new ParamsError('密码不能大于18位')
  }
  return SHA256(value.toString()).toString()
}

/**
 * 转为邮箱
 * @param {*} value
 */
const _email = function (value) {
  if (/\S+@\S+\.\S+/.test(value)) {
    return value.toString()
  } else {
    throw new ParamsError('邮箱格式错误')
  }
}

module.exports = {
  _int,
  _uint,
  _name,
  _email,
  _password
}

/**
 * 判空
 * @param {*} value
 */
const __isEmpty = function (value) {
  return value === undefined || value === null || value === ''
}
