import authorization from '../middleware/authorization'
import {
  Controller,
  Validate,
  Joi,
  Get,
  Post
} from 'wubi'

@Controller('/v1/users')
export default class Users {
  @Get('/', authorization())
  async index (ctx, next) {
    const user = await ctx.service.users.show(ctx.state.user.id)
    ctx.ok(user)
  }

  @Post('/register')
  @Validate({
    type: 'json',
    body: {
      name: Joi.string().min(2).max(10),
      email: Joi.string().email(),
      password: Joi.string().min(6).max(18)
    }
  })
  async register (ctx, next) {
    const user = await ctx.service.users.register(ctx.request.body.name, ctx.request.body.email, ctx.request.body.password)
    ctx.ok(user)
  }

  @Post('/login')
  @Validate({
    type: 'json',
    body: {
      name: Joi.string(),
      password: Joi.string().required().min(6).max(18)
    }
  })
  async login (ctx, next) {
    const user = await ctx.service.users.login(ctx.request.body.name, ctx.request.body.password)
    ctx.ok(user)
  }
}
