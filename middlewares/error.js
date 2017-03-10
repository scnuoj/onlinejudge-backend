/**
 * 捕捉全局错误
 */
module.exports = () => async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    switch (e.name) {
      case 'TypeError':
        ctx.status = 400
        ctx.body = {
          success: false,
          message: e.message
        }
        break
      default:
        ctx.status = 500
        ctx.body = {
          success: false,
          message: e.message || e.toString()
        }
    }
  }
}
