const jwt = require('jsonwebtoken')
const JwtConfig = require('config').get('Jwt')

// 扩展 Koa Context 方法
module.exports = function (app) {
  app.context.setAuth = function (userId) {
    const exp = (Date.now() + JwtConfig.exp) / 1000
    const token = jwt.sign({
      userId,
      exp
    }, JwtConfig.secret)
    this.cookies.set('token', token, {
      overwrite: true,
      expire: exp
    })
    return token
  }
  app.context.clearAuth = function () {
    this.cookies.set('token', null, {
      overwrite: null,
      expires: new Date()
    })
  }
}
