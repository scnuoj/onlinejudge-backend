import { UnauthorizedError } from 'routing-controllers'
import { Context } from 'koa/lib/context'

export function authorization (): (ctx: Context, next: () => Promise<{}>) => Promise<void> {
  return async (ctx: Context, next: () => Promise<{}>): Promise<void> => {
    if (ctx.request.header.authorization && ctx.state.user && ctx.state.user.id) {
      await next()
    } else {
      throw new UnauthorizedError('受限接口, 请先登录')
    }
  }
}
