import { plainToClass } from 'class-transformer'
import { transformAndValidate } from 'class-transformer-validator'
import { IsIn, IsNumberString, IsString, validate } from 'class-validator'
import 'reflect-metadata'
import { Body, Ctx, Get, JsonController, Param, QueryParam, QueryParams, State } from 'routing-controllers'
import { Context } from '..'

export class ProblemQuery {
  @IsNumberString() limit: string
  @IsNumberString() offset: string
  @IsIn(['asc', 'desc']) order: string
  @IsString() sortby: string
}

@JsonController('/v1/problems')
export class ProblemsController {
  @Get('/')
  async index (@Ctx() ctx: Context) {
    await transformAndValidate(ProblemQuery, JSON.parse(JSON.stringify(ctx.query)))  // TODO: 直接检验 ctx.query 报错
    const problems = await ctx.services.problems.list(parseInt(ctx.query.offset, 10), parseInt(ctx.query.limit, 10), ctx.query.sortby, ctx.query.order)
    ctx.ok(problems)
  }

  @Get('/:id')
  async show (@Ctx() ctx: Context, @Param('id') id: number) {
    const problem = await ctx.services.problems.show(id)
    ctx.ok(problem)
  }

  @Get('/:id/recommend')  // 获取一道问题的相关推荐
  async recommend (@Ctx() ctx: Context, @Param('id') id: number) {
    const problems = await ctx.services.problems.recommend(id)
    ctx.ok(problems)
  }

}
