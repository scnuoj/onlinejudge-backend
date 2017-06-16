import { authorization } from 'app/middleware/authorization'
import { transformAndValidate } from 'class-transformer-validator'
import { IsBooleanString, IsEnum, IsInt, IsNumberString, IsString } from 'class-validator'
import { Context } from 'koa'
import { Body, Controller, Ctx, Get, Param, Post, QueryParams, UseBefore } from 'routing-controllers'

export class PostSubmissionData {
  @IsInt() public id: number
  @IsString() public code: string
  @IsString() public lang: string
}

export class SubmissionQuery {
  @IsNumberString() public offset: string
  @IsNumberString() public limit: string
  @IsBooleanString() public all: boolean
  @IsNumberString() public problemId: string
}

@Controller('/v1/submissions')
@UseBefore(authorization())
export class SubmissionsController {
  @Post('/')
  public async index (@Ctx() ctx: Context, @Body() submission: PostSubmissionData): Promise<void> {
    const submissionId = await ctx.services.submissions.create(ctx.state.user.id, submission.id, submission.code, submission.lang)
    ctx.ok(submissionId, '提交成功, 结果出来后系统会通知你')
  }

  @Get('/:submissionId/stat')
  public async stat (@Ctx() ctx: Context, @Param('submissionId') submissionId: number): Promise<void> {
    const submission = await ctx.services.submissions.stat(submissionId)
    if (submission === null) {
      ctx.ok(null, null)
    } else {
      ctx.ok(submission, 'TODO')
    }
  }

  @Get('/:submissionId')
  public async show (@Ctx() ctx: Context, @Param('submissionId') submissionId: number): Promise<void> {
    const submission = await ctx.services.submissions.show(submissionId)
    ctx.ok(submission)
  }

  @Get('/')
  public async query (@Ctx() ctx: Context): Promise<void> {
    await transformAndValidate(SubmissionQuery, JSON.parse(JSON.stringify(ctx.query)))
    const submissions = await ctx.services.submissions.list(
      parseInt(ctx.query.limit, 10), parseInt(ctx.query.offset, 10), ctx.query.problemId, ctx.query.all
    )
    ctx.ok(submissions)
  }
}
