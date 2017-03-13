const { SHA256 } = require('crypto-js')
const { ParamsError, AuthError } = require('./Error')

const MAX_QUERY_COUNT = 30

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
 * limit 限制
 * @param {*} value
 */
const _limit = function (value) {
  return Math.min(_uint(value), MAX_QUERY_COUNT)
}

/**
 * 转为用户名
 * @param {*} value
 */
const _name = function (value) {
  if (!_exist(value)) {
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
  if (!_exist(value)) {
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
  if (_exist(value) && /\S+@\S+\.\S+/.test(value)) {
    return value.toString()
  } else {
    throw new ParamsError('邮箱格式错误')
  }
}

/**
 * 合法顺序
 * @param {*} value
 */
const _validOrder = function (value) {
  if (_exist(value) && ['DESC', 'ASC'].includes(value.toUpperCase())) {
    return value.toUpperCase()
  } else {
    throw new ParamsError(`order must be 'ASC' or 'DESC', '${value}' given`)
  }
}

/**
 * 合法语言
 * @param {String} value
 */
const _validLang = function (value) {
  if (_exist(value) && ['CC', 'C'].includes(value.toUpperCase())) {
    return value.toUpperCase()
  } else {
    throw new ParamsError(`unknown supported lang: ${value}`)
  }
}

/**
 * 需要授权
 * @param {Object} ctx
 * TODO: 判断 token 有效期
 */
const _Authentication = function (ctx) {
  if (_exist(ctx.request.header.authorization) && _exist(ctx.state.user) && ctx.state.user.userId) {
    return ctx
  } else {
    throw new AuthError('请先进行登录')
  }
}

/**
 * 要求参数存在
 * @param {*} value
 */
const _exist = function (value) {
  if (value === undefined || value === null || value === '' || value.length === 0) {
    throw new ParamsError('你是不是忘记传参数啦?')
  } else {
    return value
  }
}

module.exports = {
  _int,
  _uint,
  _name,
  _email,
  _limit,
  _exist,
  _password,
  _validOrder,
  _validLang,
  _Authentication
}
