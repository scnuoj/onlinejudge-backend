import { IsEnum, IsNumberString, IsString, validate } from 'class-validator'
import 'reflect-metadata'
import { Body, Controller, Ctx, Get, Param, QueryParams } from 'routing-controllers'
import { Context } from '..'

// TODO: QueryParams 不明原因无法使用, 会导致报错, 参数校验暂时只做简单处理. 后续解决加上.
export class ProblemQuery {
  @IsNumberString() limit: number
  @IsNumberString() offset: number
  @IsString() sortby: string
  @IsString() order: string
}

@Controller('/v1/problems')
export class ProblemsController {
  @Get('/')
  async index (@Ctx() ctx: Context, @QueryParams() query: ProblemQuery) {
    // TODO Query Validation
    const problems = await ctx.services.problems.list(+ctx.query.offset, +ctx.query.limit, ctx.query.sortby, ctx.query.order)
    ctx.ok(problems)
  }

  @Get('/:id')
  async show (@Ctx() ctx: Context, @Param('id') id: number) {
    const problem = await ctx.services.problems.show(id)
    ctx.ok(problem)
  }

  @Get('/:id/recommend')  // 获取一道问题的相关推荐
  async recommend (@Ctx() ctx: Context, @Param('id') id: number) {
    // TODO
  }

  @Get('/:id/log')  // 获取一道问题的我的提交记录
  async log (@Ctx() ctx: Context, @Param('id') id: number) {
    // TODO
  }

  @Get('/:id/discussions')  // 获取一道问题的所有解决方案
  async discussions (@Ctx() ctx: Context, @Param('id') id: number) {
    // TODO
  }
}
