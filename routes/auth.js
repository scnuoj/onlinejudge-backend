const AuthService = require('../services/auth')
const Router = require('koa-joi-router')

const Joi = Router.Joi
const router = new Router()

router.route([{
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
    const user = await AuthService.register(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
    const token = ctx.setAuth(user.id)
    // TODO: REMOVE TOKEN
    ctx.body = {
      success: true,
      data: token
    }
  }
}, {
  method: 'POST',
  path: '/login',
  validate: {
    type: 'json',
    body: {
      name: Joi.string().optional(),
      email: Joi.string().email().optional(),
      password: Joi.string().min(6).max(18)
    }
  },
  handler: async (ctx, next) => {
    const user = await AuthService.login(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
    const token = ctx.setAuth(user.id)
    // TODO: REMOVE TOKEN
    ctx.body = {
      success: true,
      data: token
    }
  }
}])

module.exports = router
