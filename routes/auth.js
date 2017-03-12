const AuthService = require('../services/auth')
const Router = require('koa-router')

const router = new Router()

router.post('/register', async (ctx, next) => {
  const user = await AuthService.register(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
  const token = ctx.setAuth(user.id)
  // TODO: REMOVE TOKEN
  ctx.body = {
    success: true,
    data: '注册成功' + token
  }
})

router.post('/login', async (ctx, next) => {
  const user = await AuthService.login(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
  const token = ctx.setAuth(user.id)
  // TODO: REMOVE TOKEN
  ctx.body = {
    success: true,
    data: '登录成功' + token
  }
})

module.exports = router
