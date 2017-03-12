const Router = require('koa-router')
const SubmissionService = require('../services/submission')
const { _Authentication } = require('../libraries/Util')

const router = new Router()

router.post('/', async (ctx, next) => {
  _Authentication(ctx)
  const submissionId = await SubmissionService.checkSubmission(ctx.request.body.id, ctx.request.body.code, ctx.request.body.lang)
  ctx.body = {
    success: true,
    data: { submissionId }
  }
})

module.exports = router
