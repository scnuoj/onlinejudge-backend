import { Context } from 'koa/lib/context'
import { AuthError } from '../library/error'

function authorization () {
  return async (ctx: Context, next) => {
    if (ctx.request.header.authorization && ctx.state.user && ctx.state.user.id) {
      await next()
    } else {
      throw new AuthError('受限接口, 请先登录')
    }
  }
}

export default authorization
