import { Body, Controller, Ctx, Get, Param, Post, QueryParam } from 'routing-controllers'
import { Context } from '..'
import * as UserService from '../service/users'

export interface UserMsg {
  email: string
  name: string
  password: string
}

@Controller('/v1/users')
export class UsersController {
  @Get('/')
  async index (@Ctx() ctx: Context) {
    const user = await ctx.services.users.show(ctx.state.user.id)
    ctx.ok(user)
  }

  @Post('/register')
  async register (@Ctx() ctx: Context, @Body() user: UserMsg) {
    const data = await ctx.services.users.register(user.name, user.email, user.password)
    ctx.ok(data)
  }

  @Post('/login')
  async login (@Ctx() ctx: Context, @Body() user: UserMsg) {
    const data = await ctx.services.users.login(user.name, user.password)
    ctx.ok(user)
  }
}
