/**
 * 捕捉全局错误
 */
module.exports = () => async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    if (e == null) {
      console.log(e)
      ctx.status = 500
      ctx.body = {
        success: false,
        message: '服务器开小差了~'
      }
    } else {
      const msg = e.message || e.toString()
      console.error(e)
      ctx.status = e.status || 500
      ctx.body = {
        success: false,
        message: msg
      }
    }
  }
}
