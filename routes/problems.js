const ProblemsService = require('../services/problems')
const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx, next) => {
  const { offset, limit } = ctx.query
  const problems = await ProblemsService.getProblemList(offset, limit)
  ctx.body = {
    success: true,
    data: problems
  }
})

router.get('/recent', async (ctx, next) => {
  const limit = ctx.query.limit
  const problems = await ProblemsService.getRecentProblemList(limit)
  ctx.body = {
    success: true,
    data: problems
  }
})

module.exports = router
