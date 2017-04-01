const Router = require('koa-joi-router')
const DiscussionService = require('../services/discussion')

const Joi = Router.Joi
const router = new Router()

router.get('/', {
  validate: {
    query: {
      limit: Joi.number().integer().min(0).max(20).default(10)
    }
  }
}, async (ctx, next) => {
  const discussions = await DiscussionService.getDiscussionList(ctx.query.limit)
  ctx.body = {
    success: true,
    data: discussions
  }
})

module.exports = router
