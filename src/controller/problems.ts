import { Context } from 'koa'
import { Body, Controller, Ctx, Get, Param, QueryParams } from 'routing-controllers'
import * as ProblemService from '../service/problems'

export interface Query {
  offset: number
  limit: number
  sortby: string
  order: 'asc' | 'desc'
}

@Controller('/v1/problems')
export class PostsController {
  @Get('/')
  async index (@Ctx() ctx: Context, @QueryParams() query: Query) {
    const problems = await ProblemService.list(query.offset, query.limit, query.sortby, query.order)
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
