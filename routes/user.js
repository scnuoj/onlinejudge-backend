const UserService = require('../services/user')
const Router = require('koa-router')

const router = new Router()

router.post('/', async (ctx, next) => {
  await UserService.register(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
  ctx.body = {
    success: true,
    data: '注册成功'
  }
})

module.exports = router
