const ProblemService = require('../services/problem')
const Router = require('koa-router')

const router = new Router()

router.get('/:id', async (ctx, next) => {
  const problem = await ProblemService.getProblemById(ctx.params.id)
  ctx.body = {
    success: true,
    data: problem
  }
})

module.exports = router
