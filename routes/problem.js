const ProblemService = require('../services/problem')
const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx, next) => {
  const problems = await ProblemService.getProblemList(ctx.query)
  ctx.body = {
    success: true,
    data: problems
  }
})

router.get('/:id', async (ctx, next) => {
  const problem = await ProblemService.getProblemById(ctx.params)
  ctx.body = {
    success: true,
    data: problem
  }
})

module.exports = router
