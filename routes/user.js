const Router = require('koa-joi-router')
const authentication = require('../middlewares/authentication')
const UserService = require('../services/user')

const Joi = Router.Joi
const router = new Router()

router.route([{
  method: 'GET',
  path: '/',
  handler: [ authentication(), async (ctx, next) => {
    const user = await UserService.getUserById(ctx.state.user.id)
    ctx.body = {
      success: true,
      data: user
    }
  }]
}])

module.exports = router
