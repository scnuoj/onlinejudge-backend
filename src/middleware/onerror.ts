import { ValidationError } from 'class-validator'
import { Context } from 'koa/lib/context'
import { HttpError } from '../library/error'

function onerror () {
  return async (ctx: Context, next) => {
    try {
      await next()
      if (ctx.status !== 200) {
        throw new HttpError(ctx.status, ctx.body)
      }
    } catch (e) {
      // ValidationError
      if (e.message[0] instanceof ValidationError) {
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

export default onerror
