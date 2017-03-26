const Router = require('koa-joi-router')
const ContestService = require('../services/contest')

const Joi = Router.Joi
const router = new Router()

// 获取比赛信息
router.get('/', {
  validate: {
    query: {
      limit: Joi.number().integer().min(0).max(10).default(1)
    }
  }
}, async (ctx, next) => {
  const contests = await ContestService.getContestList(ctx.query.limit)
  ctx.body = {
    success: true,
    data: contests
  }
})

module.exports = router
