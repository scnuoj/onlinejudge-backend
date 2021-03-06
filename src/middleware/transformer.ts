import { Context } from 'koa'

export function transformer (): (ctx: Context, next: () => Promise<{}>) => Promise<void> {
  return async (ctx: Context, next: () => Promise<{}>): Promise<void> => {
    // Fix error caused by transform on query
    Reflect.setPrototypeOf(ctx.query, {})
    try {
      await next()
      if (ctx.status === 200) {
        ctx.body = {
          success: true,
          ...ctx.body
        }
      } else {
        ctx.body = {
          success: false,
          message: '这里什么都没有'
        }
      }
    } catch (e) {
      if (Reflect.has(e, 'errors')) {
        // Format error throw by validator
        ctx.status = e.status || 400
        ctx.body = {
          success: false,
          message: Object.values(e.errors[0].constraints).join(','),
          data: e.errors
        }
      } else if ((!e.status && !e.httpCode) || e.status === 500) {
        // Log unknown error
        console.log(e)
        ctx.status = e.status || 500
        ctx.body = {
          success: false,
          message: e.message
        }
      } else {
        ctx.status = e.status || e.httpCode
        ctx.body = {
          success: false,
          message: e.message
        }
      }
    }
  }
}
