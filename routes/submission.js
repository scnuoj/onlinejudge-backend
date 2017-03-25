const Router = require('koa-joi-router')
const SubmissionService = require('../services/submission')
const Authentication = require('../middlewares/authentication')

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
}, Authentication(), async (ctx, next) => {
  const submissionId = await SubmissionService.checkSubmission(ctx.state.user.id, ctx.request.body.id, ctx.request.body.code, ctx.request.body.lang)
  ctx.body = {
    success: true,
    data: { submissionId }
  }
})

module.exports = router
