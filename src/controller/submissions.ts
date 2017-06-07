import { IsEnum, IsInt, IsString } from 'class-validator'
import { Body, Controller, Ctx, Param, Post, QueryParam, UseBefore } from 'routing-controllers'
import { Context } from '..'
import authorization from '../middleware/authorization'

export class PostSubmissionData {
  @IsInt()
  id: number

  @IsString()
  code: string

  @IsString()
  lang: string
}

@Controller('/v1/submissions')
export class SubmissionsController {
  @Post('/')
  @UseBefore(authorization())
  async index (@Ctx() ctx: Context, @Body() submission: PostSubmissionData) {
    const submissionId = await ctx.services.submissions.create(ctx.state.user.id, submission.id, submission.code, submission.lang)
    ctx.ok(submissionId)
  }
}
