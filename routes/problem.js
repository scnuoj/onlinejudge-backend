const ProblemService = require('../services/problem')
const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx, next) => {
  const { offset, limit } = ctx.query
  const problems = await ProblemService.getProblemList(offset, limit)
  ctx.body = {
    problems
  }
})

module.exports = router
