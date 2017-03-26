const Router = require('koa-joi-router')
const PostService = require('../services/post')

const Joi = Router.Joi
const router = new Router()

router.get('/', {
  validate: {
    query: {
      limit: Joi.number().integer().min(0).max(20).default(10)
    }
  }
}, async (ctx, next) => {
  const posts = await PostService.getPostList(ctx.query.limit)
  ctx.body = {
    success: true,
    data: posts
  }
})

module.exports = router
