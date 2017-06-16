import { HttpError } from 'app/library/error'
import { ValidationError } from 'class-validator'
import { Context } from 'koa'

export function onerror (): (ctx: Context, next: () => Promise<{}>) => Promise<void> {
  return async (ctx: Context, next: () => Promise<{}>): Promise<void> => {
    try {
      await next()
      if (ctx.status !== 200) {
        throw new HttpError(ctx.status, ctx.body)
      }
    } catch (e) {
      // ValidationError
      if (e.message && e.message[0] instanceof ValidationError) {
        ctx.status = 400
        ctx.body = {
          success: false,
          message: Object.values(e.message[0].constraints).join(','),
          data: e.message[0]
        }
      } else {
        ctx.status = e.status || 500
        ctx.body = {
          success: false,
          message: e.message
        }
      }
    }
  }
}
