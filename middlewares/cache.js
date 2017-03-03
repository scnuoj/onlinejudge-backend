/**
 * 静态资源 200 缓存
 * 前端使用 Hash 值标记资源, 资源变化时 Hash 变化从而重新请求
 */
module.exports = () => async (ctx, next) => {
  if (ctx.request.method === 'GET' && /js|css|favicon|image/.test(ctx.path)) {
    ctx.cacheControl = {
      maxAge: 60 * 60 * 24 * 180
    }
  }
  await next()
}
