import {
  Controller,
  Validate,
  Joi,
  Get
} from 'leibniz'

@Controller('/v1/contests')
export default class Contests {
  @Get('/')
  @Validate({
    query: {
      limit: Joi.number().integer().min(0).max(10).default(1)
    }
  })
  async index (ctx, next) {
    const contests = await ctx.service.contests.list(ctx.query.limit)
    ctx.ok(contests)
  }
}
