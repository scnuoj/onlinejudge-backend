const jwt = require('jsonwebtoken')
const JwtConfig = require('config').get('Jwt')

/**
 * 给 ctx 原型补充鉴权的相关方法
 */
module.exports = () => async (ctx, next) => {
  // TODO: XSRF-TOKEN
  // TODO: httpOnly cookie
  // TODO: secure cookie
  ctx.setAuth = function (userId) {
    const exp = (Date.now() + JwtConfig.exp) / 1000
    const token = jwt.sign({
      userId,
      exp
    }, JwtConfig.secret)
    ctx.cookies.set('token', token, {
      overwrite: true,
      expire: exp
    })
    return token
  }
  ctx.clearAuth = function () {
    ctx.cookies.set('token', null, {
      overwrite: null,
      expires: new Date()
    })
  }
  await next()
}
