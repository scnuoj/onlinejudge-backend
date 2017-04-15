const Router = require('koa-joi-router')
const Authorization = require('../middleware/authorization')

const Joi = Router.Joi
const router = new Router()

// 获取用户个人信息 (Auth)
router.get('/', Authorization(), async (ctx, next) => {
  const user = await ctx.service.users.show(ctx.state.user.id)
  ctx.ok(user)
})

// 注册用户
router.post('/register', {
  validate: {
    type: 'json',
    body: {
      name: Joi.string().min(2).max(10),
      email: Joi.string().email(),
      password: Joi.string().min(6).max(18)
    }
  }
}, async (ctx, next) => {
  const user = await ctx.service.users.register(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
  ctx.ok(user)
})

// 登录用户
router.post('/login', {
  validate: {
    type: 'json',
    body: {
      name: Joi.string(),
      password: Joi.string().required().min(6).max(18)
    }
  }
}, async (ctx, next) => {
  const user = await ctx.service.users.login(ctx.request.body.name, ctx.request.body.password)
  ctx.ok(user)
})

module.exports = router
