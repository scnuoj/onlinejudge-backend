const Router = require('koa-router')
const authentication = require('../middlewares/authentication')
const SubmissionService = require('../services/submission')

const router = new Router()

router.post('/', authentication(), async (ctx, next) => {
  const submissionId = await SubmissionService.checkSubmission(ctx.request.body.id, ctx.request.body.code, ctx.request.body.lang)
  ctx.body = {
    success: true,
    data: { submissionId }
  }
})

module.exports = router
