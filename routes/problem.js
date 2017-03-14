const Router = require('koa-router')
const ProblemService = require('../services/problem')

const router = new Router()

router.get('/', async (ctx, next) => {
  const problems = await ProblemService.getProblemList(ctx.query.id, ctx.query.limit, ctx.query.sortby, ctx.query.order)
  ctx.body = {
    success: true,
    data: problems
  }
})

router.get('/:id', async (ctx, next) => {
  const problem = await ProblemService.getProblemById(ctx.params.id)
  ctx.body = {
    success: true,
    data: problem
  }
})

module.exports = router
