const ProblemService = require('../services/problem')
const Router = require('koa-router')
const { int } = require('../libraries/Util')

const router = new Router()

router.get('/:id', async (ctx, next) => {
  const problem = await ProblemService.getProblemById(int(ctx.params.id))
  ctx.body = {
    success: true,
    data: problem
  }
})

module.exports = router
