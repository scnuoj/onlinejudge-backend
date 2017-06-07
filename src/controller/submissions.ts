import { Controller, Ctx, Param, QueryParam, Body, Post } from 'routing-controllers'
import { Context } from 'koa'
import * as SubmissionService from '../service/submissions'

@Controller('/v1/submissions')
export class SubmissionsController {
  @Post('/')
  async index (
    @Ctx() ctx: Context, @Body('id') id: number, 
    @Body('code') code: number, @Body('lang') lang: number
  ) {
    const submissionId = await SubmissionService.create(ctx.state.user.id, id, code, lang)
    ctx.status = 200
    ctx.body = submissionId
  }
}
