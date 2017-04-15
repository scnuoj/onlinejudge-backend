const Router = require('koa-joi-router')

const Joi = Router.Joi
const router = new Router()

// 获取问题
router.get('/', {
  validate: {
    query: {
      offset: Joi.number().integer().min(0).default(0),
      limit: Joi.number().integer().min(0).max(100).default(10),
      sortby: Joi.string().valid('submitCount', 'passCount', 'id', 'percent').default('id'),
      order: Joi.string().valid('asc', 'desc').default('asc')
    }
  }
}, async (ctx, next) => {
  const problems = await ctx.service.management.problems.list(ctx.query.offset, ctx.query.limit, ctx.query.sortby, ctx.query.order)
  ctx.ok(problems)
})

// 获取指定问题的详细信息
router.get('/:id', {
  validate: {
    params: {
      id: Joi.number().integer().required()
    }
  }
}, async (ctx, next) => {
  const problem = await ctx.service.management.problems.show(ctx.params.id)
  ctx.ok(problem)
})

module.exports = router
