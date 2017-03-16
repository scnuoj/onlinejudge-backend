const { AuthError } = require('../libraries/Error')
/**
 * 权限认证
 */
module.exports = () => async (ctx, next) => {
  if (ctx.request.header.authorization && ctx.state.user && ctx.state.user.id) {
    await next()
  } else {
    throw new AuthError('受限接口, 请先登录')
  }
}
