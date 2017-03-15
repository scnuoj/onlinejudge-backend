/**
 * 捕捉全局错误
 */
module.exports = () => async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    if (e.status === 500) console.error(e)
    ctx.status = e.status || 500
    ctx.body = {
      success: false,
      message: e.message
    }
  }
}
