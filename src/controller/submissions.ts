import { Controller, Ctx, Param, QueryParam, Body, Post, UseBefore } from 'routing-controllers'
import { Context } from 'koa'
import authorization from '../middleware/authorization'
import * as SubmissionService from '../service/submissions'

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
    const submissionId = await SubmissionService.create(ctx.state.user.id, submission.id, submission.code, submission.lang)
    ctx.status = 200
    ctx.body = submissionId
  }
}
