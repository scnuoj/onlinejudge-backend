const Router = require('koa-joi-router')

const Joi = Router.Joi
const router = new Router()

router.get('/', {
  validate: {
    query: {
      limit: Joi.number().integer().min(0).max(20).default(10)
    }
  }
}, async (ctx, next) => {
  const posts = await ctx.service.post.list(ctx.query.limit)
  ctx.ok(posts)
})

module.exports = router
