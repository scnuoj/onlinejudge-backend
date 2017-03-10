const Router = require('koa-router')
const ProblemsService = require('../services/problems')
const { uint } = require('../libraries/Util')

const router = new Router()

router.get('/', async (ctx, next) => {
  const problems = await ProblemsService.getProblemList(uint(ctx.query.offset), uint(ctx.query.limit))
  ctx.body = {
    success: true,
    data: problems
  }
})

router.get('/recent', async (ctx, next) => {
  const limit = uint(ctx.query.limit)
  const problems = await ProblemsService.getRecentProblemList(limit)
  ctx.body = {
    success: true,
    data: problems
  }
})

module.exports = router
