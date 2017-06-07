import { Controller, Ctx, Param, QueryParam, Body, Get, Post } from 'routing-controllers'
import { Context } from 'koa'
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
    const user = await UserService.show(ctx.state.user.id)
    ctx.status = 200
    ctx.body = user
  }

  @Post('/register')
  async register (@Ctx() ctx: Context, @Body() user: UserMsg) {
    const data = await UserService.register(user.name, user.email, user.password)
    ctx.status = 200
    ctx.body = data
  }

  @Post('/login')
  async login (@Ctx() ctx: Context, @Body() user: UserMsg) {
    const data = await UserService.login(user.name, user.password)
    ctx.status = 200
    ctx.body = user
  }
}
