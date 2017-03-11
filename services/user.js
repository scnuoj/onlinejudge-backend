const UserModel = require('../models/user')
const { _name, _email, _password } = require('../libraries/Util')
const { AuthError } = require('../libraries/Error')

const register = async (name, email, password) => {
  [name, email, password] = [_name(name), _email(email), _password(password)]
  const user = await UserModel.create({
    name,
    email,
    password
  })
  return user
}

const login = async (nameOrEmail, password) => {
  const user = await UserModel.find({
    where: {
      $or: [{
        name: nameOrEmail
      }, {
        email: nameOrEmail
      }]
    }
  })
  if (user) {
    if (user.password === _password(password)) {
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
