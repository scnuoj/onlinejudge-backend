const Router = require('koa-joi-router')

const Joi = Router.Joi
const router = new Router()

router.get('/', {
  validate: {
    query: {
      limit: Joi.number().integer().min(0).max(10).default(1)
    }
  }
}, async (ctx, next) => {
  const contests = await ctx.service.contest.list(ctx.query.limit)
  ctx.ok(contests)
})

module.exports = router
