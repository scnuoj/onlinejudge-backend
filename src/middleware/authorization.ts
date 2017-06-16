import { AuthError } from 'app/library/error'
import { Context } from 'koa/lib/context'

export function authorization (): (ctx: Context, next: () => Promise<{}>) => Promise<void> {
  return async (ctx: Context, next: () => Promise<{}>): Promise<void> => {
    if (ctx.request.header.authorization && ctx.state.user && ctx.state.user.id) {
      await next()
    } else {
      throw new AuthError('受限接口, 请先登录')
    }
  }
}
