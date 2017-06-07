import { Body, Controller, Ctx, Get, Param, QueryParams } from 'routing-controllers'
import { Context } from '..'

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
    const problems = await ctx.services.problems.list(query.offset, query.limit, query.sortby, query.order)
    ctx.ok(problems)
  }

  @Get('/:id')
  async show (@Ctx() ctx: Context, @Param('id') id: number) {
    const problem = await ctx.services.problems.show(id)
    ctx.ok(problem)
  }
}
