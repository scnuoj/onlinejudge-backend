import { transformAndValidate } from 'class-transformer-validator'
import { IsBooleanString, IsEnum, IsInt, IsNumberString, IsString } from 'class-validator'
import { Body, Controller, Ctx, Get, Param, Post, QueryParams, UseBefore } from 'routing-controllers'
import { Context } from '..'
import authorization from '../middleware/authorization'

export class PostSubmissionData {
  @IsInt() id: number
  @IsString() code: string
  @IsString() lang: string
}

export class SubmissionQuery {
  @IsInt() offset: number
  @IsInt() limit: number
  @IsBooleanString() all: boolean
  @IsNumberString() problemId: number
}

@Controller('/v1/submissions')
@UseBefore(authorization())
export class SubmissionsController {
  @Post('/')
  async index (@Ctx() ctx: Context, @Body() submission: PostSubmissionData) {
    const submissionId = await ctx.services.submissions.create(ctx.state.user.id, submission.id, submission.code, submission.lang)
    ctx.ok(submissionId, '提交成功, 结果出来后系统会通知你')
  }

  @Get('/:submissionId/stat')
  async stat (@Ctx() ctx: Context, @Param('submissionId') submissionId: number) {
    // TODO
  }

  @Get('/:submissionId')
  async show (@Ctx() ctx: Context, @Param('submissionId') submissionId: number) {
    // TODO
  }

  @Get('/')
  async query (@Ctx() ctx: Context) {
    await transformAndValidate(SubmissionQuery, JSON.parse(JSON.stringify(ctx.query)))  // TODO: 直接检验 ctx.query 报错
    // TODO
  }
}
