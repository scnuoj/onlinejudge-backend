const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')
const JwtConfig = require('config').get('Jwt')

module.exports = Service => class UserService extends Service {
  /**
   * 注册
   * @param {String} name     [昵称]
   * @param {String} email    [邮箱]
   * @param {String} password [密码]
   */
  async register (name, email, password) {
    const user = await Database.User.create({
      name,
      email,
      password: SHA256(password).toString()
    })
    return {
      user,
      token: this._issueToken
    }
  }

  /**
   * 登录
   * @param {String} name     [昵称]
   * @param {String} password [密码]
   */
  async login (name, password) {
    const user = await Database.User.find({
      where: {
        name: name
      }
    })
    if (user) {
      if (user.password === SHA256(password).toString()) {
        return {
          user,
          token: this._issueToken
        }
      } else {
        throw new this.AuthError('密码错误')
      }
    } else {
      throw new this.AuthError('用户名不存在')
    }
  }

  /**
   * 获取用户详细信息
   * @param {UUID} userId
   */
  async show (userId) {
    const user = await Database.User.findById(userId, {
      attributes: ['id', 'name', 'email', 'school', 'gender', 'avatar', 'remark']
    })
    if (user) {
      return user
    } else {
      throw new this.AuthError('用户不存在')
    }
  }

  /**
   * 签发一个一天有效期的 JWT
   * @return {String}
   */
  _issueToken () {
    return jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    }, JwtConfig.secret)
  }
}
