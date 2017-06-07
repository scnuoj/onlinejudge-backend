import { Context } from 'koa/lib/context'

function onerror () {
  return async function (ctx: Context, next) {
    try {
      await next()
      if (ctx.status === 200) {
        ctx.body.success = true
      } else {
        ctx.status = 400
        ctx.body = {
          success: false,
          message: 'Not found'
        }
      }
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