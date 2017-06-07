import { IsEnum, IsInt, IsString, validate } from 'class-validator'
import 'reflect-metadata'
import { Body, Controller, Ctx, Get, Param, QueryParams } from 'routing-controllers'
import { Context } from '..'

// TODO: QueryParams 不明原因无法使用, 会导致报错, 参数校验暂时只做简单处理. 后续解决加上.
// export class Query {
//   @IsInt()
//   limit: number

//   @IsInt()
//   offset: number

//   @IsString()
//   sortby: string

//   @IsString()
//   order: string
// }

@Controller('/v1/problems')
export class PostsController {
  @Get('/')
  async index (@Ctx() ctx: Context) {
    const problems = await ctx.services.problems.list(+ctx.query.offset, +ctx.query.limit, ctx.query.sortby, ctx.query.order)
    ctx.ok(problems)
  }

  @Get('/:id')
  async show (@Ctx() ctx: Context, @Param('id') id: number) {
    const problem = await ctx.services.problems.show(id)
    ctx.ok(problem)
  }
}
