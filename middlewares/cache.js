/**
 * 静态资源 200 缓存
 */
module.exports = () => async (ctx, next) => {
  if (ctx.request.method === 'GET' && /js|css|favicon|image/.test(ctx.path)) {
    ctx.cacheControl = {
      maxAge: 60 * 60 * 24 * 180
    }
  }
  await next()
}
