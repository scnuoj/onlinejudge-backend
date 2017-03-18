const UserModel = require('../models/user')
const { AuthError } = require('../libraries/Error')

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
  getUserById
}
