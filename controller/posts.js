import {
  Controller,
  Validate,
  Joi,
  Get
} from 'leibniz'

@Controller('/v1/posts')
export default class Posts {
  @Get('/')
  @Validate({
    query: {
      limit: Joi.number().integer().min(0).max(20).default(10)
    }
  })
  async index (ctx, next) {
    const posts = await ctx.service.posts.list(ctx.query.limit)
    ctx.ok(posts)
  }
}
