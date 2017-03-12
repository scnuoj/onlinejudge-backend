const UserModel = require('../models/user')
const { _name, _email, _password } = require('../libraries/Util')
const { AuthError } = require('../libraries/Error')

/**
 * 注册
 * @param {String} name     [昵称]
 * @param {String} email    [邮箱]
 * @param {String} password [密码]
 */
const register = async (name, email, password) => {
  [name, email, password] = [_name(name), _email(email), _password(password)]
  const user = await UserModel.create({
    name,
    email,
    password
  })
  return user
}

/**
 * 登录
 * @param {String} name     [昵称]
 * @param {String} email    [邮箱]
 * @param {String} password [密码]
 */
const login = async (name, email, password) => {
  if (name) name = _name(name)
  if (email) email = _email(email)
  password = _password(password)
  const user = await UserModel.find({
    where: {
      $or: [{
        name: name
      }, {
        email: email
      }]
    }
  })
  if (user) {
    if (user.password === password) {
      return user
    } else {
      throw new AuthError('密码错误')
    }
  } else {
    throw new AuthError('用户名或邮箱不存在')
  }
}

module.exports = {
  register,
  login
}
