import authorization from '../../middleware/authorization'
import {
  Controller,
  Validate,
  Joi,
  Get
} from 'leibniz'

@Controller('/v1/management/problems', authorization())
export default class Posts {
  @Get('/')
  @Validate({
    query: {
      offset: Joi.number().integer().min(0).default(0),
      limit: Joi.number().integer().min(0).max(100).default(10),
      sortby: Joi.string().valid('submitCount', 'passCount', 'id', 'percent').default('id'),
      order: Joi.string().valid('asc', 'desc').default('asc')
    }
  })
  async index (ctx, next) {
    const problems = await ctx.service.management.problems.list(ctx.query.offset, ctx.query.limit, ctx.query.sortby, ctx.query.order)
    ctx.ok(problems)
  }

  @Get('/:id')
  @Validate({
    params: {
      id: Joi.string().guid().required()
    }
  })
  async show (ctx, next) {
    const problem = await ctx.service.problems.show(ctx.params.id)
    ctx.ok(problem)
  }
}
