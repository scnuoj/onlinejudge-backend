const Router = require('koa-joi-router')
const Authorization = require('../middleware/authorization')

const Joi = Router.Joi
const router = new Router()

// 提交答案 (Auth)
router.post('/', {
  validate: {
    type: 'json',
    body: {
      id: Joi.number().integer().required(),
      code: Joi.string().required(),
      lang: Joi.string().valid('cc', 'c', 'java')
    }
  }
}, Authorization(), async (ctx, next) => {
  const submissionId = await ctx.service.submission.create(ctx.state.user.id, ctx.request.body.id, ctx.request.body.code, ctx.request.body.lang)
  ctx.ok(submissionId)
})

module.exports = router
