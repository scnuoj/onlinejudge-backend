const Router = require('koa-joi-router')
const authentication = require('../middlewares/authentication')
const SubmissionService = require('../services/submission')

const Joi = Router.Joi
const router = new Router()

router.route([{
  method: 'POST',
  path: '/',
  validate: {
    type: 'json',
    body: {
      id: Joi.number().integer().required(),
      code: Joi.string().required(),
      lang: Joi.string().valid('cc', 'c', 'java')
    }
  },
  handler: [ authentication(), async (ctx, next) => {
    const submissionId = await SubmissionService.checkSubmission(ctx.state.user, ctx.request.body.id, ctx.request.body.code, ctx.request.body.lang)
    ctx.body = {
      success: true,
      data: { submissionId }
    }
  }]
}])

module.exports = router
