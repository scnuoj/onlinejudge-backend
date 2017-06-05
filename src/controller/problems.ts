import { Controller, Ctx, Param, QueryParam, Body, Get } from 'routing-controllers'
import { Context } from 'koa'
import * as ProblemService from '../service/problems'

@Controller('/v1/problems')
export class PostsController {
  @Get('/')
  async index (
    @Ctx() ctx: Context, @QueryParam('offset') offset: number, 
    @QueryParam('limit') limit: number, @QueryParam('sortby') sortby: number, @QueryParam('order') order: string
  ) {
    const problems = await ProblemService.list(ctx.query.offset, ctx.query.limit, ctx.query.sortby, ctx.query.order)
    ctx.status = 200
    ctx.body = problems
  }

  @Get('/:id')
  async show (@Ctx() ctx: Context, @Param('id') id: number) {
    const problem = await ProblemService.show(id)
    ctx.status = 200
    ctx.body = problem
  }
}
