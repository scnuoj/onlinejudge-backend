const Router = require('koa-joi-router')
const authentication = require('../middlewares/authentication')
const UserService = require('../services/user')

const Joi = Router.Joi
const router = new Router()

router.route([{
  // 获取用户个人信息
  method: 'GET',
  path: '/',
  handler: [ authentication(), async (ctx, next) => {
    const user = await UserService.getUserById(ctx.state.user.id)
    ctx.body = {
      success: true,
      data: user
    }
  }]
}, {
  // 注册
  method: 'POST',
  path: '/register',
  validate: {
    type: 'json',
    body: {
      name: Joi.string().min(2).max(10),
      email: Joi.string().email(),
      password: Joi.string().min(6).max(18)
    }
  },
  handler: async (ctx, next) => {
    const user = await UserService.register(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
    const token = ctx.setAuth(user.id)
    // TODO: REMOVE TOKEN
    ctx.body = {
      success: true,
      data: token
    }
  }
}, {
  // 登录
  method: 'POST',
  path: '/login',
  validate: {
    type: 'json',
    body: Joi.object().keys({
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().required().min(6).max(18)
    }).or('name', 'email')
  },
  handler: async (ctx, next) => {
    const user = await UserService.login(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
    const token = ctx.setAuth(user.id)
    // TODO: REMOVE TOKEN
    ctx.body = {
      success: true,
      data: token
    }
  }
}])

module.exports = router
