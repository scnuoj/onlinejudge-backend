const Router = require('koa-router')
const ProblemsService = require('../services/problems')

const router = new Router()

router.get('/', async (ctx, next) => {
  const problems = await ProblemsService.getProblemList(ctx.query.offset, ctx.query.limit)
  ctx.body = {
    success: true,
    data: problems
  }
})

router.get('/recent', async (ctx, next) => {
  const problems = await ProblemsService.getRecentProblemList(ctx.query.limit)
  ctx.body = {
    success: true,
    data: problems
  }
})

module.exports = router
