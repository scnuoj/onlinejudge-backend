import { Body, Controller, Ctx, Param, Post, QueryParam, UseBefore } from 'routing-controllers'
import { Context } from '..'
import authorization from '../middleware/authorization'

export interface PostSubmissionData {
  id: number
  code: string
  lang: string
}

@Controller('/v1/submissions')
export class SubmissionsController {
  @Post('/')
  @UseBefore(authorization())
  async index (@Ctx() ctx: Context, @Body({ required: true }) submission: PostSubmissionData) {
    const submissionId = await ctx.services.submissions.create(ctx.state.user.id, submission.id, submission.code, submission.lang)
    ctx.ok(submissionId)
  }
}
