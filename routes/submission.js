const SubmissionService = require('../services/submission')
const Router = require('koa-router')

const router = new Router()

router.post('/', async (ctx, next) => {
  const { id, code, type } = ctx.request.body
  const submissionId = await SubmissionService.checkSubmission(id, code, type)
  ctx.body = {
    success: true,
    data: { submissionId }
  }
})

module.exports = router
