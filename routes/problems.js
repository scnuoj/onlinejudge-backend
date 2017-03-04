const ProblemService = require('../services/problems')
const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx, next) => {
  const { offset, limit } = ctx.query
  const problems = await ProblemService.getProblemList(offset, limit)
  ctx.body = {
    success: true,
    data: problems
  }
})

router.get('/recent', async (ctx, next) => {
  const problems = await ProblemService.getNewestProblemList()
  ctx.body = {
    success: true,
    data: problems
  }
})

module.exports = router
