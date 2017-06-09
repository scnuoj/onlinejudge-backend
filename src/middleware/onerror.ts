import { Context } from 'koa/lib/context'

function onerror () {
  return async (ctx: Context, next) => {
    try {
      await next()
    } catch (e) {
      if (e.status === 500 || e.status === undefined) console.error(e)
      ctx.status = e.status || 500
      ctx.body = {
        success: false,
        message: e.message
      }
    }
  }
}

export default onerror
