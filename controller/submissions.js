import {
  Controller,
  Validate,
  Joi,
  Post
} from 'leibniz'
import authorization from '../middleware/authorization'

@Controller('/v1/submissions')
export default class Posts {
  @Post('/', authorization())
  @Validate({
    type: 'json',
    body: {
      id: Joi.string().guid().required(),
      code: Joi.string().required(),
      lang: Joi.string().valid('cc', 'c', 'java')
    }
  })
  async index (ctx, next) {
    const submissionId = await ctx.service.submissions.create(ctx.state.user.id, ctx.request.body.id, ctx.request.body.code, ctx.request.body.lang)
    ctx.ok(submissionId)
  }
}
