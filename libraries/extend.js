const jwt = require('jsonwebtoken')
const JwtConfig = require('config').get('Jwt')

// 扩展 Koa Context 方法
module.exports = function (app) {
  app.context.setAuth = function (id) {
    const exp = (new Date().getTime() + 5184000000) / 1000
    const token = jwt.sign({
      id,
      exp
    }, JwtConfig.secret)
    return token
  }
  app.context.clearAuth = function () {
    this.cookies.set('token', null, {
      overwrite: null,
      expires: new Date()
    })
  }
}
