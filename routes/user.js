const Router = require('koa-joi-router')
const authentication = require('../middlewares/authentication')
const UserService = require('../services/user')

const Joi = Router.Joi
const router = new Router()

// 获取用户个人信息 (Auth)
router.get('/', authentication(), async (ctx, next) => {
  const user = await UserService.getUserById(ctx.state.user.id)
  ctx.body = {
    success: true,
    data: user
  }
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
  const user = await UserService.register(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
  const token = ctx.setAuth(user.id)
  ctx.body = {
    success: true,
    data: token
  }
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
  const user = await UserService.login(ctx.request.body.name, ctx.request.body.password)
  const token = ctx.setAuth(user.id)
  ctx.body = {
    success: true,
    data: token
  }
})

module.exports = router
