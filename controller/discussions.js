import {
  Controller,
  Validate,
  Joi,
  Get
} from 'leibniz'

@Controller('/v1/discussions')
export default class Discussions {
  @Get('/')
  @Validate({
    query: {
      limit: Joi.number().integer().min(0).max(20).default(10)
    }
  })
  async index (ctx, next) {
    const discussions = await ctx.service.discussions.list(ctx.query.limit)
    ctx.ok(discussions)
  }
}
