const AuthService = require('../services/auth')
const Router = require('koa-router')

const router = new Router()

router.post('/register', async (ctx, next) => {
  await AuthService.register(ctx.request.body)
  ctx.body = {
    success: true,
    data: '注册成功'
  }
})

router.post('/login', async (ctx, next) => {
  await AuthService.login(ctx.request.body)
  ctx.body = {
    success: true,
    data: '登录成功'
  }
})

module.exports = router
