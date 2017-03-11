const UserModel = require('../models/user')
const { _name, _email, _password } = require('../libraries/Util')

const register = async (name, email, password) => {
  [name, email, password] = [_name(name), _email(email), _password(password)]
  const user = await UserModel.create({
    name,
    email,
    password
  })
  return user
}

module.exports = {
  register
}
