const UserModel = require('../models/user')
const { AuthError } = require('../libraries/Error')
const { SHA256 } = require('crypto-js')

/**
 * 注册
 * @param {String} name     [昵称]
 * @param {String} email    [邮箱]
 * @param {String} password [密码]
 */
const register = async (name, email, password) => {
  const user = await UserModel.create({
    name,
    email,
    password: SHA256(password).toString()
  })
  return user
}

/**
 * 登录
 * @param {String} name     [昵称]
 * @param {String} password [密码]
 */
const login = async (name, password) => {
  const user = await UserModel.find({
    where: {
      name: name
    }
  })
  if (user) {
    if (user.password === SHA256(password).toString()) {
      return user
    } else {
      throw new AuthError('密码错误')
    }
  } else {
    throw new AuthError('用户名不存在')
  }
}

/**
 * 获取用户详细信息
 * @param {UUID} userId
 */
const getUserById = async (userId) => {
  const user = await UserModel.findById(userId, {
    attributes: ['id', 'name', 'email', 'school', 'gender', 'avatar', 'remark']
  })
  if (user) {
    return user
  } else {
    throw new AuthError('用户不存在')
  }
}

module.exports = {
  getUserById,
  register,
  login
}
