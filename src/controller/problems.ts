import { plainToClass } from 'class-transformer'
import { transformAndValidate } from 'class-transformer-validator'
import { IsIn, IsNumberString, IsString, validate } from 'class-validator'
import { Context } from 'koa'
import 'reflect-metadata'
import { Body, Ctx, Get, JsonController, Param, QueryParam, QueryParams, State } from 'routing-controllers'

export class ProblemQuery {
  @IsNumberString() public limit: string
  @IsNumberString() public offset: string
  @IsIn(['asc', 'desc']) public order: string
  @IsString() public sortby: string
}

@JsonController('/v1/problems')
export class ProblemsController {
  @Get('/')
  public async index (@Ctx() ctx: Context): Promise<void> {
    await transformAndValidate(ProblemQuery, JSON.parse(JSON.stringify(ctx.query)))
    const problems = await ctx.services.problems.list(
      parseInt(ctx.query.offset, 10), parseInt(ctx.query.limit, 10), ctx.query.sortby, ctx.query.order
    )
    ctx.ok(problems)
  }

  @Get('/:id')
  public async show (@Ctx() ctx: Context, @Param('id') id: number): Promise<void> {
    const problem = await ctx.services.problems.show(id)
    ctx.ok(problem)
  }

  @Get('/:id/recommend')
  public async recommend (@Ctx() ctx: Context, @Param('id') id: number): Promise<void> {
    const problems = await ctx.services.problems.recommend(id)
    ctx.ok(problems)
  }
}
